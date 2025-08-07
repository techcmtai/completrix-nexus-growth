import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp, Users, DollarSign, Zap, Globe, Shield, Brain, Smartphone, BarChart3, Target, Award, Mail, Phone, PieChart, LineChart, Activity, Building, Calendar, Star, Briefcase, Rocket, CheckCircle, X, Check, Code, Database, Server, Monitor, Cpu, Cloud, Heart, Leaf, MapPin, AlertTriangle, Eye, Camera } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie, Legend } from 'recharts';
import weMarketYouLogo from '/lovable-uploads/2ba6b31a-4757-4d6a-9d5a-3fd490fce4c9.png';
import cmtAiLogo from '/lovable-uploads/a576a2c2-c473-4314-a9a6-a3f11e45253c.png';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  
  const slides = [
    'cover', 'problem', 'solution', 'market-opportunity', 'products-services', 
    'business-model', 'go-to-market', 'traction', 'competitive-landscape',
    'technology-stack', 'case-studies', 'team-leadership', 'financials', 
    'funding-ask', 'risk-mitigation', 'expansion-strategy', 'social-impact', 'vision-closing'
  ];

  // Financial projections data
  const financialData = [
    { year: '2024-25', revenue: 1, grossMargin: 40, netProfit: 15, clients: 200, teamSize: 30 },
    { year: '2025-26', revenue: 5, grossMargin: 45, netProfit: 20, clients: 400, teamSize: 50 },
    { year: '2026-27', revenue: 12, grossMargin: 50, netProfit: 25, clients: 800, teamSize: 80 }
  ];

  const marketData = [
    { name: 'Digital Marketing', value: 5.15, color: '#14b8a6' },
    { name: 'Cloud Market', value: 17.9, color: '#0d9488' },
    { name: 'AI Market', value: 6.8, color: '#0f766e' }
  ];

  const competitorData = [
    { name: 'CMT', tech: true, marketing: true, fullStack: true, price: 'Affordable', target: 'Startups + SMEs' },
    { name: 'Infosys', tech: true, marketing: false, fullStack: false, price: 'High', target: 'Large Enterprises' },
    { name: 'TCS', tech: true, marketing: false, fullStack: false, price: 'High', target: 'Government' },
    { name: 'Mindtree', tech: true, marketing: false, fullStack: false, price: 'High', target: 'MNCs' }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Slide 1: Cover
  const CoverSlide = () => (
    <motion.div 
      className="pitch-slide bg-background text-foreground relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="pitch-content text-center relative z-10">
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-primary"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            COMPLETRIX
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-4 text-muted-foreground"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            MICROTECHNOLOGIES PRIVATE LIMITED
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed text-accent mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            "Start. Scale. Succeed."
          </motion.p>
        </motion.div>
        
        <motion.div className="grid md:grid-cols-2 gap-8 mt-16" variants={itemVariants}>
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <div className="w-48 h-36 mx-auto mb-6 relative">
                <img src={cmtAiLogo} alt="CMT AI Logo" className="w-full h-full object-contain rounded-2xl shadow-card" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">CMT AI</h3>
              <p className="text-lg text-muted-foreground">Software Development & AI Solutions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <div className="w-48 h-36 mx-auto mb-6 relative">
                <img src={weMarketYouLogo} alt="We Market You Logo" className="w-full h-full object-contain rounded-2xl shadow-card" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">We Market You</h3>
              <p className="text-lg text-muted-foreground">Digital Marketing & Strategic Communication</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-xl text-muted-foreground mb-4">Contact</p>
          <div className="text-lg">
            <p className="font-bold text-primary">Anurag Singh, Founder & CEO</p>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span>contact@completrix.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 2: Problem
  const ProblemSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          The Problem
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Technical Expertise Gap",
              description: "85% of startups fail due to lack of technical co-founders. Entrepreneurs struggle to find reliable, full-stack tech partners who understand modern frameworks, AI/ML, and scalable cloud infrastructure.",
              stats: "85% startup failure rate",
              icon: Brain,
              color: "text-red-500"
            },
            {
              title: "Fragmented Service Ecosystem",
              description: "Traditional agencies focus on single domains - either technology OR marketing. This creates coordination challenges, inconsistent branding, and project delays for growing businesses.",
              stats: "60% project delays",
              icon: Target,
              color: "text-orange-500"
            },
            {
              title: "High Cost Barriers",
              description: "Enterprise-grade tech and marketing services are priced for large corporations. SMEs and startups can't afford ₹50L+ budgets that traditional providers demand.",
              stats: "₹50L+ typical cost",
              icon: DollarSign,
              color: "text-yellow-500"
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-xl shadow-elevated border border-border hover:shadow-glow transition-spring"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <problem.icon className={`w-16 h-16 ${problem.color} mb-6`} />
              <h3 className="text-xl font-bold text-primary mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{problem.description}</p>
              <div className="bg-accent/10 p-3 rounded-lg">
                <p className="font-bold text-accent text-sm">{problem.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Slide 3: Our Solution
  const SolutionSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Our Solution
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-6 bg-white shadow-elevated border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">CMT AI</h3>
                  <p className="text-muted-foreground">Offers end-to-end technology development – from custom web/mobile apps to AI/ML model training, DevOps, and cloud migration.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-elevated border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">We Market You</h3>
                  <p className="text-muted-foreground">A full-service marketing arm handling SEO, PR, advertising, and brand building.</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-elevated border border-border">
              <h3 className="text-3xl font-bold text-primary mb-6">One-Stop Growth Partner</h3>
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive tech + marketing powerhouse enabling businesses to ideate, launch, and scale.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Modern", icon: Rocket },
                  { label: "Scalable", icon: TrendingUp },
                  { label: "Affordable", icon: DollarSign },
                  { label: "Expert-Led", icon: Award }
                ].map((feature, index) => (
                  <div key={index} className="p-4 bg-accent/10 rounded-lg">
                    <feature.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold text-primary">{feature.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 4: Market Opportunity
  const MarketOpportunitySlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Market Opportunity
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-6">Digital Services Boom</h3>
            <div className="space-y-6">
              {[
                { market: "Indian Digital Marketing Market", size: "US$5.15B", year: "2024", projection: "US$8.1B by 2027 (CAGR 16.2%)", growth: "SME adoption driving growth" },
                { market: "Indian Cloud Market", size: "US$17.9B", year: "2024", projection: "US$76.4B by 2030 (CAGR 26.5%)", growth: "Fastest growing globally" },
                { market: "Indian AI Market", size: "US$6.8B", year: "2024", projection: "US$17B by 2027 (CAGR 19%)", growth: "Enterprise AI adoption accelerating" },
                { market: "European Tech Services", size: "€45B", year: "2024", projection: "€65B by 2027 (CAGR 13%)", growth: "Digital transformation mandate" }
              ].map((data, index) => (
                <Card key={index} className="p-6 bg-white shadow-elevated border border-border">
                  <h4 className="font-bold text-primary mb-2">{data.market}</h4>
                  <div className="text-3xl font-bold text-accent mb-2">{data.size}</div>
                  <p className="text-muted-foreground">{data.year}</p>
                  {data.projection && (
                    <p className="text-sm text-success mt-2">{data.projection}</p>
                  )}
                  {data.growth && (
                    <p className="text-xs text-accent mt-1 italic">{data.growth}</p>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-elevated border border-border">
              <Globe className="w-24 h-24 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-4">Total Addressable Market</h3>
              <div className="text-6xl font-bold text-accent mb-4">~$100B</div>
              <p className="text-xl text-muted-foreground mb-6">
                Across software, AI/ML, cloud, and digital marketing in India & expanding EU market
              </p>
              
              <div className="bg-accent/10 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-4">Digital Transformation Mandate</h4>
                <p className="text-muted-foreground">
                  Every business needs tech-enabled operations and digital marketing to survive in today's economy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 5: Products & Services Overview
  const ProductsServicesSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Products & Services Overview
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border h-full">
              <div className="text-center mb-6">
                <div className="w-24 h-18 mx-auto mb-4">
                  <img src={cmtAiLogo} alt="CMT AI" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-primary">CMT AI (Software & Cloud)</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Web Development: Websites, e-commerce, CMS, PWAs",
                  "App Development: Android, iOS, cross-platform, hybrid",
                  "AI & ML: Chatbots, analytics, NLP, computer vision", 
                  "Cloud Services: Migration, DevOps, backups, security",
                  "Custom Software: SaaS, ERP, CRM, POS, enterprise tools",
                  "Ongoing Support: Bug fixes, upgrades, maintenance, SLA"
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border h-full">
              <div className="text-center mb-6">
                <div className="w-24 h-18 mx-auto mb-4">
                  <img src={weMarketYouLogo} alt="We Market You" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-primary">We Market You (Marketing & Communication)</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Digital Marketing: SEO, SEM, social media, paid ads",
                  "Email & Content Strategy: Campaigns, blog/short-form",
                  "Analytics: Customer insights, ROI tracking",
                  "Public Relations: Crisis comms, media, reputation mgmt",
                  "Advocacy & Lobbying: Election campaigns, messaging"
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 6: Business Model
  const BusinessModelSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Business Model
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border text-center h-full">
              <DollarSign className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Revenue Streams</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Fixed pricing for project-based tech development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Annual maintenance contracts for IT support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Monthly retainers for marketing services</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border text-center h-full">
              <Users className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Target Audience</h3>
              <div className="space-y-3">
                {["Startups", "SMBs", "Corporations", "Political Entities", "NGOs"].map((audience, index) => (
                  <div key={index} className="p-3 bg-accent/10 rounded-lg">
                    <span className="font-semibold text-primary">{audience}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border text-center h-full">
              <PieChart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Diversified Income</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">70%</div>
                  <div className="text-muted-foreground">Technology</div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="h-2 bg-accent rounded-full w-[70%]"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30%</div>
                  <div className="text-muted-foreground">Marketing</div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="h-2 bg-primary rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 7: Go-To-Market Strategy
  const GoToMarketSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Go-To-Market Strategy
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">National Growth</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Content marketing, SEO, partnerships, PR",
                  "Collaboration with incubators & VC firms for referrals"
                ].map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{strategy}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">International Expansion (EU)</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Localized outreach in UK, Germany, France",
                  "Online advertising + partnerships with consultants"
                ].map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{strategy}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <Building className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Team & Infrastructure</h3>
            <p className="text-xl text-muted-foreground">
              Build high-quality studios, hire senior developers & creatives
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 8: Traction & Milestones
  const TractionSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Traction & Milestones
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            {[
              { icon: Users, title: "Clients Served", value: "200+", subtitle: "domestic + international" },
              { icon: DollarSign, title: "Annual Revenue", value: "₹1 Crore", subtitle: "2024" },
              { icon: Briefcase, title: "Team", value: "25+", subtitle: "developers, PMs, designers, editors" },
              { icon: Award, title: "Founder Track Record", value: "50+", subtitle: "startups scaled" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-elevated border border-border"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <metric.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{metric.title}</h3>
                    <div className="text-3xl font-bold text-accent">{metric.value}</div>
                    <p className="text-muted-foreground">{metric.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border h-full">
              <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Growth Trajectory</h3>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-accent/10 rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Client Growth</h4>
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <p className="text-muted-foreground">Active clients across multiple industries</p>
                </div>
                
                <div className="text-center p-6 bg-primary/10 rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Revenue Milestone</h4>
                  <div className="text-4xl font-bold text-primary mb-2">₹1Cr</div>
                  <p className="text-muted-foreground">Achieved in 2024 with strong margins</p>
                </div>
                
                <div className="text-center p-6 bg-success/10 rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Team Excellence</h4>
                  <div className="text-4xl font-bold text-success mb-2">25+</div>
                  <p className="text-muted-foreground">Expert professionals across tech & marketing</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 9: Competitive Landscape
  const CompetitiveLandscapeSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Competitive Landscape
        </motion.h2>
        
        <motion.div variants={itemVariants} className="overflow-x-auto">
          <div className="bg-white rounded-xl shadow-elevated border border-border p-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold text-primary">Company</th>
                  <th className="text-center p-4 font-bold text-primary">Tech</th>
                  <th className="text-center p-4 font-bold text-primary">Marketing</th>
                  <th className="text-center p-4 font-bold text-primary">Full Stack</th>
                  <th className="text-center p-4 font-bold text-primary">Price Point</th>
                  <th className="text-center p-4 font-bold text-primary">Target Market</th>
                </tr>
              </thead>
              <tbody>
                {competitorData.map((competitor, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border ${competitor.name === 'CMT' ? 'bg-accent/10' : ''}`}
                  >
                    <td className="p-4 font-bold text-primary">{competitor.name}</td>
                    <td className="text-center p-4">
                      {competitor.tech ? (
                        <Check className="w-6 h-6 text-success mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {competitor.marketing ? (
                        <Check className="w-6 h-6 text-success mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {competitor.fullStack ? (
                        <Check className="w-6 h-6 text-success mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4 text-muted-foreground">{competitor.price}</td>
                    <td className="text-center p-4 text-muted-foreground">{competitor.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Key Advantage</h3>
            <p className="text-xl text-muted-foreground">
              We offer integrated services at startup-friendly pricing with faster turnaround 
              and personal involvement of leadership.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 10: Team & Leadership
  const TeamLeadershipSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Team & Leadership
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "Anurag Singh",
              title: "Founder & CEO",
              experience: "7+ years in tech, marketing, and AI. Ex-HSBC/UWE. Scaled 50+ startups.",
              icon: Rocket
            },
            {
              name: "Shailesh Sinha",
              title: "Co-founder & Mentor",
              experience: "25+ years in media (Times of India, Aaj Tak). Veteran in comms strategy.",
              icon: Star
            },
            {
              name: "Dharmendra Singh",
              title: "Co-founder & CMO",
              experience: "15+ years in marketing (Club Mahindra, Axis Bank). Founded 3 startups.",
              icon: Target
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="p-8 bg-white shadow-elevated border border-border text-center h-full">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <h4 className="text-lg font-semibold text-accent mb-4">{member.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{member.experience}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <Users className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Team Strength</h3>
            <div className="text-4xl font-bold text-accent mb-4">25+</div>
            <p className="text-xl text-muted-foreground">
              Software developers, project managers, editors, and marketers
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 11: Financials & Projections
  const FinancialsSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Financials & Projections
        </motion.h2>
        
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white rounded-xl shadow-elevated border border-border p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold text-primary">Metric</th>
                  <th className="text-center p-4 font-bold text-primary">2024-25</th>
                  <th className="text-center p-4 font-bold text-primary">2025-26</th>
                  <th className="text-center p-4 font-bold text-primary">2026-27</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-primary">Revenue (₹)</td>
                  <td className="text-center p-4 text-muted-foreground">1 Cr</td>
                  <td className="text-center p-4 text-muted-foreground">5 Cr</td>
                  <td className="text-center p-4 text-muted-foreground">12 Cr</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-primary">Gross Margin (%)</td>
                  <td className="text-center p-4 text-muted-foreground">40%</td>
                  <td className="text-center p-4 text-muted-foreground">45%</td>
                  <td className="text-center p-4 text-muted-foreground">50%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-primary">Net Profit (%)</td>
                  <td className="text-center p-4 text-muted-foreground">15%</td>
                  <td className="text-center p-4 text-muted-foreground">20%</td>
                  <td className="text-center p-4 text-muted-foreground">25%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-primary">Clients</td>
                  <td className="text-center p-4 text-muted-foreground">200+</td>
                  <td className="text-center p-4 text-muted-foreground">400+</td>
                  <td className="text-center p-4 text-muted-foreground">800+</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-primary">Team Size</td>
                  <td className="text-center p-4 text-muted-foreground">30</td>
                  <td className="text-center p-4 text-muted-foreground">50</td>
                  <td className="text-center p-4 text-muted-foreground">80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border text-center">
              <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Revenue CAGR Target</h3>
              <div className="text-6xl font-bold text-accent mb-4">&gt;70%</div>
              <p className="text-xl text-muted-foreground">
                Aggressive growth trajectory
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border text-center">
              <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Margin Expansion</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">From service efficiency</span>
                  <span className="font-bold text-accent">+5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Retainer growth</span>
                  <span className="font-bold text-primary">+5%</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 12: Ask – Funding Requirements
  const FundingAskSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Ask – Funding Requirements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border text-center">
              <DollarSign className="w-20 h-20 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-4">Raising</h3>
              <div className="text-6xl font-bold text-accent mb-6">₹1 Crore</div>
              <p className="text-xl text-muted-foreground">(INR)</p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Use of Funds</h3>
              <div className="space-y-4">
                {[
                  { percentage: "10%", use: "Infra (build tech & content studios)", amount: "₹10L" },
                  { percentage: "20%", use: "EU Market Expansion", amount: "₹20L" },
                  { percentage: "30%", use: "Team Hiring (devs, PMs, marketers)", amount: "₹30L" },
                  { percentage: "20%", use: "National-level marketing campaigns", amount: "₹20L" },
                  { percentage: "10%", use: "R&D/Product Development", amount: "₹10L" },
                  { percentage: "10%", use: "Risk & Emergency Fund", amount: "₹10L" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                        {item.percentage}
                      </div>
                      <span className="text-muted-foreground">{item.use}</span>
                    </div>
                    <span className="font-bold text-primary">{item.amount}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 10: Technology Stack
  const TechnologyStackSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Technology Stack & Infrastructure
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-16 h-16 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Development Technologies</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-3">Frontend Development</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                      <div key={index} className="p-3 bg-accent/10 rounded-lg text-center">
                        <span className="text-muted-foreground font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-3">Backend Development</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Node.js", "Python", "Java", "PHP", "Express.js", "Django"].map((tech, index) => (
                      <div key={index} className="p-3 bg-primary/10 rounded-lg text-center">
                        <span className="text-muted-foreground font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <Database className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Database & Storage</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "AWS S3"].map((tech, index) => (
                  <div key={index} className="p-3 bg-primary/10 rounded-lg text-center">
                    <span className="text-muted-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <Cloud className="w-16 h-16 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Cloud & DevOps</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitLab CI"].map((tech, index) => (
                  <div key={index} className="p-3 bg-accent/10 rounded-lg text-center">
                    <span className="text-muted-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <Brain className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">AI/ML Capabilities</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: "Natural Language Processing", icon: Brain },
                { name: "Computer Vision", icon: Eye },
                { name: "Predictive Analytics", icon: TrendingUp },
                { name: "Machine Learning Models", icon: Cpu }
              ].map((capability, index) => (
                <div key={index} className="p-4 bg-accent/10 rounded-lg">
                  <capability.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-medium text-primary text-sm">{capability.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 11: Case Studies & Success Stories
  const CaseStudiesSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Case Studies & Success Stories
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce Platform",
              client: "Retail Startup",
              challenge: "Needed a scalable e-commerce solution with AI recommendations",
              solution: "Built MERN stack platform with ML-powered product recommendations",
              results: ["300% increase in sales", "50% better user engagement", "Deployed in 8 weeks"],
              icon: Smartphone,
              color: "accent"
            },
            {
              title: "Digital Marketing Campaign",
              client: "Tech Company",
              challenge: "Low brand awareness and poor online presence",
              solution: "Comprehensive SEO, content marketing, and social media strategy",
              results: ["400% increase in web traffic", "200% growth in leads", "10x social media reach"],
              icon: TrendingUp,
              color: "primary"
            },
            {
              title: "Healthcare Management System",
              client: "Medical Clinic Chain",
              challenge: "Manual processes and poor patient data management",
              solution: "Custom ERP with patient management, scheduling, and analytics",
              results: ["80% reduction in admin time", "99.9% uptime", "Improved patient satisfaction"],
              icon: Heart,
              color: "success"
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="p-8 bg-white shadow-elevated border border-border h-full">
                <div className={`w-16 h-16 bg-${study.color}/10 rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <study.icon className={`w-8 h-8 text-${study.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2 text-center">{study.title}</h3>
                <p className="text-accent font-semibold mb-4 text-center">{study.client}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 text-${study.color} flex-shrink-0`} />
                          <span className="text-muted-foreground text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Client Satisfaction</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-muted-foreground">Average Client Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">85%</div>
                <p className="text-muted-foreground">Repeat Business Rate</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 15: Risk Mitigation & Contingency
  const RiskMitigationSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Risk Mitigation & Contingency Planning
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-16 h-16 text-destructive" />
                <h3 className="text-2xl font-bold text-primary">Identified Risks</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    risk: "Market Competition",
                    impact: "Medium",
                    probability: "High",
                    mitigation: "Differentiation through integrated services and competitive pricing"
                  },
                  {
                    risk: "Talent Retention",
                    impact: "High", 
                    probability: "Medium",
                    mitigation: "Competitive compensation, equity participation, growth opportunities"
                  },
                  {
                    risk: "Economic Downturn",
                    impact: "High",
                    probability: "Low",
                    mitigation: "Diversified client base, flexible cost structure, recession-proof services"
                  }
                ].map((riskItem, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <h4 className="font-bold text-primary mb-2">{riskItem.risk}</h4>
                    <div className="flex gap-4 text-sm mb-2">
                      <span className="text-muted-foreground">Impact: <span className="font-medium">{riskItem.impact}</span></span>
                      <span className="text-muted-foreground">Probability: <span className="font-medium">{riskItem.probability}</span></span>
                    </div>
                    <p className="text-muted-foreground text-sm">{riskItem.mitigation}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-16 h-16 text-success" />
                <h3 className="text-2xl font-bold text-primary">Contingency Measures</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Emergency fund (10% of raised capital)",
                  "Flexible team structure for scaling up/down",
                  "Multiple revenue streams for stability",
                  "Strong client relationships and contracts",
                  "Backup partnerships and vendor relationships",
                  "Insurance coverage for key personnel"
                ].map((measure, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{measure}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-elevated border border-border text-center">
              <Activity className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Business Continuity Plan</h3>
              <p className="text-muted-foreground">
                Comprehensive disaster recovery and business continuity protocols ensure 
                minimal disruption to client services and operations.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 16: Expansion Strategy & Global Vision
  const ExpansionStrategySlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Expansion Strategy & Global Vision
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              phase: "Phase 1 (Year 1)",
              title: "Market Consolidation",
              goals: ["Establish strong presence in India", "Build core team to 50+ members", "Achieve ₹5Cr revenue"],
              icon: Building,
              color: "accent"
            },
            {
              phase: "Phase 2 (Year 2)",
              title: "EU Market Entry",
              goals: ["Launch operations in UK & Germany", "Partnerships with local firms", "International team of 25+ members"],
              icon: Globe,
              color: "primary"
            },
            {
              phase: "Phase 3 (Year 3+)",
              title: "Global Scale",
              goals: ["Expand to US and Asia-Pacific", "Franchise/licensing model", "100+ team members globally"],
              icon: Rocket,
              color: "success"
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="p-8 bg-white shadow-elevated border border-border h-full text-center">
                <div className={`w-20 h-20 bg-${phase.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <phase.icon className={`w-10 h-10 text-${phase.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2">{phase.phase}</h3>
                <h4 className="text-xl font-bold text-accent mb-4">{phase.title}</h4>
                
                <ul className="space-y-2 text-left">
                  {phase.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 text-${phase.color} mt-1 flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-6">Target Markets & Rationale</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">Europe (Primary)</h4>
                <p className="text-muted-foreground text-sm">High digital adoption, strong SME ecosystem, regulatory stability</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">North America</h4>
                <p className="text-muted-foreground text-sm">Largest tech market, high spending on digital services</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">Asia-Pacific</h4>
                <p className="text-muted-foreground text-sm">Emerging markets with rapid digitalization needs</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 17: Social Impact & Sustainability
  const SocialImpactSlide = () => (
    <motion.div 
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Social Impact & Sustainability
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-16 h-16 text-destructive" />
                <h3 className="text-2xl font-bold text-primary">Social Impact Initiatives</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Skill Development Programs",
                    description: "Free coding bootcamps for underprivileged youth",
                    impact: "500+ students trained annually"
                  },
                  {
                    title: "Startup Ecosystem Support",
                    description: "Mentorship and discounted services for early-stage startups",
                    impact: "100+ startups supported"
                  },
                  {
                    title: "Digital Literacy Campaigns",
                    description: "Community workshops on digital marketing and basic tech skills",
                    impact: "1000+ individuals reached"
                  }
                ].map((initiative, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <h4 className="font-bold text-primary mb-2">{initiative.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{initiative.description}</p>
                    <p className="text-accent font-medium text-sm">{initiative.impact}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-16 h-16 text-success" />
                <h3 className="text-2xl font-bold text-primary">Sustainability Practices</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Carbon-neutral hosting and cloud services",
                  "Paperless operations and digital workflows",
                  "Remote-first culture reducing commute emissions",
                  "Green technology recommendations for clients",
                  "Sustainable supplier partnerships",
                  "Employee environmental awareness programs"
                ].map((practice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{practice}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-elevated border border-border text-center">
              <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">UN SDG Alignment</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Quality Education (SDG 4)",
                  "Decent Work (SDG 8)", 
                  "Industry Innovation (SDG 9)",
                  "Reduced Inequalities (SDG 10)"
                ].map((sdg, index) => (
                  <div key={index} className="p-3 bg-accent/10 rounded-lg">
                    <span className="text-muted-foreground text-sm font-medium">{sdg}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Slide 18: Vision & Closing
  const VisionClosingSlide = () => (
    <motion.div 
      className="pitch-slide bg-background text-foreground relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="pitch-content text-center relative z-10">
        <motion.div variants={itemVariants} className="mb-12">
          <Rocket className="w-24 h-24 text-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">Our Vision</h2>
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-elevated border border-border">
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed italic">
              "We aim to be the most trusted digital partner for entrepreneurs worldwide — 
              enabling them to start, scale, and succeed with world-class tech and marketing support."
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white shadow-elevated border border-border">
            <div className="w-24 h-18 mx-auto mb-4">
              <img src={cmtAiLogo} alt="CMT AI" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-primary text-center">Technology Excellence</h3>
          </Card>
          
          <Card className="p-8 bg-white shadow-elevated border border-border">
            <div className="w-24 h-18 mx-auto mb-4">
              <img src={weMarketYouLogo} alt="We Market You" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-primary text-center">Marketing Mastery</h3>
          </Card>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-white p-8 rounded-2xl shadow-elevated border border-border"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="text-xl">
              <p className="font-bold text-primary">Anurag Singh</p>
              <p className="text-muted-foreground">Founder & CEO – Completrix MicroTechnologies Pvt. Ltd.</p>
            </div>
            <div className="flex justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>[Phone]</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span>[Email]</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                <span>[LinkedIn]</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderSlide = () => {
    switch (slides[currentSlide]) {
      case 'cover': return <CoverSlide />;
      case 'problem': return <ProblemSlide />;
      case 'solution': return <SolutionSlide />;
      case 'market-opportunity': return <MarketOpportunitySlide />;
      case 'products-services': return <ProductsServicesSlide />;
      case 'business-model': return <BusinessModelSlide />;
      case 'go-to-market': return <GoToMarketSlide />;
      case 'traction': return <TractionSlide />;
      case 'competitive-landscape': return <CompetitiveLandscapeSlide />;
      case 'technology-stack': return <TechnologyStackSlide />;
      case 'case-studies': return <CaseStudiesSlide />;
      case 'team-leadership': return <TeamLeadershipSlide />;
      case 'financials': return <FinancialsSlide />;
      case 'funding-ask': return <FundingAskSlide />;
      case 'risk-mitigation': return <RiskMitigationSlide />;
      case 'expansion-strategy': return <ExpansionStrategySlide />;
      case 'social-impact': return <SocialImpactSlide />;
      case 'vision-closing': return <VisionClosingSlide />;
      default: return <CoverSlide />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-elevated border border-border p-2 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-12 w-12 rounded-full border-border hover:bg-accent/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex gap-2 px-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-12 w-12 rounded-full border-border hover:bg-accent/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="fixed top-8 right-8 z-50 bg-white rounded-full px-4 py-2 shadow-elevated border border-border">
        <span className="text-sm font-medium text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Auto-play toggle */}
      <div className="fixed top-8 left-8 z-50">
        <Button
          variant={isAutoPlay ? "default" : "outline"}
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="bg-white border-border hover:bg-accent/10"
        >
          {isAutoPlay ? "⏸" : "▶"} Auto
        </Button>
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait">
        {renderSlide()}
      </AnimatePresence>

    </div>
  );
};

export default PitchDeck;