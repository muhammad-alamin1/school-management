import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllRegisterData from "./Components/Admin/AllRegisterData/AllRegisterData";
import EditSingleUserInfo from "./Components/Admin/AllRegisterData/EditSingleUserInfo";
import DashboardPanel from "./Components/Admin/DashboardPanel/DashboardPanel";
import AddNotice from "./Components/Admin/Notice/AddNotice";
import EditNotice from "./Components/Admin/Notice/EditNotice";
import NoticeInfo from "./Components/Admin/Notice/NoticeInfo";
import ProfileInformation from "./Components/Admin/RegisterUserProfileData/ProfileInformation";
import StudentAdmission from "./Components/Admin/StudentAdmission/StudentAdmission";
import StudentAdmissionInfo from "./Components/Admin/StudentAdmission/StudentAdmissionInfo";
import AddTeacher from "./Components/Admin/Teacher/AddTeacher";
import EditTeacherInfo from "./Components/Admin/Teacher/EditTeacherInfo";
import TeachersInformation from "./Components/Admin/Teacher/TeachersInformation";
import AddTopStudent from "./Components/Admin/TopStudent/AddTopStudent";
import TopStudentInfo from "./Components/Admin/TopStudent/TopStudentInfo";
import AdminRoute from "./Components/Auth/AdminRoute/AdminRoute";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/Auth/PublicRoute/PublicRoute";
import AccountingNineTen from "./Components/Components/Course/Class10/Accounting";
import BiologyNineTen from "./Components/Components/Course/Class10/Biology";
import ChemistryNineTen from "./Components/Components/Course/Class10/Chemistry";
import EnglishFirstNineTen from "./Components/Components/Course/Class10/EngFirst";
import EnglishGrammarNineTen from "./Components/Components/Course/Class10/EngSec";
import FinanceBankingNineTen from "./Components/Components/Course/Class10/FInanceBanking";
import HigherMathNineTen from "./Components/Components/Course/Class10/HigherMath";
import ICTNineTen from "./Components/Components/Course/Class10/ICT";
import MathNineTen from "./Components/Components/Course/Class10/Math";
import PhysicsNineTen from "./Components/Components/Course/Class10/Physics";
import ScienceNineTen from "./Components/Components/Course/Class10/Science";
import SpokenEnglishNineTen from "./Components/Components/Course/Class10/SpokenEng";
import Bangla from "./Components/Components/Course/Class6/Bangla";
import EngGrammar6 from "./Components/Components/Course/Class6/EngGrammar";
import English from "./Components/Components/Course/Class6/English";
import ICT6 from "./Components/Components/Course/Class6/ICT";
import Mathematics from "./Components/Components/Course/Class6/Mathematics";
import Science from "./Components/Components/Course/Class6/Science";
import SpokenEng from "./Components/Components/Course/Class6/SpokenEng";
import Bangla7 from "./Components/Components/Course/Class7/Bangla";
import EngGrammar7 from "./Components/Components/Course/Class7/EngGrammar";
import English7 from "./Components/Components/Course/Class7/English";
import ICT7 from "./Components/Components/Course/Class7/ICT";
import Mathematics7 from "./Components/Components/Course/Class7/Mathematics";
import Science7 from "./Components/Components/Course/Class7/Science";
import SpokenEng7 from "./Components/Components/Course/Class7/SpokenEng";
import EnglishGrammar8 from "./Components/Components/Course/Class8/EngGrammar";
import English8 from "./Components/Components/Course/Class8/English";
import ICT8 from "./Components/Components/Course/Class8/ICT";
import Mathematics8 from "./Components/Components/Course/Class8/Mathematics";
import Science8 from "./Components/Components/Course/Class8/Science";
import SpokenEng8 from "./Components/Components/Course/Class8/SpokenEng";
import AccountingSSC from "./Components/Components/Course/SSCCandidate/Accounting";
import BiologySSC from "./Components/Components/Course/SSCCandidate/Biology";
import ChemistrySSC from "./Components/Components/Course/SSCCandidate/Chemistry";
import FinanceBankingSSC from "./Components/Components/Course/SSCCandidate/Finance&Banking";
import HigherMathSSC from "./Components/Components/Course/SSCCandidate/HigherMath";
import ICTSSC from "./Components/Components/Course/SSCCandidate/ICT";
import MathSSC from "./Components/Components/Course/SSCCandidate/Math";
import PhysicsSSC from "./Components/Components/Course/SSCCandidate/Physics";
import PageNotFound from "./Components/Error/PageNotFound";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import Home from "./Components/Pages/Home/Home";
import OurTeachers from "./Components/Pages/OurTeachersList/OurTeachers";
import Register from "./Components/Pages/Register/Register";
import SignIn from "./Components/Pages/SignIn/SignIn";
import TopStudent from "./Components/Pages/TopStudent/TopStudent";
import Class10 from "./Components/Students/OnlineCourse/Class10";
import Class6 from "./Components/Students/OnlineCourse/Class6";
import Class7 from "./Components/Students/OnlineCourse/Class7";
import Class8 from "./Components/Students/OnlineCourse/Class8";
import Class9 from "./Components/Students/OnlineCourse/Class9";
import SSCCandidate from "./Components/Students/OnlineCourse/SSCCandidate";
import CreateProfile from "./Components/Students/Profile/CreateProfile";
import EditProfile from "./Components/Students/Profile/EditProfile";
import Profile from "./Components/Students/Profile/Profile";

