



const Modal = (props) =>{
    console.log(props)
    return(
        <>
            <div className="modal">
                {props.children}
            </div>
        </>
    )
}

export default Modal;