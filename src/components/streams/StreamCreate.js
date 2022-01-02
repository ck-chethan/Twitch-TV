import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends React.Component {

    renderError({error, touched}) {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        //converting it to render function because we don't know what the value of this in many instances.
        //return (<input onChange={formProps.input.onChange} value={formProps.input.val}/>);
        //This can be written using shortcut
        //return (<input {...formProps.input} />);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter a Title"/>
                <Field name="description" component={this.renderInput} label="Enter a Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter a description'
    }
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);
