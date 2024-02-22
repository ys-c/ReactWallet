import TopBar from './common/TopBar';
import './common/styles.css'
import { useState } from 'react';
import { TextField,Button } from '@mui/material';
import BottomBar from './common/BottomBar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <TopBar banner="ReactWallet" />
            <div className=" login-container">
                <img src={require('./common/icons/logo.png')} width={250} height={250} alt="walletLogo" />
                <div className='login-text-container'>
                    <form>
                        <TextField
                            type="username"
                            required 
                            label='Username'
                            margin='normal'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            type="password"
                            required
                            label='Password'
                            margin='normal'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </form>
                    <Button variant="contained">Login</Button>
                </div>

            </div>
            <BottomBar/>
        </div>
    );
}
export default Login;