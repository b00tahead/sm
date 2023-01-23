export default function Navigation({ links }) {
  return (
    <nav id="contact-links" role="navigation" aria-label="Links to contact me">
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
