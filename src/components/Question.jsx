import { useState } from 'react';
import { add, minus } from '../assets/images';
// eslint-disable-next-line react/prop-types
const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
     <div className='flex flex-col gap-5 text-left border-b-2'>
     <div className='flex justify-between items-center mb-5'>
      <h1 className="font-manrope text-[#1C1C1C] text-[20px]">
        {question} 
      </h1>
      <button className='pr-10' onClick={handleToggleAnswer}>{!showAnswer ? (<img src={add} alt='add'/>):(<img src={minus} alt='add'/>) }
      </button>
      </div>
     {showAnswer && <div className="answer"><h1 className=" text-[#617275] text-[15px]">{answer}</h1></div>}
     </div> );
};

export default Question;
