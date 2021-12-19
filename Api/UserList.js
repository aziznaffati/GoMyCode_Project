import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./UserList.css";

export default function UserList() {
  const [userslist, setUsersList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUsersList]);

  return (
    <div className="App">
      <div className="container">
        {userslist.map((item) => (
          <div key={item.id} className="card">
            <h2>Full Name :</h2>
            <p>{item.name}</p>
            <h2>Username :</h2>
            <p>{item.username}</p>
            <h2>Email :</h2>
            <p>{item.email}</p>
            <h2>Address :</h2>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
            <p>{item.address.zipcode}</p>
            <p>{item.address.geo.lat}</p>
            <p>{item.address.geo.lng}</p>
            <h2>Phone :</h2>
            <p>{item.phone}</p>
            <h2>Website :</h2>
            <p>{item.website}</p>
            <h2>Company Details :</h2>
            <p>{item.company.name}</p>
            <p>{item.company.catchPhrase}</p>
            <p>{item.company.bs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
