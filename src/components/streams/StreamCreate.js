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

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter a Title"/>
                <Field name="description" component={this.renderInput} label="Enter a Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
