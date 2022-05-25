import React from 'react'
import Card from './Card';
import { useState } from 'react'

export const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: '/img/apple.png', stat:""},
        { id: 1, img: '/img/apple.png', stat:""},
        { id: 2, img: '/img/banana.png', stat:""},
        { id: 2, img: '/img/banana.png', stat:""},
        { id: 3, img: '/img/blackberry.png', stat:""},
        { id: 3, img: '/img/blackberry.png', stat:""},
        { id: 4, img: '/img/fruit.png', stat:""},
        { id: 4, img: '/img/fruit.png', stat:""},
        { id: 5, img: '/img/kiwi.png', stat:""},
        { id: 5, img: '/img/kiwi.png', stat:""},
        { id: 6, img: '/img/lemon.png', stat:""},
        { id: 6, img: '/img/lemon.png', stat:""},
        { id: 7, img: '/img/strawberry.png', stat:""},
        { id: 7, img: '/img/strawberry.png', stat:""},
        { id: 8, img: '/img/mango.png', stat:""},
        { id: 8, img: '/img/mango.png', stat:""}
    ].sort(() => Math.random() - 0.5))     //to shuffle the cards
    const [prev, setPrev] = useState(-1);
    function check(current) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }
        else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            },1000)
            
        }
    }
    
    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }
        else {
            check(id)
        }
    }
  return (
      <div className='container'>
          {items.map((item,index) => (
              <Card key={index} item={item} id={index} handleClick={handleClick} /> //2nd handleClick is the function while 1st is just name
        
      ))}
      </div>
  )
}
