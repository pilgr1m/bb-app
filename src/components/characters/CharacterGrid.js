import React from 'react'
import CharacterItem from "./CharacterItem"

const CharacterGrid = ({isLoading, items}) => {
    return (
        isLoading 
        ? <h3>loading...</h3>
        : <section className="cards">
                {items.map((i) =>{
                    return <CharacterItem key={i.char_id} item={i}> {i.name} </CharacterItem>
                    
                })}       
        </section>
    )
}

export default CharacterGrid


