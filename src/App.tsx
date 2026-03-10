import {
  Search,
  ArrowRight,
  CheckCircle2,
  Star,
  MessageSquare,
  LayoutDashboard,
  MapPin,
  Clock,
  Bot,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Zap,
  Target,
} from "lucide-react";
import "./App.css";

// ── DATA ──────────────────────────────────────────────────────────────
const trainers = [
  {
    id: 1,
    name: "Marcus Johnson",
    sport: "Badminton",
    rating: 4.9,
    reviews: 107,
    exp: "8 yrs exp",
    modes: ["In-Person", "Virtual", "Group"],
    price: 60,
    img: "https://images.unsplash.com/photo-1550534791-2677533605ab?w=400&q=80",
  },
  {
    id: 2,
    name: "Darius Williams",
    sport: "Football",
    rating: 4.7,
    reviews: 143,
    exp: "10 yrs exp",
    modes: ["In-Person", "Group", "Team"],
    price: 55,
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80",
  },
  {
    id: 3,
    name: "Aisha Thompson",
    sport: "Basketball",
    rating: 4.8,
    reviews: 89,
    exp: "9 yrs exp",
    modes: ["In-Person", "Group"],
    price: 70,
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
  },
];

const stories = [
  {
    id: 1,
    text: `"TrainIQ's AI matched me with the perfect tennis coach in minutes. My game has improved dramatically!"`,
    name: "Emma Rodriguez",
    role: "Ho Chi Minh · Tennis Enthusiast",
    initials: "ER",
    color: "#3182ce",
  },
  {
    id: 2,
    text: `"I've tried other platforms but nothing compares to the AI matching here. Found my dream trainer instantly."`,
    name: "Kevin Park",
    role: "Ho Chi Minh · Badminton Player",
    initials: "KP",
    color: "#48bb78",
  },
  {
    id: 3,
    text: `"The chat feature is seamless. I communicate with my swimming coach daily and my technique has never been better."`,
    name: "Zoe Williams",
    role: "Ho Chi Minh · Swimmer",
    initials: "ZW",
    color: "#f6ad55",
  },
];

