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
        <p className="role">Role: User Research, Design</p>
        <a className="project-image" href={`/work/${p.slug}`} aria-label={`View ${p.title}`}><img src={p.image} width={p.width ?? 1247} height={p.height} alt={p.alt}/></a>
      </article>)}
    </section>
    <section id="about-me" className="about"><h2>about me</h2><p>I’m Benji, a product designer based in NYC with 15 years experience designing for financial services, healthcare, and the insurance industry.</p><p>My work spans user research and design.</p></section>
    <footer id="contact"><p>based in NYC.</p><p className="contact-links"><a href="mailto:benjikim@gmail.com">benjikim@gmail.com</a><span> / </span><a href="/documents/resume_2026.pdf" target="_blank" rel="noreferrer">resume</a><span> / </span><a className="phone" href="tel:+16466206406">646 620 6406</a></p></footer>
  </main>;
}
