import ListItem from "../components/ListItem";
import SectionHeading from "../components/SectionHeading";
import Section from "../layout/Section";

export default function About() {
  return (
    <>
      <Section className="main-section">
        <SectionHeading>About Me</SectionHeading>
        <p>
          I am an experienced front-end engineer based in Lexington, KY. I enjoy
          designing interfaces, building websites, and developing web
          applications.
        </p>
        <p>
          While I specialize in front-end development, I’m interested in doing
          more full stack development with either PHP or JavaScript frameworks.
        </p>
        <p>These are just a few technologies I’ve worked with:</p>
        <div className="list-wrapper">
          <ul className="list">
            <ListItem>React</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>Node.js</ListItem>
          </ul>
          <ul className="list">
            <ListItem>JavaScript</ListItem>
            <ListItem>WordPress</ListItem>
            <ListItem>Figma</ListItem>
          </ul>
          <ul className="list">
            <ListItem>HTML + CSS</ListItem>
            <ListItem>Drupal</ListItem>
          </ul>
        </div>
      </Section>
    </>
  );
}
