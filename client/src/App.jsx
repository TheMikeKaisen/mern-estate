import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import CreateListing from "./pages/CreateListing"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/sign-in" element = {<SignIn />} />
        <Route path="/sign-up" element = {<SignUp />} />
        <Route path="/about" element = {<About />} />

        {/* profile page will only be available if the user is signed in. Otherwise, even if someone tried to access the profile page, he will be directed to the sign in page. Here, Profile page is the outlet of PrivateRoute page */}
        <Route element = {<PrivateRoute />} >
          <Route path="/profile" element = {<Profile />} />
          <Route path="/create-listing" element = {<CreateListing />} />
        </Route>

      </Routes>

    </BrowserRouter>

  )
}
