import React from 'react'
import ReactDOM from 'react-dom';

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                dffdbdf
            </div>
        </div>, document.getElementById('modal')
    );
};

export default Modal
