/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Buildings from 'views/Buildings.jsx';
import Brands from "views/Brands.jsx";
import Rooms from "views/Rooms.jsx";
import Items from "views/Items.jsx";
import ItemTypes from "views/ItemTypes.jsx";
import ProblemDescription from "views/ProblemDescription.jsx";
import Status from "views/Status.jsx";
import Dashboard from "views/Dashboard.jsx";
import NotificationProblems from "views/NotificationProblems";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/Building",
    name: "Buildings",
    icon: "pe-7s-culture",
    component: Buildings,
    layout: "/admin"
  },
  {
    path: "/Room",
    name: "Rooms",
    icon: "pe-7s-wallet",
    component: Rooms,
    layout: "/admin"
  },
  {
    path: "/Brand",
    name: "Brands",
    icon: "pe-7s-ticket",
    component: Brands,
    layout: "/admin"
  },
  {
    path: "/Items",
    name: "Items",
    icon: "pe-7s-gift",
    component: Items,
    layout: "/admin"
  },
  {
    path: "/ItemTypes",
    name: "Item Types",
    icon: "pe-7s-photo-gallery",
    component: ItemTypes,
    layout: "/admin"
  },
  {
    path: "/ProblemDesc",
    name: "Problem Descriptions",
    icon: "pe-7s-note2",
    component: ProblemDescription,
    layout: "/admin"
  },
  {
    path: "/Status",
    name: "Status",
    icon: "pe-7s-tools",
    component: Status,
    layout: "/admin"
  },
  {
    path: "/NotificationProblems",
    name: "Notification Problems",
    icon: "pe-7s-tools",
    component: NotificationProblems,
    layout: "/admin"
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  }
  // ,
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // }
  // ,
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
