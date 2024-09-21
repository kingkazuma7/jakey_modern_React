export interface completedTasksProps {
  todos: string[];
  revertTask: (index: number) => void;
}

export const CompletedTasks: React.FC<completedTasksProps> = (props) => {
  const { todos, revertTask } = props;

  return (
    <div className='complete-area'>
      <p className='title'>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
            <p className='todo-item'>{todo}</p>
            <button onClick={() => revertTask(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}