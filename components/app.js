import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bat Man"
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    this.setState({
      name: "super man"
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.buttonHandler}>Change name</button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
