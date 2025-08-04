import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, ArrowRight, TrendingUp, Users, DollarSign, Zap, Globe, Shield, Brain, Smartphone, BarChart3, Target, Award, Mail, Phone, PieChart, LineChart, Activity, Building } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    'hero',
    'problem',
    'solution',
    'services-cmt',
    'services-wmy',
    'business-model',
    'traction',
    'projections',
    'team',
    'investment',
    'contact'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const HeroSlide = () => (
    <div className="pitch-slide bg-background text-foreground relative overflow-hidden">
      <div className="pitch-content text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-primary">
            COMPLETRIX
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-muted-foreground">
            MICROTECHNOLOGIES PRIVATE LIMITED
          </p>
          <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed text-foreground">
            Transforming Businesses Through <span className="text-accent font-bold">AI Innovation</span> 
            {' '}& <span className="text-accent font-bold">Strategic Marketing</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-white border border-border hover:shadow-elevated transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary">CMT AI</h3>
              <p className="text-lg text-muted-foreground">Advanced Technology Solutions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border hover:shadow-elevated transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary">We Market You</h3>
              <p className="text-lg text-muted-foreground">Strategic Digital Marketing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const ProblemSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">The Challenge</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="subsection-title text-primary">Market Pain Points</h3>
            <div className="space-y-6">
              {[
                "70% of businesses struggle with digital transformation",
                "Small-medium businesses lack access to enterprise-grade AI solutions",
                "Marketing ROI remains unpredictable for most companies",
                "Technical expertise gap prevents innovation adoption"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-card border border-border">
                  <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-lg text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-elevated border border-border">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <PieChart className="w-full h-full text-accent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">70%</div>
                    <div className="text-xs text-muted-foreground">Struggling</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-4">Market Gap</h4>
                <p className="text-lg text-muted-foreground">
                  ₹2.3 Trillion Indian IT market with growing demand for integrated AI & marketing solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SolutionSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">Our Solution</h2>
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A comprehensive ecosystem combining cutting-edge AI technology with strategic marketing expertise
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-spring">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Integrated Approach</h3>
              <p className="text-muted-foreground">
                Seamless combination of technical development and marketing strategy
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-spring">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Scalable Solutions</h3>
              <p className="text-muted-foreground">
                From startups to enterprises, tailored solutions for every business size
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-spring">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Proven Results</h3>
              <p className="text-muted-foreground">
                50+ successful transformations with measurable ROI improvements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const ServicesCMTSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h2 className="section-title">CMT AI Services</h2>
          <p className="text-xl text-muted-foreground">Advanced Technology Solutions</p>
        </div>
        
        <div className="relative mb-12">
          <div className="bg-white border border-border rounded-2xl shadow-elevated p-8">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Building className="w-12 h-12 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">Web Apps</span>
              </div>
              <div className="flex flex-col items-center">
                <Smartphone className="w-12 h-12 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">Mobile</span>
              </div>
              <div className="flex flex-col items-center">
                <Brain className="w-12 h-12 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">AI/ML</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">Cloud</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Web Development", services: ["Custom Websites", "E-commerce", "Web Apps", "CMS", "PWAs"] },
            { title: "Mobile Apps", services: ["Android", "iOS", "Cross-Platform", "Hybrid", "Support"] },
            { title: "AI & ML", services: ["Chatbots", "Analytics", "NLP", "Computer Vision", "Model Training"] },
            { title: "Cloud Services", services: ["App Development", "Migration", "Infrastructure", "DevOps", "Backup"] },
            { title: "Custom Software", services: ["Enterprise", "ERP/CRM", "Inventory", "POS", "SaaS"] },
            { title: "Maintenance", services: ["Bug Fixes", "Optimization", "Upgrades", "Security", "SLA Support"] }
          ].map((category, index) => (
            <Card key={index} className="bg-white border border-border hover:shadow-elevated transition-smooth">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-primary mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-accent" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const ServicesWMYSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="section-title">We Market You Services</h2>
          <p className="text-xl text-muted-foreground">Strategic Digital Marketing Excellence</p>
        </div>
        
        <div className="relative mb-12">
          <div className="bg-white border border-border rounded-2xl shadow-elevated p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <BarChart3 className="w-16 h-16 text-accent mb-4" />
                <div className="text-2xl font-bold text-primary">300%</div>
                <span className="text-sm text-muted-foreground">Avg ROI Increase</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="w-16 h-16 text-accent mb-4" />
                <div className="text-2xl font-bold text-primary">150%</div>
                <span className="text-sm text-muted-foreground">Lead Generation</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-16 h-16 text-accent mb-4" />
                <div className="text-2xl font-bold text-primary">85%</div>
                <span className="text-sm text-muted-foreground">Client Retention</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Digital Marketing</h3>
              <div className="grid grid-cols-2 gap-4">
                {["SEO & SEM", "Social Media", "Paid Campaigns", "Email Marketing", "Content Strategy", "Analytics"].map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Strategic Communications</h3>
              <div className="grid grid-cols-2 gap-4">
                {["PR Services", "Crisis Communication", "Reputation Management", "Advocacy & Lobbying", "Election Campaigns", "Media Relations"].map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const BusinessModelSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">Business Model</h2>
        <div className="mb-12">
          <div className="bg-white border border-border rounded-2xl shadow-elevated p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-success">40%</div>
                <span className="text-sm text-muted-foreground">Project-Based</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary">35%</div>
                <span className="text-sm text-muted-foreground">Retainer Model</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-accent">25%</div>
                <span className="text-sm text-muted-foreground">Performance-Based</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Project-Based</h3>
              <p className="text-muted-foreground mb-4">Custom solutions with fixed pricing</p>
              <div className="text-2xl font-bold text-success">40%</div>
              <p className="text-sm text-muted-foreground">of revenue</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Retainer Model</h3>
              <p className="text-muted-foreground mb-4">Ongoing support & maintenance</p>
              <div className="text-2xl font-bold text-primary">35%</div>
              <p className="text-sm text-muted-foreground">of revenue</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Performance-Based</h3>
              <p className="text-muted-foreground mb-4">Results-driven pricing</p>
              <div className="text-2xl font-bold text-accent">25%</div>
              <p className="text-sm text-muted-foreground">of revenue</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const TractionSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">Current Traction</h2>
        <div className="mb-12">
          <div className="bg-white border border-border rounded-2xl shadow-elevated p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <LineChart className="w-16 h-16 text-success mb-4" />
                <div className="text-4xl font-black text-success mb-2">₹10-12L</div>
                <p className="text-lg font-semibold text-primary">Monthly Revenue</p>
                <p className="text-sm text-muted-foreground">Bootstrapped</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-16 h-16 text-primary mb-4" />
                <div className="text-4xl font-black text-primary mb-2">20</div>
                <p className="text-lg font-semibold text-primary">Team Members</p>
                <p className="text-sm text-muted-foreground">Expert professionals</p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="w-16 h-16 text-accent mb-4" />
                <div className="text-4xl font-black text-accent mb-2">50+</div>
                <p className="text-lg font-semibold text-primary">Clients Served</p>
                <p className="text-sm text-muted-foreground">Success stories</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="bg-white border border-border shadow-elevated">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Helped 50+ startups scale successfully",
                "Generated ₹1.2Cr annual revenue (bootstrapped)",
                "Built solutions for global MNCs (HSBC, UWE)",
                "Established strong market presence in 18 months"
              ].map((achievement, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-lg text-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ProjectionsSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">Financial Projections</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white border border-border shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Revenue Growth</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg border border-border">
                    <span className="font-semibold text-foreground">Current (Monthly)</span>
                    <span className="text-xl font-bold text-success">₹10-12L</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-foreground">Target (Monthly)</span>
                    <span className="text-2xl font-bold text-accent">₹1Cr</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="font-semibold text-foreground">Growth Multiple</span>
                    <span className="text-xl font-bold text-primary">8-10x</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Growth Strategy</h3>
            <div className="space-y-4">
              {[
                { title: "Infrastructure Expansion", desc: "Scale team to 50+ professionals" },
                { title: "International Markets", desc: "Enter US, UK, and European markets" },
                { title: "Product Development", desc: "Launch proprietary AI platforms" },
                { title: "Strategic Partnerships", desc: "Global technology partnerships" }
              ].map((strategy, index) => (
                <Card key={index} className="bg-white border border-border hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-primary mb-2">{strategy.title}</h4>
                    <p className="text-muted-foreground">{strategy.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TeamSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">Leadership Team</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: "Anurag Singh",
              role: "Founder & CEO", 
              experience: "7+ Years",
              expertise: "Tech, Performance Marketing, AI/ML",
              background: "HSBC, UWE, CMT AI Founder",
              achievement: "Helped 50+ Startups Scale",
              email: "ceo@wemarketyou.in"
            },
            {
              name: "Shailesh Sinha",
              role: "Co-founder & Mentor",
              experience: "25+ Years", 
              expertise: "Communication, Media",
              background: "Times of India, TV Today, Aajtak",
              achievement: "Trusted Communication Expert",
              email: "mentor@wemarketyou.in"
            },
            {
              name: "Dharmendra Singh", 
              role: "Co-founder & CMO",
              experience: "15+ Years",
              expertise: "Marketing, Business Development", 
              background: "Club Mahindra, Axis Bank",
              achievement: "Founded Edvertia, Prexa",
              email: "cmo@wemarketyou.in"
            }
          ].map((member, index) => (
            <Card key={index} className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-4">{member.role}</p>
                <div className="text-left space-y-2 text-sm text-foreground">
                  <p><strong>Experience:</strong> {member.experience}</p>
                  <p><strong>Expertise:</strong> {member.expertise}</p>
                  <p><strong>Background:</strong> {member.background}</p>
                  <p><strong>Achievement:</strong> {member.achievement}</p>
                  <p className="text-accent font-medium">{member.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const InvestmentSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-primary">Investment Opportunity</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-accent">Seeking Investment</h3>
              <div className="text-6xl font-black mb-4 text-primary">₹1 Cr</div>
              <p className="text-xl text-muted-foreground">Strategic Growth Capital</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-accent">Projected Returns</h3>
              <div className="text-6xl font-black mb-4 text-primary">8-10x</div>
              <p className="text-xl text-muted-foreground">Revenue Growth Multiple</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Market Expansion", desc: "International presence" },
            { title: "Team Scaling", desc: "50+ professionals" },
            { title: "Technology", desc: "Proprietary AI platforms" },
            { title: "Partnerships", desc: "Global alliances" }
          ].map((use, index) => (
            <Card key={index} className="bg-white border border-border shadow-card">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold mb-2 text-accent">{use.title}</h4>
                <p className="text-sm text-muted-foreground">{use.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactSlide = () => (
    <div className="pitch-slide bg-background">
      <div className="pitch-content text-center">
        <h2 className="section-title">Let's Build the Future Together</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ready to transform your business with cutting-edge AI and strategic marketing?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Email Us</h3>
                <p className="text-accent font-medium">ceo@wemarketyou.in</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Visit Us</h3>
                <p className="text-accent font-medium">wemarketyou.in</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Call Us</h3>
                <p className="text-accent font-medium">Let's Discuss</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">Thank You</h3>
          <p className="text-xl text-muted-foreground">
            Completrix Microtechnologies - Where Innovation Meets Results
          </p>
        </div>
      </div>
    </div>
  );

  const renderSlide = () => {
    switch (slides[currentSlide]) {
      case 'hero': return <HeroSlide />;
      case 'problem': return <ProblemSlide />;
      case 'solution': return <SolutionSlide />;
      case 'services-cmt': return <ServicesCMTSlide />;
      case 'services-wmy': return <ServicesWMYSlide />;
      case 'business-model': return <BusinessModelSlide />;
      case 'traction': return <TractionSlide />;
      case 'projections': return <ProjectionsSlide />;
      case 'team': return <TeamSlide />;
      case 'investment': return <InvestmentSlide />;
      case 'contact': return <ContactSlide />;
      default: return <HeroSlide />;
    }
  };

  return (
    <div className="relative">
      {renderSlide()}
      
      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-elevated flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="rounded-full"
          >
            ←
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="rounded-full"
          >
            →
          </Button>
          
          <Button
            variant={isAutoPlay ? "default" : "outline"}
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="rounded-full"
          >
            {isAutoPlay ? "⏸" : "▶"}
          </Button>
        </div>
      </div>
      
      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-card">
        <span className="text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default PitchDeck;