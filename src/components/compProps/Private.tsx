import Login from "./Login"
import { ProfilePropTypes } from "./Profile"

type PrivatePropTypes = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfilePropTypes>
}

export default function Private({
    isLoggedIn,
    component: Component,
}: PrivatePropTypes) {
    return <div>{isLoggedIn ? <Component name="rakesh" /> : <Login />}</div>
}
