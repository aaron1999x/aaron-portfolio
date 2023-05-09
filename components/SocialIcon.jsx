import React from 'react'

const SocialIcon = (props) => {
  return (
    <a href={props.href} target='_blank'>
      <div className='dark:text-white  hover:scale-110 ease-in duration-100'>
        {props.icon}
      </div>
    </a>
  )
}

export default SocialIcon