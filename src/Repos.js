import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';

class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: []
        };
    }
    componentDidMount() {
        fetch('https://api.github.com/users/pro-react/repos')
            .then(response => response.json())
            .then(responseData => this.setState({ repositories: responseData }));
    }
    render() {
        let repos = this.state.repositories.map((repo) =>
            <li key={repo.id}>
                <Link to={"/repos/details/" + repo.name}>{repo.name}</Link>
            </li>
        );
        return (
            <div>
                <h1>Github REPOS</h1>
                <ul>{repos}</ul>
            </div>
        );
    }
}
export default Repos;