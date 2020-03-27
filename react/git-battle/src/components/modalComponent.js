import React from 'react';

class ModalTest extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <div className='modal'>

            <div className='input-modal'>
                <input id='input'></input>
            </div>
            <div className='contetent-input'>
                {this.props.children}
            </div>
            <div className='footer-modal'>
                <button>Submin</button>
                <button>Close</button>
            </div>

        </div>
    }
}

export default ModalTest