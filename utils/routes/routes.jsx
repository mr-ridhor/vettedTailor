import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardMain from "../../src/components/Dashboard/DashboardMain";
import Profile from "../../src/components/Profiles/Profile";
import Transactions from "../../src/components/Profiles/Transactions";
import Application from "../../src/components/Dashboard/Application";
import ProfileHome from "../../src/components/Profiles/ProfileHome";
import Home from "../../src/components/Home";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<ProfileHome />}>
        <Route path="/profile" element={<Transactions />} />
      </Route>
      <Route path="/application" element={<Application />} />
    </Route>
  )
);
