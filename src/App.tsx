import * as SC from "./AppStyled"

import Title from "./components/Title/Title";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <SC.AppStyled>
      <Header>
        <Title/>
      </Header>
    </SC.AppStyled>
  );
}

export default App;
