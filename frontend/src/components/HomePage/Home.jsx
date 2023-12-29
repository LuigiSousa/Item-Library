import '../components-css/Home.css'
import { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";

function Home() {

    const [randomItem, setRandomItem] = useState({})

    useEffect(() => {
        async function getRandomItem() {
            const response = await fetch('http://localhost:2007/randomItem')
            const data = await response.json()
            setRandomItem(data)
        }

        getRandomItem()

    }, [])

    if (randomItem.usable === true) {
        randomItem.usable = "Yes"
    }else if (randomItem.usable === false) {
        randomItem.usable = "No"
    }

    return (
        <div id="home-container">
            <h3>Home</h3>

            <div id="item-container">   
                <div id="item"> 
                    <h5> {randomItem.name} </h5>
                    <img src={randomItem.image}/>
                    <p> {randomItem.description} </p>
                    <p> ID: {randomItem.Id} </p>
                    <p> Usable: {randomItem.usable} </p>
                </div>
            </div>

            <div id="creator">
                <p>Created by: <a id="creator-a" href="https://github.com/LuigiSousa">Luigi Sousa</a><FaGithub id="icon" /></p>
            </div>
        </div>
    )
}

export default Home