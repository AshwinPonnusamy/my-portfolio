import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-paper min-h-screen text-ink flex flex-col bg-grain selection:bg-accent-deep selection:text-paper">
      <Toaster position="bottom-right" />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
