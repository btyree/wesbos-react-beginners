import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class StorePicker extends React.Component {
  goToStore(event) {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    // 3. Change the page to /store/whatever-they-entered
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
