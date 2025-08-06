import { IPagination } from "@/utils/types";
import * as SC from "./PaginationDashboardStyled"



const PaginationDashboard:React.FC<IPagination> = ({next, prev, page}) => {
    return ( 
        <SC.PaginationDashboardCon>
            <button type="button" onClick={prev} disabled={page === 1 ? true : false}>Prev</button>
            <button type="button" onClick={next}>Next</button>
        </SC.PaginationDashboardCon>
     );
}
 
export default PaginationDashboard;