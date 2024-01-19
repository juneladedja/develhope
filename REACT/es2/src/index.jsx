import { Message } from "./day";
import { createRoot } from "react-dom/client"; // SI SCRIVE SEMPRE ! Se no non esce niente in pagina 

const Day = <Message />

const rootElement = document.getElementById ('root')
const root = createRoot (rootElement)
root.render (Day)