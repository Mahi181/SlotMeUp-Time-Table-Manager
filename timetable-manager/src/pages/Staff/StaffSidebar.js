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

const StaffSidebar = () => {
  const p = useParams();
  console.log(p);


  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#5c2d01">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Staff Portal
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" iconShape="square">
          <CDBSidebarMenu>
            <NavLink exact to={`/staff/staffHome/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to={`/staff/timeTable/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage TimeTable</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to={`/staff/slotBook/${p.qid}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Arrange a Meeting</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to={`/staff/profile/${p.qid}`} activeClassName="activeClicked">
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

export default StaffSidebar;