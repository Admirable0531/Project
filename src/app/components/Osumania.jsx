import '../../css/globals.css'
import CircleMania from './CircleMania'

const Osumania = () => {
  return (
    <div className=" flex h-3/4 w-[36vh] bg-red-300">
      <div className=''><CircleMania /></div>
    
      <div className='flex self-end w-[36vh] fixed'>
        <div className='bg-slate-400 w-[8vh] h-[8vh] rounded-full m-1'></div>
        <div className='bg-slate-400 w-[8vh] h-[8vh] rounded-full m-1'></div>
        <div className='bg-slate-400 w-[8vh] h-[8vh] rounded-full m-1'></div>
        <div className='bg-slate-400 w-[8vh] h-[8vh] rounded-full m-1'></div>
      </div>
    </div>
  )
}

export default Osumania
