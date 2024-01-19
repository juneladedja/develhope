import { HelloWorld } from "./hello";
import { createRoot } from "react-dom/client"

const HelloWorldElement = <HelloWorld /> 

const rootElement = document.getElementById ('root')
const root = createRoot (rootElement)
root.render (HelloWorldElement)