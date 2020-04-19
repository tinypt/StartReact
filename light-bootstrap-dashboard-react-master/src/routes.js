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
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";

import Buildings from 'views/Buildings.jsx';
import Brand from "views/Brand.jsx";
import Rooms from 'views/Rooms'
import ProblemDes from 'views/ProblemDes'
import Items from "views/Items.jsx";
import ItemTypes from "views/ItemTypes.jsx";
import sendProblem from "views/MobileSendProblem"
import confirmRequest from "views/ConfirmRequest"
import ContactPage from "views/ContactPage";

const dashboardRoutes = [
  {
    path: "/sendProblem",
    name: "Mobile Test",
    icon: "pe-7s-graph",
    component: sendProblem,
    layout: "/admin"
  },
  {
    path: "/confirmRequest",
    name: "Confirm Request",
    icon: "pe-7s-graph",
    component: confirmRequest,
    layout: "/admin"
  },
  {
    path: "/contactUs",
    name: "contact Us",
    icon: "pe-7s-graph",
    component: ContactPage,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/building",
    name: "Building",
    icon: "pe-7s-graph",
    component: Buildings,
    layout: "/admin"
  },
  {
    path: "/Rooms",
    name: "Room",
    icon: "pe-7s-graph",
    component: Rooms,
    layout: "/admin"
  },
  {
    path: "/ProblemDes",
    name: "Problem Descriptions",
    icon: "pe-7s-graph",
    component: ProblemDes,
    layout: "/admin"
  },
   { path: "/Brand",
    name: "Brand",
    icon: "pe-7s-ribbon",
    component: Brand,
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
    name: "Item Type",
    icon: "pe-7s-photo-gallery",
    component: ItemTypes,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
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
  // },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
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
