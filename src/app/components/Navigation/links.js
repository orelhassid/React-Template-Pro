import HomeIcon from "@material-ui/icons/Home";
import PostsIcon from "@material-ui/icons/Feedback";
import AccountIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import { HOME_RT, ACCOUNT_RT, LOGOUT_RT, POSTS_RT } from "../../config/routes";

function getLinks(user, status) {
  return [
    {
      label: "Home",
      to: HOME_RT,
      icon: <HomeIcon />,
    },
    {
      label: "Posts",
      to: POSTS_RT,
      icon: <PostsIcon />,
    },
    {
      label: user.name,
      to: ACCOUNT_RT,
      icon: <AccountIcon />,
      hide: !status.isLogin,
    },
    {
      label: "Logout",
      to: LOGOUT_RT,
      icon: <LogoutIcon />,
      hide: !status.isLogin,
    },
  ];
}

function getDashboardLinks({ user, status, handleClick }) {
  return [
    {
      label: "Home",
      to: "/",
      icon: <HomeIcon />,
    },
    {
      label: "Account",
      icon: <AccountIcon />,
      onClick: () => handleClick("Account"),
      nested: [
        {
          label: "Settings",
          to: "/account/settings",
        },
      ],
    },
    {
      label: "Logout",
      icon: <LogoutIcon />,
      to: LOGOUT_RT,
    },
  ];
}

export default {
  getLinks,
  getDashboardLinks,
};
