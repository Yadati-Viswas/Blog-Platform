import { useContext } from "react"
import NavigationContext from "../Context/NavigationContext"

function Route({path, children}) {
    const {currentPath} = useContext(NavigationContext);

    if(currentPath === path) {
        return children;
    } else {
        return null;
    }
}

export default Route;