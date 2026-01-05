import React from 'react' 

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-7 text-base w-1/3'>{overview}</p>
      <div className='flex gap-4'>
        <button className='bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-80'>Play</button>
        <button className='bg-gray-400 px-4 py-2 bg-opacity-50 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
