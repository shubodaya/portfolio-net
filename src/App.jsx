import { useEffect, useState } from 'react'
import shieldIcon from './assets/shield.svg'
import heroBg from './assets/data3.jpg'
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
    tags: ['NOC Escalations', 'Routing & Switching', 'LAN/WAN Support'],
    achievements: [
      'Resolved 25+ incidents across on-site and remote engagements.',
      'Delivered clean change records and customer-ready completion reports.',
      'Maintained steady SLA adherence across priority tickets.',
    ],
    highlights: [
      'Delivered network infrastructure support for routers, switches, and access points.',
      'Coordinated escalations with NOC and engineering teams to isolate and resolve access issues.',
      'Troubleshot LAN/WAN connectivity issues, validating cabling, ports, and post-change stability.',
    ],
  },
  {
    role: 'Technical Support Engineer',
    company: 'SonicWall Technologies',
    location: 'Bangalore, India',
    dates: 'May 2021 - Aug 2023',
    tags: ['P1-P3 Incidents', 'VPN/SD-WAN', 'HA & Failover'],
    achievements: [
      'Resolved 1,800+ cases annually and authored 20+ knowledge base articles.',
      'Launched live chat support with Development and Salesforce teams.',
      'Earned three Spot Awards; SNSA & SNSP certified.',
    ],
    highlights: [
      'Delivered 2nd/3rd line network support, resolving P1-P3 incidents within SLA targets.',
      'Troubleshot LAN, WAN, VPN, and data-center connectivity issues across large customer networks.',
      'Configured firewall policies, NAT, ACLs, routing, switching, and SD-WAN in live environments.',
      'Supported multi-site connectivity with OSPF/BGP and cloud interoperability.',
      'Implemented IPSec VPNs, WAN load balancing, and HA failover for multi-site customers, validating tunnels and failover behavior during maintenance windows.',
      'Diagnosed service degradation by analyzing logs, packet captures, and traffic flows, restoring stability after routing and VPN changes.',
      'Integrated AD and Azure AD using LDAP/RADIUS, enabling MFA across LAN, VLANs, and SSL VPN with consistent access policies.',
      'Maintained monitoring and alerting in SonicWall Analytics and PRTG, tuning thresholds and dashboards for availability and performance.',
      'Delivered zero-touch mass deployment via SonicWall CSC, standardizing templates and fleet-wide configuration updates.',
      'Investigated firmware and hardware defects, reproduced issues in lab environments, and coordinated hotfixes and RMAs with engineering.',
      'Mentored junior engineers and ensured clear handovers during high-impact incidents.',
    ],
  },
]

const projects = [
  {
    title: 'Network Lab Build (Cisco + EVE-NG)',
    year: '2025',
    detail:
      'Built scalable labs for deployment and troubleshooting across Cisco and enterprise firewalls.',
  },
  {
    title: 'Home Lab: Core Network Services',
    year: '2024',
    detail:
      'Deployed Windows/Linux servers for DNS, DHCP, AD, file, and web services with stable LAN design.',
  },
  {
    title: 'Cloud Network Lab in Azure',
    year: '2025',
    detail:
      'Built Azure networks with VMs to capture traffic and analyze logs in Microsoft Sentinel.',
  },
  {
    title: 'Automated Log Analyzer (Python)',
    year: '2024',
    detail:
      'Parsed local and remote logs, detected events, triggered alerts, and stored incident data in SQL and CSV.',
  },
  {
    title: 'OWASP Top 10 + WAF Validation',
    year: '2025',
    detail:
      'Simulated common web attacks against DVWA and validated detection and prevention using a WAF.',
  },
  {
    title: 'Automotive Network Security Dissertation',
    year: '2024',
    detail:
      'Conducted ISO 21434 TARA and proposed a software-defined firewall for in-vehicle networks.',
  },
]

const certifications = [
  { title: 'CCNP (In Progress)', completed: false },
  { title: 'CCNA (200-301) - Dec 2025', completed: true },
  { title: 'CompTIA Network+ (N10-009) - Mar 2025', completed: true },
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900) - Mar 2025', completed: true },
  { title: 'Google IT Automation with Python - Jun 2025', completed: true },
  { title: 'CompTIA Security+ (SY0-701) - Feb 2025', completed: true },
  { title: '(ISC)2 Certified in Cybersecurity (CC) - Oct 2024', completed: true },
]

