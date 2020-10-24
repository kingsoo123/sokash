import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Headers from './Include/Header';
import Navs from './Include/Nav';
import  logo from '../logo-main.png';
import myaccount from './myAccount';
import {
 Root,
 Header,
 Nav,
 Content,
 Footer,
 presets,
} from 'mui-layout';
import { Route } from 'react-router-dom';

const baseTheme = createMuiTheme(); // or use your own theme;
const config = presets.createStandardLayout();

export default function Dashboard(props) { 
console.log(props)
return(
  <ThemeProvider theme={baseTheme}>
   <Root config={config}>
     <Header
       renderMenuIcon={open => 
        open ? (<ChevronLeft />) 
            : (<MenuRounded />)}
     >
       <img src={logo} height="40px" width="150px" ></img> <span></span>
       {/* <Headers /> */}
     </Header>
     <Nav
       renderIcon={collapsed =>
         collapsed ?( <ChevronRight /> ): (<ChevronLeft />)
       }
     >
       <Navs />
     </Nav>
     <Content>
     <Route exact path={`${props.match.path}`} component={myaccount}/>
     <Route exact path={`${props.match.path}/h`} component={myaccount}/>
     </Content>
     <Footer>
       footer
     </Footer>
   </Root>
  </ThemeProvider>
);
}
