import './App.css';
import React,{useState} from 'react';

function App() {

  const[weight,Setweight] = useState();
  const[height,Setheight] = useState();
  const [bmi,Setbmi] = useState('');
  const [message, Setmessage] = useState('');

  //Logic to Calculate Bmi and Showing Message Accordingly

  let calBmi = (e)=>{

    // event.preventDefault();
    e.preventDefault();
    if(weight===0 || height===0){
      alert('Please Enter Valid Weight and Height');
    }
    else{
      let bmi = (weight/(height*height)*703);
      Setbmi(bmi.toFixed(1));
      

      //
      if(bmi<25){
        Setmessage('You Are Under-Weigth');
      }
      else if(bmi>=25 && bmi<30){
        Setmessage('You are Fit');
      }else{
        Setmessage('You Are OverWeigth');
      }
    }

  }

  //reload
  let reload = ()=>{
    window.location.reload();
  }
  return (
    <div className='App'>
      <div className='container'>
          <h2>BMI Calculator</h2>
          <form onSubmit={calBmi}>

              <div>
                <lable>Weight(lb)</lable>
                <input
                  type='text'
                  placeholder='Enter Weight' 
                  value={weight}
                  onChange={(e)=> Setweight(e.target.value)}
                 required />
              </div>

              <div>
                <lable>Height(in)</lable>
                <input 
                type='text' 
                placeholder='Enter Height' 
                value={height}
                onChange={(e) =>Setheight(e.target.value)}
                 required/>
              </div>

              <div>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn' type="submit" onClick={reload}>Reset</button>
              </div>

              <div className='center'>
                <h3>Your BMI is:{bmi}</h3> 
                <p>{message}</p>
              </div>

          </form>
      </div>

    </div>

  );
}

export default App;
