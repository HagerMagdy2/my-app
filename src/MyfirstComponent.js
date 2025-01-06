import "./MyfirstComponentStyle.css"
export default function MyfirstComponent({name}) {
  
  return (
    <div>
      <h1 className="active" style={{backgroundColor:"red"}}>Hello {name}!</h1>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
}
function sayHello(){
  alert('Hello from MyFirstComponent!');
}