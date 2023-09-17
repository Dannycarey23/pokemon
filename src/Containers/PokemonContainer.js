import React, {useState, useEffect} from 'react'
import PokemonList from '../Components/PokemonList';
import PokemonSelector from '../Components/PokemonSelector';
import PokemonDetails from '../Components/PokemonDetails';


const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([""]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        fetchPokemon();
    }, [])


    const fetchPokemon = function(){
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=9")
        .then(res => res.json())
        .then(data => setPokemon(data.results))    
    }


  

    // const onPokemonClicked = function(pokemon) {
    //     setSelectedPokemon(pokemon);
    // }

    const onPokemonSelected = function(pokemon){
        fetch(pokemon.url)
        .then (res => res.json())
        .then(data => setSelectedPokemon(data));
        
    }

    return (
    <>
    
   <h1><u>Simple Pokedex</u></h1>
   Choose a pokemon from the dropdown: <PokemonSelector pokemon={pokemon} onPokemonSelected={onPokemonSelected} />
   <p></p>
   {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon}/> : <PokemonList pokemon={pokemon} /> }
   
    </>

)}


export default PokemonContainer;