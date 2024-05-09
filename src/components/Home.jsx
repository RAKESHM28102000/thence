import { girl, rocket, smallarrow, spark } from "../assets/images"
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"

const Home = () => {
  return (<section>
  <Header/>
    <div className="flex font-manrope overflow-hidden py-4 px-8 w-full min-h-[100vh] justify-start flex-col gap-4 items-center">
  
      <div className="flex flex-col items-center ">
        <p className="font-grace text-[36px] text-[#2DA950]">Success stories</p>
        <h2 className="font-manrope text-[56px] font-bold text-[#1C1C1C] text-center">Every success journey<br/> we’ve encountered.</h2>
      </div>
      <div className="flex w-[80%] mx-auto items-center gap-1">
      {/* first box */}
   <div className="relative w-[60%] h-[600px]">
      {/* girl box */}
      <div className="bg-green-300 rounded-2xl w-[70%] h-[80%] absolute left-[80px] top-[50px] ">
        <img src={girl} alt="girl" className="w-full h-full rounded-2xl"/>
      </div>
      {/* first box */}
      <div className="shadow-md absolute top-[150px] -left-[50px] z-10 text-left w-[270px] h-[230px] bg-white rounded-lg">
      <div className="relative">
       <h1 className="text-[54px] font-bold"><img className="inline-block absolute -top-10 -left-10" src={spark}/>40%</h1>
       <p className="text-lg text-[#828282]">Achieved reduction in project execution time by optimising team availability</p>
       </div>
      </div>
   {/* second box */}
      <div className="shadow-md absolute bottom-[100px] left-[10px] z-10 flex items-center justify-around  text-left w-[240px] h-[90px] bg-white rounded-full">
      <img className="inline-block " width={"32px"} height={"32px"} src={rocket}/>
       <div className="text-left">
       <h1 className="text-[24px] font-bold">10 days</h1>
       <p className="text-[16px] text-[#828282]">Staff Deployment</p>
       </div>
   </div>

   {/* third box */}
   <div className="shadow-md absolute bottom-[10px] right-[10px] z-10 flex flex-col items-center justify-start gap-4 px-1 w-[290px] h-[240px] bg-[#002E18] rounded-lg border border-[#3D3D3D] text-left">
    <h1 className="text-[22px] text-[#A6A3A0]"><span className="text-[#FFFFFF] font-semibold text-[63px]">$0.5 </span>MILLION</h1>
    <p className="text-lg text-[#CCCCCC]">Reduced client expenses by saving on hiring and employee costs.</p>
    </div>

  </div>
  {/* second box */}
   <div className="flex flex-col justify-between items-start w-[40%] px-2 gap-12">
   <div className=" flex flex-col justify-start items-start gap-4 ">
    <h3 className="text-[40px] font-bold text-left text-[#1C1C1C]">Enhance fortune 50 company’s insights teams research capabilities</h3>
    <div className="flex justify-start items-center gap-1">
      <div className="size-3 rounded-full bg-[#2DA950]"></div>
      <div className="size-3 rounded-full bg-[#CAD0CB]"></div>
      <div className="size-3 rounded-full bg-[#CAD0CB]"></div>
    </div>
   </div>
   {/* button */}
   <div className="w-[245px] h-[77px] rounded-full border border-white flex justify-center 
   items-center bg-[#1C1C1C]  hover:bg-[#4E4E4E]  ">
   <button className="text-center text-lg text-[#FFFFFF] flex justify-start gap-2 items-center">
    Explore more <span><img src={smallarrow}/></span>
   </button></div>
   </div>
 </div>
</div>
<About/>
<Footer/>
 </section>      
  
  )
}

export default Home