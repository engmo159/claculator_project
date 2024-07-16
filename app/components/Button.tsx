import { FC } from 'react'

interface BtnProps {
  children: React.ReactNode
  onClick: (p: string) => void
}

const Button: FC<BtnProps> = ({ children, onClick }) => {
  return (
    <button
      className='bg-[#29303d] hover:bg-slate-700 text-white rounded-lg py-4 hover:scale-105 shadow-inner'
      onClick={() => onClick('some string')}
    >
      {children}
    </button>
  )
}

export default Button
