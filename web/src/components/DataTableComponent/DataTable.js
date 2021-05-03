import React, { useEffect, useState } from 'react';
import './style.css';

function DataTable(props) {

    const [showForm, setShowForm] = useState(false);

    useEffect(() => { //On Vue => watch { showForm()}
        props.changeFormVisible(showForm);
    }, [showForm]);

    useEffect(() => {
        console.log(props);
    }, []) //On Vue => mounted

    return (
        <div className="tableContent">
            <div>
                <button type="button" className="btn btn-info" style={{ float: "left" }} onClick={() => setShowForm(!showForm)}>{showForm ? "Hide User Form" : "Show User Form"}</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        {
                            props.headers.map(header => {
                                return <th scope="col">{header}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.list.map(data => {
                            return <tr>
                                {
                                    Object.keys(data).map(column => {
                                        return <td>{data[column]}</td>
                                    })
                                }
                                <td>
                                    <div className="buttonDiv">
                                        <button type="button" className="btn btn-warning crudButton" onClick={() => props.update(data)}>Update</button>
                                        <button type="button" class="btn btn-danger crudButton" onClick={() => props.delete(data.id)}>Delete</button>
                                    </div>

                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default DataTable;