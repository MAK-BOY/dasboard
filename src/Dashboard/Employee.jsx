import React from 'react'

const Employee = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className="dashboard">

                <aside className="sidebar">
                    <h2 className="logo">Employee</h2>
                    <ul>
                        <li>Dashboard</li>
                        <li>My Tasks</li>
                        <li>Logout</li>
                    </ul>
                </aside>


                <main className="main">



                    <header className="topbar">
                        <h3>Welcome,{data.name}</h3>
                    </header>


                    <section className="cards">
                        
                            
                        <div className="card">Tasks<br /><strong>{data.tasks[0].total}</strong></div>
                        <div className="card">Completed<br /><strong>{data.tasks[0].completed}</strong></div>
                        <div className="card">Pending<br /><strong>{data.tasks[0].pending}</strong></div>
                        
                        
                        <div className="card">Attendance<br /><strong>{data.attendance}</strong></div>
                    </section>


                    <section className="table-section">
                        <h3>My Tasks</h3>
                        <table>
                            <tr>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Deadline</th>
                                <th>Deapartment</th>
                            </tr>
                            {data?.list?.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.title}</td>
                                    <td>{task.status}</td>
                                    <td>{task.deadline}</td>
                                    <td>{data.department}</td>
                                </tr>
                                    
                                ))}
                           
                        </table>
                    </section>

                </main>

            </div>


        </div>
    )
}

export default Employee