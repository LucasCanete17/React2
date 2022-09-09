export const product = [
    {id:  100,
    name: 'combo 1',
    img: 'https://i.postimg.cc/RF759T3W/jeans-y-remera.jpg',
    price: 800,
    descripcion: 'Campera y Cartera',
    stock: 10},

    {id: 101,
    name: 'combo 2',
    img: "https://i.postimg.cc/pds8zL24/Buzo.jpg",
    price: 1500,
    descripcion: 'buzo',
    stock: 10},


    {id: 102,
    name: 'combo 3',
    img: 'https://i.postimg.cc/nh3Lfpyy/campera-y-cartera.jpg',
    price: 2500,
    descripcion: 'buzo y pantalon',
    stock: 10},

    {id: 103,
    name: 'combo 4',
    img: 'https://i.postimg.cc/nh3Lfpyy/campera-y-cartera.jpg',
    price: 2500,
    descripcion: 'buzo y pantalon',
    stock: 10},

    {id: 104,
    name: 'combo 5',
    img: 'https://i.postimg.cc/nh3Lfpyy/campera-y-cartera.jpg',
    price: 2500,
    descripcion: 'buzo y pantalon',
    stock: 10},

    {id: 105,
    name: 'combo 6',
    img: 'https://i.postimg.cc/nh3Lfpyy/campera-y-cartera.jpg',
    price: 2500,
    descripcion: 'buzo y pantalon',
    stock: 10}, 
  ];



export const data = new Promise((res, rej) => {
      let condition = true
      setTimeout(()=> {
        if(condition){
          res(product)
        }else{
          rej('salio mal')
        }
  
      },2000)
  
    })