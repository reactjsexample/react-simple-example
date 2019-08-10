import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCounter: 0,
      myText: "starting value"
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleOnTextChange = this.handleOnTextChange.bind(this);
    this.handleClearText = this.handleClearText.bind(this);
  }

  handleIncrement() {
    // Best Practice: don't use this.state in setState, get state from the updater function
    this.setState(state => {
      return {
        myCounter: state.myCounter + 1
      };
    });
  }

  handleDecrement() {
    this.setState(state => {
      return {
        myCounter: state.myCounter - 1
      };
    });
  }

  handleOnTextChange(event) {
    this.setState({ myText: event.target.value });
  }

  handleClearText() {
    this.setState({ myText: "" });
  }

  render() {
    return (
      <div>
        <h1>react-simple-example</h1>
        <h2>My Counter = {this.state.myCounter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h2>My Text = {this.state.myText}</h2>
        <input
          type="text"
          value={this.state.myText}
          onChange={this.handleOnTextChange}
        />
        <button onClick={this.handleClearText}>Clear Text</button>
      </div>
    );
  }
}

export default App;
