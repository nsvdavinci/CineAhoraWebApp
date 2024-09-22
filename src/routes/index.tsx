import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PATHS } from "./routes";
import { Layout } from "../components/Layout";
import { ErrorPage, HomePage, Offers, AboutUs} from "../pages";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route path={PATHS.HOME} element={<HomePage/>}/>
          <Route path={PATHS.OFFERS} element={<Offers/>}/>
          <Route path={PATHS.ABOUT_US} element={<AboutUs/>}/>
        </Route>
        {/* 404 - Error */}
        <Route path={PATHS.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
