'use client'
import { useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import { all, create, evaluate } from 'mathjs'

const buttonArr = [
  '%',
  'CE',
  'C',
  'DEL',
  '1/X',
  'X2',
  '√X',
  '÷',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '+/-',
  '0',
  '.',
  '=',
]
const math = create(all)
export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [calcValue, setCalcValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const calcFunction = (btn: string) => {
    if (btn === 'CE') {
      setInputValue('')
    } else if (btn === 'C') {
      setInputValue('')
      setCalcValue('')
    } else if (btn === 'DEL') {
      setInputValue(prev => prev.slice(0, -1))
    } else if (btn === '=') {
      try {
        const result = evaluate(inputValue)
        setCalcValue(result.toString())
        setInputValue(result.toString())
      } catch (error) {
        setCalcValue('Error')
      }
    } else if (btn === '1/X') {
      const floatValue = parseFloat(inputValue)
      const result = math.divide(1, floatValue)
      setInputValue(result.toString())
      setCalcValue(result.toString())
    } else if (btn === 'X2') {
      const floatValue = parseFloat(inputValue)
      const result = math.square(floatValue)
      setInputValue(result.toString())
      setCalcValue(result.toString())
    } else if (btn === '√X') {
      const floatValue = parseFloat(inputValue)
      const result = math.sqrt(floatValue)
      setInputValue(result.toString())
      setCalcValue(result.toString())
    } else if (btn === '+/-') {
      const floatValue = parseFloat(inputValue)
      const result = -floatValue
      setInputValue(result.toString())
      setCalcValue(result.toString())
    } else if (btn === '%') {
      const floatValue = parseFloat(inputValue)
      const result = floatValue * 100
      setInputValue(result.toString())
      setCalcValue(result.toString())
    } else if (btn === '÷') {
      setInputValue(prev => prev + '/')
    } else {
      setInputValue(prev => prev + btn)
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      calcFunction('=')
    }
  }
  useEffect(() => {
    // console.log(inputValue, calcValue)
    inputRef?.current?.focus()
  }, [inputValue, setInputValue, calcValue])

  return (
    <div className="bg-[url('/image/1.jpeg')] bg-cover  flex items-center justify-center ">
      <div className='text-center'>
        {/* <!-- text --> */}
        <div className='text-xl font-semibold m-4'>
          <h1>Calculator</h1>
        </div>
        {/* <!-- calculator --> */}
        <div className='h-[40rem] w-96 bg-gradient-to-r from-gray-400 to-gray-700 rounded-lg flex flex-col items-center justify-around shadow-inner mb-8 border-gray-700 border-2'>
          {/* <!-- screen  --> */}
          <div className='rounded-lg w-80 h-36  flex justify-center items-center bg-gradient-to-r from-slate-800 to-black shadow-inner'>
            <div className='w-[94%] h-[88%] rounded-lg bg-[#b0b5a6] shadow-inner'>
              <input
                className='w-full h-1/2 bg-transparent text-blue-900 font-bold focus:outline-none'
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                placeholder='Type Values From Keyboard Or Mouse'
              />
              <div className='w-full h-1/2 bg-transparent font-bold'>
                {calcValue}
              </div>
            </div>
          </div>
          {/* <!-- buttons --> */}
          <div className='grid grid-cols-4 grid-rows-6 w-full gap-2 px-2 border-none'>
            {buttonArr.map((btn, index) => (
              <Button key={index} onClick={() => calcFunction(btn)}>
                {btn}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
