// import { useContext } from "react";
// import NavigationContext from "../Context/NavigationContext";

function Link ({ to, children, className }) {
    // const {navigate} = useContext(NavigationContext);

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        // navigate(to);
    };

    return(
        <a onClick={handleClick} href={to} className={className} >{children}</a>
    );
}

export default Link;