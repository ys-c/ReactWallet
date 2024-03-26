import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    }
    const goAddTransaction = () => {
        navigate("/addtransaction");
    }
    const goSettings = () => {
        navigate("/settings");
    }
    return (
        <div className='bottom-bar'>
            <IconButton className='bottom-bar-button' variant="outlined" size='large' onClick={() => goHome()}> <HomeIcon /></IconButton>
            <IconButton className='bottom-bar-button' variant="outlined" size='large' onClick={() => goAddTransaction()}> <AddCircleIcon /></IconButton>
            <IconButton className='bottom-bar-button' variant="outlined" size='large' onClick={() => goSettings()}> <SettingsIcon /></IconButton>
        </div>
    );
}

export default BottomBar;