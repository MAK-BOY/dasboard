import React, { useState, useContext } from 'react'
import { authContext } from '../Auth/Auth'

const Admin = () => {

    const data = useContext(authContext); 

    const [title, settitle] = useState("")
    const [date, setdate] = useState("")
    const [assignTo, setassignTo] = useState("")
    const [category, setcategory] = useState("")
    const [task, settask] = useState(null)

    const submit = (e) => {
        e.preventDefault();
        

        const log = JSON.parse(localStorage.getItem("employees")) || [];

        log.forEach(emp => {
            if (emp.id == assignTo) {
                emp.list.push({
                    title,
                    status: "Pending",
                    deadline: date
                });
                emp.tasks.total += 1;
                emp.tasks.pending += 1;
            }
        });

        // reset
        localStorage.setItem("employees", JSON.stringify(log));

        settask(null);
        settitle("");
        setdate("");
        setassignTo("");
        setcategory("");

    }

    return (
        <div>
            <div id="dashboard">

                <aside id="sidebar">
                    <h2 id="logo">{data.admin[0].name}</h2>
                    <ul id="menu">
                        <li>Dashboard</li>
                    </ul>
                </aside>

                <main id="main">

                    <header id="topbar">
                        <h2>Assign Task</h2>
                    </header>

                    <section id="form-section">
                        <h3>Create Task</h3>

                        <form id="task-form" onSubmit={submit}>
                            <input
                                type="text"
                                placeholder="Task Title"
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                            />

                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setdate(e.target.value)}
                            />

                            {data?.employees && (
                                <select
                                    value={assignTo}
                                    onChange={(e) => setassignTo(e.target.value)}
                                >
                                    <option value="">Assign To</option>
                                    {data.employees.map(employee => (
                                        <option key={employee.id} value={employee.id}>
                                            {employee.name}
                                        </option>
                                    ))}
                                </select>
                            )}

                            <input
                                type="text"
                                placeholder="Category"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                            />

                            <button id="btn" type="submit">Add Task</button>
                        </form>
                    </section>

                    <section id="table-section">
                        <h3>Employee Status</h3>

                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.employees?.map((emp) => (
                                    <tr key={emp.id}>
                                        <td>{emp.name}</td>
                                        <td>{emp.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                </main>
            </div>
        </div>
    )
}

export default Admin;