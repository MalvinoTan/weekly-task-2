import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

/** Styles */
import "./App.css";

/** Components */
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import IntroductionReact from "./pages/IntroductionReact";
import ReactFundamental from "./pages/ReactFundamental";
import ReactRouting from "./pages/ReactRouting";
import EventHandling from "./pages/EventHandling";
import ReactHooks from "./pages/ReactHooks";
import ReactForm from "./pages/ReactForm";
import Redux from "./pages/Redux";
import Testing from "./pages/Testing";
import Deployment from "./pages/Deployment";
import IntroductionAlgorithm from "./pages/IntroductionAlgorithm";

const App = () => {
  return (
    <>
      <Header title="Malvino (Kelas A - ReactJS)" />

      <div className="wrapper">

        <SideBar />

        <Routes>
          <Route path="/" element={<IntroductionReact />} />
          <Route path="/introduction-react" element={<IntroductionReact />} />
          <Route path="/react-fundamental" element={<ReactFundamental />} />
          <Route path="/react-routing" element={<ReactRouting />} />
          <Route path="/event-handling" element={<EventHandling />} />
          <Route path="/react-hooks" element={<ReactHooks />} />
          <Route path="/react-form" element={<ReactForm />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/deployment" element={<Deployment />} />
          <Route path="/introduction-algorithm" element={<IntroductionAlgorithm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
