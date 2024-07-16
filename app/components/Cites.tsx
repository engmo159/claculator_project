'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import myCities from '../data/cities'

const Cites = () => {
  const buttonArr = ['Egypt', 'Palestinian', 'Emirates', 'Lebanon']
  const [city, setCity] = useState({
    header: '',
    paragraph: '',
    src: '',
  })
  const [visible, setVisible] = useState(false)
  const changeDiv = (btn: string) => {
    return () => {
      setVisible(true)
      if (btn == 'Egypt') {
        setCity(myCities.egypt)
      } else if (btn == 'Palestinian') {
        setCity(myCities.Palestinian)
      } else if (btn == 'Emirates') {
        setCity(myCities.Emirates)
      } else if (btn == 'Lebanon') {
        setCity(myCities.Lebanon)
      }
    }
  }
  const removeCity = () => {
    setVisible(false)
    setCity({
      header: '',
      paragraph: '',
      src: '',
    })
  }
  return (
    <div>
      {/* buttons */}
      <div className='flex justify-evenly my-8 '>
        {buttonArr.map((btn, index) => (
          <button
            key={index}
            className='text-green-700 font-bold px-8 border-2 border-green-700 rounded-lg hover:text-white hover:bg-green-700 shadow-xl hover:scale-105 transition-all'
            onClick={changeDiv(btn)}
          >
            {btn}
          </button>
        ))}
        <button
          className='text-white bg-red-600 hover:bg-red-800 font-bold px-8 rounded-lg  shadow-xl  transition-all'
          onClick={removeCity}
        >
          Remove Cites
        </button>
      </div>
      {/* city div */}

      <div
        className={`flex flex-col items-center justify-evenly p-12 mt-12 mb-20 mx-12 rounded-md bg-gray-700 text-white ${
          !visible ? 'hidden' : ''
        }`}
      >
        <h1 className='text-3xl mb-10 text-red-950'>{city.header}</h1>
        <p className='font-light text-lg tracking-wide mb-10'>
          {city.paragraph}
        </p>
        <div className='w-96 h-auto'>
          <Image
            src={city.src}
            alt=''
            width={1920}
            height={960}
            className='w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Cites