import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';



const BottomBar = () => {
    return (
        <div className='bottom-bar'>
            <IconButton className='bottom-bar-button'  variant="outlined" size='large'> <HomeIcon/></IconButton>
            <IconButton className='bottom-bar-button'  variant="outlined"size='large'> <AddCircleIcon/></IconButton>
            <IconButton className='bottom-bar-button'  variant="outlined" size='large'> <SettingsIcon/></IconButton>
        </div>
    );
}

export default BottomBar;