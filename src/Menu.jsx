import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        return <MenuItem />
      })}
    </div>
  )
}

export default Menu
