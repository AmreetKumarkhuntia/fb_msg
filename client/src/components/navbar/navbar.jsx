import Avatar from "../avatar/avatar";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Navbar = () =>{


    return(
        <div className="navbar-container">
            <div className="top-container">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dke9xzbl6/image/upload/v1694091011/msngr/richpanel-logo_dccekg.png" alt="imag"></img>
                </div>
                <div className="logo active">
                    <InboxIcon className="image inbox" style={{color: "#1e4d91"}} />
                </div>
                <div className="logo">
                    <PeopleIcon className="image people" />
                </div>
                <div className="logo">
                    <ShowChartIcon className="image show-chart"/>
                </div>
            </div>

            <div className="bottom-container">
                <Avatar url="" name="Amit"></Avatar>
            </div>
        </div>
    )
}



export default Navbar;