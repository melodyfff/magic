import { Routes, Route } from "react-router-dom";
import App from "./component/Home/App";
import Page1 from "./component/Page/index";
import Demo from "./component/Demo/index";

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}

export default RouterApp;