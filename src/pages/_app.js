import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "@/components/Layout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </Layout>
  );
}
