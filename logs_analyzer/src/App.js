import "./App.css";
import AdminHome from "./AdminDashboard/page/AdminHome";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTable from "./SidebarActions/Users/page/UserTable";
import Logs from "./SidebarActions/Logs/page/Logs";
import Rules from "./SidebarActions/Rules/page/Rules";
import ProcessLogs from "./SidebarActions/Logs/page/ProcessLogs";
import ConfiquratorHome from "./ConfiquratorDashboard/page/ConfiquratorHome";
import ViewerHome from "./ViewerDashboard/page/ViewerHome";
import UploadHome from "./SidebarActions/UploadFile/page/UploadHome";
import ReportsHome from "./SidebarActions/Reports/page/ReportsHome";



//<AdminHome openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*     <Route path="/" element={<ReportsHome />} />*/} 
    <Route path="/admin" element={<AdminHome />} />
    <Route path="/admin/uploadfile" element={<UploadHome role="admin" />} />
    <Route path="/admin/users" element={<UserTable />} />
    <Route path="/admin/logs" element={<Logs role="admin" />} />
    <Route path="/admin/process-logs/:id" element={<ProcessLogs role="admin"/>} />
    <Route path="/admin/rules" element={<Rules role="admin" />} />
    <Route path="/admin/reports" element={<ReportsHome role="admin" />} />


    <Route path="/confiqurator" element={<ConfiquratorHome />} />
    <Route path="/confiqurator/uploadfile" element={<UploadHome role="confiqurator" />} />
    <Route path="/confiqurator/logs" element={<Logs role="confiqurator" />} />
    <Route path="/confiqurator/rules" element={<Rules role="confiqurator" />} />
    <Route path="/confiqurator/process-logs/:id" element={<ProcessLogs role="confiqurator"/>} />
    <Route path="/confiqurator/reports" element={<ReportsHome role="confiqurator" />} />

    <Route path="/viewer" element={<ViewerHome />} />
    <Route path="/viewer/reports" element={<ReportsHome role="viewer" />} />



    </Routes>
    </BrowserRouter>
  );
}

export default App;
