export interface IncompleteTasksProps {
  todos: string[];
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

export const IncompleteTasks: React.FC<IncompleteTasksProps> = (props) => {
  const { todos, completeTask, deleteTask } = props;

  return (
    <div className="incomplete-area">
      <p className='title'>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="list-row">
                <p className='todo-item'>{todo}</p>
                <button onClick={() => completeTask(index)}>完了</button>
                <button onClick={() => deleteTask(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}