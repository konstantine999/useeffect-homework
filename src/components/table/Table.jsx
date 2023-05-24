import React from "react";
import "./table.css";

function Table(props) {
  console.log(props.users);
  let users = props.users;
  return (
    <div className="table-wrapper">
      <div className="heading-wrapper">
        <h1>All Customers</h1>
      </div>
      <table>
        <tr className="table-header">
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Street</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id} className="infos">
            <td>{user.name}</td>
            <td>{user.company.name}</td>
            <td>{user.phone}</td>
            <td className="email-td">{user.email}</td>
            <td>{user.address.street}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
