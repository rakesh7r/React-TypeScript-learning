import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserTwo = () => {
    const context = useContext(UserContext)
    const handleLogin = () => {
        context.setUser({
            name: "Itachi",
            email: "Itachi@amaterasu.com",
        })
    }
    const handleLogout = () => {
        context.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>Name :{context.user?.name} </h2>
            <h2>Email : {context.user?.email} </h2>
        </div>
    )
}
