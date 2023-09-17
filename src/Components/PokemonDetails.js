import React from 'react'

const PokemonDetails = ({pokemon}) => {
    
    return (
        <>
        <div className='PokeCard'>
        
        <img src={pokemon.sprites.front_shiny} className='pokeSprite'></img>
        <h3><u>{pokemon.name}</u></h3>
        <p>Height: {pokemon.height}ft</p>
        <p>Weight: {pokemon.weight}lbs</p>
        <hr></hr>
        <p><strong><u>Moves List</u></strong> </p> 
        <p> {pokemon.abilities[0].ability.name}</p>
        <p> {pokemon.abilities[1].ability.name}</p>
        
       </div>

       <p><a href="/">Back to the homepage</a></p>
       </>
    )}

export default PokemonDetails;