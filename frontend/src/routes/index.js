import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../utils/Loader/Loading";


const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        { path: "register", element: <RegisterPage /> },
        { path: "verify-otp", element: <VerifyOTP /> },
        { path: "complete-profile", element: <CompleteProfile /> },
        { path: "invite", element: <InviteTeam /> },
        { path: "business-details", element: <BusinessDetail /> },

      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <CreateProperty /> },
        { path: "forgot", element: <ForgotPassword /> },
        { path: "listings", element: <Listings /> },
        { path: "add_address", element: <AddAddress /> },
        { path: "property-information", element: <PropertyInformation /> },

        { path: "create_manual", element: <CreateManual /> },

        


        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const LoginPage = Loadable(
    lazy(() => import("../component/agentAuth/Login/Login")),
  );
  const RegisterPage = Loadable(
    lazy(() => import("../component/agentAuth/Register/Register")),
  );
  const VerifyOTP = Loadable(
    lazy(() => import("../component/agentAuth/Verify/Verify")),
  );
  const ForgotPassword = Loadable(
    lazy(() => import("../component/agentAuth/ForgotPassword/ForgotPassword")),
  );
  const CompleteProfile = Loadable(
    lazy(() => import("../component/agentAuth/CompleteProfile/CompleteProfile")),
  );
  const InviteTeam = Loadable(
    lazy(() => import("../component/agentAuth/InviteTeam/InviteTeam")),
  );
  const BusinessDetail = Loadable(
    lazy(() => import("../component/agentAuth/BusinessDetail/BusinessDetail")),
  );
const CreateProperty = Loadable(
    lazy(() => import("../component/dashboard/EmptyProperty/EmptyProperty")),
  );
  const Listings = Loadable(
    lazy(() => import("../component/dashboard/Listings/Listings")),
  );
  const CreateManual = Loadable(
    lazy(() => import("../component/dashboard/CreateManual/CreateManual")),
  );
  const AddAddress = Loadable(
    lazy(() => import("../component/dashboard/AddAddress/AddAddress")),
  );
  const PropertyInformation =  Loadable(
    lazy(() => import("../component/dashboard/PropertyInformation/PropertyInformation")),
  );
const Page404 = Loadable(lazy(() => import("../pages/Page404")));