import "./App.css";
import Table from "./components/table/Table";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="App">
      <Table users={users} />
    </div>
  );
}

export default App;
