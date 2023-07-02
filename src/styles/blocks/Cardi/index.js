import styled from "styled-components";

import { Title } from "./Title";
import { Specs } from "./Specs";
import { Image } from "./Image";
import { CardGrid } from "./CardGrid";
import { Button } from "./Button";

const Cardi = styled.div`
  border: 1px solid #800080;
  border-radius: 8px;
  padding: 16px;
  width: 150px;
  max-height: 300px; 
  overflow: hidden; 
  background: grey;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`

Cardi.Title = Title
Cardi.Specs = Specs
Cardi.Image = Image
Cardi.Grid = CardGrid
Cardi.Button = Button

export default Cardi