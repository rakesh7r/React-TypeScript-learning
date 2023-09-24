type statusProps = {
    status : "loading" | "success" | "Error"
}
export const Status = (props: statusProps) => {
    return <h3>status - {props.status};</h3>
}