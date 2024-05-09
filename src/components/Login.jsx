import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets/images";


const Login = () => {
  const [user,setUser]=useState({name:"",email:""});
  const [userArr,setUserArr]=useState([]);
  const [errors, setErrors] = useState({});
  const [checkinput,setCheckInput]=useState(false);
  const navigate=useNavigate();

  //checkinput
  const checkinputuser=()=>{
    if(user.name && user.email){
      return true;
    }
    return checkinput;
  }
  //handlesubmit
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
    const ischeckInput=checkinputuser();
    if(ischeckInput){
      setCheckInput(true);
    }
    else{
      setCheckInput(false);
    }
    
  }
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  //form validation
  const validateForm=()=>{
    let newErrors = {};
    if (!user.name) {
      newErrors.name = "Name is required";
    }
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(user.email)) {
      newErrors.email = "Enter a valid email address";
    }
   setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }
  //handle submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
    const isValid=validateForm();
    if(isValid) {
      console.log("Form Submitted",user.name);
      alert(`hi ${user.name} Thank you for submitting..`);
      setCheckInput(!checkinput)
      navigate("/success");
    } else {
      console.log("Form Validation Failed");
    }
    setUserArr([...userArr,user]);
    setUser({
      name:"",
      email:""
    })
  }
  return (
    <div className="flex min-h-[100vh] flex-col justify-start w-[90%] mx-auto px-4 py-4">
        <div className="flex justify-between items-center"> 
        <div className="flex justify-center items-center pl-8">
         <img src={logo} alt="logo" className="w-[120px] h-[30px]"/>
        </div>
        <div onClick={()=>navigate("/")} className="rounded-full border-1 cursor-pointer bg-slate-300 size-[50px] flex items-center  justify-center"><RxCross1 className="size-[30px]"/></div>
        </div>

        <div className="flex flex-col items-center ">
         <p className="font-grace text-[36px] text-[#2DA950]">Registration Form</p>
         <h2 className="font-manrope text-[56px] font-bold text-[#1C1C1C] text-center">Start your success<br/>Journey here!</h2>
       </div>

       <div className="flex items-center justify-center">
       <form className="flex flex-col gap-3 mt-10">
       <div>
       <input onChange={(e)=>handleChange(e)} className="w-[400px] pl-10 rounded-full ring-0 text-left border border-[#ffffff] bg-[#EFEFEF] h-[75px] placeholder:text-[#827A7A] text-[20px] font-manrope"  type="text" name="name" value={user.name} placeholder="Enter your name"/>
       {errors.name && <p className="flex items-center justify-start gap-2 text-[20px] font-manrope text-[#FF0808] px-2 py-4"><MdError className="text-[#FF0808] size-[16px]"/>{errors.name}</p>}
       </div>
       <div> 
       <input onChange={(e)=>handleChange(e)} className="w-[400px] pl-10 rounded-full ring-0 text-left border border-[#ffffff] bg-[#EFEFEF] h-[75px] placeholder:text-[#827A7A] text-[20px] font-manrope" type="text" name="email" value={user.email} placeholder="Enter your email"/>
       {errors.email && <p className="text-[20px] flex items-center justify-start gap-2 font-manrope text-[#FF0808] px-2 py-4"><MdError className="text-[#FF0808] size-[16px]"/>{errors.email}</p>}
       </div>
       <button onClick={handleSubmit} className={`w-[400px] rounded-full ring-0 text-center text-white border border-[#ffffff] bg-[#C9C9C9] h-[75px] placeholder:text-[#827A7A] text-[20px] font-manrope ${!checkinput && "bg-black"}`}>Submit</button>

       </form>
      
      
       </div>
    </div>
  )
}
 
export default Login