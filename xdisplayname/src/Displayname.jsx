import React, { useState } from "react";
import styles from './Displayname.module.css';

function Displayname() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [fullName, setFullName] = useState("");

  function getFirstName(event){
    setFirstName(event.target.value);
  }

  function getLastName(event){
    setLastName(event.target.value);
  }

  
  function getFullName(e){
      e.preventDefault();
      setFullName(`${firstName} ${lastName}`);
      console.log(fullName);
  }

  return (
    <div className={styles.formwrap}>
      <form onSubmit={getFullName}>
      <h1>Full Name Display</h1>
      <label>First Name:</label>
      <input type="text" required value={firstName} onChange={getFirstName} ></input><br/>
      <label>Last Name:</label>
      <input type="text" required value={lastName} onChange={getLastName}></input><br/>
      <button type="submit">Submit</button><br/>
      </form>
      {fullName && <p>Full Name: {fullName} </p>}    
    </div>
  )
}

export default Displayname;