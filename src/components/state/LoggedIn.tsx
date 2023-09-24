import { useState } from "react"

type UserProps = {
    name: string
    email: string
}

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [user, setUser] = useState<null | UserProps>(null)
    const [user, setUser] = useState<UserProps>({} as UserProps) //type assertion 
    const handleLogIn = (status: boolean): void => {
        setIsLoggedIn(!status)
        setUser({
            name: "Rakesh",
            email: "rakesh@gmail.com",
        })
    }
    const handleLogOut = (status: boolean) => {
        setIsLoggedIn(!status)
    }
    return (
        <div>
            {isLoggedIn && (
                <div>
                    <h1>{user?.name}</h1>
                    <h2>{user?.email}</h2>
                </div>
            )}
            <h1>{isLoggedIn ? "Logged in" : "logged out"}</h1>
            <button
                onClick={() => {
                    isLoggedIn
                        ? handleLogOut(isLoggedIn)
                        : handleLogIn(isLoggedIn)
                }}
            >
                {isLoggedIn ? "Log in" : "Log out"}
            </button>
        </div>
    )
}
