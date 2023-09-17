import React from 'react';

const PokemonItem = ({pokemon, index}) => {

    
    return(

        <li>
            <h3><u><strong>{pokemon.name}</strong></u></h3>
        </li>

    )
}

export default PokemonItem;