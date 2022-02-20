import React from 'react';
import "./Savedata.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const SaveData = (props) => {
    return (
        <div className='main m-2'>
            <form  className='saveda m-1'>
                <h2 className='Title'>{props.title}</h2>
                <br />
                <h6 className='information'>{props.content}</h6>
                <DeleteOutlineIcon  className='delet'/>
            </form>
        </div>
    )
}

export default SaveData;
