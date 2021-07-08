import React from 'react';
import cover from '../Svg/Bench.svg';
import edit from '../Svg/edit.svg';
import Arrow from '../Svg/Arrow.svg';
import "./registration.css";


const Registration = () =>{
    return(
        <div className="wrapper">
           <div className="main-container">
               <div className="img-container">
                 <img src={cover} alt="cover" />
               </div>
               <h1 className="heading">Welcome Back !</h1>
               <div className="input-container">
                   <input type="text" placeholder="Your Registration Number" />
                   <img src={edit} />
               </div>
               <button className="btn btn-primary">Next <img src={Arrow} /></button>
               <h3 className="footer">Forget Your Registration Number? <a href="#">click here</a></h3>
           </div>
        </div>
    )
}

export default Registration;