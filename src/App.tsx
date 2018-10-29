import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from "./components/Home/Home";
import LoadTickets from "./components/LoadTickets/LoadTickets";
// import Sidebar from "./components/Layout/Sidebar/Sidebar";

export type Props = {
    classes?: any;
}

function Content(props: { classes: any }) {
    return <div>
        <Route exact path={"/"} component={Home} />
        {/*<Route exact path={"/reset"} component={Home} />*/}
        <Route exact path={"/load"} component={LoadTickets} />
    </div>;
}

class App extends React.Component<Props, {}> {

  public render() {

    const { classes } = this.props;
    return (
      <div className="App">
          {/*<div className="Sidebar">*/}
              {/*<Sidebar />*/}
          {/*</div>*/}
          <div className="Content">
              <Content classes={classes} />
          </div>

      </div>
    );
  }
}

export default App;
