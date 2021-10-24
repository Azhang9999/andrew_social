import React, { useState } from 'react';
import './App.css';
import Posts from './components/post.js'
import CreatePosts from './components/create_post'
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from '@material-ui/core/styles';



function App() {
    const [x, forceUpdate] = useState(0);
    const darkTheme = createMuiTheme({
        palette: {
            type: 'light',
        }
    });

    return (
        <React.Fragment>
            <MuiThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Posts uselessInt={x}/>
                <CreatePosts updatePost={forceUpdate} theme={darkTheme}/>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

export default App;
