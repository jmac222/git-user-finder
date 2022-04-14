import { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      search: "",
    };
  }

  async componentDidMount() {
    const { search } = this.state;

    let url = `https://api.github.com/users${search}`;
    let result = null;

    try {
      result = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }

    this.setState({ user: result.data });
  }
  async componentDidUpdate() {
    const { search } = this.state;

    let url = `https://api.github.com/users${search}`;
    let result = null;

    try {
      result = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }

    this.setState({ user: result.data });
  }

  render() {
    console.log(this.state.user);

    return (
      <div className="app">
        <div className="git">
          <div className="form">
            <h1>Search Github Users</h1>
            <input
              type="text"
              placeholder="Search github users..."
              onChange={(e) => {
                this.setState({ search: `/${e.target.value}` });
                console.log(this.state.search);
              }}
            />
          </div>
          <div
            className="account"
            onClick={(e) => {
              window.open(this.state.user.html_url);
            }}
          >
            <img src={this.state.user.avatar_url}></img>
            <h1>{this.state.user.login}</h1>
            <h2>{this.state.user.name}</h2>
            <h3>{this.state.user.bio}</h3>
            <p>Repositories: {this.state.user.public_repos}</p>
            <p>{this.state.user.created_at}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
