import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  const [init, setInit] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 5000)
  })
  return (
    <div className="App">
      {(!init) ? <Header /> : <Body />}
    </div>
  );
}

export default App;
