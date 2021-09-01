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

        <form onSubmit={(e) => handleSubmit (e)}>
            <input name="firstname" type="text" value={firstName}
            onChange={(e) => handleFirstName(e)} />
           <input name="surname" type="text" value={surName}
           onChange={(e) => handleSurName(e)} />
           <input name="email" type="email" value={email}
           onChange={(e) => handleEmail(e)} />
           <input name="password" type="password" value={password}
           onChange={(e) => handlePassword(e)} />
           <input type="submit" />

        </form>
    </div>
    );
}

export default App;