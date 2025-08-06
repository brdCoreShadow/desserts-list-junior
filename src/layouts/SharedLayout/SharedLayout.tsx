import * as SC from "./SharedLayoutStyled"

import { IChild } from "@/utils/types";

const SharedLayout:React.FC<IChild> = ({children}) => {
    return ( 
        <SC.SharedLayoutCon>
            {children}
        </SC.SharedLayoutCon>
     );
}
 
export default SharedLayout;