// https://www.npmjs.com/package/react-custom-roulette#multi-spin
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

export default function Roulette({
  //   postSlug,
  //   postTitle
  // }: {
  //   postSlug: string
  //   postTitle: string,
}) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]