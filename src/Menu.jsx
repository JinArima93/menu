import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ mekus }) => {
  return (
    <div className='section-center'>
      {mekus.map((item) => {
        return <MenuItem key={item.id} {...item} />
      })}
    </div>
  )
}

export default Menu
