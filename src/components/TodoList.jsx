import '../styles/TodoList.css'

export function TodoList(props) {
  //destructuring object props
  const { children } = props
  return (
    <>
      <div className='todo-list container'>
        <section>
          <ul className='collection'>{children}</ul>
        </section>
      </div>
    </>
  )
}
