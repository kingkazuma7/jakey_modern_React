export interface InputTodoProps {
  todoText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
  placeholder?: string;
}

const style = {
    backgroundColor: '#c6e5d9',
    width: '400px',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
}

export const InputTodo = (props: InputTodoProps) => {
  const { todoText, handleInputChange, addTask, placeholder } = props;

  return (
    <div style={style}>
      <input placeholder={placeholder} value={todoText} onChange={handleInputChange} />
      <button onClick={addTask}>追加</button>
    </div>
  )
}