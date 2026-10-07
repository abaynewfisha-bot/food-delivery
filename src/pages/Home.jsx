import Nav from '../components/Nav'
import Categories from  '../Category'
import Card from '../components/Card'
import { useContext} from "react";
import { foodItems } from '../assets/food'
import { dataContext } from '../Context/UserContext';
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';


function Home() {
  const { Cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
  function filter(Category) {
    if (Category === "All") {
      setCate(foodItems)
    } else {
      let newList = foodItems.filter((item) => (item.food_Category === Category))
      setCate(newList)
    }
  }
  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((total, item) => total + item.qty*item.price, 0)
  let deliveryfee = 20
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor( subtotal+deliveryfee + taxes);

  return (
    <div className='bg-slate-200 w-full min-h-screen '>
      <Nav />
      {!input? <div className='flex-wrap flex justify-center gap-3 items-center w-[100%]'>
              {Categories.map((item) => {
                  return <div key={item.name} className='w-[80px] h-[80px] bg-white flex flex-col items-start gap-1 px-5 justify-start text-[9px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-300 cursor-pointer  transstion-all duration-100' onClick={() => filter(item.name)}>
                        {item.icon}
                        {item.name}
                        
                      </div>
              })} 
         
      </div>:null}
      <div className='w-full flex flex-wrap justify-center gap-5 items-center gp-5 px-5 pt-8 pb-8'>
        {Cate.length > 1?  Cate.map((item) => {
          return <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
        }):<div className='text-center text-2xl text-green-600 pt-5'>No dish found</div>}
      
      </div>
      <div className={`w- full md-:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl px-6 transition-all duration-500 overflow-auto  ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
          <ImCross className='w-[20px] h-[20px]  text-green-400 cursor-pointer text-[15px] font-semibold hover:text-gray-700' onClick={() => {
            setShowCart(false)
          }} />
        </header>
        {items.length>0?
          <>
         <div className='w-full gap-8 mt-9 flex flex-col  justify-center '>
          {items.map((item) => (
          <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          ))}
         </div>
      
      <div className='w-full border-t-2 border-b-2 border-gray-600 mt-7 flex-col gap-4 p-8'>
      <div className=' w-full flex justify-between items-center'>
        <span className='text-lg text-gray-700 font-semibold'>Subtotal</span>
        <span className='text-green-500 font-semibold text-lg'>RS {subtotal}/-</span>
      </div>
     <div className=' w-full flex justify-between items-center'>
        <span className='text-lg text-gray-700 font-semibold'>Delivery Fee</span>
        <span className='text-green-500 font-semibold text-md'>RS {deliveryfee}/-</span>
      </div>
      <div className=' w-full flex justify-between items-center'>
        <span className='text-lg text-gray-700 font-semibold'>Taxes</span>
        <span className='text-green-500 font-semibold text-1g'>RS {taxes}/-</span>
      </div>
       </div>
       <div className=' w-full flex justify-between items-center p-9'>
        <span className='text-2xl text-gray-700 font-semibold'>Total</span>
        <span className='text-green-500 font-semibold text-lg'>RS {total}/-</span>
      </div>
            <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all' onClick ={() => {
              toast.success('Order placed..')
          }}>Place Order </button>
          </> :
          <div className='text-center text-2xl text-green-600 pt-5'>
            Empty Cart
          </div>}
        
        </div>
  </div>
   ) }
export default Home
