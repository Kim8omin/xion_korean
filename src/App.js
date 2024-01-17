import './App.css';
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import RouteChangeTracker from './AnalyTracker';
import Layout from "./components/main/layout";
import Contact from "./pages/contact";
import Location from "./pages/location";
import Main from "./pages/main";
import Error from "./pages/error";


function App() {
  RouteChangeTracker();
  
  return (
    <div className="app-container">
    {/*<Router>*/}
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route path="contact" element={<Layout><Contact /></Layout>} />
          <Route path="location" element={<Layout><Location /></Layout>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    {/*</Router>*/}
    </div>
  );
}

export default App;
