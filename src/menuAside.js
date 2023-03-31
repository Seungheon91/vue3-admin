import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
} from "@mdi/js";

export default [
  {
    to: "/",
    icon: mdiMonitor,
    label: "견적신청",
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    label: "파트너 관리",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
/*   {
    to: "/",
    label: "Tables",
    icon: mdiTable,
  },
  {
    to: "/",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/",
    label: "Profile",
    icon: mdiAccountCircle,
  }, */
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  /* {
    to: "/",
    label: "Error",
    icon: mdiAlertCircle,
  }, */
  
];
