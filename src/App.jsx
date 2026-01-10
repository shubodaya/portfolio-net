import { useEffect, useState } from 'react'
import shieldIcon from './assets/shield.svg'
import siemDashboard from './assets/siem-dashboard-hero.jpg'
import networkNodes from './assets/network-nodes.svg'
import networkTopology from './assets/network-topology.webp'
import certBadges from './assets/cert-badges.svg'
import bullseyeCert from './assets/bullseye.jpg'
import vscodePython from './assets/vscode-python.jpg'
import pythonArt from './assets/python-script.svg'
import educationCap from './assets/education-cap.svg'
import skillsTarget from './assets/skills-target.jpg'
import socImage from './assets/soc.jpg'

const experience = [
  {
    role: 'IT Support Engineer (Freelance)',
    company: 'Itarmi IT Services',
    location: 'United Kingdom',
    dates: 'May 2025 - Present',
    highlights: [
      'Resolved 25+ on-site and remote incidents focused on availability, access, and secure connectivity.',
      'Delivered secure network infrastructure support for routers, switches, and access points.',
      'Coordinated escalations with NOC and engineering teams to isolate and resolve access issues.',
      'Produced clear documentation and completion reports for auditability and customer updates.',
    ],
  },
  {
    role: 'Senior Technical Support Engineer',
    company: 'SonicWall Technologies',
    location: 'Bangalore, India',
    dates: 'May 2021 - Aug 2023',
    highlights: [
      'Owned P1-P3 incidents in a 24x7 enterprise security environment, meeting global SLAs.',
      'Delivered threat hunting, monitoring, and compliance reporting using SonicWall Analytics and CSC.',
      'Configured App Control, Content Filtering, IPS, GAV, Anti-Spam, DPI, and CATP to reduce attack surface.',
      'Designed and troubleshot firewalls, VPNs, HA, SD-WAN, OSPF/BGP, NAT, and ACLs.',
      'Integrated IPSec VPNs with Cisco, FortiGate, Azure, and AWS; supported LDAP/RADIUS and MFA.',
      'Investigated CVEs, reproduced defects, coordinated hotfixes, and processed RMAs.',
    ],
  },
]

const projects = [
  {
    title: 'Cloud SOC Lab in Azure',
    year: '2025',
    detail:
      'Deployed a Windows VM with security controls disabled to capture real-world attack traffic and ingest logs into Microsoft Sentinel.',
  },
  {
    title: 'OWASP Top 10 + WAF Validation',
    year: '2025',
    detail:
      'Simulated common web attacks against DVWA and validated detection and prevention using a WAF.',
  },
  {
    title: 'Automated Log Analyzer (Python)',
    year: '2024',
    detail:
      'Parsed local and remote logs, detected security events, triggered alerts, and stored incident data in SQL and CSV.',
  },
  {
    title: 'Automotive Cybersecurity Dissertation',
    year: '2024',
    detail:
      'Led TARA aligned with ISO 21434 and proposed a distributed software-defined firewall for in-vehicle networks.',
  },
  {
    title: 'Security Audit and Risk Remediation',
    year: '2024',
    detail:
      'Benchmarked a simulated organization against PCI DSS, GDPR, and SOC standards with risk-based actions.',
  },
  {
    title: 'Home Automation and IT Ops Tools',
    year: '2023',
    detail:
      'Automated service desk tasks using Python, REST APIs, reporting, and alerting workflows.',
  },
]

const certifications = [
  { title: 'CCNP (In Progress)', completed: false },
  { title: 'CCNA (200-301) - Dec 2025', completed: true },
  { title: 'Google IT Automation with Python - Jun 2025', completed: true },
  { title: 'CompTIA Network+ (N10-009) - Mar 2025', completed: true },
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900) - Mar 2025', completed: true },
  { title: 'CompTIA Security+ (SY0-701) - Feb 2025', completed: true },
  { title: '(ISC)2 Certified in Cybersecurity (CC) - Oct 2024', completed: true },
]

