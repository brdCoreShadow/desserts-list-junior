import { IChild } from "@/utils/types";
import ReactDOM from "react-dom";

const Portal:React.FC<IChild> = ({children}) => {
    const portalRoot = document.getElementById("portal-confirmed");
    if (!portalRoot) return null;

    return ReactDOM.createPortal(children, portalRoot)
}
 
export default Portal;