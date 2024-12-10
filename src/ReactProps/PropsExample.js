//This is example  for props / attribute in the component
const myElement = <Car brand="Ford" />;

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}
