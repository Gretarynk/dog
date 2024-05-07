import {useState,  useEffect} from "react";
import Header from "@/components/Header/header";
import Main from "@/components/Main/main";
import Footer from "@/components/Footer/footer";
import styles from "@/styles/Home.module.css";
import axios from "axios";



export default function HomePage() {
  const[quotes,setQuotes]=useState(null);
  const fetchQuotes=(async()=>{
    const response= await axios.get("https://api.quotable.io/random");
    console.log(response.data)
    setQuotes(response.data)
  })
  const [dogs,setDogs]=useState(null);
  const fetchDogs=(async()=>{
    const data = await axios.get("https://dog.ceo/api/breeds/image/random");
  
    console.log(data.data);
    setDogs(data.data)
  });
  useEffect(()=>{fetchDogs(),fetchQuotes()},[])
 
  return (
    <div className={styles.main}>
      <Header/>
      <Main dogs={dogs} quotes={quotes}/>
      <Footer/>
    </div>
   
  );
}
