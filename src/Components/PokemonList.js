import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = ({pokemon}) => {

    const pokemonItem = pokemon.map((pokemon, index) => {
        return <PokemonItem pokemon={pokemon} key={index}/> 
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