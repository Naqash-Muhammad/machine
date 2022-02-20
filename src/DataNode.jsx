import React, {useState} from 'react';
import "./DataNode.scss";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const DataNode = (props) => {
    const [note, setNote] = useState({
        title :"",
        content : "",
    });

    const InPutEevnt = (event) =>{

        const value = event.target.value;
        const name = event.target.name;
       // const [name, value] = event.target;

        setNote( (preV) =>{
            return{
                ...preV,
                [name] :value,
            };
        });
    };

    const AddEvent = () =>{
        props.PassData(note);
        setNote({
            title :"",
            content : "",
        })
    }
    return (
        <div className='car'>
           <form className="cards">
           <input type="text" 
           name="title" 
           value={note.title} 
           onChange={InPutEevnt} 
           placeholder='Title' />
            <br />
            <br />
            <textarea type="text" name='content' value={note.content} onChange={InPutEevnt} placeholder='enter your content'></textarea>
            <Button onClick={AddEvent}>
                <AddIcon  className='Add'/>
            </Button>
           </form>
           
        </div>
    )
}

export default DataNode;
