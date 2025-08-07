import { useEffect, useState } from "react";
import * as SC from "./AppStyled";
import List from "./components/List/List";
import PaginationDashboard from "./components/PaginationDashboard/PaginationDashboard";

import Title from "./components/Title/Title";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { getAll } from "./utils/services";
import { AxiosResponse } from "axios";
import Loading from "./components/Loading/Loading";

export const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [desserts, setDesserts] = useState(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nextPageHandler = () => setPage(page + 1);
  const prevPageHandler = () => setPage(page - 1);

  useEffect(() => {
    const fetchDesserts = async () => {
      setIsLoading(true);
      const response: AxiosResponse | undefined = await getAll({ page });
      if (response?.data) {
        setDesserts(response.data.data); // backend returns { data: rows, total, page, pages }
        setTotalPages(response.data.pages);
      }
      setIsLoading(false); // ✅ only stop loading after data is processed
    };

    fetchDesserts();
  }, [page]);

  console.log(isLoading);

  return (
    <SC.AppStyled>
      <Header>
        <Title />
      </Header>
      <SharedLayout>
        {isLoading && <Loading />}
        {desserts && <List desserts={desserts} />}
        {!isLoading && <PaginationDashboard
          next={nextPageHandler}
          prev={prevPageHandler}
          page={page}
        />}
      </SharedLayout>
    </SC.AppStyled>
  );
};

export default App;
