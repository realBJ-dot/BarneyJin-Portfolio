import { ArrowUpRight, ArrowDown } from 'lucide-react'

const links = {
    resume: 'https://drive.google.com/file/d/1HqiHi9RVQOLlWNUWLemUslWAicyzVOd6/view?usp=sharing',
    github: 'https://github.com/realBJ-dot',
    linkedin: 'https://www.linkedin.com/in/barneyjin/',
}

function External({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>
}

export default function ModernPortfolio() {
    return (
        <div className="portfolio" id="top">
            <a className="skip-link" href="#main">Skip to content</a>
            <header className="site-header">
                <a className="wordmark" href="#top" aria-label="Barney Jin home">Barney Jin<span>.</span></a>
                <nav aria-label="Main navigation">
                    <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
                </nav>
            </header>

            <main id="main">
                <section className="intro" aria-labelledby="intro-title">
                    <p className="eyebrow"><span className="status-dot" />Software engineer</p>
                    <h1 id="intro-title">Thoughtful software.<br /><em>Made for people.</em></h1>
                    <div className="intro-bottom">
                        <p>I’m Barney. I build mobile apps and web products, from the interface to the systems behind it.</p>
                        <a href="#work" className="text-link">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
                    </div>
                </section>

                <section id="work" className="work-section" aria-labelledby="work-title">
                    <div className="section-heading"><h2 id="work-title">Selected work</h2><span>01 / Apps & projects</span></div>
                    <div className="featured-grid">
                        <article className="featured-project">
                            <a className="project-art birdie-art" href="https://apps.apple.com/us/app/go-birdie-go-golf-analytics/id6670175309" target="_blank" rel="noopener noreferrer" aria-label="Go Birdie Go on the App Store">
                                <span className="art-label">Practice. Play. Progress.</span>
                                <div className="golf-rings" aria-hidden="true"><i /><i /><i /></div>
                                <img src="./images/gobirdiegoIcon.png" alt="" width="100" height="100" className="app-icon" />
                                <span className="art-bottom">GO BIRDIE GO <ArrowUpRight size={20} aria-hidden="true" /></span>
                            </a>
                            <div className="project-meta"><span>Lead Software Engineer</span><span className="live-label">On the App Store</span></div>
                            <h3>Go Birdie Go</h3>
                            <p>Built a Flutter golf analytics app for iOS and Android, with Python cloud functions to validate subscriptions and manage premium access.</p>
                            <External href="https://apps.apple.com/us/app/go-birdie-go-golf-analytics/id6670175309" className="text-link">View app</External>
                        </article>
                        <article className="featured-project">
                            <a className="project-art fan-art" href="https://apps.apple.com/us/app/next-fan-up/id6758160349" target="_blank" rel="noopener noreferrer" aria-label="Next Fan Up on the App Store">
                                <span className="art-label">Introducing</span>
                                <div className="fan-type" aria-hidden="true">NEXT<br /><span>FAN UP</span><ArrowUpRight /></div>
                                <span className="art-bottom">NEXT FAN UP <ArrowUpRight size={20} aria-hidden="true" /></span>
                            </a>
                            <div className="project-meta"><span>Lead Software Engineer</span><span className="live-label">On the App Store</span></div>
                            <h3>Next Fan Up</h3>
                            <p>Architected a live sports app with picks, trivia, and fan communities. Cut third-party API costs by 80% through client and server caching.</p>
                            <External href="https://apps.apple.com/us/app/next-fan-up/id6758160349" className="text-link">View app</External>
                        </article>
                    </div>
                    <div className="other-projects">
                        <div className="project-row"><span className="row-name">SmartSync</span><span className="row-description">Calendar sync & smart reminders</span><span className="row-category">SwiftUI / SwiftData</span></div>
                        <div className="project-row"><span className="row-name">Web Content Filter</span><span className="row-description">Browser extension & URL classification</span><span className="row-category">Python / JavaScript</span></div>
                        <div className="project-row"><span className="row-name">Social Book Discovery</span><span className="row-description">Books, reviews & community</span><span className="row-category">Next.js / MongoDB</span></div>
                    </div>
                </section>

                <section id="about" className="about-section" aria-labelledby="about-title">
                    <div className="section-heading"><h2 id="about-title">A little about me</h2><span>02 / Background</span></div>
                    <div className="about-grid">
                        <div className="about-copy">
                            <h3>Curious by nature.<br /><em>Engineer by practice.</em></h3>
                            <p>I lead software development for Next Fan Up and Go Birdie Go at EngineeringPeople. My work spans Flutter interfaces, real-time data, and the backend systems that keep everything in sync.</p>
                            <p>Previously at John Deere, I built internal tools that saved over $30K and 175 operational hours a year, and automated deployments from hours to minutes. Away from work, I’m teaching myself piano.</p>
                            <External href={links.resume} className="text-link">View résumé</External>
                        </div>
                        <div className="background-notes">
                            <div><span className="eyebrow">In my toolkit</span><p>Flutter, SwiftUI, React, Next.js<br />Python, TypeScript, Firebase<br />AWS, Docker, Terraform</p></div>
                            <div><span className="eyebrow">Education</span><p>University of Illinois Urbana-Champaign<br />Master of Computer Science <span className="muted">/ 2025</span><br />BS, Mathematics & Computer Science <span className="muted">/ 2023</span></p></div>
                            <details><summary>Research & coursework <span aria-hidden="true">+</span></summary><External href="https://drive.google.com/file/d/1Ze3Mv3jtRBpiKniBh6ZKDQrHe5rRU_Bg/view">Fault tolerant system design</External><External href="https://drive.google.com/file/d/1f_eW_4yI5ZAiG47OOOxi43MZze2bH8Su/view">Fuzz4ALL empirical study</External></details>
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact-section" aria-labelledby="contact-title">
                    <p className="eyebrow">03 / Get in touch</p>
                    <div className="contact-heading"><h2 id="contact-title">Have something in mind?</h2><a href="mailto:peiyuan3@illinois.edu" className="contact-arrow" aria-label="Email Barney"><ArrowUpRight aria-hidden="true" /></a></div>
                    <a className="email-link" href="mailto:peiyuan3@illinois.edu">peiyuan3@illinois.edu</a>
                </section>
            </main>
            <footer><span>© {new Date().getFullYear()} Barney Jin</span><div><External href={links.github}>GitHub</External><External href={links.linkedin}>LinkedIn</External><a href="#top">Back to top ↑</a></div></footer>
        </div>
    )
}
