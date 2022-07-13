import '../../styles/header.modules.scss';

import {AppBar, Toolbar, Typography} from "@mui/material";
import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between", backgroundColor:"rgba(38,38,38,0.95)" }}>
          <Typography>Lekař</Typography>
          <MdAddShoppingCart size={25} className="icon"/>
        </Toolbar>

      </AppBar>
    </div>
  );
}

export default Header;