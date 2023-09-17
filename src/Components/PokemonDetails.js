import React from 'react'

const PokemonDetails = ({pokemon}) => {
    
    console.log(pokemon)
    return (
        <>
        <div className='PokeCard'>
        
        <img src={pokemon.sprites.front_shiny} className='pokeSprite'></img>
        <h3><u>{pokemon.name}</u></h3>
        <p>Height: {pokemon.height}cm</p>
        <p>Weight: {pokemon.weight}kg</p>
        <hr></hr>
        <p>Moves: {pokemon.abilities[0].ability.name} and {pokemon.abilities[1].ability.name}</p>
        
       </div>

       <a href="/">Back to the homepage</a>
       </>
    )}

export default PokemonDetails;