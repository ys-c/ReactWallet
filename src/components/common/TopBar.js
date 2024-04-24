import './styles.css'
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const TopBar = (props) => {
    const banner= props.banner;
    const showAmount = props.showAmount;
    const showLogOut = props.showLogOut;
    const handleLogout= props.handleLogout;
    const navigate = useNavigate();

    const exit = () =>{
        handleLogout();
        toast.success("Log Out Successful");
        navigate("/");

    }
    return(
        <div className="top-bar">
            {
                showLogOut === 'true' ? <div className='logout-button'><IconButton variant="outlined" onClick={()=>exit()} > <LogoutIcon color="info" style={{ fontSize: 40 }} /></IconButton></div> : ""
            }

            {
                showAmount === 'true' ?  <h2> Final Balance: </h2> : ""
            }
            <h1>{banner}</h1>
        </div>

    );
}
export default TopBar;