export const product = [
    {
    name: 'combo 1',
    img: 'https://i.postimg.cc/RF759T3W/jeans-y-remera.jpg',
    price: 800,
    descripcion: 'Remera y pantalon de jeans',
    stock: 10,
    categoria: 'oferta'},

    {
    name: 'combo 2',
    img: "https://i.postimg.cc/pds8zL24/Buzo.jpg",
    price: 1500,
    descripcion: 'Remera con estampa',
    stock: 10,
    categoria: 'oferta'},


    {
    name: 'combo 3',
    img: 'https://i.postimg.cc/SR55Mvc2/pexels-anj-namoro-2850487.jpg',
    price: 2500,
    descripcion: 'Remera con saquito sin mangas',
    stock: 10,
    categoria: 'oferta'},

    {
    name: 'combo 4',
    img: 'https://i.postimg.cc/zBGPPrjH/pexels-dom-j-45057.jpg',
    price: 2500,
    descripcion: 'Par de guantes',
    stock: 10,
    categoria: 'oferta'},

    {
    name: 'combo 5',
    img: 'https://i.postimg.cc/SQ8tTDLr/pexels-terje-sollie-298863.jpg',
    price: 2500,
    descripcion: 'Camisa a lunares y par de zapatos color marron',
    stock: 10,
    categoria: 'combos'},

    {
    name: 'combo 6',
    img: 'https://i.postimg.cc/nh3Lfpyy/campera-y-cartera.jpg',
    price: 2500,
    descripcion: 'Campera y cartera',
    stock: 10,
    categoria: 'combos'}, 
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