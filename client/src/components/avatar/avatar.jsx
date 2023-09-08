const Avatar = (props) => {


    return (
        <div className="avatar-container">
            <span className="avatar">{props.name[0]}</span>
        </div>
    )
}

export default Avatar;