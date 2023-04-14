import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CreateTodoButton(props) {
  const { handleClick } = props
  const onClickButton = () => {
    handleClick()
  }

  return (
    <>
      <div className='todo-create-btn row'>
        <div className='col s12 btn-add-item center-align'>
          <button onClick={onClickButton} className='btn-floating btn-large waves-effect waves-light purple '>
            {/* <i className='material-icons'>add</i> */}
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </>
  )
}
