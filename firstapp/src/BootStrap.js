import React from "react";
import "./App.css"
import { Table } from "react-bootstrap"

const users = [
    {
        name: "avnish", email: "avnish@gmail.com", age: 24,
        address: [
            { house: 145, city: "morena", state: "MP" }, { house: 654, city: "Gwalior", state: "MP" }, { house: 753, city: "bhind", state: "MP" },]
    },
    {
        name: "peter", email: "peter@gmail.com", age: 25,
        address: [
            { house: 954, city: "indore", state: "MP" }, { house: 576, city: "bhopal", state: "MP" }, { house: 753, city: "shivpuri", state: "MP" },]
    },
    {
        name: "Rahul", email: "rahul@gmail.com", age: 18,
        address: [
            { house: 257, city: "Agra", state: "UP" }, { house: 654, city: "mathura", state: "UP" }, { house: 753, city: "etawah", state: "UP" },]
    }
]

const BootStrap = () => {
    return (
        <div className="App">
            <h1>Users List</h1>
            <Table variant="dark">
                <tbody>
                    <tr>
                        <td>S.No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                {
                                    item.address.map((data, index) =>
                                        <Table variant="dark">
                                            <tbody>
                                                <tr key={index}>
                                                    <td>{data.house}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.state}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BootStrap;