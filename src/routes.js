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
import TableList from "views/TableList/TableList.js";

import Linda from "views/Linda/Linda.js";
import FileManager from "views/FileManager/FileManager.js";
import AdminConfig from "views/AdminConfig/AdminConfig.js";
import DesignTemplate from "views/FileManager/DesignTemplate.js";
import Icons from "views/Icons/Icons.js";
import Home from "views/Home/Home.js";

import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import UploadEcomp from "views/FileManager/UploadEcomp";


const dashboardRoutes = [
 
  {
    path: "/home",
    name: "Home",
    rtlName: "home",
    icon: Language,
    component: Home,
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
    rtlName: "用户",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/adminconfig",
    name: "AdminConfig",
    rtlName: "config",
    icon: Person,
    component: AdminConfig,
    layout: "/admin"
  },
  {
    path: "/filemanager",
    name: "File Manager",
    rtlName: "App",
    icon: "content_paste",
    component: FileManager,
    layout: "/admin"
  },
  {
    path: "/uploadecomp",
    name: "Upload Ecomp",
    rtlName: "App",
    icon: "content_paste",
    component: UploadEcomp,
    layout: "/admin"
  },
  {
    path: "/createdesigntemplate",
    name: "Create Design Template",
    rtlName: "App",
    icon: "content_paste",
    component: DesignTemplate,
    layout: "/admin"
  },
  {
    path: "/design",
    name: "Design Template",
    rtlName: "App",
    icon: "content_paste",
    component: DesignTemplate,
    layout: "/admin"
  },  
  {
    path: "/linda",
    name: "Linda",
    rtlName: "haha",
    icon: LibraryBooks,
    component: Linda,
    layout: "/admin"
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "通知",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  
  }
];

export default dashboardRoutes;
