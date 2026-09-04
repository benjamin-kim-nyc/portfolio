import { projects } from './projects';
export default function Home() {
  return <main className="portfolio">
    <header className="intro">
      <h1>Benji Kim</h1>
      <p className="profession">product designer</p>
      <p className="bio">15 years experience in designing for financial services,<br className="desktop-break"/> healthcare, and the insurance industry</p>
      <nav aria-label="Main navigation"><a href="#work">work</a><a href="#about-me">about me</a><a href="#contact">contact</a></nav>
    </header>
    <section id="work" aria-label="Selected work" className="work">
      {projects.map(p => <article className="project" key={p.slug}>
        <h2>{p.title}</h2>
        <p className="summary">{p.summary} <a href={`/work/${p.slug}`} aria-label={`Read more about ${p.title}`}>...more</a></p>
        
        <a className="project-image" href={`/work/${p.slug}`} aria-label={`View ${p.title}`}><img src={p.image} width={p.width ?? 1247} height={p.height} alt={p.alt}/></a>
      </article>)}
    </section>
    <section id="about-me" className="about"><h2>about me</h2><p>I’m Benji, a product designer with 15 years experience designing for financial services, healthcare, and the insurance industry.</p><p>My work spans user research and design.</p><ol className="skills-list">
      <li><strong>UX research:</strong> interviews, research planning, and synthesizing findings.</li>
      <li><strong>UX design:</strong> user flows, information architecture, and wireframes.</li>
      <li><strong>UI design:</strong> visual design, page layouts, and interaction states.</li>
      <li><strong>Prototyping:</strong> creating interactive concepts for feedback or testing.</li>
      <li><strong>Usability testing:</strong> planning sessions, evaluating designs, and iterating.</li>
      <li><strong>Analytics analysis:</strong> reviewing site behavior and performance to identify improvements.</li>
    </ol></section>
    <footer id="contact"><p className="contact-links"><a href="mailto:benjikim@gmail.com">benjikim@gmail.com</a><span> / </span><a href="/documents/resume26.pdf" target="_blank" rel="noreferrer">resume</a><span> / </span><a className="phone" href="tel:+16466206406">646 620 6406</a></p></footer>
  </main>;
}
