import Container from "./components/Container";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Intro from "./sections/Intro";
import About from "./sections/About";

const navLinks = [
  { text: "email", url: "mailto:smay44@gmail.com" },
  { text: "github", url: "https://github.com/b00tahead" },
  { text: "linkedin", url: "https://www.linkedin.com/in/mayscott/" },
];

export default function App() {
  return (
    <>
      <Container>
        <Header title="sm." links={navLinks} />
        <Main>
          <Intro />
          <About />
        </Main>
        <Footer />
      </Container>
    </>
  );
}
