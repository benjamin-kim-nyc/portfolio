import { projects } from './projects';
export default function Home() {
  const visibleProjects = process.env.HIDE_SOVENTURE === 'true' ? projects.filter(p => p.slug !== 'travel-insurance' && p.slug !== 'plan-comparison') : projects;
  return <main className="portfolio">
    <header className="intro">
      <h1>Benji Kim</h1>
      <p className="profession">product designer</p>
      <p className="bio">I design complex products that make difficult decisions easier.<br className="desktop-break"/> 15+ years across insurance, healthcare, financial services, and research platforms.</p>
      <nav aria-label="Main navigation"><a href="#work">work</a><a href="#about-me">about me</a><a href="#contact">contact</a></nav>
    </header>
    <section id="work" aria-label="Selected work" className="work">
      {visibleProjects.map(p => <article className="project" key={p.slug}>
        <h2>{p.title}</h2>
        <p className="summary">{p.summary} <a href={`/work/${p.slug}`} aria-label={`Read more about ${p.title}`}>...more</a></p>
        
        <a className="project-image" href={`/work/${p.slug}`} aria-label={`View ${p.title}`}><img src={p.image} width={p.width ?? 1247} height={p.height} alt={p.alt}/></a>
      </article>)}
    </section>
    <section id="about-me" className="about"><h2>about me</h2><p>I’m a product designer focused on complex products where people need to understand a lot of information before making a decision.</p><p>I’ve worked across insurance, healthcare, financial services, and expert research—often in regulated environments where simplifying an interface cannot mean removing important information.</p><p>I work across research, product definition, interaction design, prototyping, and visual design. I’m happiest working closely with engineering to take a product from an ambiguous problem to something people use.</p></section>
    <footer id="contact"><p className="contact-links"><a href="mailto:benjikim@gmail.com">benjikim@gmail.com</a><span> / </span><a href="/documents/resume26.pdf" target="_blank" rel="noreferrer">resume</a><span> / </span><a className="phone" href="tel:+16466206406">646 620 6406</a></p></footer>
  </main>;
}
