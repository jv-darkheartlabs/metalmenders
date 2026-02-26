import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";
import {
  Wrench,
  MapPin,
  Phone,
  Clock,
  Shield,
  Star,
  Users,
  Car,
  Hammer,
  ChevronDown,
  Mail,
  Flag,
  Paintbrush,
  CircleDot,
  CheckCircle2,
  ArrowRight,
  Truck,
  Sun,
  Moon,
} from "lucide-react";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Wrench className="w-6 h-6 text-accent" />
          <div>
            <span className="font-bold text-lg tracking-tight" data-testid="text-brand-name">
              Metal Menders
            </span>
            <span className="hidden sm:inline text-muted-foreground text-sm ml-1">
              Collision Center
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 flex-wrap">
          {["services", "stats", "about", "local", "contact"].map((s) => (
            <Button
              key={s}
              variant="ghost"
              size="sm"
              onClick={() => scrollTo(s)}
              data-testid={`link-nav-${s}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle-mobile"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            <ChevronDown className={`w-5 h-5 transition-transform ${mobileOpen ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-1 bg-background">
          {["services", "stats", "about", "local", "contact"].map((s) => (
            <Button
              key={s}
              variant="ghost"
              className="justify-start"
              onClick={() => scrollTo(s)}
              data-testid={`link-mobile-${s}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-visible" data-testid="section-hero">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(215 60% 18%) 0%, hsl(220 20% 12%) 60%, hsl(0 50% 25%) 100%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, hsl(220 15% 8% / 0.8))" }} />

      <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28 lg:py-36">
        <div className="flex items-center gap-2 mb-6">
          <Flag className="w-5 h-5 text-red-400" />
          <span className="text-red-300 font-mono text-sm tracking-wider uppercase">
            American-Owned &middot; American-Built
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          We Fix Cars.
          <br />
          <span className="text-red-400">No Excuses.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Metal Menders Collision Center serves Arabi and St. Bernard Parish
          with honest, hard-working collision repair. We let our work speak
          for itself.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="bg-red-700 border-red-800 text-white"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hero-services"
          >
            Our Services
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white/20"
            style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.06)" }}
            asChild
          >
            <a href="tel:+15048125757" data-testid="link-hero-call">
              <Phone className="w-4 h-4 mr-1" />
              Call Us
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-400" />
            <span>7308 W Saint Bernard Hwy, Arabi, LA 70032</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-red-400" />
            <a href="tel:+15048125757" className="hover:text-white transition-colors" data-testid="link-hero-phone">
              (504) 812-5757
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { label: "St. Bernard Parish Pop.", value: "~48,000", icon: Users },
    { label: "Vehicles on the Road", value: "35,000+", icon: Car },
    { label: "Avg. Commute", value: "25 min", icon: Clock },
    { label: "Local Since", value: "Day One", icon: Flag },
  ];

  return (
    <div className="bg-card border-y" data-testid="section-stats-bar">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-2">
              <s.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <div className="text-xl font-bold" data-testid={`text-stat-value-${i}`}>{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Hammer,
      title: "Collision Repair",
      desc: "Frame straightening, structural repair, and full collision restoration. We handle everything from fender benders to major wrecks.",
    },
    {
      icon: Paintbrush,
      title: "Paint & Refinishing",
      desc: "Computer-matched paint for a factory finish. Single panel or full body - we get the color right the first time.",
    },
    {
      icon: CircleDot,
      title: "Dent Removal",
      desc: "Paintless dent repair for hail damage and minor dings. Saves time and money without repainting.",
    },
    {
      icon: Car,
      title: "Frame & Unibody",
      desc: "Precision frame and unibody repair using computerized measuring. Your vehicle's structural integrity restored to spec.",
    },
    {
      icon: Shield,
      title: "Insurance Claims",
      desc: "We work with all major insurance companies. Free estimates and help navigating the claims process.",
    },
    {
      icon: Truck,
      title: "Fleet Services",
      desc: "Commercial fleet and work truck repair. Keeping St. Bernard's working vehicles on the road.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20" data-testid="section-services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3">What We Do</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Straight-Up Collision Repair</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            No gimmicks. No fancy waiting rooms. Just quality body work at honest prices.
            We put every dollar into the tools and talent that fix your vehicle right.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Card key={i} className="hover-elevate">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-accent/10 shrink-0">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid={`text-service-title-${i}`}>{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ByTheNumbersSection() {
  const facts = [
    {
      number: "4,400+",
      label: "Arabi Residents",
      detail: "Population of Arabi, LA (2023 Census estimate). This is our home.",
    },
    {
      number: "48,000",
      label: "Parish Neighbors",
      detail: "St. Bernard Parish population we're proud to serve.",
    },
    {
      number: "25.2 min",
      label: "Average Commute",
      detail: "Local workers spend 25+ minutes on the road daily. More drive time = more chance for incidents.",
    },
    {
      number: "18,600",
      label: "Employed Workers",
      detail: "People working in St. Bernard Parish - petrochemical, maritime, and trades.",
    },
    {
      number: "$52,500",
      label: "Median Income",
      detail: "Arabi's median household income. We price our work for working families.",
    },
    {
      number: "59%",
      label: "Homeowner Rate",
      detail: "Locals who own their homes and their vehicles. People who invest in what they have.",
    },
  ];

  return (
    <section id="stats" className="py-16 sm:py-20 bg-card border-y" data-testid="section-stats">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3">By the Numbers</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Facts, Not Fluff</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Real numbers about our community. We believe in facts and hard work - 
            not flashy marketing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((f, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="text-3xl font-bold text-accent mb-1" data-testid={`text-number-${i}`}>
                  {f.number}
                </div>
                <div className="font-semibold mb-2">{f.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Sources: U.S. Census Bureau, American Community Survey, St. Bernard Economic Development Foundation
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    {
      icon: Hammer,
      title: "Work Ethic Over Image",
      desc: "We don't have a fancy lobby. We have a clean shop with good tools and experienced hands. Your money goes to fixing your car, not decorating our walls.",
    },
    {
      icon: Flag,
      title: "Proudly American",
      desc: "American-owned, American-operated. We believe in the values that built this country: hard work, honesty, and standing behind your word.",
    },
    {
      icon: Shield,
      title: "Hurricane Tested",
      desc: "St. Bernard Parish took a direct hit from Katrina. Like our neighbors, we rebuilt. We know what it means to come back stronger. That resilience is in every repair we make.",
    },
    {
      icon: Users,
      title: "Small Town, Big Heart",
      desc: "In a parish of 48,000 people, your reputation is everything. We treat every customer like a neighbor because they probably are.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3">Who We Are</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">The Underdog Shop</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We're not a chain. We're not corporate. We're a local collision center that 
            believes in doing the job right, charging a fair price, and shaking your hand 
            when it's done.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" data-testid={`text-value-title-${i}`}>
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "We don't make promises we can't keep. If we say we'll have your car ready 
                  by Friday, it'll be ready by Friday. If there's a problem, we'll call you 
                  and tell you straight. That's how business should work."
                </p>
                <p className="mt-3 text-sm font-medium">
                  - Metal Menders Collision Center
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function LocalSection() {
  const localFacts = [
    {
      title: "Automotive Heritage",
      desc: "Arabi once housed a Ford assembly plant that employed 400 workers. The auto industry is in this community's DNA.",
    },
    {
      title: "Working-Class Roots",
      desc: "St. Bernard Parish is powered by petrochemical, maritime, and trades workers. People who drive trucks and depend on their vehicles every day.",
    },
    {
      title: "Rebuilt After Katrina",
      desc: "Arabi's population dropped from 8,092 to 3,635 after Katrina. The community has fought back to over 4,400 residents. That's grit.",
    },
    {
      title: "Cost of Living Advantage",
      desc: "Cost of living index of 95.3 (below national average). Affordable area, and we keep our prices in line with local budgets.",
    },
    {
      title: "Growing Economy",
      desc: "$1.5B Port of New Orleans expansion is underway in St. Bernard Parish. Three federal Opportunity Zones covering 2,085 acres.",
    },
    {
      title: "Diverse Heritage",
      desc: "German, Italian, Irish, French, and Cajun roots run deep. 72% of Arabi residents lived in the same house 5 years ago. This is a community that stays.",
    },
  ];

  return (
    <section id="local" className="py-16 sm:py-20 bg-card border-y" data-testid="section-local">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3">Our Community</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Arabi & St. Bernard Parish</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We know this community because we are this community. Here are the facts 
            about the people and place we serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {localFacts.map((f, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2" data-testid={`text-local-title-${i}`}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Come See Us</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Swing by the shop or give us a call. Free estimates, no pressure.
            We'll tell you what needs to be done and what it'll cost. Straight talk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Location</div>
                  <div className="text-muted-foreground text-sm">
                    7308 W Saint Bernard Hwy<br />
                    Arabi, LA 70032
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a href="tel:+15048125757" className="text-muted-foreground text-sm hover:text-foreground transition-colors" data-testid="link-contact-phone">
                    (504) 812-5757
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:metalmenders@msn.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors" data-testid="link-contact-email">
                    metalmenders@msn.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">Hours</div>
                  <div className="text-muted-foreground text-sm">
                    Mon-Fri: 7:30 AM - 5:00 PM<br />
                    Sat: 8:00 AM - 12:00 PM<br />
                    Sun: Closed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    "Free estimates on all collision work",
    "We work with all insurance companies",
    "Locally owned - not a chain, not corporate",
    "Computerized paint matching for factory finish",
    "Certified technicians with real experience",
    "Transparent pricing - no hidden fees",
    "We keep it simple and do it right",
    "Serving St. Bernard Parish proudly",
  ];

  return (
    <section className="py-16 sm:py-20 bg-card border-y" data-testid="section-why-choose">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-3">Why Metal Menders</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Local Shops Like Us Matter</h2>

          <div className="grid sm:grid-cols-2 gap-3 text-left">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-2 py-1">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span className="text-sm" data-testid={`text-reason-${i}`}>{r}</span>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Local shops reportedly charge up to 50% less than dealership body shops.
            We keep overhead low so you keep more of your hard-earned money.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10 bg-card" data-testid="section-footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-5 h-5 text-accent" />
              <span className="font-bold">Metal Menders</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Collision repair done right in Arabi, Louisiana.
              American-owned. Hard-working. Honest.
            </p>
          </div>

          <div>
            <div className="font-semibold mb-3 text-sm">Contact</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>7308 W Saint Bernard Hwy</div>
              <div>Arabi, LA 70032</div>
              <div>
                <a href="tel:+15048125757" className="hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  (504) 812-5757
                </a>
              </div>
              <div>
                <a href="mailto:metalmenders@msn.com" className="hover:text-foreground transition-colors" data-testid="link-footer-email">
                  metalmenders@msn.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-3 text-sm">Hours</div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between gap-4 flex-wrap">
                <span>Mon - Fri</span>
                <span>7:30 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between gap-4 flex-wrap">
                <span>Saturday</span>
                <span>8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between gap-4 flex-wrap">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Metal Menders Collision Center. All rights reserved.</span>
          <div className="flex items-center gap-1">
            <Flag className="w-3 h-3 text-accent" />
            <span>Made in America</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ByTheNumbersSection />
      <AboutSection />
      <WhyChooseSection />
      <LocalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
