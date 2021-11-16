import {useEffect} from 'react'
import './App.css';
import useFormInput from './api/formInput';
import Counter from './components/increament';

import useMediaQuery from './api/useMediaQuery';

import * as ApiService from './api/user'


//import useState from './api/userState';


function App() {
  const {counter, increament} = Counter();
  const name = useFormInput("")
  
  const small = useMediaQuery("(max-width:400px)");
  const large = useMediaQuery("(min-width:800px)")


  useEffect(()=>{
    callApi()
  },[])

  async function callApi(){
    const data = await ApiService.getuser()
    console.log(data)
  }

  return (
    <div className="App">
        <div className="counter">
            <div>{counter}</div>
            <input type="text" {...name} />
            <input type="button" value="Increament" onClick={increament} />

        </div>
        <div className="media-query">
           <p>Small -  {small?"bimal":"Bimal"}</p>
           <p>large -  {large?"bimal":"Bimal"}</p>
        </div>
    </div>
  );
}

export default App;
