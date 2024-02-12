import "./styles/App.scss";
import {
  ContactPage,
  HomePage,
  HomeTour,
  UserLogIn,
  NotFound,
  PropertyDetailGallery,
  QuestionnaireLandingPage,
  ShopPage,
  AddPropertyPage,
} from "./views";
import {
  ChatBotButton,
  Navbar,
  QStepper,
  RecommendationPostCard,
  Footer,
  ScrollToTop,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { salesPosts } from "./assets/constansts";
import PropertyDetail from "./views/PropertyDetail";
import NewPropertyPost from "./components/dashboard/user/NewPropertyPost";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { fetchPostsData, get_loggedIn_user } from "backend";
import LogInPage from "views/UserLogIn";
import LogIn from "views/LogInPage";
import SignUp from "views/SignUpPage";
import { useAuth } from "hooks/useAuth";
import ProtectedRoute from "views/ProtectedRoute";

function App() {
  const { isLoggedIn, setIsLoggedIn, setUserData } = useAuth();

  useEffect(() => {
    async function fetchUser() {
      const data = await get_loggedIn_user();
      setUserData(data.DATA.user);
      setIsLoggedIn(data.DATA.user ? true : false);
      
    }

    fetchUser();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* <ScrollToTop /> */}
        <Navbar />
        {/* <ChatBotButton /> */}
        {/* <UserLogIn /> */}
        <Routes>
          <Route
            path="/login"
            element={<LogIn />}
          />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AddPropertyPage />
              </ProtectedRoute>
            }
          />

          {/* {isLoggedIn ? (
            <Route path="/" element={<AddPropertyPage />} />
          ) : (
            <>
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </>
          )} */}

          {/* Not found route */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
