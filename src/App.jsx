import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useAnimationFrame,
  AnimatePresence,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import shieldIcon from './assets/shield.svg'
import heroBg from './assets/data3.jpg'
import networkNodes from './assets/network-nodes.svg'
import networkTopology from './assets/network-topology.webp'
import certBadges from './assets/cert-badges.svg'
import bullseyeCert from './assets/bullseye.jpg'
import vscodePython from './assets/vscode-python.jpg'
import pythonArt from './assets/python-script.svg'
import skillsTarget from './assets/skills-target.jpg'
import socImage from './assets/soc.jpg'

const experience = [
  {
    role: 'Network Engineer',
    company: 'Itarmi IT Services',
    location: 'United Kingdom',
    dates: 'May 2025 - Present',
    tags: ['NOC Escalations', 'Routing & Switching', 'LAN/WAN Support', 'VPN & Zero Trust', 'Change Control'],
    achievements: [
      'Resolved 25+ incidents across on-site and remote engagements.',
      'Delivered clean change records and customer-ready completion reports.',
      'Maintained steady SLA adherence across priority tickets.',
    ],
    highlights: [
      'Owned 2nd/3rd line routing, switching, and firewall escalations across UK sites.',
      'Stabilized LAN/WAN links and VPNs, validating cabling, ports, and post-change health.',
      'Configured firewall policies, NAT, ACLs, and HA to restore secure connectivity.',
      'Implemented IPSec/SSL VPN and SD-WAN with OSPF/BGP for multi-site customers.',
      'Diagnosed outages via logs/pcaps and coordinated fixes with NOC and engineering.',
      'Integrated AD/Azure AD with MFA to standardize secure access.',
    ],
  },
  {
    role: 'MSc Cybersecurity',
    company: 'Swansea University',
    location: 'Swansea, Wales, UK',
    dates: 'Sep 2023 - Dec 2024',
    tags: ['Distinction', 'NCSC Certified', 'Cybersecurity', 'Cryptography', 'Risk & Governance'],
    achievements: [
      'Completed NCSC-certified MSc with a distinction, focused on network and application security.',
      'Delivered dissertation on automotive network security with ISO 21434 TARA.',
      'Applied labs across cryptography, wireless security, and pentesting aligned to OWASP/MITRE.',
    ],
    highlights: [
      'Hands-on in TLS, key management, and secure network architectures.',
      'Risk and governance work with GDPR, ISO/IEC 27001, and NIST CSF controls.',
      'Pentesting and vuln analysis including CVE-led exercises and MITRE ATT&CK mapping.',
    ],
  },
  {
    role: 'Technical Support Engineer',
    company: 'SonicWall Technologies',
    location: 'Bangalore, India',
    dates: 'May 2021 - Aug 2023',
    tags: ['P1-P3 Incidents', 'VPN/SD-WAN', 'HA & Failover', 'Firewall Policy', 'BGP/OSPF'],
    achievements: [
      'Resolved 1,800+ cases annually and authored 20+ knowledge base articles.',
      'Launched live chat support with Development and Salesforce teams.',
      'Earned three Spot Awards; SNSA & SNSP certified.',
    ],
    highlights: [
      'Resolved P1-P3 incidents for LAN/WAN/VPN and data-center connectivity within SLA.',
      'Built and tuned firewall policies, NAT/ACLs, SD-WAN, HA, and VPN failover for multi-site customers.',
      'Stabilized routing (OSPF/BGP) and VPN tunnels using log/pcap analysis and controlled change windows.',
      'Integrated AD/Azure AD with LDAP/RADIUS + MFA for LAN, VLAN, and SSL VPN access consistency.',
      'Optimized monitoring in SonicWall Analytics and PRTG to cut noise and surface actionable alerts.',
      'Delivered zero-touch rollouts via SonicWall CSC templates and authored knowledge base articles.',
    ],
  },
  {
    role: 'BEng Electronics & Communication',
    company: 'Vidyavardhaka College of Engineering',
    location: 'Mysore, India',
    dates: 'Jul 2016 - Aug 2020',
    tags: ['First Class', 'Electronics', 'Networking', 'Embedded Systems', 'Signal Processing'],
    achievements: [
      'Published final-year dissertation on IoT emergency activation in automobiles.',
      'Built foundations across C, VHDL, DSP, embedded systems, and networking protocols.',
      'Completed specialized coursework on military radar and wireless communications.',
    ],
    highlights: [
      'Core studies in computer networks, cybersecurity fundamentals, and LTE antennas.',
      'Project work spanning web/mobile apps, 3D modeling, automation, and embedded platforms.',
      'Active participation in IEEE and technical symposiums, workshops, and labs.',
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

const education = [
  {
    degree: 'MSc in Cybersecurity (NCSC Certified)',
    school: 'Swansea University',
    result: 'Distinction',
    dates: 'Sep 2023 - Dec 2024',
    location: 'Swansea, Wales, UK',
  },
  {
    degree: 'BEng in Electronics and Communication',
    school: 'Vidya Vardhaka College',
    result: 'First Class',
    dates: 'Jul 2016 - Aug 2020',
    location: 'Mysore, India',
  },
]

const nocLogTemplates = [
  { level: 'info', message: 'OSPF neighbor up peer=10.40.1.2 area=0' },
  { level: 'info', message: 'WAN link stable site=London latency=24ms' },
  { level: 'warn', message: 'Interface flapping ge-0/0/3 switch=SW-03' },
  { level: 'info', message: 'DHCP pool healthy scope=Corp-Users' },
  { level: 'warn', message: 'Packet loss 2% site=Manchester' },
  { level: 'info', message: 'BGP prefixes ok peer=AS64501 routes=1243' },
  { level: 'notice', message: 'ISP failover ready path=Primary' },
  { level: 'warn', message: 'CPU spike core-router-1 usage=82%' },
  { level: 'info', message: 'VPN tunnel rekeyed tunnel=HQ-Branch-07' },
  { level: 'warn', message: 'High latency detected site=Berlin rtt=210ms' },
  { level: 'notice', message: 'SNMP trap cleared node=FW-02' },
  { level: 'info', message: 'Link up interface=xe-0/1/1 switch=SW-05' },
  { level: 'warn', message: 'Disk usage 85% on log collector' },
  { level: 'info', message: 'BGP session established peer=AS64512' },
  { level: 'debug', message: 'NetFlow sample exported collector=10.50.1.20' },
  { level: 'warn', message: 'Port errors rising interface=ge-0/0/1' },
  { level: 'info', message: 'Service restored site=Leeds duration=6m' },
  { level: 'notice', message: 'User VLAN broadcast storm contained' },
  { level: 'info', message: 'NTP sync stable offset=2ms' },
  { level: 'error', message: 'AAA server timeout auth=radius-02' },
  { level: 'crit', message: 'Core switch stack split detected' },
  { level: 'debug', message: 'Routing table refresh completed in 42ms' },
  { level: 'notice', message: 'Config archive saved device=FW-Edge' },
  { level: 'error', message: 'WAN circuit down site=Bristol' },
  { level: 'crit', message: 'BGP neighbor down peer=AS64501' },
  { level: 'debug', message: 'SNMP poll jitter normal node=SW-03' },
]

const nocMetrics = [
  { label: 'Uptime', value: '99.98%' },
  { label: 'Active Incidents', value: '3' },
  { label: 'Open Tickets', value: '12' },
  { label: 'MTTR', value: '38m' },
]

const networkTicker = [
  'Network Engineering',
  'NOC',
  'Routing & Switching',
  'BGP & OSPF',
  'SD-WAN',
  'Firewalls',
  'VPN & Zero Trust',
  'Cloud Networking',
  'Automation',
  'Observability',
  'Incident Response',
  'Network Security',
]

const NOC_PANEL_HEIGHT_PX = 244
const NOC_PANEL_PADDING_PX = 28
const NOC_LINE_STEP_PX = 20
const NOC_LINE_GAP_PX = 6
const NOC_VISIBLE_LIMIT = Math.floor(
  (NOC_PANEL_HEIGHT_PX - NOC_PANEL_PADDING_PX + NOC_LINE_GAP_PX) /
    (NOC_LINE_STEP_PX + NOC_LINE_GAP_PX)
)
const NOC_SHIFT_DURATION_MS = 520
const NOC_LOG_INTERVAL_MS = 1600
const NOC_LOG_INITIAL_COUNT = 0

const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const buildLogEntry = (template, date = new Date()) => ({
  level: template.level,
  message: template.message,
  time: formatTime(date),
})

const getRandomTemplate = () =>
  nocLogTemplates[Math.floor(Math.random() * nocLogTemplates.length)]

function ParallaxText({ items, baseVelocity = 100 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const directionFactor = useRef(1)
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`)

  const tokens = items.map((item, idx) => (
    <span
      key={`${item}-${idx}`}
      className={`scroller__item ${idx % 2 === 1 ? 'scroller__item--accent' : ''}`}
    >
      {item}
    </span>
  ))

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {tokens}
        {tokens}
        {tokens}
        {tokens}
      </motion.div>
    </div>
  )
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showDenied, setShowDenied] = useState(false)
  const [showCertOutput, setShowCertOutput] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isPrivileged, setIsPrivileged] = useState(false)
  const [isPasswordPrompt, setIsPasswordPrompt] = useState(false)
  const [pendingConfig, setPendingConfig] = useState(false)
  const [isNocShifting, setIsNocShifting] = useState(false)
  const [isNocSettling, setIsNocSettling] = useState(false)
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0)
  const [expProgress, setExpProgress] = useState(0)
  const [heroStep, setHeroStep] = useState(1)
  const nocShiftTimeoutRef = useRef(0)
  const nocShiftRafRef = useRef(0)
  const isNocShiftingRef = useRef(false)
  const experienceTimerRef = useRef(0)
  const experienceProgressRef = useRef(0)
  const nocLogsRef = useRef([])
  const projectsRef = useRef(null)
  const heroStepRefs = useRef([])
  const heroRef = useRef(null)
  const [nocLogs, setNocLogs] = useState(() =>
    Array.from({ length: NOC_LOG_INITIAL_COUNT }, (_, index) =>
      buildLogEntry(
        nocLogTemplates[index % nocLogTemplates.length],
        new Date(Date.now() - (NOC_LOG_INITIAL_COUNT - index) * NOC_LOG_INTERVAL_MS)
      )
    )
  )
  nocLogsRef.current = nocLogs

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
      { threshold: 0.5 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', updateScroll)
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isNocShiftingRef.current) return
      const template = getRandomTemplate()
      const nextLog = buildLogEntry(template)
      const nextLogs = [...nocLogsRef.current, nextLog]
      const shouldShift = nextLogs.length > NOC_VISIBLE_LIMIT
      setNocLogs(nextLogs)
      if (shouldShift) {
        isNocShiftingRef.current = true
        setIsNocShifting(true)
        nocShiftTimeoutRef.current = window.setTimeout(() => {
          setNocLogs((prev) => (prev.length > NOC_VISIBLE_LIMIT ? prev.slice(1) : prev))
          setIsNocShifting(false)
          setIsNocSettling(true)
          isNocShiftingRef.current = false
          nocShiftTimeoutRef.current = 0
          if (nocShiftRafRef.current) {
            cancelAnimationFrame(nocShiftRafRef.current)
          }
          nocShiftRafRef.current = requestAnimationFrame(() => {
            setIsNocSettling(false)
            nocShiftRafRef.current = 0
          })
        }, NOC_SHIFT_DURATION_MS)
      }
    }, NOC_LOG_INTERVAL_MS)
    return () => {
      clearInterval(interval)
      if (nocShiftTimeoutRef.current) {
        clearTimeout(nocShiftTimeoutRef.current)
      }
      if (nocShiftRafRef.current) {
        cancelAnimationFrame(nocShiftRafRef.current)
      }
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

  const SLIDE_DURATION_MS = 9000

  const startExperienceCycle = (index = 0) => {
    if (experienceTimerRef.current) clearTimeout(experienceTimerRef.current)
    if (experienceProgressRef.current) clearInterval(experienceProgressRef.current)

    setActiveExperienceIndex(index)
    setExpProgress(0)
    const startTs = Date.now()

    experienceProgressRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTs
      setExpProgress(Math.min(100, (elapsed / SLIDE_DURATION_MS) * 100))
    }, 120)

    experienceTimerRef.current = window.setTimeout(() => {
      const next = (index + 1) % experience.length
      startExperienceCycle(next)
    }, SLIDE_DURATION_MS)
  }

  useEffect(() => {
    startExperienceCycle(0)
    return () => {
      if (experienceTimerRef.current) clearTimeout(experienceTimerRef.current)
      if (experienceProgressRef.current) clearInterval(experienceProgressRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goToExperience = (index) => {
    startExperienceCycle(index)
  }

  // Hero step-on-scroll (reference-style)
  useEffect(() => {
    const onScroll = () => {
      const winTop = window.scrollY
      const winMid = winTop + window.innerHeight / 2
      const winBot = winTop + window.innerHeight

      let inViewIndex = 0
      heroStepRefs.current.forEach((el, idx) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const liTop = rect.top + winTop
        const liBot = liTop + rect.height
        const isInView = !(liBot <= winMid || liTop >= winBot)
        el.classList.toggle('inView', isInView || liTop <= winMid)
        if (isInView || liTop <= winMid) inViewIndex = idx
      })
      setHeroStep(inViewIndex + 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const goPrevExperience = () => {
    goToExperience((activeExperienceIndex - 1 + experience.length) % experience.length)
  }

  const goNextExperience = () => {
    goToExperience((activeExperienceIndex + 1) % experience.length)
  }

  const expGroupVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { when: 'beforeChildren', staggerChildren: 0.05 },
    },
  }

  const expItemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  }

  const projectGroupVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
  }

  const projectItemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.25, 0.8, 0.4, 1] } },
  }

  const [projectsOffset, setProjectsOffset] = useState(0)
  const [projectsShellHeight, setProjectsShellHeight] = useState(0)
  const projectCardsRef = useRef([])
  const projectGridRef = useRef(null)
  const projectsX = useMotionValue(0)
  const projectsLoopMarkerRef = useRef(null)

  const PROJECT_GAP_PX = 80
  // 7 tiles per cycle: 6 projects + 1 CTA tile
  const projectsCycle = [...projects, { isCta: true }]
  const loopCount = projectsCycle.length
  // render 2 cycles so we can wrap seamlessly
  const projectsLoop = [...projectsCycle, ...projectsCycle]

  const getProjectStep = () => {
    const firstCard = projectCardsRef.current?.[0]
    if (!firstCard) return 360
    const cardWidth = firstCard.getBoundingClientRect().width
    return Math.round(cardWidth + 20)
  }

  const moveProjectsByButton = (direction) => {
    const offset = projectsOffset
    if (!offset || offset <= 0) return

    const step = getProjectStep()
    const currentX = projectsX.get()

    let nextX = currentX + direction * step

    if (nextX > 0) nextX -= offset
    if (nextX <= -offset) nextX += offset

    projectsX.set(nextX)
  }


  // Auto-scroll projects right -> left (slow)
  const PROJECTS_AUTO_PX_PER_SEC = 18
  const projectsLastOffsetRef = useRef(0)

  useAnimationFrame((_, delta) => {
    const offset = projectsOffset

    // If nothing to scroll, keep at 0
    if (!offset || offset <= 0) {
      if (projectsX.get() !== 0) projectsX.set(0)
      projectsLastOffsetRef.current = offset
      return
    }

    // If offset changed (resize), clamp into valid range
    if (projectsLastOffsetRef.current !== offset) {
      const clamped = Math.min(0, Math.max(-offset, projectsX.get()))
      projectsX.set(clamped)
      projectsLastOffsetRef.current = offset
    }

    const moveBy = (PROJECTS_AUTO_PX_PER_SEC * delta) / 1000
    let next = projectsX.get() - moveBy

    // Loop seamlessly: when we hit the end, wrap back to start
    if (next <= -offset) next = 0

    projectsX.set(next)
  })


  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'start -110vh'],
  })
  const heroContentScale = useTransform(heroProgress, [0, 0.22, 0.52, 0.85, 1], [1, 1, 0.8, 0.45, 0.22])
  const heroContentOpacity = useTransform(heroProgress, [0, 0.3, 0.6, 0.85, 1], [1, 1, 0.8, 0.55, 0.25])
  const heroContentY = useTransform(heroProgress, [0, 1], [0, -180])
  const heroContentBlur = useTransform(heroProgress, [0, 0.5, 1], ['0px', '6px', '10px'])

  useEffect(() => {
    const computeOffset = () => {
      const viewportWidth =
        (projectsRef.current && projectsRef.current.getBoundingClientRect().width) || window.innerWidth
      const pad =
        projectsRef.current && window.getComputedStyle(projectsRef.current)
          ? parseFloat(window.getComputedStyle(projectsRef.current).paddingLeft || '0') +
            parseFloat(window.getComputedStyle(projectsRef.current).paddingRight || '0')
          : 0
      const usableWidth = Math.max(1, viewportWidth - pad)
      const marker = projectsLoopMarkerRef.current
      const loopWidth = marker ? marker.offsetLeft : 0
      setProjectsOffset(Math.max(0, loopWidth))
      const extra = Math.min(loopWidth, 500)
      setProjectsShellHeight(window.innerHeight + extra + 10)
    }
    const raf = requestAnimationFrame(computeOffset)
    window.addEventListener('resize', computeOffset)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', computeOffset)
    }
  }, [])

  const handleProjectMouseMove = (event, idx) => {
    const card = projectCardsRef.current[idx]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const tiltX = ((y - rect.height / 2) / rect.height) * 8
    const tiltY = (-(x - rect.width / 2) / rect.width) * 8
    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100
    card.style.setProperty('--tiltX', `${tiltX}deg`)
    card.style.setProperty('--tiltY', `${tiltY}deg`)
    card.style.setProperty('--glowX', `${glowX}%`)
    card.style.setProperty('--glowY', `${glowY}%`)
  }

  const handleProjectMouseLeave = (idx) => {
    const card = projectCardsRef.current[idx]
    if (!card) return
    card.style.setProperty('--tiltX', '0deg')
    card.style.setProperty('--tiltY', '0deg')
    card.style.setProperty('--glowX', '50%')
    card.style.setProperty('--glowY', '50%')
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
            <p className="brand__role">Network Engineer</p>
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
            <a href="#journey">My Journey</a>
            <a href="#projects">Projects</a>
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
        <section
          className={`hero hero--step-${heroStep}`}
          id="home"
          style={{ '--hero-bg': `url(${heroBg})` }}
          ref={heroRef}
        >
          <motion.div
            className="hero__pin"
            style={{
              scale: heroContentScale,
              opacity: heroContentOpacity,
              y: heroContentY,
              filter: heroContentBlur,
              transformOrigin: 'center center',
            }}
          >
          <motion.div
            className="hero__content"
            data-reveal
            ref={(el) => (heroStepRefs.current[0] = el)}
          >
            <p className="eyebrow">Available for work</p>
            <h1>
              Network Engineer
              <span className="hero__title-accent">Building reliable, scalable networks</span>
            </h1>
            <div className="hero__quotes">
              <div className="hero__quote">
                <span className="hero__quote-mark" aria-hidden="true">"</span>
                <p className="hero__lead">
                  “Most security failures show up first as strange network behavior. If you are watching the wire closely, the network will tell you the story.”
                  <br />
                  <span className="quote-attrib">— Paul Vixie</span>
                </p>
              </div>
              <div className="hero__quote">
                <span className="hero__quote-mark" aria-hidden="true">"</span>
                <p className="hero__lead">
                  “The Internet is a collection of networks that agree to speak the same language.”
                  <br />
                  <span className="quote-attrib">— Vint Cerf</span>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero__visual"
            data-reveal
            ref={(el) => (heroStepRefs.current[1] = el)}
          >
            <div className="noc-panel">
              <div className="noc-panel__header">NOC Live Feed</div>
              <div
                className="noc-panel__body"
                style={{
                  '--noc-panel-height': `${NOC_PANEL_HEIGHT_PX}px`,
                  '--noc-line-step': `${NOC_LINE_STEP_PX}px`,
                  '--noc-line-gap': `${NOC_LINE_GAP_PX}px`,
                  '--noc-shift-duration': `${NOC_SHIFT_DURATION_MS}ms`,
                }}
              >
                <div
                  className={`noc-panel__stream ${isNocShifting ? 'noc-panel__stream--shift' : ''} ${
                    isNocSettling ? 'noc-panel__stream--settle' : ''
                  }`}
                >
                  {nocLogs.map((log, index) => (
                    <span className="noc-panel__line" key={`${log.time}-${index}`}>
                      <span className={`log-tag log-tag--${log.level}`}>
                        [{log.level.toUpperCase()}]
                      </span>{' '}
                      {log.time} {log.message}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="noc-kpis" data-reveal>
              {nocMetrics.map((metric) => (
                <div className="noc-kpi" key={metric.label}>
                  <p className="noc-kpi__label">{metric.label}</p>
                  <p className="noc-kpi__value">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          </motion.div>
        </section>

        <section className="section section--profile" id="about">
          <div className="profile__intro" data-reveal>
            <div className="profile__meta profile__meta--aligned">
              <div className="profile__meta-left">
                <div className="profile__left-row">
                  <span className="profile__status-dot" aria-hidden="true" />
                  <span className="profile__status">MSc Cybersecurity</span>
                </div>
              </div>
              <div className="profile__meta-center">
                <div className="profile__role-line">
                  <p className="profile__role profile__role--center">Network Engineer</p>
                </div>
              </div>
              <div className="profile__meta-right">
                <div className="profile__location-row">
                  <span className="profile__bullet" aria-hidden="true" />
                  <span className="profile__location">Plymouth, England</span>
                </div>
                <span className="profile__relocation">Open to relocation</span>
              </div>
            </div>
            <h2 className="profile__name">Shubodaya Kumar</h2>
            <p className="profile__summary">
              I approach network engineering with a reliability-first mindset, where availability, security,
              and continuity are non-negotiable, because networks are only valuable when they can be trusted.
            </p>
          </div>

          <div className="profile__ticker" data-reveal>
            <ParallaxText baseVelocity={-1.5} items={networkTicker} />
            <ParallaxText baseVelocity={1.5} items={networkTicker} />
          </div>

          <div className="profile__visuals" data-reveal>
            <div className="about__image">
              <img src={networkTopology} alt="Network topology overview" />
            </div>
            <div className="hero__terminal hero__terminal--about">
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
                <span className="terminal-spacer" />
              </div>
              <div className="terminal-interactive">
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
            </div>
          </div>
        </section>

        <section
          className="section section--with-bg"
          id="journey"
          style={{ backgroundImage: `url(${networkNodes})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">My Journey</p>
            <h2>THE STORY SO FAR</h2>
          </div>
          <div className="experience-carousel" data-reveal>
            <div className="experience-controls">
              <button className="pill-btn" type="button" onClick={goPrevExperience} aria-label="Previous role">
                ‹
              </button>
              <div className="experience-bars">
                {experience.map((_, idx) => (
                  <button
                    key={_.role}
                    type="button"
                    className="experience-bar"
                    onClick={() => goToExperience(idx)}
                    aria-label={`Jump to ${_.role}`}
                  >
                    <span
                      className="experience-bar__fill"
                      style={{
                        width:
                          idx === activeExperienceIndex
                            ? `${expProgress}%`
                            : idx < activeExperienceIndex
                            ? '100%'
                            : '0%',
                      }}
                    />
                  </button>
                ))}
              </div>
              <button className="pill-btn" type="button" onClick={goNextExperience} aria-label="Next role">
                ›
              </button>
            </div>
            <div className="experience-stage">
              <AnimatePresence mode="wait">
                <motion.article
                  key={experience[activeExperienceIndex].role}
                  className="experience-card"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -26 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.8, 0.4, 1] }}
                  whileHover={{ scale: 1.01, boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}
                >
                  <motion.header className="experience-card__header" variants={expGroupVariants} initial="hidden" animate="show">
                    <motion.div variants={expItemVariants}>
                      <p className="experience-card__date">{experience[activeExperienceIndex].dates}</p>
                      <h3>{experience[activeExperienceIndex].role}</h3>
                      <div className="experience-card__company">
                        <span>{experience[activeExperienceIndex].company}</span>
                        <span>{experience[activeExperienceIndex].location}</span>
                      </div>
                      <div className="experience-card__tags">
                        {experience[activeExperienceIndex].tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.header>
                  <div className="experience-card__body">
                    <motion.div variants={expGroupVariants} initial="hidden" animate="show">
                      <p className="experience-card__section-title">Highlights</p>
                      <motion.ul variants={expGroupVariants}>
                        {experience[activeExperienceIndex].highlights.map((item) => (
                          <motion.li key={item} variants={expItemVariants}>
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                    <motion.div className="experience-card__panel" variants={expGroupVariants} initial="hidden" animate="show">
                      <p className="experience-card__section-title">Key Achievements</p>
                      <motion.ul variants={expGroupVariants}>
                        {experience[activeExperienceIndex].achievements.map((item) => (
                          <motion.li key={item} variants={expItemVariants}>
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                  <div className="experience-card__glow" aria-hidden />
                  <div className="experience-card__shine" aria-hidden />
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <div className="hero-step-sentinel" aria-hidden ref={(el) => (heroStepRefs.current[2] = el)} />

        <section
          className="section section--with-bg projects-fixed"
          id="projects"
          style={{ '--section-bg': `url(${vscodePython})` }}
          ref={projectsRef}
        >
          <div
            className="projects-shell"
          >
            <div className="projects-sticky">
              <div className="section__header projects-header">
                <div className="projects-header__row">
                  <div>
                    <p className="eyebrow">Featured Work</p>
                    <h2>FEATURED PROJECTS</h2>
                  </div>

                  <div className="projects-nav">
                    <button
                      type="button"
                      className="projects-nav__btn"
                      aria-label="Previous projects"
                      onClick={() => moveProjectsByButton(1)}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="projects-nav__btn"
                      aria-label="Next projects"
                      onClick={() => moveProjectsByButton(-1)}
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

              <motion.div
                className="project-grid"
                variants={projectGroupVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                style={{ x: projectsX }}
                ref={projectGridRef}
              >
                {projectsLoop.map((item, idx) => {
                  const isGap = idx === loopCount

                  if (isGap) {
                    return (
                      <div
                        key="projects-loop-gap"
                        ref={projectsLoopMarkerRef}
                        style={{ width: `${PROJECT_GAP_PX}px`, flex: '0 0 auto' }}
                      />
                    )
                  }

                  if (item.isCta) {
                    return (
                      <motion.div
                        className="project-card project-card--cta"
                        key={`cta-${idx}`}
                        variants={projectItemVariants}
                        whileHover={{ scale: 1.02, translateY: -6 }}
                      >
                        <span className="project-card__index">∞</span>
                        <p className="project-card__year">More</p>
                        <h3>Explore on GitHub</h3>
                        <p>See more hands-on labs and automation work.</p>
                        <a className="button button--ghost" href="https://github.com/shubodaya?tab=repositories">
                          Explore more on GitHub
                        </a>
                      </motion.div>
                    )
                  }

                  // normal project card
                  const project = item
                  const indexInCycle = idx % loopCount // 0..6, where 6 would be CTA (but handled above)
                  const displayIndex = Math.min(indexInCycle + 1, projects.length) // 1..6 for projects

                  return (
                    <motion.article
                      className="project-card"
                      key={`${project.title}-${idx}`}
                      variants={projectItemVariants}
                      whileHover={{ scale: 1.02, translateY: -6 }}
                      ref={(el) => (projectCardsRef.current[idx] = el)}
                      onMouseMove={(e) => handleProjectMouseMove(e, idx)}
                      onMouseLeave={() => handleProjectMouseLeave(idx)}
                    >
                      <span className="project-card__index">{String((idx % projects.length) + 1).padStart(2, '0')}</span>
                      <p className="project-card__year">{project.year}</p>
                      <h3>{project.title}</h3>
                      <p>{project.detail}</p>
                    </motion.article>
                  )
                })}
                <motion.div
                  className="project-card project-card--cta"
                  variants={projectItemVariants}
                  whileHover={{ scale: 1.02, translateY: -6 }}
                >
                  <span className="project-card__index">∞</span>
                  <p className="project-card__year">More</p>
                  <h3>Explore on GitHub</h3>
                  <p>See more hands-on labs and automation work.</p>
                  <a className="button button--ghost" href="https://github.com/shubodaya?tab=repositories">
                    Explore more on GitHub
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          className="section section--with-bg tech-section"
          id="skills"
          style={{ '--section-bg': `url(${socImage})` }}
        >
          <div className="section__header" data-reveal>
            <p className="eyebrow">Tech</p>
            <h2>NETWORKING TOOLS I RELY ON</h2>
            <p className="section__note">
              Core platforms, protocols, and automations I use to keep networks reliable, secure, and observable.
            </p>
          </div>
          <div className="tech-grid">
            {[
              { title: 'Routing & Switching', items: ['OSPF/BGP', 'STP/LACP', 'VLANs/VRRP', 'QoS', 'MSTP'] },
              { title: 'Network Security', items: ['Firewalls', 'NAT/ACL', 'SSL/IPSec VPN', 'WAF', 'Zero Trust'] },
              { title: 'Cloud Networking', items: ['Azure VNets', 'VPC Peering', 'Transit/Hub-Spoke', 'ExpressRoute/S2S', 'Sentinel'] },
              { title: 'Monitoring & Observability', items: ['PRTG', 'Syslog/SNMP', 'NetFlow', 'Wireshark', 'SIEM Dashboards'] },
              { title: 'Automation & SRE', items: ['Ansible', 'Python', 'REST APIs', 'GitOps', 'ITSM Workflows'] },
              { title: 'Identity & Access', items: ['AD/Azure AD', 'LDAP/RADIUS', 'MFA', '802.1X/WLAN', 'Role-based Access'] },
            ].map((card, idx) => (
              <motion.article
                key={card.title}
                className="tech-card"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="tech-card__glow" aria-hidden />
                <header className="tech-card__header">
                  <span className="tech-card__index">{String(idx + 1).padStart(2, '0')}</span>
                  <h3>{card.title}</h3>
                </header>
                <ul className="tech-card__list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
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
            <h2>CERTIFICATIONS</h2>
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
            <h2>CREATIVE ENERGY OUTSIDE THE NOC</h2>
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
              <h2>LET US BUILD A STRONGER NETWORK TOGETHER</h2>
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



