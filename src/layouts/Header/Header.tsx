import * as SC from "./HeaderStyled"

import { IChild } from "@/utils/types";

const Header:React.FC<IChild> = ({children}) => {
    return ( 
        <SC.HeaderCon>{children}</SC.HeaderCon>
     );
}
 
export default Header;