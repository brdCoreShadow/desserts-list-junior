import { useState } from "react";
import * as SC from "./AppStyled";
import List from "./components/List/List";
import PaginationDashboard from "./components/PaginationDashboard/PaginationDashboard";

import Title from "./components/Title/Title";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

export const App: React.FC = () => {
  const [page, setPage] = useState(1);

  const nextPageHandler = () => setPage(page + 1);
  const prevPageHandler = () => setPage(page - 1);

  return (
    <SC.AppStyled>
      <Header>
        <Title />
      </Header>
      <SharedLayout>
        <List />
        <PaginationDashboard next={nextPageHandler} prev={prevPageHandler} page={page}/>
      </SharedLayout>
    </SC.AppStyled>
  );
};

export default App;
