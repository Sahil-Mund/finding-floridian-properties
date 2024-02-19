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
import UserListingTermsAndConditions from "views/UserListingTermsAndConditions";
import { getAllProperties } from "backend/hasura-api";
import { postCardDetails } from "assets/data";
import { useProperty } from "hooks/useProperties";

function App() {
  const { isLoggedIn, setIsLoggedIn, setUserData, token } = useAuth();
  const { properties, updateProperties } = useProperty();

  useEffect(() => {

    async function fetchData() {
      // Fetch all properties
      try {
        const properties = await getAllProperties();
        updateProperties(properties);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
  
      // Fetch user data if token exists
      if (token) {
        try {
          const data = await get_loggedIn_user();
          setUserData(data.DATA?.user);
          setIsLoggedIn(data.DATA.user ? true : false);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    }
  
    fetchData();


    // const properties = getAllProperties();
    // updateProperties(properties);

    // async function fetchUser() {
    //   const data = await get_loggedIn_user();
    //   setUserData(data.DATA?.user);
    //   setIsLoggedIn(data.DATA.user ? true : false);
    // }

    // if (token) {
    //   fetchUser();
    // }
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
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AddPropertyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/properties"
            element={<RecommendationPostCard data={properties} />}
          />
          <Route
            path="/user-listing-tnc"
            element={<UserListingTermsAndConditions />}
          />
           <Route path="/property-details" element={<PropertyDetail />} />
          <Route
            path="/property-details/gallery"
            element={<PropertyDetailGallery />}
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
