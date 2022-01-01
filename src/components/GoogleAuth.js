import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '207515321484-phvq2d8jjb0geiuh4dstd0i0fqti9rd5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return (<div>Don't know the sign in status</div>);
        } else if(this.state.isSignedIn === true){
            return (<div>Signed in</div>);
        } else {
            return (<div>Not signed in</div>)
        }
    }

    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth