// components/Admin.js
import React from "react";
import Sidebar from "./SideBar";
//import DashboardContent from "./DashBoardContent";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
//import Navbar from "../Components/Navbar/Navbar";\
import "../App/App.css";
import UserManage from "./UserManage";

import UpdateProfilePage from "./UpdateProfile";
import HotelRoomManager from "./RoomManage";
import CreateRoom from "./CreateRoom";
import UpdateRoom from "./UpdateRoom";

const Admin = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Switch>
        <div className="content-container">
          <Route path="/admin/user" component={UserManage} />
          <Route path="/admin/rooms" component={HotelRoomManager} />
          <Route path="/admin/createRoom" component={CreateRoom} />
          <Route path="/admin" component={UserManage} exact />
          <Route path="/admin/update/:id" component={UpdateProfilePage} />
          <Route path="/admin/updateRoom/:id" component={UpdateRoom} />
        </div>
      </Switch>
    </div>
  );
};

export default Admin;
