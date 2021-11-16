export const getuser = async() =>{
    const res = await fetch("https://reqres.in/api/users")
    if(!res.ok){
      throw new Error(`Request failed with status code ${res.status}`)
    }
    const data = await res.json()
    return data;
}