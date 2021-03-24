import React from "react";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <form action="">
                    <input name="username" type="text" placeholder="Username"></input>
                    <input name="password" type="password" placeholder="Password"></input>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;