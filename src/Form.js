import React, {useState} from 'react'

const Form = () => {

    const [FullName, setFullName] = useState({
        FName :"",
        LName :"",
        PWord : "",
    });
 

    const inputEvent = (Event) =>{

        const name = Event.target.name;
        const value = Event.target.value;

        const {value, name, }

        setFullName( (preValue)=>{
            if(name === "FirstName"){
                    return{
                        FName :value,
                        LName :preValue.LName,
                        Pword :preValue.PWord,
                    };
            }else if(name === "LastName"){
                return{
                    FName :preValue.FName,
                    Pword :preValue.PWord,
                    LName :value,
                };
        }if(name === "Password"){
            return{
                Pword :value,
                FName :preValue.FName,
                LName :preValue.LName,
            };
    }
        })

    };
    const OnSubmit = (event) =>{
        event.preventDefault();
    }


    return (
        <div className='text-center bg-warning p-5'>
            <form onSubmit={OnSubmit}>
            <h1>hello {FullName.FName} {FullName.LName}</h1>
            <input type="text" 
            placeholder='Enter First Name'
            onChange={inputEvent} 
            name='FirstName' 
            value={FullName.FName}/>
            <br />
            <br />
            <input type="text" 
            placeholder='Enter Last Name'
            onChange={inputEvent} 
            name='LastName' 
            value={FullName.LName}/>
            <br />
            <br />

            <input type="text" 
            placeholder='Enter password'
            onChange={inputEvent} 
            name='Password' 
            value={FullName.PWord}/>
            <br />
            <br />
            <button type='text'>Click Me</button>
            </form>
        </div>
    )
}

export default Form;
