 'use strict'

 //Второе задание

 for (let chislo = 1; chislo < 11; chislo++) {
    if (chislo % 2 == 0) {
      console.log(chislo + " - четное число");
    }
    else if (chislo % 2 == 1) {
      console.log(chislo + " - нечетное число");
    }
 }
        
 //Третье задание

 const post = {
     author: "John", //вывести этот текст
     postId: 23,
     comments: [
         {
             userId: 10,
             userName: "Alex",
             text: "lorem ipsum",
             rating: {
                 likes: 10,
                 dislikes: 2 //вывести это число
            }
         },
         {
            userId: 5, //вывести это число
             userName: "Jane",
             text: "lorem ipsum 2", //вывести этот текст
             rating: {
                 likes: 3,
                 dislikes: 1 
            }
        },
    ]
 }

 console.log(post.author);
 console.log(post.comments[0].rating.dislikes);
 console.log(post.comments[1].userId);
 console.log(post.comments[1].text);

//Четвертое задание

  const products = [
      {
          id: 3,
          price: 200,
      },
      {
          id: 4,
          price: 900,
      },
      {
          id: 1,
          price: 1000,
      }
  ]

    products.forEach(function(product) {
        product.price = product.price - (product.price * 0.15);
    });

  //Пятое задание

  const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
  ]
  
  let productsWithImage = products.filter(function(product) {
      if (product.photos != undefined && product.photos.length > 0) {
        console.log(product.photos);
      }
  })

//Шестое задание

for(let i = 0; i < 10; console.log(i++)) { }

//Седьмое задание

//Получилось некрасивенько, с пробелами((

let h = 20;

for (let i = 1; i<= h; i++) {

        console.log("");

        for (let resh = 0; resh < i; resh++) {
          console.log("#");
        }
}
