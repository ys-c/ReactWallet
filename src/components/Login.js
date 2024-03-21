import TopBar from './common/TopBar';
import './common/styles.css'
import { useState } from 'react';
import { Button, FormControl, Input, FormLabel} from '@mui/joy';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <TopBar banner="ReactWallet" />
            <div className="middle-main-container">
                <div className='center'>
                    <img src={require('./common/icons/logo.png')} width={250} height={250} alt="walletLogo" />
                </div>
                <div className='login-text-container'>
                    <FormControl>
                        <FormLabel sx={{mt: 1}}>Username: </FormLabel>
                        <Input
                            size="lg"
                            type="username"
                            required
                            placeholder='Username'
                            margin='normal'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                         <FormLabel sx={{mt: 2}}>Password: </FormLabel>
                        <Input
                            size="lg"
                            type="password"
                            required
                            placeholder='Password'
                            margin='normal'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button size="lg" variant="solid" sx={{m:2}}>Login</Button>
                </div>

            </div>
        </div>
    );
}
export default Login;