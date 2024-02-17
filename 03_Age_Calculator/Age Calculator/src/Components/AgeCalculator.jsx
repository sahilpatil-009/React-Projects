import React, { useState } from "react";
import "./AgeCaluclator.css"
const AgeCalculator = () =>{

    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = ()=>{
        const today = new Date();
        let birthDate = new Date(birthdate);
       
        if(birthDate > today)
        {
            alert("Enter Valid Birth Date Date");
            window.location.reload();
        }

            let age = today.getFullYear() - birthDate.getFullYear();
            let monthDiff = today.getMonth() - birthDate.getMonth();
        
        

        // if(monthDiff < 11){
        //     age++;
        // }

        setAge(age);
    }

    const restCalc = ()=>{
        window.location.reload();
    }


    return(
        <div className="container">
            <h2>Age Calculator</h2>
            <p>The Age calculator can Determine the age or interval between two Dates. <br />The calculated age Displayed in Years           
            <br /> Plese Enter Your Birth Year</p>

            <div className="middle">

                <div className="right">
                    <h4>Date of Dirth</h4>
                    <input className="date" type="date" value={birthdate} onChange={e =>setBirthdate(e.target.value)}/>
                    <div className="btn_div">
                        <button className="btn" onClick={calculateAge}>Calculate Age</button>
                        <button className="btn" onClick={restCalc}>Reset</button>
                    </div>
                </div>

                <div className="left">
                    <div>
                        <h1>Your Age Is</h1>
                    </div>

                    <h1 className="age">{`${age}`}</h1>
                </div>

            </div>
        </div>
    )
}

export default AgeCalculator;