// ── NAVBAR ────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">S</div>
        SPORTICO
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#" className="active">
            Find Trainers
          </a>
        </li>
        <li>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <MessageSquare size={15} /> Messages
          </a>
        </li>
        <li>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <LayoutDashboard size={15} /> Dashboard
          </a>
        </li>
      </ul>
      <div className="nav-actions">
        <button className="btn-ghost">Sign In</button>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="hero-content">
          <div className="hero-badge">
            <Bot size={14} /> AI-Powered Sportico Platform
          </div>
          <h1 className="hero-title">
            Find Your Perfect
            <br />
            <span className="highlight">Sports Coach</span> with us
          </h1>
          <p className="hero-desc">
            Connect with elite coaches across 30+ sports. Our AI assistant
            matches you with the best trainer based on your goals, schedule, and
            budget — in seconds.
          </p>
          <div className="hero-buttons">
            <button className="btn-hero-primary">
              <Search size={17} /> Find a Coach
            </button>
            <button className="btn-hero-secondary">
              Become a Coach <ArrowRight size={17} />
            </button>
          </div>
          <div className="hero-checks">
            <span className="hero-check">
              <CheckCircle2 size={15} /> No commitment required
            </span>
            <span className="hero-check">
              <CheckCircle2 size={15} /> Free AI matching
            </span>
            <span className="hero-check">
              <CheckCircle2 size={15} /> Verified trainers
            </span>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80"
            alt="Sports Coach"
          />
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-icon" style={{ color: "#63b3ed" }}>
            👤
          </span>
          <span className="hero-stat-value">2,400+</span>
          <span className="hero-stat-label">Expert Trainers</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-icon" style={{ color: "#fbbf24" }}>
            ⭐
          </span>
          <span className="hero-stat-value">4.8</span>
          <span className="hero-stat-label">Average Rating</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-icon" style={{ color: "#68d391" }}>
            📈
          </span>
          <span className="hero-stat-value">18K+</span>
          <span className="hero-stat-label">Active Learners</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-icon" style={{ color: "#fc8181" }}>
            🏅
          </span>
          <span className="hero-stat-value">30+</span>
          <span className="hero-stat-label">Sports Covered</span>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: <Target size={24} />,
      iconClass: "i1",
      cardClass: "c1",
      title: "Tell Sportico your goals",
      desc: "Chat with our intelligent AI assistant about your sport, skill level, schedule, and training objectives.",
    },
    {
      num: "2",
      icon: <Search size={24} />,
      iconClass: "i2",
      cardClass: "c2",
      title: "Get matched instantly",
      desc: "Our AI analyzes thousands of trainer profiles to find the perfect match for your specific needs.",
    },
    {
      num: "3",
      icon: <Zap size={24} />,
      iconClass: "i3",
      cardClass: "c3",
      title: "Start training",
      desc: "Connect with your trainer through our built-in chat, book sessions, and track your progress.",
    },
  ];
  return (
    <section className="section section-center">
      <div className="section-badge">
        <Bot size={14} /> AI-Powered Process
      </div>
      <h2 className="section-title">How Sportico Works</h2>
      <p className="section-sub">
        Our intelligent platform simplifies the process of finding the right
        coach for any sport.
      </p>
      <div className="works-grid">
        {steps.map((s) => (
          <div key={s.num} className={`works-card ${s.cardClass}`}>
            <div className="works-num">{s.num}</div>
            <div className={`works-icon ${s.iconClass}`}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── FEATURED TRAINERS ─────────────────────────────────────────────────
function FeaturedTrainers() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="trainers-header">
        <div>
          <div className="top-rated">
            <Star size={15} fill="currentColor" /> Top Rated
          </div>
          <h2 className="section-title">Featured Trainers</h2>
        </div>
        <span className="view-all">
          View All Trainers <ChevronRight size={16} />
        </span>
      </div>
      <div className="trainers-grid">
        {trainers.map((t) => (
          <div key={t.id} className="trainer-card">
            <div className="trainer-img-wrap">
              <img src={t.img} alt={t.name} />
              <span className="featured-badge">Featured</span>
              <span className="trainer-rating">
                <Star size={12} fill="currentColor" /> {t.rating} ({t.reviews})
              </span>
            </div>
            <div className="trainer-body">
              <div className="trainer-name">{t.name}</div>
              <div className="trainer-sport">{t.sport}</div>
              <div className="trainer-meta">
                <span className="trainer-meta-item">
                  <MapPin size={13} /> Ho Chi Minh
                </span>
                <span className="trainer-meta-item">
                  <Clock size={13} /> {t.exp}
                </span>
              </div>
              <div className="trainer-footer">
                <div>
                  <div className="trainer-price">
                    ${t.price} <span>/hr</span>
                  </div>
                  <div className="trainer-modes">
                    {t.modes.map((m) => (
                      <span key={m} className="mode-chip">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn-view-profile">
                  View Profile <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── SUCCESS STORIES ───────────────────────────────────────────────────
function SuccessStories() {
  return (
    <section className="stories-section section-center">
      <h2 className="section-title">Success Stories</h2>
      <p className="section-sub">
        Thousands of learners have transformed their game with TrainIQ.
      </p>
      <div className="stories-grid">
        {stories.map((s) => (
          <div key={s.id} className="story-card">
            <div className="story-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={17} fill="currentColor" />
              ))}
            </div>
            <p className="story-text">{s.text}</p>
            <div className="story-author">
              <div className="story-avatar" style={{ background: s.color }}>
                {s.initials}
              </div>
              <div>
                <div className="story-name">{s.name}</div>
                <div className="story-role">{s.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Ready to Transform Your Game?</h2>
      <p className="cta-sub">
        Join 18,000+ athletes training smarter with AI-matched coaches.
      </p>
      <div className="cta-buttons">
        <button className="btn-cta-primary">Find a Trainer Now</button>
        <button className="btn-cta-secondary">Contact Us</button>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────
function Footer() {
  const socialIcons = [Instagram, Twitter, Linkedin, Facebook];
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <a href="#" className="nav-logo" style={{ color: "white" }}>
            <div className="nav-logo-icon">S</div>
            SPORTICO
          </a>
          <p className="footer-brand-desc">
            AI-powered platform connecting elite sports coaches with motivated
            learners in Vietnam.
          </p>
          <div className="footer-socials">
            {socialIcons.map((Icon, i) => (
              <button key={i} className="social-btn">
                <Icon />
              </button>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            {["Find Coach", "Get Started", "Messages", "My Profile"].map(
              (l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="footer-col">
          <h4>For Trainers</h4>
          <ul>
            {["My Profile", "Account", "Schedule", "Reviews"].map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map(
              (l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Sportico. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedTrainers />
      <SuccessStories />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
