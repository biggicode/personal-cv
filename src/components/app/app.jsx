import GridContainer from "../grid/grid-container";
import Welcome from "../welcome";
import Contact from "../contact";
import Skills from "../skills";
import Portfolio from "../portfolio";

import Data from "../../data/info.json";

function App() {
  const { welcome, contact, skills, portfolio } = Data;

  return (
    <GridContainer>
      <Welcome data={welcome} />
      <Contact data={contact} />
      <Skills data={skills} />
      <Portfolio data={portfolio} />
    </GridContainer>
  );
}

export default App;
