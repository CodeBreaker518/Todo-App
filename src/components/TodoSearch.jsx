import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../styles/TodoSearch.css'
import React from 'react'

export function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  // autoselect text input
  const handleFocus = (e) => {
    e.currentTarget.select()
  }
  return (
    <>
      <div className='todo-search container '>
        <div className='row'>
          <div className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='material-icons prefix' />
                {/* <i className='material-icons prefix'>search</i> */}
                <input
                  type='text'
                  id='autocomplete-input'
                  className='autocomplete'
                  value={searchValue}
                  onChange={onSearchValueChange}
                  onFocus={handleFocus}
                />
                <label htmlFor='autocomplete-input'>Search...</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
