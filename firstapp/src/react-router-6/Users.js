import { useParams } from "react-router-dom"

const Users = () => {
    const params = useParams()
    const { id } = params;
    return (
        <>
            <h1>
                this is my page {id}
            </h1>
        </>
    )
}

export default Users;