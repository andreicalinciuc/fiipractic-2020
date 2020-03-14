import React from 'react';

class PrimaryButton extends React.Component{

    render(){
        const text = this.props.type;
        const bgColor = this.props.bgColor;
        const textColor = this.props.textColor;

        
        return <button  className="button" style={{backgroundColor:bgColor, color:textColor}}>
           {text}
        </button>;
    }
}

export default PrimaryButton;