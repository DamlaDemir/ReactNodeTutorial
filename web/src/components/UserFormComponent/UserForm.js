import React, { useState, useEffect } from 'react';
import './style.css';

function UserForm(props) {

    const [user, setUser] = useState({});

    const addOrUpdateUser = () => {
        props.addOrUpdateUser(user);
    }

    useEffect(() => {
        setUser(props.user);
    }, [props.user])

    return (
        <div class="card formContent">
            <div class="card-body">
                <h5 class="card-title">User Form</h5>
                <form>
                    <div class="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter First Name"
                            onChange={e => setUser({ ...user, firstName: e.target.value })}
                            value={user.firstName} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            name="firstName"
                            placeholder="Enter Last Name"
                            onChange={e => setUser({ ...user, lastName: e.target.value })}
                            value={user.lastName} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            value={user.email}
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            onChange={e => setUser({ ...user, username: e.target.value })}
                            value={user.username} />
                    </div>

                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            value={user.password} />
                    </div>

                    <button type="button" class="btn btn-primary" onClick={addOrUpdateUser}>Add Or Update User</button>
                </form>
            </div>
        </div >
    )

}

export default UserForm;