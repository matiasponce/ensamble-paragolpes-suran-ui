import * as React from 'react';
import './LoadTickets.css';
import logo from 'src/images/PO-logo.png'
import {
    Button,
    Card,
    CardActions,
    CardContent, CardHeader,
    FormControl,
    Input,
    InputLabel,
} from '@material-ui/core';
import autobind from "autobind-decorator";

interface IProps {
}

interface IState {
    code: string
}

@autobind
// @ts-ignore
class LoadTickets extends React.Component<IProps, IState> {
    state = {
        code: '',
    };

    handleCodeChange = (event: any) => {
        //validate code
        let regexp = new RegExp('^[Pp][DdRrTt][0-9]+[Aa][Zz]$'),
        test = regexp.test(event.target.value);
        console.log(test);
        this.setState({code: event.target.value})
    };

    handleValidateCode = () => {
        let regexp = new RegExp('^[Pp][DdRrTt][0-9]+[Aa][Zz]$'),
        test = regexp.test(this.state.code);
        alert(test + "");
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Plasticomnium</h1>
                </header>
                <section>
                    <div>
                        <Card>
                            <CardHeader title={"CARGA DE CÓDIGO DE ETIQUETAS"}/>
                            <CardContent>
                                <form>
                                    <FormControl>
                                        <InputLabel required htmlFor='code' shrink>Código paragolpes</InputLabel>
                                        <Input id='code'
                                               value={this.state.code}
                                               onChange={this.handleCodeChange}
                                               type={'text'}
                                        />
                                    </FormControl>
                                </form>
                            </CardContent>
                            <CardActions>
                                <div>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={this.handleValidateCode}
                                    >
                                        CONSULTAR
                                    </Button>
                                </div>
                            </CardActions>

                        </Card>
                    </div>
                </section>
            </div>
        )
    }
}

export default LoadTickets;