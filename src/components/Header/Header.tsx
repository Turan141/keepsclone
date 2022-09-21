import React from 'react'
import { SearchBox } from '../SearchBox/SearchBox'
import { BsList, BsJournalBookmark } from 'react-icons/bs'
import './Header.scss'

export const Header = () => {
  return (
    <div className="header_main">
      <BsList />
      <BsJournalBookmark />
      <h2>Keep</h2>
      <SearchBox />
    </div>
  )
}
