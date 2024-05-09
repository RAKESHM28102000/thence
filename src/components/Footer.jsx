const Footer = () => {
  return (
    <div className="flex justify-between mx-auto px-3 bg-[#F5F5F5] items-center w-[90%] h-[150px] rounded-2xl">
     <div className="flex gap-2 items-center"><span><img src="src/assets/images/copyright.png"/></span><h1>Talup 2023. All rights reserved</h1></div>
    <div className="flex justify-start items-center gap-10">
    <p className="text-lg text-[] font-manrope underline">Terms & Conditions</p>
    <p className="text-lg text-[] font-manrope underline pr-10">Privacy Policy</p>

    </div>

    </div>
  )
}

export default Footer