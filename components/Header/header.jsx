import styles from "../Header/header.module.css";
import MenuBar from "../NavBar/menuBar";
import {useState} from "react";
import burger from "../../public/icons8-menu.svg"

const Header=()=>{
    const [isDisplayMobMenu,setDisplayMobMenu]=useState(false);
    const burgerMenuClick=()=>{
        setDisplayMobMenu(!isDisplayMobMenu);
    };
    const [navigation,setNavigation]=useState([
        {id:1, title:"Why", link:"https://medium.com/codex/15-fun-and-interesting-apis-to-use-for-your-next-coding-project-in-2022-86a4ff3a2742",},
        {id:2, title:"Add new", link:"#",},
        {id:3, title:"Check", link:"#",},
    ])
    return(
      
        <div className={styles.main}>
            <img className={styles.logo} src="https://cdn.imgbin.com/0/13/15/imgbin-dog-logo-snout-veterinarian-canidae-dog-aFZdhjv1jnCwgyhvm7vmtZGvP.jpg"/>
            <nav className={styles.menu}>
            {navigation.map((nav)=>(<MenuBar key={nav.id} title={nav.title} link={nav.link}/>))}
            </nav>
            <button onClick={burgerMenuClick} className={styles.burgerBtn} ><img src={burger.src}/></button>
            {isDisplayMobMenu && (<div className={styles.mobileMenu}>
                <nav className={styles.menuMobile}>
            {navigation.map((nav)=>(<MenuBar key={nav.id} title={nav.title} link={nav.link}/>))}
            </nav>

            </div>)}
        </div>
    )
}

export default Header