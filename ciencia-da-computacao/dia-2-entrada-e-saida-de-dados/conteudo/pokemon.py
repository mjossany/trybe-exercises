import json

with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])
