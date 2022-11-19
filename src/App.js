import dividerMob from './images/divederMob.svg'
import dividerDesk from './images/dividerDesk.svg'
import dice from './images/dice.svg'

import { useState, useEffect } from 'react'

const App = () => {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    clickHandler()
  }, [])

  const clickHandler = async () => {
    const req = await fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setAdvice(data.slip)
      })
  }

  return (
    <div className="font-mangrope  bg-Blue-orig flex justify-center items-center  h-screen">
      <div className="w-96 rounded-xl bg-darkBlue-orig p-6 m-4 relative">
        <p className="text-xs text-center text-neonGreen-orig mb-5 font-bold tracking-2widest">
          ADVICE #{advice.id}
        </p>
        <p className="text-2xl text-center text-lightCyan-orig mb-5">
          "{advice.advice}"
        </p>
        <img src={dividerDesk} alt="" className="hidden md:block mb-5 w-full" />
        <img src={dividerMob} alt="" className="block md:hidden mb-5 w-full" />
        <div
          onClick={clickHandler}
          className="absolute -bottom-5 left-1/2 w-fit h-fit p-3 bg-neonGreen-orig rounded-full -translate-x-1/2 cursor-pointer"
        >
          <img src={dice} alt="" className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default App
