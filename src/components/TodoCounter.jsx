import '../styles/TodoCounter.css'
// import { useEffect } from 'react'

export function TodoCounter(props) {
  const { total, completed } = props

  // set dinamically title
  // useEffect(() => {
  //   document.title = `Tienes ${total - completed} tareas pendientes`
  // }, [completed, total])

  return (
    <h2 className='todo-counter'>
      {total === 0 && completed === 0 ? (
        <span>No hay To Do's por hacer 🎉</span>
      ) : total === completed ? (
        <span>Haz completado todos los To Do's 🙏</span>
      ) : (
        <span>
          Haz completado <span className='completed-todos'>{completed}</span> de{' '}
          <span className='total-todos'>{total}</span> To Do's
        </span>
      )}
    </h2>
  )
}
