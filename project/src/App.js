import React from "react";
import ModeChoicer from "./views/ModeChoicer";
import RegistrationForm from "./views/RegistrationForm";
import LoginForm from "./views/LoginForm";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { viewMode: ViewMode.CHOICE }

        this.changeMode = this.changeMode.bind(this);
    }

    changeMode(viewMode) {
        if (ViewMode[viewMode]){
            this.setState({ viewMode: viewMode})
        }
    }

    render() {
        const getContentByViewMode = (viewMode) => {
            switch (viewMode) {
                
                case ViewMode.CHOICE:
                    return <ModeChoicer changeMode={this.changeMode}/>;
    
                case ViewMode.REGISTRATION:
                    return <RegistrationForm/>;
    
                case ViewMode.LOGIN:
                    return <LoginForm/>;
            }
        }

        const content = getContentByViewMode(this.state.viewMode);

        return (
            <div>
                {content}
            </div>
        );
    }
}

export const ViewMode = {
    CHOICE: "CHOICE",
    REGISTRATION: "REGISTRATION",
    LOGIN: "LOGIN",
};

export default App;
