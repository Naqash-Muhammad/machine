import React, {useState} from 'react'
import './InAndDe.css';

const InAndDe = () => {

    const [Number, setNumber] = useState(0);

    const Increm = () =>{
        setNumber(Number + 1);
    }

    const Decrem = () =>{
        setNumber(Number - 1);
    }

    return (
        <div className='bg-warning d-flex justify-content-center'>
            
            <div className="main p-5 bg-info m-5">
                <h3>{Number}</h3>
                <button onClick={Increm} className='p-1'>Increm</button>
                <button className='p-1' onClick={Decrem}>Decrem</button>
            </div>
        </div>
    )
}

export default InAndDe;
