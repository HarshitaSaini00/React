import {useEffect , useState} from "react"

function useCurrencyinfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(``)/* api for currency change not available on net */
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyinfo;

/*this is the custom hook that we desgin by own and yahan par kya ho raha hai ki humne ek function banaya useCurrencyinfo karke usme humne currency pass kari ki humme konsi currency ki value dekhni hai uske baad me humne useState ka use kiya jisme humne ek empty object send kiya hai and then we use useEffect hook jisme humne fetch kiya apni api ko and jo bhi response aayegi usse humne json me convert karliya and humri useEffect ki dependencies currency hogi and end me humne pure function ko hi export kardiya */