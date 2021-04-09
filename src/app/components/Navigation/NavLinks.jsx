import React from "react";
import Button from "../Button/Button";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";

function NavLinks({ links }) {
  return links.map(
    (item) => !item.hide && <LinkItem key={item.label} item={item} />
  );
}

const LinkItem = ({ item }) => {
  const { linkItem, linkItemActive } = useStyles();

  const location = useLocation();
  // const slug = location.pathname.split("/");
  const slug = location.pathname;
  const isActive = slug === item.to;
  const boxClassname = isActive ? linkItemActive : linkItem;

  return (
    <Button
      textColor={isActive ? "#fff" : "#999"}
      Icon={isActive ? item.icon : null}
      color="inherit"
      to={item.to}
      label={item.label}
      variant="text"
      key={item.to}
      disableRipple
      disableFocusRipple
    />
  );
};

export default NavLinks;

/**
 *         <Button
          color="inherit"
          textColor="#fff"
          to={item.to}
          label={item.label}
          variant="text"
          key={item.to}
          Icon={item.icon}
        />
 */
