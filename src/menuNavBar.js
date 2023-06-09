import {
/*   mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop, */
  mdiAccount,
  mdiCogOutline,
  mdiLogout,
  mdiThemeLightDark,
} from "@mdi/js";

export default [
   /* {
    icon: mdiMenu,
    label: "Sample menu",
    menu: [
      {
        icon: mdiClockOutline,
        label: "Item One",
      },
      {
        icon: mdiCloud,
        label: "Item Two",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiCrop,
        label: "Item Last",
      },
    ],
  },  */
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "/",
      },
      {
        icon: mdiCogOutline,
        label: "Settings",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true,
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
