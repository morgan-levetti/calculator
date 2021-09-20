import { useState } from "react";
import '../App.css';
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationbutton";
import AmazingNumberButton from "./AmazingNumberButton";



function Calculator() {
   
  
      const [calc, setCalc] = useState("");
      const [result, setResult] = useState("");
      
      const ops = ['/', '*', '+', '-', '.'];

      const upDateCalc = value => {
        if (
          ops.includes(value) && calc === '' ||
          ops.includes(value) && ops.includes(calc.slice(-1)
          )
        ){
            return;
          }


         setCalc(calc + value);
         if(!ops.includes(value)){
           setResult(eval(calc + value).toString());

         }
           
         
        
        }
     
      const calculate = () =>{
        setCalc(eval(calc).toString());

      }
      const deletelast = () =>{
        if (calc === '') {
          return;
        }
        const value = calc.slice(0, -1);
        setCalc(value)
      }
      
    
      return (
    
        
        <div className="App">
            
    
    
          <div className="calculator">
    
    
            <div className="display">
              <BeautifullScreen result={result} calc={calc}> </BeautifullScreen>
    
            </div> 
            <div className="operators">
              <GreatOperationButton upDateCalc={upDateCalc}></GreatOperationButton>


            </div>
            <div className="digits">
              <AmazingNumberButton upDateCalc={upDateCalc}/>
              <button onClick={() => upDateCalc('0')}>0</button>
              <button onClick={() => upDateCalc('.')}>.</button>
              <button onClick={calculate}>=</button>
              <button onClick={deletelast}>DEL</button>
              
    
    
            </div>
           
            
    
          </div>
    
        </div>
      );
}

    

export default Calculator;