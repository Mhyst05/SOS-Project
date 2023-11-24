import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FormVolunteer = React.lazy(() => import("pages/FormVolunteer"));
const FormVolunteerSuccess = React.lazy(
  () => import("pages/FormVolunteerSuccess"),
);
const DetailDonationOne = React.lazy(() => import("pages/DetailDonationOne"));
const DetailHewandilindungiTwo = React.lazy(
  () => import("pages/DetailHewandilindungiTwo"),
);
const DetailDonation = React.lazy(() => import("pages/DetailDonation"));
const DetailVolunteer = React.lazy(() => import("pages/DetailVolunteer"));
const DetailHewandilindungi = React.lazy(
  () => import("pages/DetailHewandilindungi"),
);
const DetailDonationTwo = React.lazy(() => import("pages/DetailDonationTwo"));
const Articlelist = React.lazy(() => import("pages/Articlelist"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const Laporan = React.lazy(() => import("pages/Laporan"));
const SignupPage = React.lazy(() => import("pages/SignupPage"));
const ListHewandilindungi = React.lazy(
  () => import("pages/ListHewandilindungi"),
);
const Donation = React.lazy(() => import("pages/Donation"));
const Article = React.lazy(() => import("pages/Article"));
const Volunteer = React.lazy(() => import("pages/Volunteer"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const Navbar = React.lazy(() => import("pages/Navbar"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/article" element={<Article />} />
          <Route path="/donation" element={<Donation />} />
          <Route
            path="/listhewandilindungi"
            element={<ListHewandilindungi />}
          />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/articlelist" element={<Articlelist />} />
          <Route path="/detaildonationtwo" element={<DetailDonationTwo />} />
          <Route
            path="/detailhewandilindungi"
            element={<DetailHewandilindungi />}
          />
          <Route path="/detailvolunteer" element={<DetailVolunteer />} />
          <Route path="/detaildonation" element={<DetailDonation />} />
          <Route
            path="/detailhewandilindungitwo"
            element={<DetailHewandilindungiTwo />}
          />
          <Route path="/detaildonationone" element={<DetailDonationOne />} />
          <Route
            path="/formvolunteersuccess"
            element={<FormVolunteerSuccess />}
          />
          <Route path="/formvolunteer" element={<FormVolunteer />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
