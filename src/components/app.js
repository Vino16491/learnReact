import React from "react";
import FunctionalComponent from "./functionalComponent";
import ClassComponent from "./ClassComponent";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bat Man"
    };

    this.buttonHandler = this.buttonHandler.bind(this);
    this.newDataFromClassComponent = this.newDataFromClassComponent.bind(this);
  }

  buttonHandler() {
    this.setState({
      name: "super man"
    });
  }

  newDataFromClassComponent(name) {
    this.setState({
      name: name
    });
  }
  render() {
    return (
      <div className="App">
        <FunctionalComponent
          name={this.state.name}
          butonPassToFunctional={this.buttonHandler}
        />
        <ClassComponent passValue={this.newDataFromClassComponent} />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
