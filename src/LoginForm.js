import React, { useState } from 'react'

const LoginForm = () => {

    const [FirstName, setFirstName] = useState({
        FName : "",
        LName : "",
        Email :"",
        Num : "",
    });

    const OnChang = (event) =>{


        setFirstName( (preValue) =>{
            const {name, value} = event.target;

            return{
                ...preValue,
                [name] : value,
            }

            // if(name === "FName"){
            //     return{
            //         FName : value,
            //         LName : preValue.LName,
            //         Email : preValue.Email,
            //     }
            // }else if(name === "LName"){
            //     return{
            //         FName : preValue.FName,
            //         LName : value,
            //         Email : preValue.Email,
            //     }
            // }if(name === "Email"){
            //     return{
            //         Email : value,
            //         FName : preValue.FName,
            //         LName : preValue.LName,
            //     }
            // }
        });


    }
    const OnSubmit =(Event) =>{
        Event.preventDefault();
    }

  

    return (
        <div className='text-center bg-warning p-5'>
          <form onSubmit={OnSubmit}>
        <h2>{FirstName.FName} {FirstName.LName}</h2>
        <p>{FirstName.Email}</p>
        <p>{FirstName.Num}</p>

        <input type="text" 
        placeholder='Enter Your FName' 
        onChange={OnChang}
        value={FirstName.FName}
        name='FName'
        />
        <br />
        <br />

        <input type="text" 
        placeholder='Enter Your LName' 
        onChange={OnChang}
        value={FirstName.LName}
        name='LName'
        />
        <br />
        <br />

        <input type="text" 
        placeholder='Enter Your Email' 
        onChange={OnChang}
        value={FirstName.Email}
        name='Email'
        autoComplete=''
        />
        <br />
        <br />

        <input type="text" 
        placeholder='Enter Your Number' 
        onChange={OnChang}
        value={FirstName.Num}
        name='Num'
        autoComplete=''
        />
        <br />
        <br />
        <button type='button'>Click Me</button>
         </form>
        </div>
    )
}

export default LoginForm;
