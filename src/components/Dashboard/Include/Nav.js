

        
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import LocalConvenienceStoreOutlinedIcon from '@material-ui/icons/LocalConvenienceStoreOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    // maxWidth: 360,
    backgroundColor: "#007945",
    color: '#ffffff'
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
       
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          component={Link} to="/account"
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
        <ListItem
          component={Link} to="/account/dashboard"
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <HomeOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          component={Link} to="/account/loan-history"
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <HistoryOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Loan History" />
        </ListItem>
        <ListItem
          component={Link} to="/account/loan-calculator"
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <LocalConvenienceStoreOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Loan Calculator" />
        </ListItem><ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <WorkOutlineOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="About SoftKash" />
        </ListItem><ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <PostAddOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Recent News" />
        </ListItem><ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <CallOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem><ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <ContactSupportOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
        </ListItem><ListItem
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <FeedbackOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Submit Feedback" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 9}
          onClick={(event) => handleListItemClick(event, 9)}
        >
          <ListItemIcon>
            <GroupAddOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Refer and earn" />
        </ListItem>
        <ListItem
          component={Link} to="/"
          button
          selected={selectedIndex === 10}
          onClick={(event) => handleListItemClick(event, 10)}
        >
          <ListItemIcon>
            <ExitToAppOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
      <Divider />
      {/* <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
      </List> */}
    </div>
  );
}
