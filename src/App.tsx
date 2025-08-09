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
import { CartOrderSummary, IItem } from "./utils/types";
import ConfirmWindow from "./components/ConfirmWindow/ConfirmWindow";
import Portal from "./components/Portal/Portal";

export const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [desserts, setDesserts] = useState(null);
  const [orders, setOrders] = useState<Partial<IItem>[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cartOrders, setCartOrders] = useState<CartOrderSummary | null>(null);

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

  const handleOrder = (id: number, name: string, price: number, image_url:string) => {
    setOrders((prev) => [...prev, { id, name, price, image_url }]);
  };

  useEffect(() => {
    const handleCartOrders = () => {
      console.log(orders);
      
      const summary = orders.reduce((acc, item) => {
        if (!item.name || item.price === undefined) return acc;

        if (!acc[item.name]) {
          acc[item.name] = {
            name: item.name,
            pic: item.image_url,
            quantity: 0,
            total: 0,
          };
        }

        acc[item.name].quantity += 1;
        acc[item.name].total += Number(item.price);

        return acc;
      }, {} as Record<string, { name: string; quantity: number; total: number }>);

      const result = Object.values(summary).map((item) => ({
        ...item,
        total: item.total.toFixed(2),
      }));

      const totalResult = result.reduce(
        (acc, { total }) => acc + Number(total),
        0
      );

      setCartOrders({ result, totalResult });
    };

    handleCartOrders();
  }, [orders]);

  const handleDelete = (name: string) => {
    if (!cartOrders) return;

    const filteredResult = cartOrders.result.filter((el) => el.name !== name);
    const newTotal = filteredResult.reduce(
      (acc, el) => acc + Number(el.total),
      0
    );

    setCartOrders({
      result: filteredResult,
      totalResult: newTotal,
    });
  };

  return (
    <SC.AppStyled>
      <Portal>
        <ConfirmWindow cartOrders={cartOrders} />
      </Portal>
      <Header>
        <Title />
      </Header>
      <SharedLayout>
        {isLoading && <Loading />}
        {desserts && <List desserts={desserts} handleOrder={handleOrder} />}
        {!isLoading && (
          <PaginationDashboard
            next={nextPageHandler}
            prev={prevPageHandler}
            page={page}
            totalPages={totalPages}
          />
        )}
        {!isLoading && (
          <Cart cartOrders={cartOrders} handleDelete={handleDelete} />
        )}
      </SharedLayout>
    </SC.AppStyled>
  );
};

export default App;
