import '../css/globals.css'
import Preview from './components/Preview.jsx'
import Main from './components/Main.jsx'

export default function Page() {
  return (
    <div className='bg-slate-600 h-screen flex'>
      <div className='ml-[100px] mt-6 '>
        <Preview />
      </div>
      <Main />
    </div>
  )}