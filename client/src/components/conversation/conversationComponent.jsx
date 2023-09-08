
const ConversationComponent = (props) =>{
    console.log(props.active)    

    return(
        <div className={props.active?"conversationComponent_container active":"conversationComponent_container"}>
            <div className="section1">
                <input type="checkbox" className='checkbox'></input>
                <div className="body">
                    <div className="name">Amit RG</div>
                    <div className="conversationType">Facebook DM</div>
                </div>
                <div className="time">10m</div>
            </div>
            
            <div className="section2">Awesome Product</div>
            <div className="section3">Hey There!</div>
        </div>
    )
}



export default ConversationComponent;