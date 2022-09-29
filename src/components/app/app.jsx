import GridContainer from "../grid/grid-container";
import Welcome from "../welcome";
import Contact from "../contact";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Recommendations from "../recommendations";
import Menu from "../menu";

import Data from "../../data/info.json";

function App() {
  const { welcome, contact, skills, portfolio, recommendations } = Data;

  return (
    <GridContainer>
      <Welcome data={welcome} />
      <Contact data={contact} />
      <Skills data={skills} />
      <Portfolio data={portfolio} />
      <Recommendations data={recommendations} />
      <Menu />
    </GridContainer>
  );
}

export default App;
