import {useState} from 'react';

const Counter = () =>{
   const [counter, setCounter] = useState(0);
  
   const increament = () =>{
       setCounter(counter+1)
   } 

   return {counter,increament }
}

export default Counter;