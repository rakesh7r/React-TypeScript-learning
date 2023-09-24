type greetTypes = {
    name: string
    messageCount?: number // ? indicates that the prop is optional and throws no error
    isLoggedIn: boolean
}
export const Greet = ({ name, messageCount, isLoggedIn }: greetTypes) => {
    return (
        <h1>
            {isLoggedIn
                ? `Hey ${name}! you've ${messageCount} unread notifications.`
                : "welcome guest"}
        </h1>
    )
}
