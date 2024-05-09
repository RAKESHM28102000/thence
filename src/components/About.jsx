import Question from "./Question"

const About = () => {
    const questionAns=[{q:"Do you offer freelancers?",a:"The agreement. Escalate to platform support if e solutions for resolution."},
    {q:"What’s the guarantee that I will be satisfied with the hired talent?",a:"Review policies, seek collaborative solutions for resolution"},
{
    q:"Can I hire multiple talents at once?",
    a:"If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
},
{
    q:"Why should I not go to an agency directly?",
    a:"Why should I not go to an agency directly"
},
{
    q:"Who can help me pick a right skillset and duration for me?",
    a:"Who can help me pick a right skillset and duration for me"
}];


  return (
    <div className='w-full min-h-[100vh] items-center justify-center'>
    <div className='w-[90%] mx-auto rounded-lg bg-[#E8EEE7] flex justify-between px-2 items-center'>
    {/* first content */}
      <div className="flex flex-col justify-start w-[50%] gap-3">
         <div className="flex flex-col items-center text-left justify-center p-2">
         <p className="text-[#9E9D9D] text-[32px] font-grace">What’s on your mind</p>
         <h1 className="text-[#1C1C1C] text-[60px] font-manrope font-semibold">Ask Questions</h1>
         </div>
         <div className="flex justify-center items-center">
          <img src="src/assets/images/arrow.png" className='w-[490px] h-[510px]' alt="sym"/>
         </div>
      </div>
   {/* second content */}
   <div className="flex flex-col gap-2 w-[50%] px-4">
    {
     questionAns.map((item,index)=>{
       return  <Question key={index} question={item.q} answer={item.a}/>
     })
    }
   </div>

</div>

    </div>
  )
}

export default About