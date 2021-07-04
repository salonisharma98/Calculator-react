import React, { useState } from 'react';
import './Calculator.css';
import bg9 from './images/bg9.jpg'
function Calculator() {
    const [result , setResult]= useState("");
    function Buttonclick(e) {
       setResult(result.concat(e.target.name));
    }
   function Clear(e) {
       setResult("")
   }
   function Delete(e) {
       setResult(result.slice(-result.length,-1));
   }
   function Equal(e) {
       setResult(eval(result));
   }
    return (
        <div>
            <div className="container">
            <div className="outer" style={{backgroundImage: 'url('+bg9+')',backgroundSize:'cover'}}>
                <input type="text" class="form-control field " value={result} readOnly></input>
            
             
                <div className="row mt-5">
                    <div className="col-3">
                        <button onClick={Clear}  className="num" type="reset" >C</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="%" value="%" className="num">%</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Delete} name ="x" className="num">x</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Equal} name ="=" className="num">=</button>
                    </div>
                </div> 
                <div className="row mt-5">
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="1" value="1" className="num">1</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="2" value="2" className="num">2</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="3" value="3"  className="num">3</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="+" value="+" className="num">+</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="4" value="4" className="num">4</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="5" value="5" className="num">5</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="6" value="6" className="num">6</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="-" value="-" className="num">-</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="7" value="7" className="num">7</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="8" value="8" className="num">8</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="9" value="9" className="num">9</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="*" value="*" className="num">*</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="00" value="00" className="num">00</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="0" value="0" className="num">0</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="." value="." className="num">.</button>
                    </div>
                    <div className="col-3">
                        <button onClick={Buttonclick} name ="/" value="/" className="num">/</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
       
    );
}
export default Calculator;