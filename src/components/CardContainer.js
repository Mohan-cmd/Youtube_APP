import React from 'react'

const CardContainer = ({title}) => {
  return (
    <div className='flex overflow-x-scroll'>
      {title}
    </div>
  )
}

export default CardContainer
