'use client';
import { motion } from 'framer-motion';

const services = [
  ['01', 'Brand Strategy', 'Turn a commodity into a brand people recognise, remember and choose.'],
  ['02', 'Commerce & Growth', 'Connect marketplaces, media and conversion into one measurable growth engine.'],
  ['03', 'Founder Visibility', 'Make the people behind the business part of the brand story.'],
  ['04', 'Performance Marketing', 'Make every rupee work harder through sharper creative and clear measurement.'],
];
export default function Home() {
  return <main>
    <div className="topline">INDIAN ROOTS. AMBITIOUS THINKING. MEASURABLE GROWTH.</div>
    <header className="nav"><a className="logo" href="/">Curry<span>⌣</span>Nation</a><nav><a href="#approach">Approach</a><a href="#services">What we do</a><a href="#contact">Contact</a></nav><a className="navcta" href="#contact">Let’s talk ↗</a></header>
    <section className="hero">
      <div className="sunburst" aria-hidden="true">✳</div>
      <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
        <p className="eyebrow">A growth partner for ambitious brands</p>
        <h1>Rooted in India.<br/><em>Built for what’s next.</em></h1>
        <p className="intro">We help consumer brands move from being available to being unmistakable — with strategy, storytelling and growth that work together.</p>
        <div className="actions"><a className="button primary" href="#contact">Start a conversation <span>↗</span></a><a className="textlink" href="#services">Explore our work ↓</a></div>
      </motion.div>
      <motion.div className="art-card" initial={{opacity:0,scale:.94,rotate:2}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:.9,delay:.15}}><div className="arch"><div className="arch-inner"><span className="lotus">✿</span><p>GOOD IDEAS.<br/>GREAT INDIAN<br/><strong>BRANDS.</strong></p><small>EST. FOR THE NEXT CHAPTER</small></div></div><span className="art-stamp">CULTURE × COMMERCE</span></motion.div>
      <div className="hero-foot"><span>STRATEGY / STORY / SCALE</span><span>INDEPENDENT THINKING, COLLECTIVE IMPACT</span></div>
    </section>
    <section className="manifesto" id="approach"><p className="eyebrow">Our point of view</p><h2>Growth isn’t a trick.<br/><em>It’s a system.</em></h2><p>Culture gives a brand its meaning. Strategy gives it direction. Creative earns attention. Commerce turns that attention into action. We bring the pieces together.</p></section>
    <section className="services" id="services"><div className="section-head"><div><p className="eyebrow">What we bring to the table</p><h2>Made for the messy<br/><em>middle of growth.</em></h2></div><p>From the first positioning question to the next stage of scale, we help you make sharper decisions and build momentum that lasts.</p></div><div className="service-grid">{services.map(([n,title,desc],i)=><motion.article className="service" key={n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><span className="number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="arrow">↗</span></motion.article>)}</div></section>
    <section className="cta" id="contact"><div className="cta-flower">✿</div><p className="eyebrow">The next chapter starts here</p><h2>Let’s make your brand<br/><em>impossible to ignore.</em></h2><p>Bring us your ambition, your challenge, or the question you can’t quite crack yet.</p><a className="button light" href={process.env.NEXT_PUBLIC_BOOKING_URL || 'mailto:business.enquiry@currynation.in'}>Book a discovery call <span>↗</span></a></section>
    <footer><a className="logo" href="/">Curry<span>⌣</span>Nation</a><span>Indian-rooted thinking. Modern growth systems.</span><span>© {new Date().getFullYear()} Curry Nation</span></footer>
  </main>;
}
