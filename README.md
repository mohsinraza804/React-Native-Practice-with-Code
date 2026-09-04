useState in React / React Native
useState is a React concept used to store and update data.
const [name, setName] = useState();
[name, setName] uses JavaScript concept array destructuring.
name → stores the current value.
setName → updates the value its also called function.
We use useState because updating state causes the component to re-render and update the screen.
A normal variable (let/const) can change its value, but it does not cause a re-render.

Props we used to send and recive data from parant to child
<Component data={data} />
const app (props) => {
    name = props.data
}