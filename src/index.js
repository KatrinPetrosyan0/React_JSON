import React, { Component } from "react";
import { render } from "react-dom";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      default:
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Demo1 />}
        <hr />
        {showHideDemo2 && <Demo2 />}
        <hr />
      
        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click to show/hide Demo1 component
          </button>
          
          <button onClick={() => this.hideComponent("showHideDemo2")}>
            Click to show/hide Demo2 component
          </button>

        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
