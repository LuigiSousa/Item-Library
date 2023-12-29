import './components-css/Library.css'

import { useState, useEffect } from 'react'

function Library() {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function getItems() {
            const response = await fetch('http://localhost:2007/allItems')
            const data = await response.json()
            setItems(data)
        }

        getItems()
    }, [])

    

    return (
    <>
        <h3 id="library-h3">Library</h3>

        <div id="library-container">
            

            <div id="library-items-container">
                    {items.map(item => (
                        <div id="item-card" key={item.Id}>
                            <p>ID: {item.Id} </p>
                            <h5> {item.name} </h5>
                            <p> {item.rarity} </p>
                            <img src={item.image}/>
                            <p> {item.description} </p>
                        </div>
                    ))}
            </div>
        </div>
    </>
    )
}

export default Library