import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import MyAccount from './myAccount';
import Headers from './Include/Header';
import Navs from './Include/Nav';
import  logo from '../logo-main.png';
import DashboardContent from './DashboardContent';
import LoanHistory  from './LoanHistoryPage';
import LoanCalculator from './LoanCalculatorPage';
import CopyrightIcon from '@material-ui/icons/Copyright';
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
//console.log(props)
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
     <Route exact path={`${props.match.path}/dashboard`} component={DashboardContent}/>
     <Route exact path={`${props.match.path}/loan-history`} component={LoanHistory}/>
     <Route exact path={`${props.match.path}/loan-calculator`} component={LoanCalculator} />
     <Route exact path={`${props.match.path}/`} component={MyAccount} />
     </Content>
     <Footer>
       <p style={{textAlign: 'center'}}><CopyrightIcon/> {(new Date().getFullYear())} | All rights reserved</p>
     </Footer>
   </Root>
  </ThemeProvider>
);
}
