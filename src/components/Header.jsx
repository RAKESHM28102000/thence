import { useNavigate } from "react-router-dom";
import { logo } from "../assets/images";

const Header = () => {
  const navigate=useNavigate();
  return (
    <div className='flex font-manrope w-full min-h-[100px] bg-white justify-center items-center'>
     <div className="w-[90%] h-[98px] rounded-full border border-[#EAEAEA] shadow-sm flex justify-between px-3 items-center bg-[#FFFFFF] ">
     <div className="flex justify-center items-center pl-8">
         <img src={logo} alt="logo" className="w-[120px] h-[30px]"/>
     </div>
     <div className="flex justify-center items-center gap-2 cursor-pointer">
         <div onClick={()=>navigate("/login")} className="w-[200px] h-[77px] rounded-full border border-white flex justify-center items-center hover:bg-[#F1F1F1]  hover:border-[#EAEAEA] bg-[#EAEAEA]">
         <button  className="text-center text-lg text-[#1C1C1C]">
             Get Projects
         </button></div>
         <div className="w-[200px] h-[77px] rounded-full border border-white flex justify-center 
         items-center bg-[#1C1C1C]  hover:bg-[#4E4E4E]  ">
        <button className="text-center text-lg text-[#FFFFFF]">
         Onboard Talent
        </button></div>
     </div>
     
     </div>
         </div>
       )
}

export default Header;