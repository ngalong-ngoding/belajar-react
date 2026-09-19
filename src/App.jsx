import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboard/DashboardPage";
import BoardPage from "./pages/board/BoardPage";
import Layout from "./components/layout";
import ContactsPage from "./pages/contacts/ContactsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="board">
            <Route index element={<BoardPage />} />
          </Route>
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="settings" element={<span>Settings</span>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
