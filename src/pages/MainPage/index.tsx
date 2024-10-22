// @ts-nocheck
import React, { useState } from 'react'

// icon resources
import TreeIcon from 'assets/icons/tree.svg'

const MainPage = ({ }) => {
  const [title, setTitle] = useState('默认第一页')

  return (
    <div className="bg-main bg-cover h-lvh w-lvw flex justify-center items-center">
      <TreeIcon />
      {title}
    </div>
  )
}

export default MainPage
