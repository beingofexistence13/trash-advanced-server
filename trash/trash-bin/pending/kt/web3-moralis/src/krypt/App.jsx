import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

export const Krypt = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default Krypt;
