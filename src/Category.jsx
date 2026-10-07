
import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { FaPastafarianism } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
 const Categories =[
    {
        id: 1,
        name: 'All',
        icon:<TiThSmallOutline className='w-[50px] h-[50px] text-green-600'/>
       
    },
     
     {
        id: 2,
        name: 'breakfast',
        icon:<MdFreeBreakfast className='w-[50px] h-[50px] text-green-600'/>
       
    },
      {
        id: 3,
        name: 'soups',
        icon:<TbSoup className='w-[50px] h-[50px] text-green-600'/> 
       
    },
      {
        id: 4,
        name: 'pasta',
        icon:<FaPastafarianism className='w-[50px] h-[50px] text-green-600'/>
       
    },
      {
        id: 5,
        name: 'main_course',
        icon:<MdOutlineFoodBank className='w-[50px] h-[50px] text-green-600'/>
       
    },
      {
        id: 6,
        name: 'pizza',
        icon:<GiFullPizza className='w-[50px] h-[50px] text-green-600'/>
       
    },
      {
        id: 7,
        name: 'burgers',
        icon:<GiHamburger className='w-[50px] h-[50px] text-green-600'/>
       
    }  
]
export default Categories

