function Chai() {
  //* jsx helps you to write your html inside javascript whereas babel (transpiler) will convert you html code in abstract syntax tree.

  //* Inside JSX,you can't directly insert expression like if else loops etc. Because at the end react will convert your JSX into object to create the abstract syntax tree out of it. Hence you need to pass the variable inside jsx instead of expression.
  let userName = 'ajay mishra'; // props

  return (
    <>
      <h1>Welcome, {userName} Chai is ready</h1>
      <h2>How is your Day {userName}</h2>
    </>
  );
}

export default Chai;
