import React from "react";

class Phone extends React.Component{

    constructor(props){
        super(props);
        this.state = { text: props.text, isUpdateMod: false };

        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.changeUpdateMod = this.changeUpdateMod.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    removeItem(e){
        this.props.onRemove(this.state.text);
    }
    changeUpdateMod(e){
        const newMode = !this.state.isUpdateMod;
        this.setState({ isUpdateMod: newMode });
    }
    
    updateItem(e){
        let isUpdate = this.props.text !== this.state.text;
        if (isUpdate){
            this.props.onUpdate(this.props.text, this.state.text)
        } else {
            this.changeUpdateMod();
        }
    }
    onInputChange(e){
        this.setState({ text:e.target.value });
    }

    render(){
        const { title, button } = this.state.isUpdateMod ? 
            { 
                title: <b><input value={this.state.text} onChange={this.onInputChange}/></b>, 
                button: <button onClick={this.updateItem}>Сохранить</button>
            }
            : {
                title: <b>{this.state.text}</b>, 
                button: <button onClick={this.changeUpdateMod}>Редактировать</button>
            };

        return (
        <div>
            <p>
                { title }<br />
                <button onClick={this.removeItem}>Удалить</button> { button }
            </p>
        </div>);
    }
}

export default Phone;