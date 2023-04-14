import React, { useRef } from 'react'
import '../styles/TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function TodoItem(props) {
  const { completed, onComplete, onDelete } = props

  const itemRef = useRef(null)

  const completeTodo = (event) => {
    onComplete()
  }

  const deleteTodo = () => {
    itemRef.current.classList.add('slide-out-left')
    setTimeout(() => {
      onDelete()
    }, 500)
  }

  return (
    <li className='todo-item-list' ref={itemRef}>
      <div className='row pink darken-3 valign-wrapper todo-item'>
        <div className='col s9'>
          <p>
            <label>
              <input onChange={completeTodo} type='checkbox' checked={completed ? 'checked' : ''} />
              <span className={`text-item ${completed ? 'text-item--completed' : ''}`}>{props.text}</span>
            </label>
          </p>
        </div>
        <div className='col s3 m2'>
          <p>
            <button onClick={deleteTodo} className='btn btn-small waves-effect waves-light red align-right'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </p>
        </div>
      </div>
    </li>
  )
}
