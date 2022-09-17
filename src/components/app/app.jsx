import GridContainer from "../grid/grid-container";
import Welcome from "../welcome";
import Contact from "../contact";
import Skills from "../skills";

import Data from "../../data/info.json";

function App() {
  const { welcome, contact, skills } = Data;

  return (
    <GridContainer>
      <Welcome data={welcome} />
      <Contact data={contact} />
      <Skills data={skills} />
    </GridContainer>
  );
}

export default App;
