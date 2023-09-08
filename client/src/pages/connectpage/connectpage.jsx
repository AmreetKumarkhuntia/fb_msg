import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { updateUser } from "../../store/features/userSlice";
import { url } from "../../const";
import Modal from "../../components/modal";
import { Button } from "@mui/material";

const ConnectPage = () => {
    const dispatch = useDispatch();
    const [connected, setConnected] = useState(useSelector(state => state.user.status === "connected" ? true : false));
    const name = useState(useSelector(state => state.user.pageName));
    const email = useSelector((state) => state.user.email);

    const history = useHistory();

    if (!useSelector(state => state.user.login)) {
        history.push("/login");
    }

    const update = (res) => {
        dispatch(updateUser(res));
    }

    const handleConnect = () => {
        fetch(`${url}facebook/login?email=${email}`).then(res => res.json()).then(res => {
            window.location.href = res.LoginURL;
        });
    }

    const handleDelete = () => {
        fetch(`${url}facebook/logout?email=${email}`, {
            method: "DELETE",
        }).then(res => res.json()).then((res) => {
            update(res);
            console.log(res);
            if (res.status === "not connected") {
                setConnected(false);
            }
        })
    };

    return (
        <div className="facebook-connectpage-container">
            <Modal>
                <div className="title">
                    Facebook Page Integration
                </div>
                {
                    connected ? (<div>
                        <div className="body">
                            Integrated Page:
                            <span className="title">
                                {name}
                            </span>
                        </div>
                        <div className="btn-containers">
                            <Button className="danger" variant="contained" onClick={handleDelete}>Delete Integration</Button>
                            <Button variant="contained" onClick={() => {
                                history.push("/home");
                            }}>Reply to messages</Button>
                        </div>
                    </div>) : (<>
                        <Button variant="contained" onClick={handleConnect}>Connect Page</Button>
                    </>)
                }
            </Modal>
        </div>
    )
}

export default ConnectPage;