const skills = [
  {
    label: 'Monitoring and Threat Detection',
    items: ['Splunk', 'Azure Sentinel', 'PRTG', 'Wireshark', 'inSSIDer'],
  },
  {
    label: 'Vulnerability Management',
    items: ['Nessus', 'OpenVAS', 'Qualys', 'CVE Analysis', 'Risk Prioritization'],
  },
  {
    label: 'Penetration Testing',
    items: ['Reconnaissance', 'Enumeration', 'Exploitation', 'Reporting'],
  },
  {
    label: 'Frameworks and Standards',
    items: ['MITRE ATT&CK', 'NIST CSF', 'ISO 27001', 'GDPR', 'OWASP Top 10'],
  },
  {
    label: 'Security Platforms',
    items: ['Defender for Endpoint', 'IAM', 'Intune', 'Windows/Linux Logs', 'Azure/AWS'],
  },
  {
    label: 'Network and Security Operations',
    items: ['Firewalls', 'IPSec/SSL VPN', 'ACLs', 'IDS/IPS', 'Policy Enforcement'],
  },
  {
    label: 'Networking Fundamentals',
    items: ['IPv4/v6', 'DNS/DHCP', 'LAN/WAN', 'VLANs', 'OSPF', 'BGP', 'STP'],
  },
  {
    label: 'Automation and Development',
    items: ['Python', 'PowerShell', 'REST APIs', 'SQL', 'Django', 'Three.js'],
  },
]

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showSocAlert, setShowSocAlert] = useState(false)
  const [socAlertMode, setSocAlertMode] = useState('email')
  const [socAlertTimeout, setSocAlertTimeout] = useState(null)
  const [socAutoTimeout, setSocAutoTimeout] = useState(null)
  const [showDenied, setShowDenied] = useState(false)
  const [showCertOutput, setShowCertOutput] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    let rafId = 0

    const updateScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const max = document.body.scrollHeight - window.innerHeight
        const progress = max > 0 ? window.scrollY / max : 0
        root.style.setProperty('--scroll-progress', `${progress}`)
      })
      setShowScrollTop(window.scrollY > 120)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', updateScroll)
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (socAlertTimeout) {
        clearTimeout(socAlertTimeout)
      }
      if (socAutoTimeout) {
        clearTimeout(socAutoTimeout)
      }
    }
  }, [socAlertTimeout, socAutoTimeout])

  const handleSocAlertClick = () => {
    if (socAlertTimeout) {
      clearTimeout(socAlertTimeout)
    }
    if (socAutoTimeout) {
      clearTimeout(socAutoTimeout)
    }
    setSocAlertMode('alert')
    setShowSocAlert(true)
    const timeoutId = setTimeout(() => {
      setShowSocAlert(false)
    }, 30000)
    setSocAlertTimeout(timeoutId)
  }

  const handleRouterKeyDown = (event) => {
    if (event.key === 'Enter') {
      setShowDenied(true)
    }
  }

  const handleCertRun = () => {
    setShowCertOutput(true)
  }

  useEffect(() => {
    const autoId = setTimeout(() => {
      setSocAlertMode('email')
      setShowSocAlert(true)
      const hideId = setTimeout(() => {
        setShowSocAlert(false)
      }, 6000)
      setSocAlertTimeout(hideId)
    }, 5200)
    setSocAutoTimeout(autoId)
  }, [])

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">
            <img src={shieldIcon} alt="" />
          </span>
          <div>
            <p className="brand__name">Shubodaya Kumar</p>
            <p className="brand__role">Network Security and SOC</p>
          </div>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cta-group">
          <a className="button button--ghost" href="https://www.linkedin.com/in/shubodaya/">
            LinkedIn
          </a>
          <a
            className="button"
            href="https://drive.google.com/file/d/1t87kuPPaZn5gtye67Uwl3anHkwOakYcO/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home" style={{ '--hero-bg': `url(${siemDashboard})` }}>
          <div className="hero__content" data-reveal>
            <p className="eyebrow">Plymouth, England | Relocation open</p>
            <h1>
              Network Security Professional
              <span className="hero__title-accent">Protecting your Modern Infrastructure</span>
            </h1>
            <p className="hero__lead">
              I bring 3+ years of 24x7 enterprise support and incident management experience,
              combined with hands-on Security Operations work in SIEM monitoring, threat
              hunting, and incident response, and I am ready to contribute immediately within
              security or infrastructure-focused engineering teams.
            </p>
            <p className="hero__lead">
              My strengths lie in enterprise networking and security, working across
              firewalls, routing, switching, wireless, traffic inspection, and access control,
              alongside SIEM, SOAR, and security analytics, applying an adversary-aware
              approach to validate and strengthen real-world defenses.
            </p>
            <div className="hero__actions">
              <a className="button button--bright" href="#contact">
                Start a conversation
              </a>
              <a className="button button--ghost" href="https://github.com/shubodaya">
                GitHub Projects
              </a>
            </div>
            <div className="hero__details">
              <div>
                <p className="label">
                  <span className="icon-circle icon-circle--small" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path
                        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.3l8 5 8-5V7H4zm16 10V9.7l-7.4 4.6a1 1 0 0 1-1.2 0L4 9.7V17h16z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Email
                </p>
                <p>hnshubodaya@gmail.com</p>
              </div>
              <div>
                <p className="label">
                  <span className="icon-circle icon-circle--small" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path
                        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.6.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.8 21 3 14.2 3 6a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.3.2 2.5.56 3.6a1 1 0 0 1-.24 1l-1.92 1.92z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Phone
                </p>
                <p>+44 7436301739</p>
              </div>
              <div>
                <p className="label">
                  <span className="icon-circle icon-circle--small" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path
                        d="M12 2c-3.86 0-7 3.14-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Location
                </p>
                <p>Plymouth, England (Open to relocate)</p>
              </div>
            </div>
          </div>
          <div className="hero__visual" data-reveal>
            <div className="hero__terminal">
              <div className="hero__terminal-header">SOC Live Logs</div>
              <div className="hero__terminal-body">
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '0s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:32:14 Auth success user=svc-backup
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '0.4s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:32:21 DNS query ok host=repo.internal
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '0.8s' }}>
                  <span className="log-tag log-tag--warn">[WARN]</span> 10:32:33 Unusual port scan detected src=10.20.30.14
                </span>
                <button
                  className="terminal-line terminal-line--persist log-alert-button"
                  style={{ '--delay': '1.2s' }}
                  type="button"
                  onClick={handleSocAlertClick}
                >
                  <span className="log-tag log-tag--alert">[ALERT]</span> 10:32:41 Malicious C2 beacon detected src=10.20.30.14 dst=185.202.1.33
                </button>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '1.6s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:32:55 Firewall rule applied policy=block_c2
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '2s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:33:02 Incident ticket created id=SOC-1184
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '2.4s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:33:18 GeoIP lookup dst=185.202.1.33 region=RU
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '2.8s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:33:32 Endpoint isolated host=WS-014 via EDR
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '3.2s' }}>
                  <span className="log-tag log-tag--warn">[WARN]</span> 10:33:46 Suspicious PowerShell detected host=WS-014
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '3.6s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:34:02 DNS sinkhole applied domain=c2-update.net
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '4s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:34:15 Packet capture started interface=eth1
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '4.4s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 10:34:27 IOC match hash=6b1f...c9f2
                </span>
              </div>
              <div className={`log-panel__email ${showSocAlert ? 'log-panel__email--show' : ''}`}>
                <div className="log-panel__email-title">
                  {socAlertMode === 'alert' ? 'Alert' : 'Email Alert'}
                </div>
                <div className="log-panel__email-caution">Caution: Immediate action required</div>
                <p>Critical alert: C2 beacon detected. Action required.</p>
                <span>To: soc@company.com - Priority: High</span>
              </div>
            </div>
            <div className="hero__card">
              <p className="card-title">Security Operations Focus</p>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>SIEM Analytics</span>
                    <span>92%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '92%', '--delay': '0.1s' }} />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>Incident Response</span>
                    <span>88%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '88%', '--delay': '0.3s' }} />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>Threat Hunting</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '85%', '--delay': '0.5s' }} />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>Firewall Policy</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '90%', '--delay': '0.7s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section__header" data-reveal>
            <p className="eyebrow">About</p>
            <h2>Mission-driven security, grounded in networks</h2>
          </div>
          <div className="about">
            <div className="about__copy" data-reveal>
              <p>
                I bring energy, ownership, and consistency to everything I work on. I am the
                kind of person who enjoys digging into problems, learning something new every
                day, and making systems better than I found them. Security, for me, is not
                just a role - it is a craft I am genuinely invested in.
              </p>
              <p>
                With experience across 24x7 enterprise environments, cloud platforms, and
                live incident scenarios, I am comfortable working under pressure and
                communicating clearly when it matters most. My MSc in Cybersecurity and
                engineering background give me a strong technical base, but it is my
                curiosity, work ethic, and follow-through that make me a reliable asset to a
                team.
              </p>
              <p>
                I am friendly, easy to work with, and proactive by nature. Whether
                collaborating with engineers, supporting users, or responding to incidents,
                I bring focus, accountability, and a genuine desire to contribute. I am
                motivated by impact, and I take pride in being someone teams can trust and
                depend on.
              </p>
              <div className="about__chips">
                <span>Network Security Engineer</span>
                <span>SOC Ready</span>
                <span>Ethical Hacking</span>
                <span>Automation Focused</span>
              </div>
            </div>
            <div className="about__grid" data-reveal>
              <div className="metric">
                <p className="metric__value">3+ years</p>
                <p className="metric__label">Enterprise support experience</p>
              </div>
              <div className="metric">
                <p className="metric__value">25+</p>
                <p className="metric__label">Incidents resolved in the field</p>
              </div>
              <div className="metric">
                <p className="metric__value">20+</p>
                <p className="metric__label">Knowledge base articles authored</p>
              </div>
              <div className="metric">
                <p className="metric__value">3</p>
                <p className="metric__label">Spot awards for operational impact</p>
              </div>
            </div>
            <div className="about__visuals" data-reveal>
              <div className="about__image">
                <img src={networkTopology} alt="Network topology overview" />
              </div>
              <div className="hero__terminal">
                <div className="hero__terminal-header">cli@router:~</div>
                <div className="hero__terminal-body">
                  <span className="typing-line" style={{ '--delay': '0s' }}>
                    <span className="terminal-prompt">Router#</span> conf t
                  </span>
                  <span className="typing-line" style={{ '--delay': '0.8s' }}>
                    <span className="terminal-prompt">Router(config)#</span> access-list 101 deny ip host 10.20.30.14 any
                  </span>
                  <span className="typing-line" style={{ '--delay': '1.6s' }}>
                    <span className="terminal-prompt">Router(config)#</span> access-list 101 permit ip any any
                  </span>
                  <span className="typing-line" style={{ '--delay': '2.4s' }}>
                    <span className="terminal-prompt">Router(config)#</span> interface g0/0
                  </span>
                  <span className="typing-line" style={{ '--delay': '3.2s' }}>
                    <span className="terminal-prompt">Router(config-if)#</span> ip access-group 101 in
                  </span>
                  <span className="typing-line" style={{ '--delay': '4s' }}>
                    <span className="terminal-prompt">Router(config)#</span> ip nat inside source list 101 interface g0/1 overload
                  </span>
                  <span className="typing-line" style={{ '--delay': '4.8s' }}>
                    <span className="terminal-prompt">Router(config)#</span> router ospf 10
                  </span>
                  <span className="typing-line" style={{ '--delay': '5.6s' }}>
                    <span className="terminal-prompt">Router(config-router)#</span> network 10.20.30.0 0.0.0.255 area 0
                  </span>
                  <span className="typing-line" style={{ '--delay': '6.6s' }}>
                    <span className="terminal-prompt">Router#</span> show ip ospf neighbor
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ '--delay': '7.4s' }}>
                    Neighbor ID     Pri   State           Dead Time   Address         Interface   RXmtL RqstL DBsmL
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ '--delay': '8s' }}>
                    1.1.1.1           1   FULL/ -         00:00:32    10.20.30.1      Gi0/0       0     0     0
                  </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '8.6s' }}>
                  2.2.2.2           1   FULL/ -         00:00:34    10.20.30.2      Gi0/0       0     0     0
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '9.2s' }}>
                  3.3.3.3           1   FULL/ -         00:00:31    10.20.30.3      Gi0/0       0     0     0
                </span>
                <div className="terminal-interactive" style={{ '--delay': '10s' }}>
                  <span className="terminal-prompt">Router&gt;</span>
                  <input
                    className="terminal-input"
                    type="text"
                    placeholder="type any command"
                    aria-label="Command input"
                    onKeyDown={handleRouterKeyDown}
                  />
                  <span className={`terminal-denied ${showDenied ? 'terminal-denied--show' : ''}`}>
                    Not authorized
                  </span>
                </div>
                <span className="terminal-spacer" />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section
          className="section section--with-bg"
          id="experience"
          style={{ backgroundImage: `url(${networkNodes})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">Experience</p>
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <article className="timeline__item" key={role.role} data-reveal>
                <div>
                  <p className="timeline__date">{role.dates}</p>
                  <h3>{role.role}</h3>
                  <p className="timeline__company">
                    {role.company} | {role.location}
                  </p>
                </div>
                <ul>
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section section--with-bg"
          id="projects"
          style={{ '--section-bg': `url(${vscodePython})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">Projects</p>
            <h2>Hands-on labs, research, and security automation</h2>
            <p className="section__note">
              I build labs that mimic real adversaries, then engineer defenses that hold up
              under pressure.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title} data-reveal>
                <p className="project-card__year">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
          <div className="section__cta" data-reveal>
            <a className="button button--ghost" href="https://github.com/shubodaya?tab=repositories">
              Explore more on GitHub
            </a>
          </div>
        </section>

        <section
          className="section section--with-bg"
          id="education"
          style={{ backgroundImage: `url(${educationCap})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">Education</p>
            <h2>Education</h2>
          </div>
          <div className="edu-grid">
            <article data-reveal>
              <h3>MSc in Cybersecurity (NCSC Certified)</h3>
              <p>Swansea University | Distinction</p>
              <p>Sep 2023 - Dec 2024 | Swansea, Wales, UK</p>
            </article>
            <article data-reveal>
              <h3>BEng in Electronics and Communication</h3>
              <p>Vidya Vardhaka College of Engineering | First Class</p>
              <p>Jul 2016 - Aug 2020 | Mysore, India</p>
            </article>
          </div>
        </section>

        <section
          className="section section--with-bg"
          id="skills"
          style={{ '--section-bg': `url(${socImage})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">Skills</p>
            <h2>Security-first tooling with a networking backbone</h2>
            <p className="section__note">
              I bring hands-on expertise across monitoring, network defense, automation, and
              ethical hacking.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <article className="skill-card" key={skillGroup.label} data-reveal>
                <h3>{skillGroup.label}</h3>
                <div className="chip-group">
                  {skillGroup.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section section--with-bg"
          id="certifications"
          style={{ '--section-bg': `url(${bullseyeCert})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">Certifications</p>
            <h2>Certifications</h2>
          </div>
          <div className="cert-grid">
            <ul className="cert-list" data-reveal>
              {certifications.map((cert) => (
                <li key={cert.title} className={cert.completed ? 'cert--done' : 'cert--in-progress'}>
                  <span>{cert.title}</span>
                  {cert.completed ? (
                    <span className="cert-check" aria-hidden="true" />
                  ) : (
                    <span className="cert-check cert-check--empty" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ul>
            <div className="cert-visuals" data-reveal>
              <div className="python-anim">
                <div className="python-anim__header">automation.py</div>
                <pre className="code-block">
                  <code>
                    <span className="kw">def</span> main():
                    {'\n'}
                    <span className="com"># Securely connect to mailbox using environment variables</span>
                    {'\n'}    mail = imaplib.IMAP4_SSL(os.getenv(
                    <span className="str">"IMAP_HOST"</span>,{' '}
                    <span className="str">"imap.gmail.com"</span>))
                    {'\n'}    mail.login(os.getenv(<span className="str">"IMAP_USER"</span>), os.getenv(
                    <span className="str">"IMAP_PASS"</span>))
                    {'\n'}    mail.select(<span className="str">"INBOX"</span>)
                    {'\n\n'}    certs = load_certs()
                    {'\n\n'}
                    <span className="com"># Scan recent emails and auto-update certification status</span>
                    {'\n'}    <span className="kw">for</span> msg_id <span className="kw">in</span> mail.search(
                    None, <span className="str">"ALL"</span>)[1][0].split()[-300:]:
                    {'\n'}        msg = email.message_from_bytes(
                    mail.fetch(msg_id, <span className="str">"(RFC822)"</span>)[1][0][1])
                    {'\n'}        <span className="kw">if</span> is_pass_email(msg):
                    {'\n'}            update_cert_status(certs)
                    {'\n\n'}    save_certs(certs)
                    {'\n'}    mail.logout()
                  </code>
                </pre>
                <div className="cert-run">
                  <button className="button button--ghost" type="button" onClick={handleCertRun}>
                    Manual run
                  </button>
                  {showCertOutput ? (
                    <div className="cert-output">
                      No NEW certificate marked as passed. Website certification status unchanged.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="interests">
          <div className="section__header" data-reveal>
            <p className="eyebrow">Interests</p>
            <h2>Creative energy outside the SOC</h2>
          </div>
          <div className="interest-grid">
            <div data-reveal>
              <h3>Creative</h3>
              <p>Art, 3D modeling, image and video editing, music composition.</p>
            </div>
            <div data-reveal>
              <h3>Active</h3>
              <p>Cricket champion, gym, and competitive gaming.</p>
            </div>
            <div data-reveal>
              <h3>Languages</h3>
              <p>English, Hindi, Kannada, Telugu, Tamil.</p>
            </div>
          </div>
        </section>

        <div className="after-interests">
          <section
            className="section section--with-bg contact"
            id="contact"
            style={{ backgroundImage: `url(${skillsTarget})` }}
          >
            <div className="section__header" data-reveal>
              <p className="eyebrow">Contact</p>
              <h2>Let us build a safer network together</h2>
            </div>
            <div className="contact__grid">
              <div className="contact__cards" data-reveal>
                <div className="contact__card">
                  <h3>
                    <span className="icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path
                          d="M12 2c-3.86 0-7 3.14-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Location
                  </h3>
                  <p>Plymouth, England - open to relocation</p>
                </div>
                <div className="contact__card">
                  <h3>
                    <span className="icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path
                          d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.3l8 5 8-5V7H4zm16 10V9.7l-7.4 4.6a1 1 0 0 1-1.2 0L4 9.7V17h16z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Email
                  </h3>
                  <p>hnshubodaya@gmail.com</p>
                </div>
                <div className="contact__card">
                  <h3>
                    <span className="icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path
                          d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.6.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.8 21 3 14.2 3 6a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.3.2 2.5.56 3.6a1 1 0 0 1-.24 1l-1.92 1.92z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Phone
                  </h3>
                  <p>+44 7436301739</p>
                </div>
                <div className="contact__card">
                  <h3>Links</h3>
                  <div className="contact__links">
                    <a className="button button--ghost" href="https://www.linkedin.com/in/shubodaya/">
                      LinkedIn
                    </a>
                    <a className="button button--ghost" href="https://github.com/shubodaya">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <form
                className="contact__form"
                action="https://api.web3forms.com/submit"
                method="POST"
                data-reveal
              >
                <input type="hidden" name="access_key" value="6949e0cb-d280-4f91-94aa-f80685b608a9" />
                <div className="field">
                  <label htmlFor="fullname">Full Name</label>
                  <input id="fullname" name="fullname" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" />
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required />
                </div>
                <button className="button button--bright" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p>Built for security teams, recruiters, and engineering partners.</p>
        <p>
          Reach me at <a href="mailto:hnshubodaya@gmail.com">hnshubodaya@gmail.com</a>
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/shubodaya/" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" role="img">
              <path
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3V8.98zm7.4 0H14v1.64h.06c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.48 4.48 5.7V21h-3.96v-5.28c0-1.26-.03-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.78V21H10.4V8.98z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="https://github.com/shubodaya" aria-label="GitHub">
            <svg viewBox="0 0 24 24" role="img">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.68-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.59 5.06.36.32.69.94.69 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48 3.96-1.35 6.83-5.17 6.83-9.67C22 6.58 17.52 2 12 2z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </footer>
      <button
        className={`scroll-top ${showScrollTop ? 'scroll-top--visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}



