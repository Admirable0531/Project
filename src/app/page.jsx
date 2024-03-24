import '../css/globals.css'
import Osumania from './components/Osumania.jsx'
import Preview from './components/Preview.jsx'

export default function Page() {
  return (
    <div className='bg-slate-600 h-screen flex'>
      <div className='m-10 '>
        <Preview />
        {/* <Osumania /> */}
      </div>
      <div className="bg-red-400 font-bold text-gray-700 rounded-full h-32 w-32 circle">Main Page</div>
    </div>
  )}