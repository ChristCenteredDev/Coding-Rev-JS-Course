/*
We have an array of paintings.

We need to loop the array and create a new array with messages like  “The Mona lisa is 200 x 200” */

const paintings = [
   {painting:'Mona lisa',width:200,height:200},
   {painting:'The scream',width:400,height:600},
   {painting:'The last supper',width:600,width:700}
]

const listPaintings = paintings.map(function (item) {
    return `The ${item.painting} is ${item.width} x ${item.height}`;
});