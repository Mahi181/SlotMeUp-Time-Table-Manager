import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import StaffTimeTable from "./pages/Staff/StaffTimeTable";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import StudentPage from "./pages/StudentLogin";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import StaffPage from "./pages/StaffLogin";
import AdminPage from "./pages/AdminLogin";
import StudentSidebar from "./pages/Student/StudentSideBar";
import StaffProfile from "./pages/Staff/SatffProfile";
// import AdminHome from "./pages/Admin/AdminPage";
import StaffHome from "./pages/Staff/StaffPage";
import TeacherList from "./pages/Student/TeacherList";
import StudentHome from "./pages/Student/StudentPage";
import Sidebar from "./components/UI/Sidebar";
import AdminSidebar from "./pages/Admin/AdminSideBar";
// import DashBoard from "./pages/Admin/DashBoard";
import AddStaff from "./pages/Admin/AddStaff";
import AddStudent from "./pages/Admin/AddStudent";
import StaffSidebar from "./pages/Staff/StaffSidebar";
import PersonalProfile from "./pages/Student/PersonalProfile";

import './App.css'
import DashBoardDes from "./components/AdminComp/DashBoardDes";
import SearchStudent from "./pages/Staff/SearchStudent";
import TeacherTimeTable from "./pages/Student/TeacherTimetable";
import SlotBook from "./pages/Student/SlotBook";


function App() {
  const authctx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {!authctx.isLoggedIn && <HomePage />}
        </Route>

        {!authctx.isLoggedIn && (
          <Route path="/student">

            <StudentPage />

          </Route>
        )}
        {!authctx.isLoggedIn && (
          <Route path="/staff">
            < StaffPage />
          </Route>
        )}
        {!authctx.isLoggedIn && (
          <Route path="/admin">
            < AdminPage />

          </Route>
        )}

        <Route path="/admin/AdminHome/:qid">
          <div className="cont">

            <AdminSidebar></AdminSidebar>

            <DashBoardDes></DashBoardDes>
          </div>
        </Route>
        <Route path="/admin/staff/:qid" exact>
          <div className="cont">


            <AdminSidebar></AdminSidebar>


            <AddStaff></AddStaff>

          </div>
        </Route>
        <Route path="/admin/student/:qid" exact>
          <div className="cont">


            <AdminSidebar></AdminSidebar>

            <AddStudent></AddStudent>
          </div>
        </Route>
        <Route path="/admin/profile/:qid" exact>
          <div className="cont">

            <AdminSidebar></AdminSidebar>

            <UserProfile />
          </div>
        </Route>
        <Route path="/student/studentHome/:qid">
          {authctx.isLoggedIn &&
            <div className="cont">

              <StudentSidebar></StudentSidebar>

              <StudentHome></StudentHome>
            </div>}
        </Route>

        <Route path="/student/timeTable/:qid">
          {authctx.isLoggedIn &&
            <div className="cont">

              <StudentSidebar></StudentSidebar>

              <TeacherList></TeacherList>
            </div>}
        </Route>
        <Route path="/student/slotBook/:qid">
          {authctx.isLoggedIn &&
            <div className="cont">

              <StudentSidebar></StudentSidebar>
              <SlotBook></SlotBook>


            </div>}
        </Route>


        <Route path="/student/profile/:qid" exact>
          <div className="cont">

            <StudentSidebar></StudentSidebar>

            <PersonalProfile></PersonalProfile>
          </div>
        </Route>
        <Route path="/staff/staffHome/:qid">
          {authctx.isLoggedIn &&
            <div className="cont">

              <StaffSidebar></StaffSidebar>
              <StaffHome></StaffHome>
            </div>}
        </Route>
        <Route path="/staff/timeTable/:qid" exact>
          <div className="cont">

            <StaffSidebar></StaffSidebar>

            <StaffTimeTable></StaffTimeTable>
          </div>
        </Route>
        <Route path="/staff/slotBook/:qid" exact>
          <div className="cont">

            <StaffSidebar></StaffSidebar>

            <SearchStudent></SearchStudent>
          </div>
        </Route>
        <Route path="/staff/profile/:qid" exact>
          <div className="cont">

            <StaffSidebar></StaffSidebar>

            <StaffProfile></StaffProfile>
          </div>
        </Route>

        <Route path="/profile">
          {authctx.isLoggedIn &&
            <div className="cont">

              <Sidebar></Sidebar>
              <UserProfile />
            </div>}
          {!authctx.isLoggedIn && <Redirect to="/auth"></Redirect>}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
