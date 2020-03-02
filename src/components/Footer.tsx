import * as React from "react";
import styled from "styled-components";
import {Copyright} from "@material-ui/icons";

type Props = {

}

export default (props: Props) => {
  
  return (
    <div>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  )
}

