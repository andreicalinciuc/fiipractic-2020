import React from 'react';
import PrimaryButton from './primaryButton';


class Header extends React.Component {

    render() {
        return <header>
            <div className="logo"> Logo</div>
            <div className="items-header">
                <PrimaryButton type="Primary" bgColor='green' ></PrimaryButton>
                <PrimaryButton type="Second" bgColor='#E1C71D' textColor="black"></PrimaryButton>
                <PrimaryButton type="Warning" bgColor='red'></PrimaryButton>
            </div>
        </header>;
    }
}

export default Header;