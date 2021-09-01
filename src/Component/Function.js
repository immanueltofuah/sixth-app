import "../App.css";
import React, { useState} from "react";

function App () {
    const [firstName, setFirstName] = useState("")

    const [surName, setSurName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    function handleSurName(e) {
        setSurName(e.target.value)
       
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e. preventDefault()
        setFirstName("")
        setSurName("")
        setPassword("")
        setEmail("")

    }
    

    

return (
    <div>

        <form className="fields" onSubmit={(e) => handleSubmit (e)}>
        <h1>Function Form</h1>
            <input placeholder="First Name" name="firstname" type="text" value={firstName}
            onChange={(e) => handleFirstName(e)} />
           <input  placeholder="Sur Name" name="surname" type="text" value={surName}
           onChange={(e) => handleSurName(e)} />
           <input  placeholder="Email" name="email" type="email" value={email}
           onChange={(e) => handleEmail(e)} />
           <input  placeholder="Password" name="password" type="password" value={password}
           onChange={(e) => handlePassword(e)} />
           <input className="but" type="submit" />

        </form>
    </div>
    );
}

export default App;