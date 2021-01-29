import Header from "./Header";
import Layout from "./Layout";
import Footer from "./Footer";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";

function App() {
  return (
    <>
      <Header />
      <Layout urlBg={bg1} />
      <Layout colorBg="orange" />
      <Layout urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
