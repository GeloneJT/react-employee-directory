import React from "react";
import axios from "axios";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=25&nt=us").then((res) => {
      console.log(res);
      this.setState({ users: res.data.results });
    });
  }

  handleInputChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Email</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
