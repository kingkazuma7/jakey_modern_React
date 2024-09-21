export interface ErrorTasksProps {
  errorText?: string
}

const style = {
  color: 'red',
  margin: '8px',
}

export const ErrorTasks: React.FC<ErrorTasksProps> = (props) => {
  return (
    <p style={style}>{props.errorText}</p>
  )
}