import React from "react";
import axios from "axios";
import { ReactComponent } from "*.svg";

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            users: [],
        }
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=25&nst=us").then((res) => {
            console.log(res);
            this.setState({users: res.data.results});
        })
    }

    render(){
        return (

        )
    }
}