export type ProfilePropTypes = {
    name: string
}
export default function Profile({ name }: ProfilePropTypes) {
    return <div>Profile name : {name}</div>
}
