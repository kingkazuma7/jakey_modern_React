export interface InputTodoProps {
  todoText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
}

export const InputTodo = (props: InputTodoProps) => {
  const { todoText, handleInputChange, addTask } = props;

  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={handleInputChange} />
      <button onClick={addTask}>追加</button>
    </div>
  )
}