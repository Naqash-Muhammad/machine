import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import DataNode from "./DataNode";
import SaveData from './SaveData';
import { useState } from 'react';

const img = "https://i.pinimg.com/originals/74/42/aa/7442aa53a12c6a84fe8b88697c300c44.jpg";



function App() {

  const [addItem, setaddItem] = useState([]);
  const AddNote = (note) =>{
    setaddItem( (preData)=>{
        return[...preData, note] 
    })

  }
  return (
      <>
      <Header />
      <DataNode PassData={AddNote}/>

      {addItem.map( (val, index)=>{
        return <SaveData 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        />  
      })}
      <Footer />
      

      {/* {AutoDrinkData.map((val) => {
       return(
        <AutoDrink Sprite={val.sprite} 
        Cock={val.Coca}
        Rani ={val.Rani}
        Fanta={val.Fanta}
        Pepsi={val.Pepsi}
        Bre = {val.Bre}
        Dew={val.Dew}
        Olp={val.Olp}
        /> 
       );
    })} */}
      </>
  );
}

export default App;
