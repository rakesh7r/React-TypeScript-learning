import { Name } from "./Person.types"

type listType = {
    names: Name[]
}
export const PersonList = (props: listType) => {
    return (
        <>
            <h1>PersonList</h1>
            {props.names.map((name) => {
                return (
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })}
        </>
    )
}
