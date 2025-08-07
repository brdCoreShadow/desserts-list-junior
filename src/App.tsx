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
import Cart from "./components/Cart/Cart";
import { IItem } from "./utils/types";

export const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [desserts, setDesserts] = useState(null);
  const [orders, setOrders] = useState<Partial<IItem[]> | null>()
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nextPageHandler = () => setPage(page + 1);
  const prevPageHandler = () => setPage(page - 1);

  useEffect(() => {
    const fetchDesserts = async () => {
      setIsLoading(true);
      const response: AxiosResponse | undefined = await getAll({ page });
      if (response?.data) {
        setDesserts(response.data.data); 
        setTotalPages(response.data.pages);
      }
      setIsLoading(false); 
    };

    fetchDesserts();
  }, [page]);


  const handleOrder = (id:number, name:string, price:number) => {
    setOrders((prev) => [...prev, { id, name, price }]);
  };

  return (
    <SC.AppStyled>
      <Header>
        <Title />
      </Header>
      <SharedLayout>
        {isLoading && <Loading />}
        {desserts && <List desserts={desserts} handleOrder={handleOrder}/>}
        {!isLoading && <PaginationDashboard
          next={nextPageHandler}
          prev={prevPageHandler}
          page={page}
        />}
       {!isLoading && <Cart orders={orders}/>}
      </SharedLayout>
    </SC.AppStyled>
  );
};

export default App;
