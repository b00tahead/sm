import Branding from "./Branding";
import Navigation from "./Navigation";

export default function Header({ title, links }) {
  return (
    <header>
      <Branding title={title} />
      <Navigation links={links} />
    </header>
  );
}
