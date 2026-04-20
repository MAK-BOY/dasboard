

 const employees = [
  {
    id: 101,
    name: "Rahul Verma",
    email: "rahul@company.com",
    password: "emp123",
    role: "employee",
    department: "Development",
    attendance: "92%",
    tasks: [{
      total: 5,
      completed: 3,
      pending: 2,
      list: [
        { title: "Build Login UI", status: "Completed", deadline: "20 Apr" },
        { title: "API Integration", status: "Pending", deadline: "22 Apr" },
        { title: "Fix Bugs", status: "Completed", deadline: "18 Apr" },
        { title: "Dashboard UI", status: "Pending", deadline: "25 Apr" },
        { title: "Code Review", status: "Completed", deadline: "17 Apr" }
      ]
    }],
    status: "Active"
  },
  {
    id: 102,
    name: "Priya Singh",
    email: "priya@company.com",
    password: "emp123",
    role: "employee",
    department: "Design",
    attendance: "95%",
    tasks: [{
      total: 3,
      completed: 2,
      pending: 1,
      list: [
        { title: "Design Landing Page", status: "Completed", deadline: "19 Apr" },
        { title: "Update UI Kit", status: "Pending", deadline: "23 Apr" },
        { title: "Logo Design", status: "Completed", deadline: "17 Apr" }
      ]
    }],
    status: "Active"
  },
  {
    id: 103,
    name: "Arjun Patel",
    email: "arjun@company.com",
    password: "emp123",
    role: "employee",
    department: "Testing",
    attendance: "88%",
    tasks: [{
      total: 4,
      completed: 2,
      pending: 2,
      list: [
        { title: "Test Login Module", status: "Completed", deadline: "18 Apr" },
        { title: "Bug Report", status: "Pending", deadline: "21 Apr" },
        { title: "Regression Testing", status: "Pending", deadline: "24 Apr" },
        { title: "API Testing", status: "Completed", deadline: "17 Apr" }
      ]
    }],
    status: "Inactive"
  },
  {
    id: 104,
    name: "Neha Gupta",
    email: "neha@company.com",
    password: "emp123",
    role: "employee",
    department: "HR",
    attendance: "97%",
    tasks: [{
      total: 2,
      completed: 1,
      pending: 1,
      list: [
        { title: "Employee Onboarding", status: "Completed", deadline: "16 Apr" },
        { title: "Interview Scheduling", status: "Pending", deadline: "22 Apr" }
      ]
    }],
    status: "Active"
  },
  {
    id: 105,
    name: "Vikas Kumar",
    email: "vikas@company.com",
    password: "emp123",
    role: "employee",
    department: "Support",
    attendance: "90%",
    tasks: [{
      total: 6,
      completed: 4,
      pending: 2,
      list: [
        { title: "Resolve Tickets", status: "Completed", deadline: "18 Apr" },
        { title: "Customer Support", status: "Pending", deadline: "21 Apr" },
        { title: "Update FAQs", status: "Completed", deadline: "17 Apr" },
        { title: "Email Support", status: "Completed", deadline: "19 Apr" },
        { title: "Live Chat", status: "Pending", deadline: "23 Apr" },
        { title: "System Check", status: "Completed", deadline: "16 Apr" }
      ]
    }],
    status: "Active"
  },
  {
    id: 106,
    name: "Sneha Reddy",
    email: "sneha@company.com",
    password: "emp123",
    role: "employee",
    department: "Marketing",
    attendance: "85%",
    tasks: [{
      total: 3,
      completed: 1,
      pending: 2,
      list: [
        { title: "Campaign Planning", status: "Pending", deadline: "24 Apr" },
        { title: "Social Media Posts", status: "Completed", deadline: "18 Apr" },
        { title: "Ad Analysis", status: "Pending", deadline: "22 Apr" }
      ]
    }],
    status: "Inactive"
  }
];
  const admin = [{
    "id": 1,
    "name": "Aman khan",
    "email": "admin@aman.com",
    "password": "admin123",
    "role": "admin"
  }];
  
  export function saveToLocalStorage() {
    localStorage.setItem('admin', JSON.stringify(admin));
    localStorage.setItem('employees', JSON.stringify(employees));
  } 
  export function getFromLocalStorage() {
    const admin = JSON.parse(localStorage.getItem('admin'));
    const employees = JSON.parse(localStorage.getItem('employees'));
    return {admin:admin, employees:employees};
}