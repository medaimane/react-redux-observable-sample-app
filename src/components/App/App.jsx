import React from 'react';
import {connect} from 'react-redux';
import AuthActionCreators from "../../Auth/AuthActions";

import './App.css';

const mapStateToProps = (state, props) => ({
    ...state,
});

const mapDispatchToProps = {
    attemptLogin: payload => AuthActionCreators.attemptedLogin(payload)
};

const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

class App extends React.Component {
    state = {
        form: {
            username: '',
            password: '',
        },
    };

    attemptLogin = (e) => {
        this.props.attemptLogin({
            username: this.state.form.username,
            password: this.state.form.password,
        });
        e.preventDefault();
    };

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            },
        });
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.attemptLogin}>
                    <div>
                        <input type="text"
                               name="username"
                               placeholder={'Username'}
                               value={this.state.form.username || ''}
                               onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <input type="password"
                               name="password"
                               placeholder={'Password'}
                               value={this.state.form.password || ''}
                               onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value={'Login'}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const ConnectedComponent = connectToStore(App);

export default ConnectedComponent;
