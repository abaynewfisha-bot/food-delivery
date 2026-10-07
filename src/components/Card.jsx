import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { toast } from "react-toastify";


function Card({ name, image,id, price, type }) {
  let dispatch=useDispatch()
  return (
    <div className='w-[250px] h-[320px] bg-slate-200 p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-green-400 hover:border-2'>
        <div className='w-[100%] h-[50%] overflow-hidden rounded-lg shadow-lg hover:border-2 hover:border-green-400'>
        <img src={image} alt="Pancakes"  className='object-cover'/> 
        {/* <img src={image2} alt="Chicken Soup" /> */}
          </div>
          <div className='text-1xl font-semibold'>
           {name}  
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-green-500'> RS {price}</div>
        <div className='flex justify-center items-center gap-1 text-green-500 text-lg font-bold'> {type==="veg" ? <LuLeafyGreen /> : <GiChickenOven />} <span>{type}</span></div>
        </div>
          <div>
        <button className='w-full p-2 rounded-lg bg-green-400 text-gray-700 hover:bg-green-300' onClick={() => {
          dispatch(addItem({ id: id, name: name, image: image, price: price, qty: 1 }));
          toast.success("add the cart")
        }}>Add to dish </button> 
          </div>
    </div>
  )
}

export default Card
