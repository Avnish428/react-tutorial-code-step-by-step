import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact";
import About from "./About"
import Users from "./Users"
import UseSearchParams from "./UseSearchParams";
import Channel from "./channel";
import Media from "./media";
import Blog from "./blog";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";

const Master = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/" element={<ProtectedRoutes Component={Home} />}></Route>
                    <Route path="/about" element={<ProtectedRoutes Component={About} />}></Route>
                    <Route path="/contact" element={<Contact />}>
                        <Route path="channel" element={<Channel />}></Route>
                        <Route path="media" element={<Media />}></Route>
                        <Route path="blog" element={<Blog />}></Route>
                    </Route>
                    <Route path="/user/:id" element={<Users />}></Route>
                    <Route path="/filter" element={<UseSearchParams />}></Route>
                    <Route path="/*" element={<h1> 404 page not found</h1>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;