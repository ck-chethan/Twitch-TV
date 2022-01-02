import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends React.Component {

    renderInput({input, label}){
        //return (<input onChange={formProps.input.onChange} value={formProps.input.val}/>);
        //This can be written using shortcut
        //return (<input {...formProps.input} />);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    render(){
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter a Title"/>
                <Field name="description" component={this.renderInput} label="Enter a Description"/>
            </form>
        );
    };
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
