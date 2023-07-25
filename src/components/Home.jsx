import React from 'react' 
import img1 from '../assets/31+G-o8iK-L._SX342_SY445_.jpg'
import img2 from '../assets/iphone-14-finish-select-202209-6-1inch-blue.jpg'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'



const Home = () => {


  const products =[{
    name:"Mac Book",
    price: 12000,
    imgSrc: img1,
    id:"3431413"

  },

  {
    name:"Iphone",
    price: 799,
    imgSrc: img2,
    id:"34332413"

  }

]
const dispatch = useDispatch()

  

const addToCartHandler = (options) =>{
  console.log(options)
  dispatch({type:"addToCart",payload:options})
  dispatch({type: "calculateprice"});
  toast.success('Sucessfully Added')
}

  return (
    <div className='home' >
      
      {
        products.map(item=>(<ProductCard key={item.id} imgsrc={item.imgSrc} name={item.name} price={item.price} id={item.id} handler={addToCartHandler}  />))
      }
      
    </div>
  )
}

const ProductCard = ({name , id , price , handler , imgsrc}) =>(
  <div className='productCard'><img src={imgsrc} alt={name} />
  <p>{name}</p>
  <h4>${price}</h4>
  <button onClick={()=>handler({name,price,id,quantity:1 ,imgsrc})}>Add to cart</button>
  </div>
  
)
export default Home
