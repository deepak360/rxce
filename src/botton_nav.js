import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
// import MilitaryTechIcon from '@material-ui/icons/MilitaryTech';
import PortraitIcon from '@material-ui/icons/Portrait';
import { Icon, InlineIcon } from '@iconify/react';
import medalIcon from '@iconify-icons/mdi/medal';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<SportsEsportsIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<Icon icon={medalIcon} />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<PortraitIcon />} />
    </BottomNavigation>
  );
}
