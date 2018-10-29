import * as React from 'react';
// import logo from './logo.svg';
import logo from 'src/images/PO-logo.png'
import './Home.css';

interface IProps {
}

interface IState {
}

class Home extends React.Component<IProps, IState> {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to Plasticomnium</h1>
            </header>
        )
    }
}

export default Home;