const state = [];
let call =-1
const useState = (value) =>{
    const callId = ++call;
    if (states[callId]) {
        return states[callId];
    }
    const setValue = (newValue) =>{
       state[callId][0]=newValue;
    }
    const result = [value, setValue]
    state[callId]=result;
    return result;
}
export default useState;