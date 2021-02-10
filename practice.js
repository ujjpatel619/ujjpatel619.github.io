const gameArr = [{
    name: "Uncharted 3",
    rating: 8,
    genre: 'Action Adventure'
},
{
    name: "God of War",
    rating: 9.7,
    genre: 'Action Adventure'
},{
    name: "Mortal Kombat",
    rating: 8,
    genre: 'Action Adventure'
}]

gameArr.push({name: 'GTA Vice City', rating: 6, genre: "Action Adventure"})

for(i = 0; i < gameArr.length; i++){
    if(gameArr.filter(rating) === 8){
        console.log(gameArr)
    }
}

