import Calculator from './components/Calculator'
import Cites from './components/Cites'

export default function Home() {
  return (
    <div>
      {/* // calculator page */}
      <section className="bg-[url('/image/1.jpg')] bg-cover  flex items-center justify-center ">
        <Calculator />
      </section>
      {/* cities page */}
      <section className='h-screen '>
        <Cites />
      </section>
    </div>
  )
}
