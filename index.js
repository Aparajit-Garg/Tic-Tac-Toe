import ReactDom from "react-dom/client";
import Board from "./components/Board";

const App = () => {
    return (
        <Board />
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);
