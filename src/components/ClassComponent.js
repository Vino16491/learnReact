import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      secretName: "",
      superPowers: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  saveNewValue() {
    this.props.passValue(this.state.secretName);
  }

  render() {
    return (
      <React.Fragment>
        <p>Name </p>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.onChange}
        />
        <p>Secret Name </p>
        <input
          type="text"
          value={this.state.secretName}
          name="secretName"
          onChange={this.onChange}
        />
        <button onClick={() => this.props.passValue(this.state.secretName)}>
          Pass Me
        </button>
        <p>Super Power</p>
        <input
          type="text"
          value={this.state.superPowers}
          name="superPowers"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default ClassComponent;
