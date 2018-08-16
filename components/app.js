import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bat Man"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button>Change name</button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
