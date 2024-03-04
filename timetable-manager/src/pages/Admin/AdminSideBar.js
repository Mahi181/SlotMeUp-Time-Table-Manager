import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,

} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const p = useParams();
  console.log(p);


  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#5c2d01">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin Portal
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" iconShape="square">
          <CDBSidebarMenu>
            <NavLink exact to={`/admin/AdminHome/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to={`/admin/staff/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Staff</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to={`/admin/student/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Student</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to={`/admin/profile/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Your Profile</CDBSidebarMenuItem>
            </NavLink>


          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          <CDBSidebarMenuItem icon="GrLogout">Log-out</CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default AdminSidebar;