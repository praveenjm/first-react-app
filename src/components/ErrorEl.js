import { useRouteError } from "react-router-dom";

const ErrorEl = () => {
    const err = useRouteError();
    console.log(err)
    return  (
        <div>
            <h1>Oops!!</h1>
            <p>Something went wrong</p>
            <p>{err.statusText}</p>
            <p>{err.data}</p>
        </div>
    )
}

export default ErrorEl;