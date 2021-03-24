import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <form action="">
                    <input name="username" type="text" placeholder="Username"></input>
                    <input name="password" type="password" placeholder="Password"></input>
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;