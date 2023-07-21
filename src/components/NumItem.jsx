import React from 'react'
import { useSelector } from 'react-redux'

function NumItem() {
    const nbrItems = useSelector((state)=> state.counter_item)
  return (
    <div className='absolute -right-2 text-[13px] -top-3 w-4 h-4 rounded-full bg-red-600 text-white font-semibold flex justify-center items-center p-2'>
      {nbrItems}
    </div>
  )
}

export default NumItem