// https://demo.smart-school.in/admin/admin/dashboard

function App() {
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);
  // console.log(JSON.parse(user));

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/admin/all-register"
          element={
            <AdminRoute>
              <AllRegisterData />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/all-register/profile-data"
          element={
            <AdminRoute>
              <ProfileInformation />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/edit/student/:email"
          element={
            <AdminRoute>
              <EditSingleUserInfo />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/student/admission"
          element={
            <AdminRoute>
              <StudentAdmission />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/student/admission/info"
          element={
            <AdminRoute>
              <StudentAdmissionInfo />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/add-teacher/"
          element={
            <AdminRoute>
              <AddTeacher />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/teacher/information"
          element={
            <AdminRoute>
              <TeachersInformation />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/teacher/update/:id"
          element={
            <AdminRoute>
              <EditTeacherInfo />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/add-notice"
          element={
            <AdminRoute>
              <AddNotice />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/notice-info"
          element={
            <AdminRoute>
              <NoticeInfo />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/update/notice-info/:id"
          element={
            <AdminRoute>
              <EditNotice />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/student/add-top-student/"
          element={
            <AdminRoute>
              <AddTopStudent />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/student/top-student/all-information"
          element={
            <AdminRoute>
              <TopStudentInfo />
            </AdminRoute>
          }
        />

        {/* ==== Admin route end ==== */}

        {/* User route start */}
        <Route
          path="/dashboard/user/create-profile/"
          element={
            <PrivateRoute>
              <CreateProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/profile/"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard/user/update/profile/:email"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/"
          element={
            <PrivateRoute>
              <Class6 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/"
          element={
            <PrivateRoute>
              <Class7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/"
          element={
            <PrivateRoute>
              <Class8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-9/"
          element={
            <PrivateRoute>
              <Class9 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-10/"
          element={
            <PrivateRoute>
              <Class10 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/"
          element={
            <PrivateRoute>
              <SSCCandidate />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/mathematics"
          element={
            <PrivateRoute>
              <Mathematics />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/bangla"
          element={
            <PrivateRoute>
              <Bangla />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/english"
          element={
            <PrivateRoute>
              <English />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/science"
          element={
            <PrivateRoute>
              <Science />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/spoken-english"
          element={
            <PrivateRoute>
              <SpokenEng />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/english"
          element={
            <PrivateRoute>
              <English7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/bangla"
          element={
            <PrivateRoute>
              <Bangla7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/mathematics"
          element={
            <PrivateRoute>
              <Mathematics7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/science"
          element={
            <PrivateRoute>
              <Science7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/spoken-english"
          element={
            <PrivateRoute>
              <SpokenEng7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/mathematics"
          element={
            <PrivateRoute>
              <MathSSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/physics"
          element={
            <PrivateRoute>
              <PhysicsSSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/chemistry"
          element={
            <PrivateRoute>
              <ChemistrySSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/higher-math"
          element={
            <PrivateRoute>
              <HigherMathSSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/biology"
          element={
            <PrivateRoute>
              <BiologySSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/ict"
          element={
            <PrivateRoute>
              <ICTSSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/accounting"
          element={
            <PrivateRoute>
              <AccountingSSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/ssc-candidate/finance-&-banking"
          element={
            <PrivateRoute>
              <FinanceBankingSSC />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/finance-&-banking"
          element={
            <PrivateRoute>
              <FinanceBankingNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/accounting/"
          element={
            <PrivateRoute>
              <AccountingNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/ict/"
          element={
            <PrivateRoute>
              <ICTNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/biology/"
          element={
            <PrivateRoute>
              <BiologyNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/physics/"
          element={
            <PrivateRoute>
              <PhysicsNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/chemistry/"
          element={
            <PrivateRoute>
              <ChemistryNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/higher-math/"
          element={
            <PrivateRoute>
              <HigherMathNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/spoken-english/"
          element={
            <PrivateRoute>
              <SpokenEnglishNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/science/"
          element={
            <PrivateRoute>
              <ScienceNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/general-math/"
          element={
            <PrivateRoute>
              <MathNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/english-grammar/"
          element={
            <PrivateRoute>
              <EnglishGrammarNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/9-10/english-first-paper/"
          element={
            <PrivateRoute>
              <EnglishFirstNineTen />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/ict/"
          element={
            <PrivateRoute>
              <ICT8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/mathematics/"
          element={
            <PrivateRoute>
              <Mathematics8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/english-grammar/"
          element={
            <PrivateRoute>
              <EnglishGrammar8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/english-first-paper/"
          element={
            <PrivateRoute>
              <English8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/spoken-english/"
          element={
            <PrivateRoute>
              <SpokenEng8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-8/science/"
          element={
            <PrivateRoute>
              <Science8 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/ict/"
          element={
            <PrivateRoute>
              <ICT7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-7/english-grammar/"
          element={
            <PrivateRoute>
              <EngGrammar7 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/ict/"
          element={
            <PrivateRoute>
              <ICT6 />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/user/online-course/class-6/english-grammar/"
          element={
            <PrivateRoute>
              <EngGrammar6 />
            </PrivateRoute>
          }
        />

        {/* User route end */}

        {/* Public route */}
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/our-teachers" element={<OurTeachers />} />
        <Route path="/our-student" element={<TopStudent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
