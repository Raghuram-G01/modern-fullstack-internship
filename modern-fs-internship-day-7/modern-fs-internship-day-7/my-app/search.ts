const food_items = [
    'Pizza',
    'Burger',
    'Pasta',
    'Sushi',
    'Salad',
]

const foods = [
    {
        id: 1,
        name: 'Pizza',
        price: 10.99,
    },
    {
        id: 2,
        name: 'Burger',
        price: 8.99,
    },
    {
        id: 3,
        name: 'Pasta',
        price: 12.99,
    },
    {
        id: 4,
        name: 'Donut',
        price: 15.99,
    },
    {       
        id: 5,
        name: 'Dosa',
        price: 7.99,
    }
]

const search_word = 'P';

const filtered_items = food_items.filter((food)=>{
    return food.toLowerCase().includes(search_word.toLowerCase());
})

console.log(filtered_items);


const search_word1 = 'Do';

const filtered_foods = foods.filter((food)=>{
    return food.name.toLowerCase().includes(search_word1.toLowerCase());
});
console.log(filtered_foods);
console.log(filtered_foods.map((food)=> food.name));