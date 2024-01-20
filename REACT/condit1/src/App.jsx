import { Welcome } from "./Welcome"

export function App() {
    const myName = "June"
    return(
    <div>
        <Welcome name = {myName} />
    </div>
    )
}