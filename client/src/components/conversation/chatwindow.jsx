import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField } from '@mui/material';

const ChatWindow = () =>{


    return(
        <div className="chatwindow-container">
            <div className="chatwindowtop_container">
                <div className="username">Amit RG</div>
            </div>
            <div className="chatwindowmiddle_container">
                <div className="messagebox_container">
                    <div className="accountcicleicon">
                        <AccountCircleIcon fontSize="large"/>
                    </div>
                    <div className="messagebox">Is it in the stock right now?</div>
                </div>
                <div className="time_container">Amit RG - Mar 05, 2:22 AM</div>
                
                <div className="messagebox_container_right">
                    <div className="messagebox">Only 3 are left!</div>
                    <div className="accountcicleicon">
                        <AccountCircleIcon fontSize="large"/>
                    </div>
                </div>
                <div className="time_container_right">Amit RG - Mar 05, 2:25 AM</div>
            </div>
            <div className="chatwindowbottom_container">
                <TextField id="outlined-basic" label="Message Hiten Saxena" variant="outlined" />
            </div>
        </div>
    )
}



export default ChatWindow;