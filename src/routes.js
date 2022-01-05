/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Fun from "views/FileManager/Sing.js";
import TableList from "views/TableList/TableList.js";

import Linda from "views/Linda/Linda.js";
import Images from "views/FileManager/Images.js";
import AdminConfig from "views/AdminConfig/AdminConfig.js";
import DataGrid1 from "views/FileManager/DataGrid1.js";
import Icons from "views/Icons/Icons.js";
import Home from "views/Home/Home.js";

import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";


import Career from "views/Career/Career.js";


const dashboardRoutes = [
 
  {
    path: "/home",
    name: "Welcome 欢迎",
    rtlName: "home",
    icon: Language,
    component: Home,
    layout: "/admin"
  },
  {
    path: "/career",
    name: "Career",
    rtlName: "career",
    icon: "content_paste",
    component: Career,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Travel",
    rtlName: "maps",
    icon: "content_paste",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/fun",
    name: "Singing",
    rtlName: "sing",
    icon: Person,
    component: Fun,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "模板",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Setting",
    rtlName: "App",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/adminconfig",
    name: "AdminConfig",
    rtlName: "App",
    icon: Person,
    component: AdminConfig,
    layout: "/admin"
  },
  {
    path: "/images",
    name: "Images",
    rtlName: "App",
    icon: "content_paste",
    component: Images,
    layout: "/admin"
  },
  
  
  {
    path: "/design",
    name: "Data Grid",
    rtlName: "datagrid",
    icon: "content_paste",
    component: DataGrid1,
    layout: "/admin"
  },  
  {
    path: "/linda",
    name: "Quick Reference",
    rtlName: "haha",
    icon: LibraryBooks,
    component: Linda,
    layout: "/admin"
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "App",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  
  }
];

export default dashboardRoutes;
