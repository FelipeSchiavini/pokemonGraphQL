import { gql,useQuery } from "@apollo/client";
import { graphql } from "graphql";
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, CardContainer, Image, Select, Button, Waiting } from '../styles/Card.styles'


function Pokemon () {
    const { loading, error, data } = useQuery(POKEMON_TYPES);
    const { register, handleSubmit } = useForm();

    const [tipo, setTipo] = useState(1)

    if (loading) return <Waiting>Puta veia...</Waiting>;
    if (error) return <p>Error :</p>;

    console.log(data.allTypes)

    const onSubmit = (data) => setTipo(data.value);

    return(
    <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Select {...register("value")}>
                <option value={0}>Fairy</option>
                <option value={3}>Normal</option>
                <option value={4}>Fighting</option>
                <option value={5}>Flying</option>
                <option value={6}>Poison</option>
                <option value={7}>Ground</option>
                <option value={8}>Rock</option>
                <option value={9}>Bug</option>
                <option value={10}>Ghost</option>
                <option value={11}>Steel</option>
                <option value={12}>Fire</option>
                <option value={13}>Water</option>
                <option value={14}>Grass</option>
                <option value={15}>Electric</option>
                <option value={16}>Psychic</option>
                <option value={17}>Ice</option>
                <option value={18}>Dragon</option>
                <option value={19}>Dark</option>
            </Select>
            <Button> Confirm </Button>
        </form>
        <CardContainer>
        {data.allTypes[tipo].pokemon.map((pokemon, i)=>(
            <Card key = {i}  color={pokemon.color}>
                <p>{pokemon.name}</p>
                <Image src = {pokemon.sprites.front_default}/>
            </Card>
        ))}
        </CardContainer>
    </div>
    )}

const POKEMON_TYPES = gql`
query tipos {     
    allTypes {
        name
        pokemon {
        name
        color
        sprites {
            front_default
          }
        }
    }
}
`


export default Pokemon;