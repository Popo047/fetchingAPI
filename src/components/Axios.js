import axios from "axios";
import React, { Component } from "react";

class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          items: json,
          isLoaded: true,
        })
      )
      .catch((err) => console.error(err));
  };

  render() {
    var { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Axios;
