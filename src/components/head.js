import React from 'react'
import { ICON_SET } from '../utils/url'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../redux/slice/appSlice'

const Head = () => {

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img className='h-11 mx-2 cursor-pointer' alt='menu-icon' src={ICON_SET.MENU_ICON_URL} onClick={handleToggleMenu}/>
        <img className='h-11' alt='youtube-icon' src={ICON_SET.YOUTUBE_ICON_URL}/>
      </div>
      <div className='col-span-9 text-center'>
        <input className='w-1/2 border border-gray-300 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
          Search
        </button>
      </div>
      <div className='col-span-2'>
        <img className='h-11' alt='user-icon' src={ICON_SET.USER_ICON_URL}/>
      </div>
    </div>
  )
}

export default Head