import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Loader = lazy(() => import("./components/Loader.jsx"));
const Home = lazy(() => import("./components/Home/Home"));
const Footer = lazy(()=>import("./components/Home/Footer/Footer.jsx"))
const NotFound = lazy(()=>import("./components/Home/NotFound.jsx"))
const Navbar = lazy(()=>import("./components/Home/Navbar/Navbar.jsx"))
const Register = lazy (()=>import("./components/auth/Register.jsx"))
const ForgottenPassword = lazy (()=>import("./components/auth/ForgottenPassword.jsx"))
const ChangePassword = lazy (()=>import("./components/auth/ChangePassword.jsx"))
const Login = lazy (()=>import("./components/auth/Login.jsx"))
const About = lazy(() => import("./components/About/About.jsx"));
const Contact = lazy(() => import("./components/contact/Contact.jsx"));
const AllCourses = lazy(() => import("./components/AllCourses/AllCourses.jsx"));
const RequestNewCourses = lazy(() => import("./components/AllCourses/RequestNewCourses.jsx"));
const CourseDetaiLPage = lazy(() => import("./components/AllCourses/CourseDetaiLPage.jsx"));
const Profile= lazy(() => import("./components/Profile/Profile.jsx"));
const UpdateProfile= lazy(() => import("./components/Profile/UpdateProfile.jsx"));
const Subscribe= lazy(() => import("./components/payment/Subscribe.jsx"));
const PaymentSuccess= lazy(() => import("./components/payment/PaymentSuccess.jsx"));
const PaymentFail= lazy(() => import("./components/payment/PaymentFail.jsx"));
const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback ={<Loader/>}>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/all-courses" element={<AllCourses/>}/>
            <Route path="/courses/:id" element={<CourseDetaiLPage/>}/>

            <Route path="*" element ={<NotFound/>}/>
            {/* Auth */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgot-password" element={<ForgottenPassword/>}/>
            <Route path="/change-password" element={<ChangePassword/>}/>
            {/* Profile */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/update-profile" element={<UpdateProfile/>}/>
            {/* courses */}
            <Route path="/request-new-course" element={<RequestNewCourses/>}/>

            {/* Payment */}
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/payment-success" element={<PaymentSuccess/>}/>
            <Route path="/payment-fail" element={<PaymentFail/>}/>



          </Routes>
          <Footer/>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
