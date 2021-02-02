import React from "react";
import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuHeader = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <NavBar active={active} setActive={setActive} />
      <Menu active={active} />
    </div>
  );
};
export default MenuHeader;
