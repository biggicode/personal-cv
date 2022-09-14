import GridContainer from "../grid/grid-container";
import Welcome from "../welcome";
import Contact from "../contact";

import Data from "../../data/info.json";

function App() {
  const { welcome, contact } = Data;

  return (
    <GridContainer>
      <Welcome data={welcome} />
      <Contact data={contact} />
    </GridContainer>
  );
}

export default App;
