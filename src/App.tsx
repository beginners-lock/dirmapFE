import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
/*import AuthPage from "./pages/AuthPage"
import DashboardPage from "./pages/DashboardPage"
import ProjectsPage from "./pages/ProjectsPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"
import ProjectSettingsPage from "./pages/ProjectSettingsPage"*/
import { AUTH_PAGE, DASHBOARD_PAGE, LANDING_PAGE, PROJECT_PAGE, PROJECT_SETTING_PAGE, PROJECTS_PAGE } from "./utils/routes"
import DefaultLayout from "./components/layout/default"

function App() {
  return (
      <Routes>
        <Route path={LANDING_PAGE} element={<DefaultLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
  )
}

export default App

/**
 * <Route path={AUTH_PAGE} element={<AuthPage />} />
        <Route path={DASHBOARD_PAGE} element={<DashboardPage />} />
        <Route path={PROJECTS_PAGE} element={<ProjectsPage />} />
        <Route path={PROJECT_PAGE} element={<ProjectDetailPage />} />
        <Route path={PROJECT_SETTING_PAGE} element={<ProjectSettingsPage />} />
 */