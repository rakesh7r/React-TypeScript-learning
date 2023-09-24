import { PersonProps } from "./Person.types"

export const Person = ({ name: { first, last } }: PersonProps) => {
    return (
        <h2>
            {first} {last}
        </h2>
    )
}
