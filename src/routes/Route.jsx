// --------- import external dependencies ----------
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "../screens/Contact";

// --------- import screen component with lazy load ----------
const Home = lazy(() => import("../screens/Home"));
const About = lazy(() => import("../screens/About"));
const Team = lazy(() => import("../screens/Team"));
const News = lazy(() => import("../screens/News"));
const Blog = lazy(() => import("../screens/Blog"));

// const Contact = lazy(() => import("../screens/Contact"));

function AppRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/blog/:id" element={<Blog />} />

          {/* <Route exact path="/contact" element={<Contact/>} />  */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRoute;
