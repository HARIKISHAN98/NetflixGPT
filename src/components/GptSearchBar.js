import React from 'react'
import lan from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  
  return (
    <div className='mt-[6%] flex justify-center'>
      <form className='grid grid-cols-12  w-1/2 bg-black'>
        <input type="text" placeholder={lan[language].gptinputplaceholder} className="p-4 m-4 rounded-lg col-span-9"/>
        <button className="bg-red-500 col-span-3 text-white px-4 py-2 m-4 rounded-lg hover:bg-red-700">{lan[language].search}</button>
      </form>
    </div>
  )
}
 
export default GptSearchBar
