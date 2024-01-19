import { Welcome } from "./welcome";
import { createRoot } from "react-dom/client"

const WelcomeUser = <Welcome name = "June" age = {26} />

const rootElement = document.getElementById ('root')
const root = createRoot (rootElement)

root.render (WelcomeUser)
