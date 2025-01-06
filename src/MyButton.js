

export default function MyButton(){
  let name="Test"
  function buttonClicked(){
    name="Click Me";
    }
  return (
    <div>

    <button onClick={buttonClicked}>Click Me</button>
    <h1>{name}</h1>
    </div>
  )
  
}
