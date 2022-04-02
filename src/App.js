import './App.css';
import { useState } from 'react';
import * as math from "mathjs";
import Button from "./component/Button.js";
import Input from "./component/input";

const App =()=>{
  const [text,setText] = useState('');
  const[results,setResult] = useState('');

  const addtoText =(val)=>{
    setText((text)=>[...text,val]);
  }

  const resetInput=()=>{
    setResult("")
    setText("")
  }
  
  const calculateResult=()=>{
    const input= text.join("");
    setResult(math.evaluate(input));
  }

  const buttonColor ="#f3a33c";
  return (
    <div className="App">
      
      <div className='calc-wrapper'>
        <Input text={text} results={results}/>
      <div className='rows'>
      <Button symbols="7" handleClick={addtoText}/>
      <Button symbols="8"handleClick={addtoText}/>
      <Button symbols="9"handleClick={addtoText}/>
      <Button symbols="/" color={buttonColor} handleClick={addtoText}/>
      </div>
      <div className='rows'>
      <Button symbols="4"handleClick={addtoText}/>
      <Button symbols="5" handleClick={addtoText}/>
      <Button symbols="6" handleClick={addtoText}/>
      <Button symbols="*" color={buttonColor} handleClick={addtoText}/>
      </div>
      <div className='rows'>
      <Button symbols="1" handleClick={addtoText}/>
      <Button symbols="2" handleClick={addtoText}/>
      <Button symbols="3" handleClick={addtoText}/>
      <Button symbols="+" color={buttonColor} handleClick={addtoText}/>
      </div>
      <div className='rows'>
      <Button symbols="0" handleClick={addtoText}/>
      <Button symbols="." handleClick={addtoText}/>
      <Button symbols="=" handleClick={calculateResult}/>
      <Button symbols="-"color={buttonColor} handleClick={addtoText}/>
      </div>
      <Button symbols="Clear" color="red" handleClick={resetInput}/>
       <div>
         <h1 className='watermark'>
           Ivin's React Calculator
         </h1>
       </div>
    </div>
    </div>
  );
}

export default App;
