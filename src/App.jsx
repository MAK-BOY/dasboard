
import { useContext, useEffect, useState } from 'react'
import Login from './components/Login'
import Admin from './Dashboard/Admin'
import Employee from './Dashboard/Employee'
import { authContext } from './Auth/Auth'

saveToLocalStorage();

const App = () => {
  const data = useContext(authContext);
  // useEffect(() => {
  //   if (data) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");

  //     if (loggedInUser) {
  //       setuser(loggedInUser.role);
  //     }}
  //   }, [data])

  const [user, setuser] = useState(null);
  const [logedinuser, setlogedinuser] = useState(null);
  const handleLogin = (email, password) => {
    if (data && data.admin.email === email && data.admin.password === password) {
      setuser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (data) {
      const employee = data.employees.find(emp => emp.email === email && emp.password === password);
      if (employee) {
        setuser({ role: employee });
        setlogedinuser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      }
    } else {
      alert("Invalid credentials");
    }
  }





  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : user.role === 'admin' ? <Admin  /> : <Employee data={logedinuser} />}
      {/* <Login /> */}
      {/* <Admin /> */}
      {/* <Employee /> */}
    </div>
  )
}

export default App