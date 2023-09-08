import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';

import Avatar from '../avatar/avatar';

const UserProfile = () => {


    return (
        <div className="userprofile-container">
            <div className="userprofiletop_container">
                <div className="userprofiletop_section1">
                    <Avatar name="Amit" url="" />
                </div>
                <div className="userprofiletop_section2">Amit RG</div>
                <div className="userprofiletop_section3">Offline</div>
                <div className="userprofiletop_section4">
                    <div className='userprofile_buttons'>
                        <div className='callbutton'>
                            <Button variant='outlined'>
                                <CallIcon className='logo' /> Call
                            </Button>
                        </div>
                        <div className='profilebutton'>
                            <Button variant='outlined'>
                                <AccountCircleIcon className='logo' /> Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="userprofilebottom_container">
                <div className='details'>
                    <div className="title">Customer details</div>
                    <div className='description'>
                        <span className="subtitle">Email</span>
                        <span className='body'>test@gmail.com</span>
                    </div>
                    <div className='description'>
                        <span className="subtitle">First Name</span>
                        <span className='body'>Amit</span>
                    </div>
                    <div className='description'>
                        <span className="subtitle">Last Name</span>
                        <span className='body'>RG</span>
                    </div>
                    <div className='more'>
                        <a href="www.google.com">View More Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default UserProfile;