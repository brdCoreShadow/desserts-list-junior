import * as SC from "./AppStyled"
import List from "./components/List/List";

import Title from "./components/Title/Title";
import Header from "./layouts/Header/Header";
import { SharedLayout } from "./layouts/SharedLayout/SharedLayoutStyled";

function App() {
  return (
    <SC.AppStyled>
      <Header>
        <Title/>
      </Header>
      <SharedLayout>
        <List/>
      </SharedLayout>
    </SC.AppStyled>
  );
}

export default App;
