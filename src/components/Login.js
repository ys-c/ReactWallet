import TopBar from './common/TopBar';
import './common/styles.css'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <TopBar banner="ReactWallet" />
            <div className=" login-container">
                <img src={require('./common/icons/logo.png')} />
                <div className='login-text-container'>
                <form>
                    <input
                        type="email"
                        required
                        placeholder='Email Address'
                        value={email} />
                    <input
                        type="text"
                        required
                        placeholder="Password"
                        value={password} />       
                </form>
                <button> login</button>
                </div>

            </div>
        </div>
    );
}
export default Login;