import React from "react";
import {ViewMode} from "../App";

class ModeChoicer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const changeModeToLogin = () => this.props.changeMode(ViewMode.LOGIN);
        const changeModeToRegistration = () => this.props.changeMode(ViewMode.REGISTRATION);

        return (
            <div>
                <button onClick={changeModeToLogin}>Войти</button>
                <button onClick={changeModeToRegistration}>Зарегистрироваться</button>
            </div>
        );
    }
}

export default ModeChoicer;