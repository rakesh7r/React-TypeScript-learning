type ListPropsType<T> = {
    list: T[]
    onClick: (value: T) => void
}

export const List = <T extends { id: number,first:string }>({
    list,
    onClick,
}: ListPropsType<T>) => {
    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.first} 
                    </div>
                )
            })}
        </div>
    )
}
