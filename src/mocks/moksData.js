export const product = [
    {id:  100,
    name: 'combo 1',
    price: 800,
    img: 'https://i.postimg.cc/Yq3VSzZ6/4d0f15a8-ce16-45b3-89b9-b257d0bae1e1.jpg',
    descripcion: 'Campera y Cartera'},

    {id: 101,
    name: 'combo 2',
    price: 1500,
    img: "https://i.postimg.cc/pds8zL24/Buzo.jpg",
    descripcion: 'buzo'},


    {id: 102,
    name: 'combo 3',
    price: 2500,
    img: 'https://i.postimg.cc/Yq3VSzZ6/4d0f15a8-ce16-45b3-89b9-b257d0bae1e1.jpg',
    descripcion: 'buzo y pantalon'},
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