import { useState } from "react";

function Candidates() {
  let [fname, setFname] = useState("");
  let [mname, setMname] = useState("");
  let [lname, setLname] = useState("");
  let [nameToBeDisplayed, setNameToBeDisplayed] = useState("");
  let [politicalParty, setPoliticalParty] = useState("");
  let [PPAbreviation, setPPAbreviation] = useState("");



  return (
    <div className="login-container">
      <h1>Add</h1>
      <div className="login-form">
        <input placeholder="Firstname" type="text" onChange={ (e) => setFname(e.target.value) }/>
      </div>
      <div className="login-form">
        <input placeholder="Middlename" type="text" onChange={ (e) => setMname(e.target.value) }/>
      </div>
      <div className="login-form">
        <input placeholder="Lastname" type="text" onChange={ (e) => setLname(e.target.value) }/>
      </div>
      <div className="login-form">
        <input placeholder="Name to be displayed" type="text" onChange={ (e) => setNameToBeDisplayed(e.target.value) }/>
      </div>
      <div className="login-form">
        <input placeholder="Political Party" type="text" onChange={ (e) => setPoliticalParty(e.target.value) }/>
      </div>
      <div className="login-form">
        <input placeholder="Political Party Abbreviation" type="text" onChange={ (e) => setPPAbreviation(e.target.value) }/>
      </div>

      <div className="login-form btn">
        <p>Submit</p>
      </div>
    </div>
  );
}

export default Candidates;