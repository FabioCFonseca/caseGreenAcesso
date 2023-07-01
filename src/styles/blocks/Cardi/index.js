import styled from "styled-components";

import { Title } from "./Title";
import { Specs } from "./Specs";
import { Image } from "./Image";
import { CardGrid } from "./CardGrid";

const Cardi = styled.div`
  border: 1px solid #800080;
  border-radius: 8px;
  padding: 16px;
  width: 150px;
  max-height: 300px; 
  overflow: hidden; 
  background: grey;
`

Cardi.Title = Title
Cardi.Specs = Specs
Cardi.Image = Image
Cardi.Grid = CardGrid

export default Cardi