import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops</h1>
            <h3>Something Went Wrong</h3>
            <h3>{err.status}</h3>
        </div>
    )
}

export default Error;