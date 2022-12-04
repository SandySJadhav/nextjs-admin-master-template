import { HiFolderOpen, HiHome } from "react-icons/hi";

export const MENUS = [
  {
    label: "Dashboard",
    url: "/",
    icon: <HiHome className="h-5 w-5" />,
  },
  {
    label: "Components",
    icon: <HiFolderOpen className="h-5 w-5" />,
    items: [
      {
        label: "Buttons",
        url: "/buttons",
      },
    ],
  },
];
