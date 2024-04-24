import TopBar from './common/TopBar';
import './common/styles.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Button, FormControl, Input, FormLabel } from '@mui/joy';
import { login } from '../api'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ setAccessToken, setRefreshToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const authenicateUser = () => {
        if (username === '' || password === '') {
            if (username === '') {
                toast.error("username is blank");
            }
            if (password === '') {
                toast.error("password is blank");
            }
        }
        else {
            const userCredentials = { "username": username, "password": password };
            login(userCredentials)
                .then((res) => {
                    //console.log(res.data);
                    setAccessToken({ token: res.data["accessToken"] });
                    setRefreshToken({ token: res.data["refreshToken"] });
                    navigate("/home");
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                });
        }
    }

    const goRegister = () => {
        navigate("/register");
    }
    return (
        <div>
            <TopBar banner="ReactWallet" showAmount="false" showLogOut="false"/>
            <div className='center'>
                <img src={require('./common/icons/logo.png')} width={250} height={250} alt="walletLogo" />
            </div>
            <div className='login-text-container'>
                <FormControl>
                    <FormLabel sx={{ mt: 1 }}>Username: </FormLabel>
                    <Input
                        id='username'
                        size="lg"
                        type="username"
                        required
                        placeholder='Username'
                        margin='normal'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel sx={{ mt: 2 }}>Password: </FormLabel>
                    <Input
                        id='password'
                        size="lg"
                        type="password"
                        required
                        placeholder='Password'
                        margin='normal'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button size="lg" variant="solid" sx={{ marginTop: 2 }} onClick={() => authenicateUser()}>Login</Button>
                <div className='login-helper'>
                    <p>Do not have an account? Register here.</p>
                    <Button size="lg" variant="solid" onClick={() => goRegister()}>Register</Button>
                </div>


            </div>

        </div>
    );
}
export default Login;