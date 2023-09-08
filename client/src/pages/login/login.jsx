import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/features/userSlice';
import { useHistory } from 'react-router-dom';

import { url } from '../../const';
import Modal from '../../components/modal/index.jsx';
import { Button } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);

    const loggedin = useSelector((state) => state.user.login ? true : false);
    const currentUser = useSelector((state) => state.user.name);

    let history = useHistory();
    const dispatch = useDispatch();

    const update = (e) => {
        dispatch(updateUser(e));
    }

    const handleClick = () => {

        fetch(`${url}login?email=${email}&password=${password}`, {
            method: 'GET',
        }).then(
            res => {
                console.log(res.headers);
                return res.json()
            }).then(
                (res) => {
                    if (res.Login) {
                        update({
                            email: res.email,
                            name: res.name,
                            facebookId: res.facebookId,
                            pageName: res.pageName,
                            accessToken: res.accessToken,
                            status: res.status,
                            login: true,
                        });
                        console.log(res)
                        window.alert("Logged In");
                        history.push("/fbconnect")
                    }
                    else {
                        window.alert(res.Error);
                    }
                });

    }

    return (
        <div className="signup_login_container">
            <Modal >
                {
                    !loggedin ? (<>
                        <div className='title-container'>
                            Login to your account
                        </div>
                        <div className='form-container'>
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
                            <Button variant="contained" onClick={handleClick}> Login </Button>
                        </div>
                        <div className='link-container'>
                            New to MyApp? <a href="signup"> Sign Up</a>
                        </div>
                    </>) : (<>
                        <div className='title-container'>
                            You are logged in with {currentUser}
                        </div>
                    </>)

                }
            </Modal>
        </div>
    )
}

export default Login;