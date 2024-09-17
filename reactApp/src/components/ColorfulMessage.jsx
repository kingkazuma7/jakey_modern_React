export const ColorfulMessage = ({ color, children }) => {
  // const {color, children} = props;
  // console.log(children);
  console.log(" --- ColorfulMessage");
  
  
  const constStyle = {
    color,
    fontSize: "18px"
  }

  return (
    <>
      <p style={constStyle}>{children}</p>
    </>
  )
}