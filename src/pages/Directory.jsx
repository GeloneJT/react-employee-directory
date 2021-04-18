import React, { Component } from "react";
import Form from "../components/Form/index";
import Table from "../components/Table/index";
import API from "../utils/API";

class Directory extends Component {
  state = {
    employeeAlpha: [],
    employeeZeta: [],
    search: "",
  };
  componentDidMount() {
    API.search().then((res) => {
      this.setState({
        employeeAlpha: res.data.results,
        employeeZeta: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });

    const empFilter = this.state.employeeZeta.filter((employee) => {
      return (
        employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({ employeeAlpha: empFilter });
  };
  handleSearch = (event) => {
    event.preventDefault();
    const empSearch = event.target.value;
    this.setState({
      search: empSearch,
    });
  };
  handleToggle = () => {
    const empSort = this.state.employeeAlpha.sort((a, b) => {
      return a.name.first.localeCompare(b.name.first);
    });

    this.setState({
      employeeAlpha: empSort,
    });
  };
  render() {
    return (
      <div>
        <h1>Directory</h1>
        <hr></hr>
        <Form
          search={this.state.search}
          handleInputChange={this.handleSearch}
        />
        <Table
          employeeList={this.state.employeeAlpha}
          search={this.handleSearch}
          toggle={this.handleToggle}
          sort={this.handleSort}
        />
      </div>
    );
  }
}
export default Directory;
