
import { Link, Outlet, useLocation } from "react-router-dom";
const Contact = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Contact page</h1><br /><br />
            <Link to="channel">channel</Link><br /><br />
            <Link to="blog">blog</Link><br /><br />
            <Link to="media" state={{ name: "avnish", city: "gwalior" }}>media</Link>
            <Outlet />
        </div>
    )
}

export default Contact;