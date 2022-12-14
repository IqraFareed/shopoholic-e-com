import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../Context/ui";
const AppbarDesktop = ({ matches }) => {
  const { setShowSearch } = useUIContext();
  return (
    <AppbarContainer>
      <AppbarHeader>Shop Yeh</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={() => setShowSearch(true)} />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
