export interface InputTodoProps {
  todoText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
  placeholder?: string;
}

export const InputTodo = (props: InputTodoProps) => {
  const { todoText, handleInputChange, addTask, placeholder } = props;

  return (
    <div className="input-area">
      <input placeholder={placeholder} value={todoText} onChange={handleInputChange} />
      <button onClick={addTask}>追加</button>
    </div>
  )
}