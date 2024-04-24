import TopBar from './common/TopBar';
import './common/styles.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Button, FormControl, Input, FormLabel, IconButton } from '@mui/joy';
import { createUser } from '../api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Visibility, VisibilityOff } from "@mui/icons-material";
const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleShowPassword = () => {
        setShowPassword(!showPassword);

    };

    const handleRegister = () => {
        if (username === '' || password === '') {
            if (username === '') {
                toast.warning("username cannot be blank");
            }
            if (password === '') {
                toast.warning("password cannot be blank");
            }
        }
        else {
            const userCredentials = { "username": username, "password": password };
            createUser(userCredentials)
                .then((res) => {
                    toast.success("Successfully Registered. Please login");
                    navigate("/");
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                });
        }


    }
    const handleCancel = () => {
        navigate("/");

    }
    return (
        <div>
            <TopBar banner="Registration" showAmount="false" showLogOut="false" />
            <div className='center'>
                <img src={require('./common/icons/logo.png')} width={250} height={250} alt="walletLogo" />
            </div>
            <div className='register-text-container'>
                <FormControl>
                    <FormLabel sx={{ mt: 1 }}>Username: </FormLabel>
                    <Input
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
                        size="lg"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder='Password'
                        margin='normal'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endDecorator={<IconButton onClick={() => handleShowPassword()}> {showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>}
                    />
                </FormControl>
                <Button size="lg" variant="solid" sx={{ m: 2 }} onClick={() => handleRegister()}>Register</Button>
                <Button size="lg" variant="solid" sx={{ m: 2 }} onClick={() => handleCancel()}>Cancel</Button>
            </div>

        </div>
    );
}
export default RegisterPage;