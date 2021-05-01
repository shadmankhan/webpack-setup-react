import React, { Fragment } from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Fragment>
        <h1>
          Hello {name}
        </h1>
      </Fragment>
    );
  }
}

export default App;