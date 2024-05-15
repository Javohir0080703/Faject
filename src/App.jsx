import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Zayavka from "./components/Zayavka";
import Documents from "./pages/Documents";
import Reviews from "./pages/Reviews";
import AboutUs from "./pages/AboutUs";
import LastReporterDetail from "./pages/LastReporterDetail";
import BlogPage from "./pages/BlogPage";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
const App = () => {
  const [language, setLanguage] = useState("ru");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<MainLayout language={language} setLanguage={setLanguage} />}
      >
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/apply"
          element={<Zayavka language={language} setLanguage={setLanguage} />}
        />
        <Route path="/documents" element={<Documents language={language} setLanguage={setLanguage} />} />
        <Route path="/reviews" element={<Reviews language={language} setLanguage={setLanguage} />} />
        <Route path="/aboutus" element={<AboutUs language={language} setLanguage={setLanguage} />} />
        <Route path="/blog" element={<BlogPage language={language} setLanguage={setLanguage} />} />
        <Route path="/last_reporter/:id" element={<LastReporterDetail language={language} setLanguage={setLanguage} />} />
        <Route path="/contact" element={<Contacts language={language} setLanguage={setLanguage} />} />
        <Route path="/portfolio" element={<Portfolio language={language} setLanguage={setLanguage} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
