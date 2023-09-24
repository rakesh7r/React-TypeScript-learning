type InputTypes = {
    value: string 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    styles: React.CSSProperties
}
export const Input = (props: InputTypes) => {
    return (
        <input
            type="text"
            value={props.value}
            onChange={(event) => props.handleChange(event)}
            style={props.styles}
        />
    )
}
