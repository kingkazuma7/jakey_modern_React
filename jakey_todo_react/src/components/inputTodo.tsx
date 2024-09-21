export interface InputTodoProps {
  todoText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
  placeholder?: string;
  disabled: boolean;
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
  const { todoText, handleInputChange, addTask, placeholder, disabled } = props;

  return (
    <div style={style}>
      <input disabled={disabled} placeholder={placeholder} value={todoText} onChange={handleInputChange} />
      <button disabled={disabled} onClick={addTask}>追加</button>
    </div>
  )
}