import React from 'react';

const OptionItem = ({pokemon, index}) => {
    return(
        <option value={index}>{pokemon.name}</option>
    )
}

export default OptionItem;