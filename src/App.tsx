import { useState } from "react"
import "./App.css"
import { Greet } from "./components/Greet"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/OscarWinner"
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"
import { Button } from "./components/events/Button"
import { Input } from "./components/events/Input"
import { Counter } from "./components/state/Counter"
import { LoggedIn } from "./components/state/LoggedIn"
import { Box } from "./components/context/Box"
import { UserContextProvider } from "./components/context/UserContext"
import { UserTwo } from "./components/context/UserTwo"
import DomRef from "./components/refs/DomRef"
import Profile from "./components/compProps/Profile"
import Private from "./components/compProps/Private"
import { List } from "./components/generics/List"

function App() {
    const personDetails = { first: "Rakesh", last: "Gandla" }
    const nameList = [
        { first: "Itachi", last: "Uchiha" },
        { first: "Naruto", last: "Uzumaki" },
        { first: "Kakashi", last: "Hatake" },
    ]
    const [input, setInput] = useState<string>("")
    return (
        <div className="App">
            <Greet name="Rakesh Gandla" messageCount={15} isLoggedIn={true} />
            <Person name={personDetails} />
            <PersonList names={nameList} />
            <Status status="loading" />
            <Oscar>
                <Heading>Oscar winner is Leonardo Decaprio!</Heading>
            </Oscar>
            <Button
                handleClick={(event, id) => {
                    console.log({ event, id })
                }}
            />
            <Input
                value={input}
                handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(event.target.value)
                }}
                styles={{ color: "red", padding: "0.4rem", height: 30 }}
            />
            <LoggedIn />
            <Counter />
            <Box />
            <UserContextProvider>
                <UserTwo />
            </UserContextProvider>
            <DomRef />
            <Private component={Profile} isLoggedIn={true} />
            {/* <List
                list={[
                    "Plain Eye",
                    "Sharingan",
                    "mangekyo sharingan",
                    "rinnegan",
                    "byakugan",
                    "ketsuryugan",
                    "Jogan",
                ]}
                onClick={(value) => console.log(value)}
            />
            <List
                list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onClick={(value) => console.log(value)}
            /> */}
            <List
                list={[
                    {id:1, first: "Itachi", last: "Uchiha" },
                    {id:2, first: "Naruto", last: "Uzumaki" },
                    {id:3, first: "Kakashi", last: "Hatake" },
                ]}
                onClick={(value) => console.log(value)}
            />
        </div>
    )
}

export default App
