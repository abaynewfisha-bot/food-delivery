
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { incrementQty } from "../redux/cartSlice";
import { removeItem } from "../redux/cartSlice";
import {decrementQty} from '../redux/cartSlice'
function Card2({ name, id, price, image, qty }) {
  let dispatch = useDispatch()
  return (
    <div className='w-full h-[100px] p-2 shadow-lg flex justify-between items-center'>
        <div className= "w[50%] h-full bg-slate-200 flex gap-5">
            <div className="w-[50%] h-full overflow-hidden rounded-lg">
                <img src={image} alt="" className='object-cover' />
              </div>
              <div className='w-[40%] h-full flex flex-col gap-3'>
                  <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[90px] h-[50px] bg-slate-600 flex rounded-lg overflow-hidden font-semibold border-green-400 border-2 text-xl'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:text-gray-600'onClick={()=>{ qty>1?dispatch(decrementQty(id)):1}}>-</button>  
                      <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center text-green-500'>{ qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:text-gray-500'onClick={()=>{dispatch(incrementQty(id))}}>+</button>
                </div>
            </div>
        </div>
        <div className='justify-start items-end gap-6'>
              <span className='text-xl text-green-400 font-semibold'>RS { price}/-</span>
            <RiDeleteBin5Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(removeItem(id))}/> 
        </div>
    </div>
  )
}

export default Card2
