const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute inset-0 z-10  flex flex-col justify-end md:justify-center bg-gradient-to-r from-black/80 px-6 md:px-16 md:pb-0 text-white '>
      <div className='max-w-xl w-168:pb-8 w-564:pb-14 sm:pb-20 md:pb-0 text-left'>
      <h1 className='w-168:text-sm  w-564::text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>{title}</h1>
      <p className='hidden md:block py-4 text-sm lg:text-base'>{overview}</p>
      <div className='flex gap-3 w-295:mt-3 w-168:mt-1'>
        <button className='bg-white text-black w-168:px-2 w-168:py-1 w-564:px-4 md:px-5 lg:px-6 w-564:py-2 rounded-md w-168:text-xs w-564:text-sm md:text-sm lg:text-base hover:bg-opacity-80'>Play</button>
        <button className='hidden md:inline-block bg-gray-400 px-4 py-2 bg-opacity-50 hover:bg-opacity-80 rounded-md text-sm lg:text-base'>More Info</button>
      </div>
      </div>
    </div>
  )
}

export default VideoTitle
