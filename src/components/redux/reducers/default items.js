import uuid from 'uuid';

// const img_path=(name)=> `/imgs/drinks/${name}.jpg`
const drink_names=[
    'americano', 'moca',
    'capocino', 'latte',
    'spresso', 'turk'
]
const cold_drink_names=[
    'ice americano', 'mojito',
    'ice latte', 'lemonade',
    'ice caramel maciano',
]
const cake_names=[
    'baqlawa', 'brownie',
    'carrot cake',
    'cheesecake',
    'chocolate cheesecake',
    'cookie', 'tart',
    'croisan',
]
const fast_food_names=[
    'roast beef pizza',
    'chick pizza',
    'pep pizza',
    'wings x3',
    'wings x5',
]
const burger_names=[]
const sandwich_names=[
    'hotdog', 'burger', 'cheese burger',
    'mushroom burger', 'royal burger'
]
const sandwich_imgs=[
    'sandwich', 'burger', 'burger',
    , 'burger', 'burger'
]
export const drinks= drink_names.map((name)=>
    ({name, type:'drink', img:`/imgs/drinks/${name}.jpg`, amountSold:0, id:uuid()})
)
export const cold_drinks= cold_drink_names.map((name)=>
    ({name, type:'cold drink', img:`/imgs/drinks/${name}.jpg`, amountSold:0, id:uuid()})
)
export const cakes= cake_names.map((name)=>
    ({name, type:'cake', img:`/imgs/cakes/${name}.jpg`, amountSold:0, id:uuid()})
)
export const fast_foods= fast_food_names.map((name)=>
    ({name, type:'fast food', img:`/imgs/food/${name}.jpg`, amountSold:0, id:uuid()})
)
export const sandwiches= sandwich_names.map((name,i)=>
    ({name, type:'sandwich', img:`/imgs/food/${sandwich_imgs[i]}.jpg`, amountSold:0, id:uuid()})
)
const items= [...drinks, ...cold_drinks, 
    ...cakes, ...fast_foods, ...sandwiches]
export default items