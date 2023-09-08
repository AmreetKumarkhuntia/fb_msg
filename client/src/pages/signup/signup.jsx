import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { url } from '../../const';
import Modal from '../../components/modal/index.jsx';
import { Button } from '@mui/material';

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState();

    const history = useHistory();

    if (rememberMe) {

    }

    const handleClick = () => {
        fetch(`${url}signup?name=${name}&email=${email}&password=${password}`,
            {
                method: 'POST',
            }
        ).then((res) =>
            res.json()).then((res) => {
                if (res.Error !== "None") {
                    window.alert(res.Error);
                }
                else {
                    window.alert("successfully signed up");

                    history.push('/login');
                }
            });
    };

    return (
        <div className="signup_login_container">
            <Modal >
                <div className='title-container'>
                    Create Account
                </div>
                <div className='form-container'>
                    {/* name container */}
                    <div className='form-title'>
                        Name
                    </div>
                    <div className='form-input'>
                        <input type="text" placeholder='UserName' onChange={(e) => (setName(e.target.value))}></input>
                    </div>
                    {/* Email container */}
                    <div className='form-title'>
                        Email
                    </div>
                    <div className='form-input'>
                        <input type="email" placeholder='example@gmail.com' onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                    </div>
                    {/* Password container */}
                    <div className='form-title'>
                        Password
                    </div>
                    <div className='form-input'>
                        <input type="password" placeholder='password' onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className='remember-container'>
                    <input type="checkbox" onChange={(e) => {
                        setRememberMe(e.target.checked);
                    }} />
                    <span>
                        Remember Me
                    </span>
                </div>
                <div className='button-container'>
                    <Button variant="contained" onClick={handleClick}> Sign Up </Button>
                </div>
                <div className='link-container'>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </Modal>
        </div>
    )
}

export default SignUp;