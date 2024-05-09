import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Success = () => {
    const [time,setTime]=useState(5);
    const navigate=useNavigate();

    useEffect(()=>{
      const settime=setTimeout(()=>{
        console.log("settimerunning ...");
      },5000)
      return ()=>{
        console.log("cleartimeout")
        clearTimeout(settime); }
    },[])
    useEffect(()=>{
        const setInter=setInterval(()=>{
          console.log("setintervalrunning ...");
          if(time>0){
          setTime((prev)=>prev-1);}
          if(time===0){
            alert("We will redirecting you to home page ...")
            navigate("/");   
          }
          else{
            return;
          }
        },1000)
        return ()=>{
          console.log("clearInterval")
          clearInterval(setInter); }
      },[time])
  return (
    <div className="flex min-h-[100vh] flex-col justify-between w-[90%] mx-auto px-4 py-4 pb-10">
        <div className="flex justify-between items-center"> 
        <div className="flex justify-center items-center pl-8">
         <img src="src/assets/images/logo.png" alt="logo" className="w-[120px] h-[30px]"/>
        </div>
        <div className="rounded-full border-1 bg-slate-300 size-[50px] flex items-center  justify-center"></div>
        </div>

        <div className="flex flex-col items-center ">
        <img src="src/assets/images/correct.png" alt="logo" className="size-[80px]"/>
        </div>
        <div className="flex flex-col items-center ">
         <p className="font-grace text-[36px] text-[#2DA950]">Success Submitted</p>
         <h2 className="font-manrope text-[56px] font-bold text-[#1C1C1C] text-center">Congratulations</h2>
         <p className="font-manrope text-[27px] w-[60%] font-bold text-[#727272] text-center">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
       </div>

       <div className="flex items-center justify-center">
       <p className="font-manrope text-[20px] w-[50%] font-bold text-[#727272] text-center">Redirecting you to Homepage in <span className="text-black">{time} Seconds</span></p>
       </div>
    </div>
  )
}
 
export default Success;