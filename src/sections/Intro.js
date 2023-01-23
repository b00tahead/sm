import Section from "../layout/Section";
import Heading from "../components/Heading";

export default function Intro() {
  return (
    <Section className="main-section text-center">
      <Heading size="h1">
        Hello, I'm <span className="text-green">Scott</span>.
      </Heading>
    </Section>
  );
}
