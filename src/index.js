import { writeFile } from 'fs/promises'    

class RequestDataApi{
    async getPoke(){
        const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')

        await pokeApiResponse.json().then(pokemon=>{
            console.log(pokemon)
            writeFile('pokedex.json',JSON.stringify(pokemon.results))
        })
    }
}

async function main(){
    const teste = await new RequestDataApi()
    console.log(teste.getPoke())
}

main()