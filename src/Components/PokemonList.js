import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = ({pokemon, onPokemonClicked}) => {

    const pokemonItem = pokemon.map((pokemon, index) => {
        return <PokemonItem pokemon={pokemon} key={index} onPokemonClicked={onPokemonClicked}/> 
    })

return(
    <>
    <div className='pokeProfile'>
        <ul>
            {pokemonItem}  
        </ul>
    </div>
    </>
)
}

export default PokemonList;