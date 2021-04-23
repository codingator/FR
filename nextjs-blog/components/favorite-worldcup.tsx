// https://github.com/pyo-sh/Datapia_Frontend_Study_2020/tree/master/favorite-worldcup
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import flexBoxStyle from './favorite-worldcup.module.css'

const items = [
  {
    name: "국밥",
    src: '/img/GukBob.jpg'
  },
  {
    name: "햄버거",
    src: '/img/Hamburger.jpg'
  },
  {
    name: "피자",
    src: '/img/Pizza.jpg'
  },
  {
    name: "초밥",
    src: '/img/Sushi.jpg'
  },
]

export default function FavoriteWorldCup() {
  const [foods, setFoods] = useState([])
  const [displays, setDisplays] = useState([])
  const [winners, setWinners] = useState([])

  useEffect(() => {
    items.sort(() => Math.random() - 0.5)
    setFoods(items)
    setDisplays([items[0], items[1]])
  }, [])

  const clickHandler = food => (event) => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food])
      } else {
        let updatedFood = [...winners, food]
        setFoods(updatedFood)
        setDisplays([updatedFood[0], updatedFood[1]])
        setWinners([])
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food])
      setDisplays([foods[2], foods[3]])
      setFoods(foods.slice(2))
    }
  }

  return (
    <>
      <div className={flexBoxStyle.container}>
        <h1 className={flexBoxStyle.title}>Favorite WorldCup</h1>
        {displays.map(item => (
          <div
            className={flexBoxStyle.flex_1}
            key={item.name}
            onClick={clickHandler(item)}>
            <Image
              src={item.src}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div className={flexBoxStyle.name}>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}