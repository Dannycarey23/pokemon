import React, {useState, useEffect} from 'react'
import PokemonList from '../Components/PokemonList';


const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([""])

    useEffect(() => {
        fetchPokemon();
    }, [])


    const fetchPokemon = function(){
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then (res => res.json())
        .then(data => setPokemon(data.results))
    }
    
    return (
    <>
   <PokemonList pokemon={pokemon} />
    </>

)}


export default PokemonContainer;