import React from 'react'

const CardTag = (props) => {
  return (
    <div className='inline bg-headlineDark text-headlineLight dark:bg-buttonDark dark:text-headlineDark rounded-md p-2 shadow-md '>
      {props.tech}
    </div>
  )
}

export default CardTag