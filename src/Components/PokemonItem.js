import React from 'react';

const PokemonItem = ({pokemon, onPokemonClicked}) => {

    const handleClick = function() {
        onPokemonClicked(pokemon)
        console.log(pokemon)
    }
    
    return(

        <li onClick={handleClick}>
            
            <h3><u><strong>{pokemon.name}</strong></u></h3>
        </li>

    )
}

export default PokemonItem;