import {
  Add,
  Contacts,
  DocumentScanner,
  Help,
  Info,
} from "@mui/icons-material";

const navbarLinks = [
  {
    url: "/about",
    icon: <Info />,
    label: "About",
  },
  {
    url: "/contact",
    icon: <Contacts />,
    label: "Contact",
  },
  {
    url: "/help",
    icon: <Help />,
    label: "Help",
  },
];

const sidebarLinks = [
  {
    url: "/posts",
    icon: <DocumentScanner />,
    label: "View Posts",
  },
  {
    url: "/posts/create",
    icon: <Add />,
    label: "Create Post",
  },
];

export { navbarLinks, sidebarLinks };