const skills = [
  {
    label: 'Network Infrastructure',
    items: ['LAN/WAN', 'WLAN', 'VLANs', 'STP', 'LACP', 'VRRP'],
  },
  {
    label: 'IP Networking',
    items: ['IPv4/v6', 'TCP/UDP', 'ICMP', 'DNS/DHCP', 'HTTP/HTTPS'],
  },
  {
    label: 'Network Devices & Platforms',
    items: ['Routers', 'Switches', 'Firewalls', 'Access Points', 'EVE-NG'],
  },
  {
    label: 'Connectivity & Troubleshooting',
    items: ['NAT', 'ACLs', 'IPSec/SSL VPNs', 'HA', 'Traffic Analysis'],
  },
  {
    label: 'Monitoring & Management',
    items: ['PRTG', 'Splunk', 'Wireshark', 'Syslog', 'SNMP'],
  },
  {
    label: 'Cloud Networking',
    items: ['Azure/AWS', 'Subnets', 'Routing', 'Hybrid Connectivity', 'VMs'],
  },
  {
    label: 'Identity & Access',
    items: ['Active Directory', 'LDAP', 'RADIUS', 'WLAN Access', 'VPN Access'],
  },
  {
    label: 'Automation & Ops',
    items: ['Ansible', 'Python', 'PowerShell', 'REST APIs', 'ITSM'],
  },
]

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showDenied, setShowDenied] = useState(false)
  const [showCertOutput, setShowCertOutput] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isPrivileged, setIsPrivileged] = useState(false)
  const [isPasswordPrompt, setIsPasswordPrompt] = useState(false)
  const [pendingConfig, setPendingConfig] = useState(false)

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

  const handleRouterKeyDown = (event) => {
    if (event.key === 'Enter') {
      const command = event.target.value.trim().toLowerCase()
      if (isPasswordPrompt) {
        setShowDenied(true)
        setIsPasswordPrompt(false)
        setPendingConfig(false)
      } else if (command) {
        if (isPrivileged) {
          if (command === 'exit') {
            setIsPrivileged(false)
            setShowDenied(false)
          } else {
            setPendingConfig(command === 'conf t' || command === 'config t')
            setIsPasswordPrompt(true)
            setShowDenied(false)
          }
        } else if (command === 'en' || command === 'enable') {
          setIsPrivileged(true)
          setShowDenied(false)
        } else {
          setShowDenied(true)
        }
      }
      event.target.value = ''
    }
  }

  const handleCertRun = () => {
    setShowCertOutput(true)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 980px)')
    const handleChange = () => {
      if (!mediaQuery.matches) {
        setIsNavOpen(false)
      }
    }
    handleChange()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
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
            <p className="brand__role">Network Engineer and NOC</p>
          </div>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          aria-controls="primary-nav"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`header-panel ${isNavOpen ? 'header-panel--open' : ''}`}>
          <nav
            className="site-nav"
            id="primary-nav"
            aria-label="Primary"
            onClick={(event) => {
              if (event.target.closest('a')) {
                setIsNavOpen(false)
              }
            }}
          >
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#interests">Interests</a>
            <a href="#contact">Contact</a>
          </nav>
          <div
            className="cta-group"
            onClick={(event) => {
              if (event.target.closest('a')) {
                setIsNavOpen(false)
              }
            }}
          >
            <a className="button button--ghost" href="https://www.linkedin.com/in/shubodaya/">
              LinkedIn
            </a>
            <a
              className="button button--bright"
              href="https://docs.google.com/document/d/1N6X1tBwe-eXPUuUK0vc0NTwg8Dh3R3O_Y8Vla9vN9t4/edit?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home" style={{ '--hero-bg': `url(${heroBg})` }}>
          <div className="hero__content" data-reveal>
            <p className="eyebrow">Plymouth, England | Relocation open</p>
            <h1>
              Network Engineer
              <span className="hero__title-accent">Building reliable, scalable networks</span>
            </h1>
            <p className="hero__lead">
              Network Engineer with 3+ years of enterprise experience supporting on-prem and
              cloud networks. Strong in IP routing, firewalls, Linux, and automation
              (Python/Ansible), and ready to contribute immediately within NOC and network
              engineering teams.
            </p>
            <p className="hero__lead">
              I focus on keeping services stable and users connected through hands-on LAN/WAN
              troubleshooting, routing and switching, VPNs, and proactive monitoring across
              multi-site environments.
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
            <div className="noc-panel">
              <div className="noc-panel__header">NOC Live Feed</div>
              <div className="noc-panel__body">
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '0s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 09:18:12 OSPF neighbor up peer=10.40.1.2 area=0
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '0.4s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 09:18:35 WAN link stable site=London latency=24ms
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '0.8s' }}>
                  <span className="log-tag log-tag--warn">[WARN]</span> 09:19:02 Interface flapping ge-0/0/3 switch=SW-03
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '1.2s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 09:19:26 DHCP pool healthy scope=Corp-Users
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '1.6s' }}>
                  <span className="log-tag log-tag--warn">[WARN]</span> 09:20:10 Packet loss 2% site=Manchester
                </span>
                <span className="terminal-line terminal-line--persist" style={{ '--delay': '2s' }}>
                  <span className="log-tag log-tag--info">[INFO]</span> 09:20:42 BGP prefixes ok peer=AS64501 routes=1243
                </span>
              </div>
            </div>
            <div className="noc-kpis">
              <div className="noc-kpi">
                <p className="noc-kpi__label">Uptime</p>
                <p className="noc-kpi__value">99.98%</p>
              </div>
              <div className="noc-kpi">
                <p className="noc-kpi__label">Active Incidents</p>
                <p className="noc-kpi__value">3</p>
              </div>
              <div className="noc-kpi">
                <p className="noc-kpi__label">Open Tickets</p>
                <p className="noc-kpi__value">12</p>
              </div>
              <div className="noc-kpi">
                <p className="noc-kpi__label">MTTR</p>
                <p className="noc-kpi__value">38m</p>
              </div>
            </div>
            <div className="hero__card">
              <p className="card-title">Network Operations Focus</p>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>Routing &amp; Switching</span>
                    <span>94%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '94%', '--delay': '0.1s' }} />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>LAN/WAN Operations</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '90%', '--delay': '0.3s' }} />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>Network Monitoring</span>
                    <span>88%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '88%', '--delay': '0.5s' }} />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__label">
                    <span>Incident Troubleshooting</span>
                    <span>91%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="skill-bar__fill" style={{ '--fill': '91%', '--delay': '0.7s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section__header" data-reveal>
            <p className="eyebrow">About</p>
            <h2>Mission-driven networking, grounded in operations</h2>
          </div>
          <div className="about">
            <div className="about__copy" data-reveal>
              <p>
                I bring energy, ownership, and consistency to everything I work on. I am the
                kind of person who enjoys digging into problems, learning something new every
                day, and making systems better than I found them. Networking, for me, is a
                craft I am genuinely invested in.
              </p>
              <p>
                With experience across 24x7 enterprise environments and cloud platforms, I
                am comfortable working under pressure and communicating clearly when it
                matters most. My engineering background gives me a strong technical base, but
                it is my curiosity, work ethic, and follow-through that make me a reliable
                asset to a team.
              </p>
              <p>
                I am friendly, easy to work with, and proactive by nature. Whether
                collaborating with engineers, supporting users, or resolving outages,
                I bring focus, accountability, and a genuine desire to contribute. I am
                motivated by impact, and I take pride in being someone teams can trust and
                depend on.
              </p>
              <div className="about__chips">
                <span>Network Engineer</span>
                <span>NOC Ready</span>
                <span>Routing &amp; Switching</span>
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
                  {isPasswordPrompt ? (
                    <div className="terminal-input-row">
                      <span className="terminal-password">Password:</span>
                      <input
                        className="terminal-input"
                        type="password"
                        aria-label="Password input"
                        onKeyDown={handleRouterKeyDown}
                      />
                      <span className={`terminal-denied ${showDenied ? 'terminal-denied--show' : ''}`}>
                        Not authorized
                      </span>
                    </div>
                  ) : (
                    <div className="terminal-input-row">
                      <span className="terminal-prompt">{isPrivileged ? 'Router#' : 'Router>'}</span>
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
                  )}
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
            <p className="section__note">
              Enterprise network support across routing, switching, VPNs, and NOC escalations.
            </p>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <article className="timeline__item" key={role.role} data-reveal>
                <div className="timeline__details">
                  <div className="timeline__meta">
                    <p className="timeline__date">{role.dates}</p>
                    <h3>{role.role}</h3>
                    <div className="timeline__company">
                      <span>{role.company}</span>
                      <span>{role.location}</span>
                    </div>
                    <div className="timeline__tags">
                      {role.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <ul>
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <aside className="timeline__achievements">
                  <p className="timeline__achievements-title">Key Achievements</p>
                  <ul>
                    {role.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </aside>
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
            <h2>Hands-on labs, network builds, and automation</h2>
            <p className="section__note">
              I build networks that mirror real deployments, then validate performance,
              resilience, and operational readiness.
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
            <div className="project-card project-card--cta" data-reveal>
              <p className="project-card__year">More</p>
              <h3>Explore on GitHub</h3>
              <p>See more hands-on labs and automation work.</p>
              <a className="button button--ghost" href="https://github.com/shubodaya?tab=repositories">
                Explore more on GitHub
              </a>
            </div>
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
              <div className="edu-meta">
                <span>Swansea University</span>
                <span>Distinction</span>
              </div>
              <p className="edu-dates">
                <span>Sep 2023 - Dec 2024</span>
                <span>Swansea, Wales, UK</span>
              </p>
            </article>
            <article data-reveal>
              <h3>BEng in Electronics and Communication</h3>
              <div className="edu-meta">
                <span>Vidya Vardhaka College</span>
                <span>First Class</span>
              </div>
              <p className="edu-dates">
                <span>Jul 2016 - Aug 2020</span>
                <span>Mysore, India</span>
              </p>
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
            <h2>Networking-first tooling with a reliability mindset</h2>
            <p className="section__note">
              I bring hands-on expertise across routing, monitoring, connectivity, and
              automation.
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
            <h2>Creative energy outside the NOC</h2>
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
              <h2>Let us build a stronger network together</h2>
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
        <p>Built for network teams, recruiters, and engineering partners.</p>
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



