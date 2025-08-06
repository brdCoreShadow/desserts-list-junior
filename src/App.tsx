import { useEffect, useState } from "react";
import * as SC from "./AppStyled";
import List from "./components/List/List";
import PaginationDashboard from "./components/PaginationDashboard/PaginationDashboard";

import Title from "./components/Title/Title";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { getAll } from "./utils/services";
import { AxiosResponse } from "axios";

export const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [desserts, setDesserts] = useState(null)
  const [totalPages, setTotalPages] = useState<number>(1);

  const nextPageHandler = () => setPage(page + 1);
  const prevPageHandler = () => setPage(page - 1);

  useEffect(() => {
    const fetchDesserts = async () => {
      const response: AxiosResponse | undefined = await getAll({page});
      if (response?.data) {
        setDesserts(response.data.data); // backend returns { data: rows, total, page, pages }
        setTotalPages(response.data.pages);

        console.log(response.data.data)
      }
    };

    fetchDesserts();
  }, [page]);



  return (
    <SC.AppStyled>
      <Header>
        <Title />
      </Header>
      <SharedLayout>
        {desserts && <List desserts={desserts}/>}
        <PaginationDashboard next={nextPageHandler} prev={prevPageHandler} page={page}/>
      </SharedLayout>
    </SC.AppStyled>
  );
};

export default App;
