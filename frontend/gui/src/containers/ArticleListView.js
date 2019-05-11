import React, { Component } from "react";
import Articles from "../components/Article";
import axios from "axios";
import CustomForm from "../components/Form";

export default class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <h2>Create an article</h2>
        <CustomForm />
      </div>
    );
  }
}
