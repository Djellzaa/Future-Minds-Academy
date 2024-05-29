
function Messages() {
    const name = "Djellza";

    if (name)
        return <h2>Welcome {name}</h2>;
    else
        return <h2>Welcome to React Js</h2>;
}
export default Messages;