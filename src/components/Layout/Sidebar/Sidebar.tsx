import * as React from 'react';
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import { Props, State } from "./types";
import { withRouter } from "react-router-dom";

const drawerWidth = 240;

const styles = require('./Sidebar.css')

const _styles = (theme: Theme): StyleRules => ({
    // toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        height: '100%',
        overflowY: 'hidden',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class Sidebar extends React.Component<Props, State> {

    state: State = {
        mobileOpen: false,
        anchorEl: null,
    };

    handleDrawerToggle = () => {
        this.setState((state: any) => ({ mobileOpen: !state.mobileOpen }));
    };

    isUserLogged = () => {
        return !!sessionStorage.getItem('user');
    };

    render() {
        const { classes, theme } = this.props;

        if (!this.isUserLogged()) {
            return null;
        }

        const drawerContent = (
            <div>
                <List>
                </List>
            </div>
        );

        return (
            <div className={styles.container}>

                <Hidden mdUp className={styles.drawerContainer}>
                    <Drawer
                        variant='temporary'
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </Hidden>

                <Hidden smDown implementation='css' className={styles.drawerContainer}>
                    <Drawer
                        variant='permanent'
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        className={styles.drawer}
                    >
                        {drawerContent}
                    </Drawer>
                </Hidden>

            </div>
        );
    }
}

export default withRouter(withStyles(_styles, { withTheme: true })(Sidebar));