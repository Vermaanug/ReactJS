import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";

const User = (props) => {

    const {name , Location } = props;
    const [count , setcount] = useState(0);
    return (
        <div className="user-card">
            <div className="user-pic">
            <img src="%"/>
            </div>
            <div className="user-info">
                <h1>Count : {count}</h1>
                <button onClick={() => {
                    setcount(count + 1)
                }}>increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {Location}</h3>
                <h4>Contact: @Anurag</h4>
            </div>
        </div>
    );
}

export default User;