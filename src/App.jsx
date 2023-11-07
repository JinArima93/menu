import React, { useState } from 'react'
import menu from './data'
import Title from './Title'
import Menu from './Menu'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItem, setMenuItem] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  return (
    <main>
      <section className='menu'>
        <Title text='Mekus Mekus Menu' />
        <Menu items={menuItem} />
      </section>
    </main>
  )
}

export default App
