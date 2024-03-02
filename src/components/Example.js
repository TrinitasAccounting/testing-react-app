import NavBar from "./NavBar";

import { Outlet } from 'react-router-dom';


function Example() {
    return (
        <div>

            <NavBar />
            <Outlet />
            <h1>Example Component that we wanted to render</h1>
        </div>
    )
}

export default Example;