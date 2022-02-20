import React, {useState} from "react"; 
import "./AutoDrink.css";
import  "./AutoDrinkData";

const AutoDrink = (props) => {

    const [Selectbotal, setSelectbotal] = useState({
        sprite : "",
    });

    return (
        <div className='form d-flex justify-content-center'>    
            <div className="col-md-5 col-12 SoftDrink">
               
                        <div className="col-md-12 bg-danger">
                                    <div className="row">
                                    <div className="col-md-8 col-8">
                                    <marquee className="text-white" behavior="" direction="ltr">
                                            <h5>Drink Me Now</h5>
                                     </marquee>

                                        <div className="col-md-12 bg-info p-md-3 pt-2">
                                        <div className="Dring">
                                        <h4 className='bg-success'>
                                            <div className="sprite">
                                               <img src={props.Sprite}  alt=""/>
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                               <img src={props.Sprite} alt="" />
                                            </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                        <div className="sprite">
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                               <img src={props.Cock} alt="" />
                                            </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                            <div className="sprite">
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                               <img src={props.Rani} alt="" />
                                            </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                        <div className="sprite">
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                               <img src={props.Fanta} alt="" />
                                            </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                        <div className="sprite">
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                               <img src={props.Pepsi} alt="" />
                                            </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                        <div className="sprite">
                                               <img src={props.Bre} alt="" />
                                               <img src={props.Bre} alt="" />
                                               <img src={props.Bre} alt="" />
                                               <img src={props.Bre} alt="" />
                                               <img src={props.Bre} alt="" />
                                               <img src={props.Bre} alt="" />
                                               <img src={props.bre} alt="" />
                                               <img src={props.bre} alt="" />
                                               <img src={props.bre} alt="" />
                                        </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                        <div className="sprite">
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                               <img src={props.Dew} alt="" />
                                        </div>
                                        </h4>
                                        <h4 className='bg-success'>
                                        <div className="sprite">
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                               <img src={props.Olp} alt="" />
                                        </div>
                                        </h4>
                                        </div>
                                        </div>
                                    </div>
                                        <div className="col-md-4">
                                            <div className="col-md-12 bg-danger">
                                                <div className="main">
                                                    <div className="row pt-5">
                                                        <div className="col-md-5">
                                                        <img src={props.Sprite} alt="" width="100%" onClick={SelectItme} name="sprite" value={Selectbotal.sprite}/>
                                                        <img src={props.Cock} className="mt-3" alt="" width="100%"  onClick={SelectItme}/>
                                                        </div>
                                                        <div className="col-md-5">
                                                        <img src={props.Dew} alt="" width="100%" onClick={SelectItme}/>
                                                        <img src={props.Fanta} alt="" className="mt-3" width="100%" onClick={SelectItme}/>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   


                                    <footer className="bg-dark">gre</footer>
                        </div>
                    
            </div>

        </div>
    )
}

export default AutoDrink;
