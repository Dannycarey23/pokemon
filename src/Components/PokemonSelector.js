import React from 'react'
import OptionItem from './OptionItem';

const PokemonSelector = ({pokemon, onPokemonSelected}) => {

    const handleChange = function(event) {
        const chosenPokemon = pokemon[event.target.value];
        onPokemonSelected(chosenPokemon);
    }

    const pokemonOptions = pokemon.map((pokemon, index) => {
        return <OptionItem key={index} pokemon={pokemon} index={index} />
    })

    return(
        <>
        <select defaultValue="" onChange={handleChange}>
            <option value=""></option>
            {pokemonOptions}
        </select>
        
        


        </>
    )
}

export default  PokemonSelector;