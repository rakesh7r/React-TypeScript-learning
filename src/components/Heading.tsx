type HeadingType = {
    children: string
}
export const Heading = (props:HeadingType) => {
    return <h1>{props.children}</h1>
}