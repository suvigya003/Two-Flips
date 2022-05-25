import React from 'react'
//we're receiving components from Cards to here using props
const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? " active " + item.stat : ""
  return (
    //dynamic classNames
      <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img src={item.img} alt=""/>
      </div>
  )
}

export default Card
