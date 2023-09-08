import ConversationComponent from './conversationComponent';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';

const Conversation = () => {


    return (
        <div className="conversation-container">
            <div className="conversationtop-container">
                <div className='menuicon'>
                    <Button style={{ color: "black" }}>
                        <MenuIcon />
                    </Button>
                </div>
                <div className="title">Conversations</div>
                <div className='refreshicon'>
                    <Button style={{ color: "black" }}>
                        <RefreshIcon />
                    </Button>
                </div>
            </div>
            <div className="conversationbottom-container" onClick={(e) => {
                console.log(e.target);
            }}>
                <ConversationComponent active={true} />
                <ConversationComponent active={false} />
            </div>

        </div>
    )
}



export default Conversation;