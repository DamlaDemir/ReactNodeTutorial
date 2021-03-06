import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../components/DataTableComponent/DataTable';
import UserForm from '../components/UserFormComponent/UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../redux/actions";

function Home() {
    const [headers, setHeaders] = useState([]);
    // const [list, setList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedUser, setUser] = useState({ id: 0 });
    const list = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    const addOrUpdateUser = async (user) => {
        if (user.id <= 0) {
            let response = await axios.post('http://localhost:8000/user/add', user);
            if (response.status === 200) {
                alert("Add operation completed successfully!");
                await getAllUsers();
            }
        } else {
            let response = await axios.put(`http://localhost:8000/user/update${user.id}`, user);
            if (response.status === 200) {
                alert("Update operation completed successfully!");
                await getAllUsers();
            }
        }

    }

    const getAllUsers = async () => {
        dispatch(getUsers())
    }

    const deleteUser = async (id) => {
        let response = await axios.delete(`http://localhost:8000/user/delete${id}`);

        if (response.status === 200) {
            alert("Delete operation completed successfully!");
            await getAllUsers();
        }
    }

    // Component Did Mount
    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <div>
            <DataTable
                list={list}
                headers={headers}
                changeFormVisible={(showForm) => setShowForm(showForm)}
                delete={(id) => deleteUser(id)}
                update={(user) => { setUser(user); setShowForm(true) }}></DataTable>
            {showForm ? <UserForm addOrUpdateUser={addOrUpdateUser} user={selectedUser} /> : null}
        </div>
    )
}


export default Home;