import { useNavigate } from "react-router-dom";

const UseNavigate = () => {
    const navigate = useNavigate();

    const gotToPage = (url) => {
        navigate(url)
    }
    return (
        <div>
            <button onClick={() => gotToPage("/about")}>go to about</button>
            <button onClick={() => gotToPage("/contact")}>go to contact</button>
        </div>
    )
}

export default UseNavigate;