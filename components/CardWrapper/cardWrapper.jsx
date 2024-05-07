import {useState, useEffect} from "react";
import Card from "../Card/card";

import styles from "../CardWrapper/cardWrapper.module.css";

const CardWrapper=({dogs,quotes})=>{
    console.log("cardwrapper",dogs,quotes)
    const [cards,setCards]=useState([
    ]);
    useEffect(()=>{
        if (dogs && quotes){
            setCards([{id: 1, text: "Dog wisdom ", message: dogs.message, content: quotes.content }
            ]);
        }
    }, [dogs,quotes])
    return(
        <div className={styles.main}>
            {cards.map((card)=>(<Card key={card.id} text={card.text} message={card.message} content={card.content}/>))
            }
        

        </div>
    )
}

export default CardWrapper