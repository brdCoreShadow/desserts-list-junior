import * as SC from "./SharedLayoutStyled"

import { IChild } from "@/utils/types";

const SharedLayout:React.FC<IChild> = ({children}) => {
    return ( 
        <SC.SharedLayout>
            {children}
        </SC.SharedLayout>
     );
}
 
export default SharedLayout;