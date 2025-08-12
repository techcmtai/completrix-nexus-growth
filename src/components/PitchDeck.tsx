import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp, Users, DollarSign, Zap, Globe, Shield, Brain, Smartphone, BarChart3, Target, Award, Mail, Phone, PieChart, LineChart, Activity, Building, Calendar, Star, Briefcase, Rocket, CheckCircle, X, Check, Code, Database, Server, Monitor, Cpu, Cloud, Heart, Leaf, MapPin, AlertTriangle, Eye, HomeIcon, FileTextIcon } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie, Legend } from 'recharts';
import weMarketYouLogo from '/lovable-uploads/2ba6b31a-4757-4d6a-9d5a-3fd490fce4c9.png';
import cmtAiLogo from '/lovable-uploads/a576a2c2-c473-4314-a9a6-a3f11e45253c.png';
import { clients as clientList } from '@/data/clients';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  // Dynamic client slides (3x3 per slide)
  const clientChunks = Array.from({
    length: Math.ceil(clientList.length / 9)
  }, (_, i) => clientList.slice(i * 9, (i + 1) * 9));
  const clientSlideIds = clientChunks.map((_, i) => `clients-${i + 1}`);
  const slides = ['cover', 'company-overview', 'problem', 'market-research', 'target-customers', 'solution', 'cmt-ai-products', 'we-market-you-services', 'technology-architecture', 'development-process', 'business-model', 'revenue-streams', 'pricing-strategy', 'go-to-market', 'competitive-landscape', 'swot-analysis', ...clientSlideIds, 'case-studies', 'traction', 'team-leadership', 'financials', 'funding-ask', 'risk-mitigation', 'expansion-strategy', 'social-impact', 'vision-closing'];

  // Enhanced data sets for interactive visualizations
  const financialData = [{
    year: '2024-25',
    revenue: 1,
    grossMargin: 40,
    netProfit: 15,
    clients: 200,
    teamSize: 30,
    expenses: 0.85
  }, {
    year: '2025-26',
    revenue: 5,
    grossMargin: 45,
    netProfit: 20,
    clients: 400,
    teamSize: 50,
    expenses: 4.0
  }, {
    year: '2026-27',
    revenue: 12,
    grossMargin: 50,
    netProfit: 25,
    clients: 800,
    teamSize: 80,
    expenses: 9.0
  }, {
    year: '2027-28',
    revenue: 25,
    grossMargin: 55,
    netProfit: 30,
    clients: 1500,
    teamSize: 120,
    expenses: 17.5
  }];
  const marketData = [{
    name: 'Digital Marketing',
    value: 5.15,
    color: '#14b8a6',
    growth: 16.2
  }, {
    name: 'Cloud Market',
    value: 17.9,
    color: '#0d9488',
    growth: 26.5
  }, {
    name: 'AI Market',
    value: 6.8,
    color: '#0f766e',
    growth: 19.0
  }];
  const competitorData = [{
    name: 'CMT',
    tech: true,
    marketing: true,
    fullStack: true,
    price: 'Affordable',
    target: 'Startups + SMEs',
    score: 95
  }, {
    name: 'Infosys',
    tech: true,
    marketing: false,
    fullStack: false,
    price: 'High',
    target: 'Large Enterprises',
    score: 70
  }, {
    name: 'TCS',
    tech: true,
    marketing: false,
    fullStack: false,
    price: 'High',
    target: 'Government',
    score: 65
  }, {
    name: 'Mindtree',
    tech: true,
    marketing: false,
    fullStack: false,
    price: 'High',
    target: 'MNCs',
    score: 60
  }];
  const monthlyGrowthData = [{
    month: 'Jan',
    revenue: 50,
    clients: 15
  }, {
    month: 'Feb',
    revenue: 65,
    clients: 18
  }, {
    month: 'Mar',
    revenue: 80,
    clients: 22
  }, {
    month: 'Apr',
    revenue: 95,
    clients: 28
  }, {
    month: 'May',
    revenue: 120,
    clients: 35
  }, {
    month: 'Jun',
    revenue: 140,
    clients: 42
  }];
  const serviceBreakdown = [{
    service: 'Web Development',
    percentage: 35,
    revenue: 420
  }, {
    service: 'AI/ML Services',
    percentage: 25,
    revenue: 300
  }, {
    service: 'Digital Marketing',
    percentage: 20,
    revenue: 240
  }, {
    service: 'Cloud Services',
    percentage: 15,
    revenue: 180
  }, {
    service: 'Mobile Apps',
    percentage: 5,
    revenue: 60
  }];
  const clientSatisfactionData = [{
    metric: 'Overall Satisfaction',
    score: 4.8
  }, {
    metric: 'Delivery Time',
    score: 4.6
  }, {
    metric: 'Quality',
    score: 4.9
  }, {
    metric: 'Communication',
    score: 4.7
  }, {
    metric: 'Value for Money',
    score: 4.8
  }];
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAutoPlay]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Slide 1: Cover - Enhanced Responsive Design
  const CoverSlide = () => <motion.div className="pitch-slide bg-background text-foreground relative overflow-hidden" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="pitch-content text-center relative z-10 max-w-7xl mx-auto">
        <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight text-primary" initial={{
          scale: 0.5,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            COMPLETRIX
          </motion.h1>
          <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-3 text-muted-foreground px-2" initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            MICROTECHNOLOGIES PRIVATE LIMITED
          </motion.p>
          
          <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-4xl mx-auto leading-relaxed text-accent mb-6 sm:mb-8 px-4" initial={{
          y: 30,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.7
        }}>
            "Start. Scale. Succeed."
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8" variants={itemVariants}>
          <Card className="bg-card border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative">
              <div className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36 mx-auto mb-4 sm:mb-6 relative">
                <img src={cmtAiLogo} alt="CMT AI Logo" loading="lazy" className="w-full h-full object-contain rounded-xl sm:rounded-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">CMT AI</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Software Development & AI Solutions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative">
              <div className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36 mx-auto mb-4 sm:mb-6 relative">
                <img src={weMarketYouLogo} alt="We Market You Logo" loading="lazy" className="w-full h-full object-contain rounded-xl sm:rounded-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">We Market You</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Digital Marketing & Strategic Communication</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="mt-8 sm:mt-12 md:mt-16 text-center" initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.5
      }}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4">Contact</p>
          <div className="text-sm sm:text-base md:text-lg">
            <p className="font-bold text-primary mb-3 sm:mb-4">Anurag Singh, Founder & CEO</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="break-all sm:break-normal">ceo@cmtai.in</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>+91-9234894293/9911055197</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 2: Company Overview
  const CompanyOverviewSlide = () => (
    <motion.div
      className="pitch-slide bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-primary mb-8 text-center"
          variants={itemVariants}
        >
          About Completrix Microtechnologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <motion.div variants={itemVariants}>
            <Card className="p-4 sm:p-6 bg-card shadow-elevated border border-border h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                To empower startups and SMEs by making advanced technology and marketing solutions accessible, affordable, and effective. 
                <br />
                <span className="block mt-2">
                  We strive to level the playing field so that every business, regardless of size, can leverage enterprise-grade tools and strategies to grow, compete, and succeed in a digital world.
                </span>
              </p>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm sm:text-base font-semibold text-accent">
                  Start. Scale. Succeed.
                </span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-4 sm:p-6 bg-card shadow-elevated border border-border h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                To become the most trusted technology and marketing partner for emerging businesses in India and globally, driving innovation and sustainable growth.
                <br />
                <span className="block mt-2">
                  We envision a future where Indian startups and SMEs are recognized as global leaders, powered by smart technology, creative marketing, and a spirit of entrepreneurship.
                </span>
              </p>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm sm:text-base font-semibold text-accent">
                  Global Innovation Partner
                </span>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <Card className="p-8 bg-card shadow-elevated border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Company Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {[
                {
                  label: "Founded",
                  value: "2024",
                  icon: Calendar,
                  description: "A fresh start with a bold vision for the future.",
                },
                {
                  label: "Headquarters",
                  value: "India",
                  icon: MapPin,
                  description: "Serving clients pan-India and expanding globally.",
                },
                {
                  label: "Team Size",
                  value: "30+",
                  icon: Users,
                  description: "A passionate, multidisciplinary team of technologists, marketers, and innovators.",
                },
                {
                  label: "Active Clients",
                  value: "200+",
                  icon: Briefcase,
                  description: "Trusted by a growing roster of startups, SMEs, and visionary entrepreneurs.",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm sm:text-base text-muted-foreground">
                  ISO 9001:2024 Certified Processes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-sm sm:text-base text-muted-foreground">
                  95% Client Satisfaction Rate
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-accent" />
                <span className="text-sm sm:text-base text-muted-foreground">
                  Fastest Go-to-Market for Startups
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );

  // Slide 2: Problem
  const ProblemSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          The Problem
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            {
              title: "Technical Expertise Gap",
              description:
                "85% of startups fail due to lack of technical co-founders. Entrepreneurs struggle to find reliable, full-stack tech partners who understand modern frameworks, AI/ML, and scalable cloud infrastructure.",
              stats: "85% startup failure rate",
              icon: Brain,
              iconColor: "text-red-500",
              border: "border border-neutral-200"
            },
            {
              title: "Fragmented Service Ecosystem",
              description:
                "Traditional agencies focus on single domains - either technology OR marketing. This creates coordination challenges, inconsistent branding, and project delays for growing businesses.",
              stats: "60% project delays",
              icon: Target,
              iconColor: "text-orange-500",
              border: "border border-neutral-200"
            },
            {
              title: "High Cost Barriers",
              description:
                "Enterprise-grade tech and marketing services are priced for large corporations. SMEs and startups can't afford ₹50L+ budgets that traditional providers demand.",
              stats: "₹50L+ typical cost",
              icon: DollarSign,
              iconColor: "text-yellow-500",
              border: "border border-neutral-200"
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              className={`relative p-6 sm:p-8 bg-white rounded-2xl shadow-lg ${problem.border} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full group`}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -6
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`bg-neutral-100 rounded-full p-3 shadow-sm`}>
                  <problem.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${problem.iconColor}`} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-2 sm:mb-3 text-center">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base text-center">
                {problem.description}
              </p>
              <div className="flex justify-center">
                <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg flex items-center gap-2">
                  <span className="font-bold text-accent text-xs sm:text-sm tracking-wide">
                    {problem.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>;

  // Slide 3: Our Solution
  const SolutionSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Our Solution
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-14 justify-center items-stretch w-full">
          {/* Left: CMT AI & We Market You */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-7 w-full md:w-1/2 max-w-xl"
          >
            <Card className="flex items-start gap-5 p-6 bg-white border border-border shadow-elevated rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-24 h-12 bg-accent/10 rounded-full mt-1">
                <Brain className="w-12 h-12 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">CMT AI</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">CMT AI</span> is your tech partner for startups & SMEs. We build custom web/mobile apps, automate with AI/ML, and handle cloud, DevOps, and security—so you can focus on growth while we manage the tech.
                </p>
              </div>
            </Card>
            <Card className="flex items-start gap-5 p-6 bg-white border border-border shadow-elevated rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-24 h-12 bg-accent/10 rounded-full mt-1">
                <Target className="w-12 h-12 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">We Market You</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">We Market You</span> is our marketing arm—offering SEO, branding, digital ads, and social media to help your business stand out and get real, measurable results.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right: One-Stop Growth Partner */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 max-w-xl flex flex-col justify-center"
          >
            <Card className="p-8 bg-white border border-border shadow-elevated rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-3 text-center">
                One-Stop Growth Partner
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-center leading-relaxed">
                Tech + marketing under one roof. We help you launch, grow, and scale—no coordination hassles, just results.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Modern", icon: Rocket },
                  { label: "Scalable", icon: TrendingUp },
                  { label: "Affordable", icon: DollarSign },
                  { label: "Expert-Led", icon: Award }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-5 bg-accent/10 rounded-lg hover:bg-accent/20 transition"
                  >
                    <feature.icon className="w-8 h-8 text-accent mb-2" />
                    <p className="font-semibold text-primary">{feature.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 4: Enhanced Market Opportunity with Interactive Charts
  const MarketOpportunitySlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Market Opportunity
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white shadow-elevated border border-border h-full">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Market Size & Growth</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{
                    fontSize: 12
                  }} />
                    <YAxis tick={{
                    fontSize: 12
                  }} />
                    <Tooltip formatter={(value, name) => [`$${value}B`, 'Market Size']} labelFormatter={label => `${label} Market`} contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }} />
                    <Bar dataKey="value" fill="#14b8a6" radius={[4, 4, 0, 0]}>
                      {marketData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Bar>
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {marketData.map((market, index) => <motion.div key={index} className="text-center p-3 bg-accent/5 rounded-lg" whileHover={{
                scale: 1.05
              }}>
                    <div className="text-lg font-bold text-accent">{market.growth}%</div>
                    <div className="text-xs text-muted-foreground">CAGR</div>
                  </motion.div>)}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="text-center mb-6">
                <motion.div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center" animate={{
                rotate: 360
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}>
                  <Globe className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-primary mb-2">Total Addressable Market</h3>
                <motion.div className="text-6xl font-bold text-accent mb-2" initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                duration: 0.8,
                delay: 0.5
              }}>
                  ~$100B
                </motion.div>
                <p className="text-lg text-muted-foreground">
                  Combined India + EU markets
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-elevated border border-border">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Key Growth Drivers
              </h4>
              <div className="space-y-3">
                {[{
                driver: "Digital-first business models",
                impact: "85%"
              }, {
                driver: "AI adoption acceleration",
                impact: "75%"
              }, {
                driver: "Cloud migration mandate",
                impact: "90%"
              }, {
                driver: "SME digitalization",
                impact: "65%"
              }].map((item, index) => <motion.div key={index} className="flex justify-between items-center p-3 bg-accent/5 rounded-lg" initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }}>
                    <span className="text-sm text-muted-foreground">{item.driver}</span>
                    <span className="font-bold text-accent">{item.impact}</span>
                  </motion.div>)}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 5: Products & Services Overview
  const ProductsServicesSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Products & Services Overview
        </motion.h2>
        
        {/* CMT AI Services */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-12">
              <img src={cmtAiLogo} alt="CMT AI" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-primary">CMT AI (Software & Cloud)</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            title: "Web Development",
            description: "Websites, e-commerce, CMS, PWAs",
            icon: Monitor,
            color: "text-blue-500"
          }, {
            title: "App Development",
            description: "Android, iOS, cross-platform, hybrid",
            icon: Smartphone,
            color: "text-green-500"
          }, {
            title: "AI & ML Services",
            description: "Chatbots, analytics, NLP, computer vision",
            icon: Brain,
            color: "text-purple-500"
          }, {
            title: "Cloud Services",
            description: "Migration, DevOps, backups, security",
            icon: Cloud,
            color: "text-cyan-500"
          }, {
            title: "Custom Software",
            description: "SaaS, ERP, CRM, POS, enterprise tools",
            icon: Code,
            color: "text-orange-500"
          }, {
            title: "Ongoing Support",
            description: "Bug fixes, upgrades, maintenance, SLA",
            icon: Shield,
            color: "text-red-500"
          }].map((service, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border hover:shadow-glow transition-spring" variants={itemVariants} whileHover={{
            scale: 1.02,
            y: -2
          }}>
                <service.icon className={`w-10 h-10 ${service.color} mb-4`} />
                <h4 className="text-lg font-bold text-primary mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* We Market You Services */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-12">
              <img src={weMarketYouLogo} alt="We Market You" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-primary">We Market You (Marketing & Communication)</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            title: "Digital Marketing",
            description: "SEO, SEM, social media, paid ads",
            icon: TrendingUp,
            color: "text-pink-500"
          }, {
            title: "Content Strategy",
            description: "Email campaigns, blog, short-form content",
            icon: PieChart,
            color: "text-indigo-500"
          }, {
            title: "Analytics & Insights",
            description: "Customer insights, ROI tracking",
            icon: BarChart3,
            color: "text-yellow-500"
          }, {
            title: "Public Relations",
            description: "Crisis comms, media, reputation mgmt",
            icon: Users,
            color: "text-teal-500"
          }, {
            title: "Advocacy & Lobbying",
            description: "Election campaigns, messaging",
            icon: Target,
            color: "text-violet-500"
          }].map((service, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border hover:shadow-glow transition-spring" variants={itemVariants} whileHover={{
            scale: 1.02,
            y: -2
          }}>
                <service.icon className={`w-10 h-10 ${service.color} mb-4`} />
                <h4 className="text-lg font-bold text-primary mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 6: Business Model
  const BusinessModelSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Business Model
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Revenue Streams */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-white via-accent/5 to-accent/10 shadow-xl border border-border rounded-2xl text-center h-full group transition-all duration-300 hover:shadow-glow">
              {/* Faded icon in top-right */}
              <div className="absolute -top-8 -right-8 opacity-20 group-hover:opacity-30 transition pointer-events-none">
                <DollarSign className="w-32 h-32 text-accent" />
              </div>
              {/* Main icon in circle */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-accent/10 rounded-full p-4 shadow-md">
                  <DollarSign className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">Revenue Streams</h3>
              <ul className="space-y-5 text-left max-w-xs mx-auto">
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full flex-shrink-0 bg-accent shadow" />
                  <span className="text-base text-muted-foreground font-medium">Fixed pricing for project-based tech development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full flex-shrink-0 bg-black shadow" />
                  <span className="text-base text-muted-foreground font-medium">Annual maintenance contracts for IT support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full flex-shrink-0 bg-pink-500 shadow" />
                  <span className="text-base text-muted-foreground font-medium">Monthly retainers for marketing services</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full flex-shrink-0 bg-yellow-400 shadow" />
                  <span className="text-base text-muted-foreground font-medium">Performance-based digital ad management fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full flex-shrink-0 bg-teal-400 shadow" />
                  <span className="text-base text-muted-foreground font-medium">Consulting & training workshops</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Target Audience */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-white via-accent/5 to-accent/10 shadow-xl border border-border rounded-2xl text-center h-full group transition-all duration-300 hover:shadow-glow">
              {/* Faded icon in top-right */}
              <div className="absolute -top-8 -right-8 opacity-20 group-hover:opacity-30 transition pointer-events-none">
                <Users className="w-32 h-32 text-accent" />
              </div>
              {/* Main icon in circle */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-accent/10 rounded-full p-4 shadow-md">
                  <Users className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">Target Audience</h3>
              <div className="space-y-3 max-w-xs mx-auto">
                {["Startups", "SMBs", "Corporations", "Political Entities", "NGOs"].map((audience, index) => (
                  <div key={index} className="p-3 bg-accent/10 rounded-lg font-semibold text-primary text-base text-center">
                    {audience}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Diversified Income */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-white via-accent/5 to-accent/10 shadow-xl border border-border rounded-2xl text-center h-full group transition-all duration-300 hover:shadow-glow">
              <div className="absolute -top-8 -right-8 opacity-20 group-hover:opacity-30 transition pointer-events-none">
                <PieChart className="w-32 h-32 text-accent" />
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-accent/10 rounded-full p-4 shadow-md">
                  <PieChart className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">Diversified Income</h3>
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
    </motion.div>;

  // Slide 7: Go-To-Market Strategy
  const GoToMarketSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Go-To-Market Strategy
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* National Growth */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden p-10 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-xl border border-border rounded-2xl h-full group transition-all duration-300 hover:shadow-glow">
              {/* Decorative Accent */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-30 pointer-events-none" />
              <div className="flex items-center gap-5 mb-7">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Globe className="w-9 h-9 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">National Growth</h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    label: "Content marketing, SEO, partnerships, PR",
                    color: "bg-accent/10",
                    iconColor: "text-accent"
                  },
                  {
                    label: "Collaboration with incubators & VC firms for referrals",
                    color: "bg-accent/20",
                    iconColor: "text-accent"
                  }
                ].map((strategy, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-xl ${strategy.color} border border-accent/10 shadow-sm hover:bg-accent/20 transition`}
                  >
                    <ArrowRight className={`w-6 h-6 ${strategy.iconColor} mt-1 flex-shrink-0`} />
                    <span className="text-base text-muted-foreground font-medium">{strategy.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* International Expansion */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden p-10 bg-gradient-to-br from-white via-primary/5 to-primary/20 shadow-xl border border-border rounded-2xl h-full group transition-all duration-300 hover:shadow-glow">
              {/* Decorative Accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-30 pointer-events-none" />
              <div className="flex items-center gap-5 mb-7">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Globe className="w-9 h-9 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">International Expansion <span className="text-base font-semibold text-primary/70">(EU)</span></h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    label: "Localized outreach in UK, Germany, France",
                    color: "bg-primary/10",
                    iconColor: "text-primary"
                  },
                  {
                    label: "Online advertising + partnerships with consultants",
                    color: "bg-primary/20",
                    iconColor: "text-primary"
                  }
                ].map((strategy, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-xl ${strategy.color} border border-primary/10 shadow-sm hover:bg-primary/20 transition`}
                  >
                    <ArrowRight className={`w-6 h-6 ${strategy.iconColor} mt-1 flex-shrink-0`} />
                    <span className="text-base text-muted-foreground font-medium">{strategy.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-14">
          <Card className="relative overflow-hidden p-10 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-xl border border-border rounded-2xl text-center group transition-all duration-300 hover:shadow-glow">
            {/* Decorative Accent */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-30 pointer-events-none" />
            <Building className="w-20 h-20 text-accent mx-auto mb-7 drop-shadow" />
            <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 tracking-tight">Team &amp; Infrastructure</h3>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Build high-quality studios, hire senior developers &amp; creatives
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 8: Enhanced Traction & Milestones with Interactive Charts
  const TractionSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Traction & Milestones
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Metrics */}
          <motion.div variants={itemVariants} className="space-y-6">
            {[{
            icon: Users,
            title: "Clients Served",
            value: "200+",
            subtitle: "domestic + international",
            color: "accent"
          }, {
            icon: DollarSign,
            title: "Annual Revenue",
            value: "₹1Cr",
            subtitle: "2024",
            color: "success"
          }, {
            icon: Briefcase,
            title: "Team",
            value: "25+",
            subtitle: "expert professionals",
            color: "primary"
          }, {
            icon: Award,
            title: "Success Rate",
            value: "98%",
            subtitle: "client satisfaction",
            color: "accent"
          }].map((metric, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border group hover:shadow-glow" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.02,
            y: -2
          }}>
                <div className="flex items-center gap-4">
                  <motion.div className={`w-12 h-12 bg-${metric.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-spring`}>
                    <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{metric.title}</h3>
                    <div className={`text-2xl font-bold text-${metric.color} mb-1`}>{metric.value}</div>
                    <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>

          {/* Growth Chart */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Monthly Growth Trajectory</h3>
              </div>
              
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={monthlyGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{
                    fontSize: 12
                  }} />
                    <YAxis tick={{
                    fontSize: 12
                  }} />
                    <Tooltip contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }} />
                    <Line type="monotone" dataKey="revenue" stroke="#14b8a6" strokeWidth={3} dot={{
                    fill: '#14b8a6',
                    strokeWidth: 2,
                    r: 4
                  }} activeDot={{
                    r: 6,
                    stroke: '#14b8a6',
                    strokeWidth: 2
                  }} />
                    <Line type="monotone" dataKey="clients" stroke="#0d9488" strokeWidth={2} dot={{
                    fill: '#0d9488',
                    strokeWidth: 2,
                    r: 3
                  }} strokeDasharray="5 5" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>

              {/* Service Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-accent" />
                    Client Satisfaction
                  </h4>
                  <div className="space-y-2">
                    {clientSatisfactionData.map((item, index) => <div key={index} className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{item.metric}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < item.score ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                          <span className="text-xs font-medium ml-1">{item.score}</span>
                        </div>
                      </div>)}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {[{
                    milestone: "Scaled 50+ startups",
                    status: "completed"
                  }, {
                    milestone: "International expansion",
                    status: "completed"
                  }, {
                    milestone: "₹1Cr ARR achieved",
                    status: "completed"
                  }, {
                    milestone: "25+ team members",
                    status: "completed"
                  }].map((achievement, index) => <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-success" />
                        <span className="text-xs text-muted-foreground">{achievement.milestone}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 9: Competitive Landscape
  const CompetitiveLandscapeSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Competitive Landscape
        </motion.h2>
        
        <motion.div variants={itemVariants} className="overflow-x-auto">
          <div className="relative bg-gradient-to-br from-white via-accent/5 to-accent/20 rounded-2xl shadow-2xl border border-border p-0">
            {/* Decorative Accent */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-border bg-accent/10">
                  <th className="text-left p-4 font-extrabold text-primary tracking-wide rounded-tl-2xl">Company</th>
                  <th className="text-center p-4 font-extrabold text-primary tracking-wide">Tech</th>
                  <th className="text-center p-4 font-extrabold text-primary tracking-wide">Marketing</th>
                  <th className="text-center p-4 font-extrabold text-primary tracking-wide">Full Stack</th>
                  <th className="text-center p-4 font-extrabold text-primary tracking-wide">Price Point</th>
                  <th className="text-center p-4 font-extrabold text-primary tracking-wide rounded-tr-2xl">Target Market</th>
                </tr>
              </thead>
              <tbody>
                {competitorData.map((competitor, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border transition-all duration-200 ${
                      competitor.name === 'CMT'
                        ? 'bg-gradient-to-r from-accent/20 via-accent/10 to-white/80 shadow-md scale-[1.01]'
                        : 'hover:bg-accent/5'
                    }`}
                  >
                    <td className="p-4 font-bold text-primary flex items-center gap-2">
                      {competitor.name === 'CMT' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-accent/20 text-accent text-xs font-semibold mr-2 animate-pulse">
                          Us
                        </span>
                      )}
                      {competitor.name}
                    </td>
                    <td className="text-center p-4">
                      {competitor.tech ? (
                        <Check className="w-6 h-6 text-success mx-auto drop-shadow" />
                      ) : (
                        <X className="w-6 h-6 text-destructive/70 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {competitor.marketing ? (
                        <Check className="w-6 h-6 text-success mx-auto drop-shadow" />
                      ) : (
                        <X className="w-6 h-6 text-destructive/70 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {competitor.fullStack ? (
                        <Check className="w-6 h-6 text-success mx-auto drop-shadow" />
                      ) : (
                        <X className="w-6 h-6 text-destructive/70 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${
                          competitor.name === 'CMT'
                            ? 'bg-accent/10 text-accent'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {competitor.price}
                      </span>
                    </td>
                    <td className="text-center p-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        {competitor.target}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-14 flex flex-col md:flex-row gap-8 items-stretch">
          <Card className="flex-1 p-8 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-xl border border-border text-center rounded-2xl relative overflow-hidden group transition-all duration-300 hover:shadow-glow">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
            <Award className="w-16 h-16 text-accent mx-auto mb-6 drop-shadow" />
            <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">Key Advantage</h3>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              <span className="font-semibold text-accent">Integrated services</span> at startup-friendly pricing, <span className="font-semibold text-primary">faster turnaround</span>, and <span className="font-semibold text-accent">personal leadership involvement</span>.
            </p>
          </Card>
          <Card className="flex-1 p-8 bg-gradient-to-br from-white via-primary/5 to-primary/20 shadow-xl border border-border text-center rounded-2xl relative overflow-hidden group transition-all duration-300 hover:shadow-glow">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
            <Users className="w-16 h-16 text-primary mx-auto mb-6 drop-shadow" />
            <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">Why We Win</h3>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground text-base">Full-stack tech + marketing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground text-base">Startup & SME focus</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground text-base">Transparent, value-based pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground text-base">Rapid delivery & support</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 10: Team & Leadership
  const TeamLeadershipSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Team & Leadership
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[{
            name: "Anurag Singh",
            title: "Founder & CEO",
            experience: "7+ years in tech, marketing, and AI. Ex-HSBC/UWE. Scaled 50+ startups.",
            icon: Rocket
          }, {
            name: "Shailesh Sinha",
            title: "Co-founder & Mentor",
            experience: "25+ years in media (Times of India, Aaj Tak). Veteran in comms strategy.",
            icon: Star
          }, {
            name: "Dharmendra Singh",
            title: "Co-founder & CMO",
            experience: "15+ years in marketing (Club Mahindra, Axis Bank). Founded 3 startups.",
            icon: Target
          }].map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.07,
                y: -14
              }}
              className="relative"
            >
              <Card className="relative p-12 bg-gradient-to-br from-white via-accent/5 to-accent/20 border-2 border-accent/20 shadow-2xl text-center h-full rounded-3xl overflow-visible transition-all duration-300 group hover:shadow-glow hover:-translate-y-1">
                {/* Decorative Accent Ring */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 bg-accent/20 rounded-full blur-2xl opacity-40 pointer-events-none z-0" />
                {/* Avatar/Icon with ring */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-7 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <member.icon className="w-12 h-12 text-accent drop-shadow" />
                </div>
                {/* Name & Title */}
                <h3 className="text-2xl font-extrabold text-primary mb-1 tracking-tight">{member.name}</h3>
                <h4 className="text-base font-semibold text-accent mb-4 tracking-wide uppercase">{member.title}</h4>
                {/* Experience */}
                <p className="text-muted-foreground leading-relaxed text-base px-3">{member.experience}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Card className="relative p-12 bg-gradient-to-br from-white via-accent/5 to-accent/20 border-2 border-accent/20 shadow-2xl text-center rounded-3xl overflow-visible group transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
            {/* Decorative Accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-30 pointer-events-none" />
            <Users className="w-20 h-20 text-accent mx-auto mb-7 drop-shadow" />
            <h3 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">Team Strength</h3>
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="text-6xl font-extrabold text-accent drop-shadow">35+</span>
              <span className="text-lg font-medium text-muted-foreground mt-4">core team</span>
            </div>
            <p className="text-lg text-muted-foreground font-medium mb-4">
              Software developers, project managers, editors, and marketers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold shadow">Developers</span>
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold shadow">Project Managers</span>
              <span className="px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-semibold shadow">Editors</span>
              <span className="px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-semibold shadow">Marketers</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 11: Enhanced Financials & Projections with Interactive Charts
  const FinancialsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Financials & Projections
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Growth Chart */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Revenue Growth Projection</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tick={{
                    fontSize: 12
                  }} />
                    <YAxis tick={{
                    fontSize: 12
                  }} />
                    <Tooltip formatter={(value, name) => {
                    if (name === 'revenue') return [`₹${value}Cr`, 'Revenue'];
                    if (name === 'expenses') return [`₹${value}Cr`, 'Expenses'];
                    if (name === 'netProfit') return [`${value}%`, 'Net Profit Margin'];
                    return [value, name];
                  }} contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }} />
                    <Line type="monotone" dataKey="revenue" stroke="#14b8a6" strokeWidth={3} dot={{
                    fill: '#14b8a6',
                    strokeWidth: 2,
                    r: 5
                  }} />
                    <Line type="monotone" dataKey="expenses" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={{
                    fill: '#f59e0b',
                    strokeWidth: 2,
                    r: 4
                  }} />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">₹25Cr</div>
                  <div className="text-xs text-muted-foreground">2027-28 Target</div>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">70%+</div>
                  <div className="text-xs text-muted-foreground">Revenue CAGR</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Service Revenue Breakdown */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Revenue by Service (2024)</h3>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie data={serviceBreakdown} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="percentage">
                      {serviceBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={`hsl(${180 + index * 20}, 68%, ${42 + index * 5}%)`} />)}
                    </Pie>
                    <Tooltip formatter={value => [`${value}%`, 'Share']} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {serviceBreakdown.map((service, index) => <div key={index} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{
                    backgroundColor: `hsl(${180 + index * 20}, 68%, ${42 + index * 5}%)`
                  }} />
                      <span className="text-muted-foreground">{service.service}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium">{service.percentage}%</span>
                      <span className="text-accent">₹{service.revenue}K</span>
                    </div>
                  </div>)}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Key Financial Metrics */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-white shadow-elevated border border-border">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">Financial Projections Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-primary">Metric</th>
                    <th className="text-center p-3 font-semibold text-primary">2024-25</th>
                    <th className="text-center p-3 font-semibold text-primary">2025-26</th>
                    <th className="text-center p-3 font-semibold text-primary">2026-27</th>
                    <th className="text-center p-3 font-semibold text-primary">2027-28</th>
                  </tr>
                </thead>
                <tbody>
                  {[{
                  metric: 'Revenue (₹)',
                  values: ['1 Cr', '5 Cr', '12 Cr', '25 Cr'],
                  highlight: 'accent'
                }, {
                  metric: 'Gross Margin (%)',
                  values: ['40%', '45%', '50%', '55%'],
                  highlight: 'primary'
                }, {
                  metric: 'Net Profit (%)',
                  values: ['15%', '20%', '25%', '30%'],
                  highlight: 'success'
                }, {
                  metric: 'Clients',
                  values: ['200+', '400+', '800+', '1500+'],
                  highlight: 'accent'
                }, {
                  metric: 'Team Size',
                  values: ['30', '50', '80', '120'],
                  highlight: 'primary'
                }].map((row, index) => <motion.tr key={index} className="border-b border-border hover:bg-accent/5 transition-colors" initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }}>
                      <td className="p-3 font-semibold text-primary">{row.metric}</td>
                      {row.values.map((value, i) => <td key={i} className={`text-center p-3 font-medium text-${row.highlight}`}>
                          {value}
                        </td>)}
                    </motion.tr>)}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Additional Financial Insights */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border border-border text-center">
              <LineChart className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">70%+</div>
              <div className="text-sm font-medium text-primary">Revenue CAGR</div>
              <div className="text-xs text-muted-foreground mt-1">Aggressive growth target</div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-border text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">55%</div>
              <div className="text-sm font-medium text-primary">Target Margin</div>
              <div className="text-xs text-muted-foreground mt-1">By 2027-28</div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-gradient-to-br from-success/5 to-success/10 border border-border text-center">
              <Users className="w-12 h-12 text-success mx-auto mb-4" />
              <div className="text-3xl font-bold text-success mb-2">1500+</div>
              <div className="text-sm font-medium text-primary">Client Target</div>
              <div className="text-xs text-muted-foreground mt-1">Cross-segment portfolio</div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 12: Ask – Funding Requirements
  const FundingAskSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Ask – Funding Requirements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left: Amount Raising Card */}
          <motion.div variants={itemVariants} className="flex">
            <Card className="flex flex-col justify-center flex-1 p-10 bg-gradient-to-br from-accent/10 via-white to-accent/20 shadow-2xl border-0 rounded-3xl text-center relative overflow-hidden group hover:shadow-glow transition-all duration-300">
              {/* Accent Circle */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl opacity-30 pointer-events-none" />
              <DollarSign className="w-24 h-24 text-accent mx-auto mb-8 drop-shadow" />
              <h3 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">Funding Ask</h3>
              <div className="text-5xl md:text-6xl font-black text-accent mb-4 drop-shadow">₹1 Crore</div>
              <p className="text-lg text-muted-foreground font-medium">(INR)</p>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-20 pointer-events-none" />
            </Card>
          </motion.div>

          {/* Right: Use of Funds Card */}
          <motion.div variants={itemVariants} className="flex">
            <Card className="flex-1 p-10 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-2xl border-0 rounded-3xl relative overflow-hidden">
              {/* Decorative Accent */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
              <h3 className="text-2xl font-extrabold text-primary mb-8 text-center tracking-tight">Use of Funds</h3>
              <div className="space-y-4">
                {[
                  {
                    percentage: "10%",
                    use: "Infra (build tech & content studios)",
                    amount: "₹10L"
                  },
                  {
                    percentage: "20%",
                    use: "EU Market Expansion",
                    amount: "₹20L"
                  },
                  {
                    percentage: "30%",
                    use: "Team Hiring (devs, PMs, marketers)",
                    amount: "₹30L"
                  },
                  {
                    percentage: "20%",
                    use: "National-level marketing campaigns",
                    amount: "₹20L"
                  },
                  {
                    percentage: "10%",
                    use: "R&D/Product Development",
                    amount: "₹10L"
                  },
                  {
                    percentage: "10%",
                    use: "Risk & Emergency Fund",
                    amount: "₹10L"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/80 rounded-xl shadow-sm border border-accent/10 hover:bg-accent/10 transition group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent group-hover:bg-primary transition rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow">
                        {item.percentage}
                      </div>
                      <span className="text-base md:text-lg text-primary font-medium">{item.use}</span>
                    </div>
                    <span className="font-bold text-accent text-lg">{item.amount}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 10: Technology Stack
  const TechnologyStackSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
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
                    {["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"].map((tech, index) => <div key={index} className="p-3 bg-accent/10 rounded-lg text-center">
                        <span className="text-muted-foreground font-medium">{tech}</span>
                      </div>)}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-3">Backend Development</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Node.js", "Python", "Java", "PHP", "Express.js", "Django"].map((tech, index) => <div key={index} className="p-3 bg-primary/10 rounded-lg text-center">
                        <span className="text-muted-foreground font-medium">{tech}</span>
                      </div>)}
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
                {["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "AWS S3"].map((tech, index) => <div key={index} className="p-3 bg-primary/10 rounded-lg text-center">
                    <span className="text-muted-foreground font-medium">{tech}</span>
                  </div>)}
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <Cloud className="w-16 h-16 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Cloud & DevOps</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitLab CI"].map((tech, index) => <div key={index} className="p-3 bg-accent/10 rounded-lg text-center">
                    <span className="text-muted-foreground font-medium">{tech}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <Brain className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">AI/ML Capabilities</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[{
              name: "Natural Language Processing",
              icon: Brain
            }, {
              name: "Computer Vision",
              icon: Eye
            }, {
              name: "Predictive Analytics",
              icon: TrendingUp
            }, {
              name: "Machine Learning Models",
              icon: Cpu
            }].map((capability, index) => <div key={index} className="p-4 bg-accent/10 rounded-lg">
                  <capability.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-medium text-primary text-sm">{capability.name}</p>
                </div>)}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 11: Case Studies & Success Stories
  const CaseStudiesSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Case Studies & Success Stories
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "E-commerce Platform",
              client: "Retail Startup",
              challenge: "Needed a scalable e-commerce solution with AI recommendations",
              solution: "Built MERN stack platform with ML-powered product recommendations",
              results: ["300% increase in sales", "50% better user engagement", "Deployed in 8 weeks"],
              icon: Smartphone,
              color: "accent",
              gradient: "from-accent/10 to-accent/30",
              iconBg: "bg-accent/10",
              iconText: "text-accent",
              clientText: "text-accent"
            },
            {
              title: "Digital Marketing Campaign",
              client: "Tech Company",
              challenge: "Low brand awareness and poor online presence",
              solution: "Comprehensive SEO, content marketing, and social media strategy",
              results: ["400% increase in web traffic", "200% growth in leads", "10x social media reach"],
              icon: TrendingUp,
              color: "warning",
              gradient: "from-yellow-100 to-yellow-300",
              iconBg: "bg-yellow-100",
              iconText: "text-yellow-600",
              clientText: "text-yellow-700"
            },
            {
              title: "Healthcare Management System",
              client: "Medical Clinic Chain",
              challenge: "Manual processes and poor patient data management",
              solution: "Custom ERP with patient management, scheduling, and analytics",
              results: ["80% reduction in admin time", "99.9% uptime", "Improved patient satisfaction"],
              icon: Heart,
              color: "success",
              gradient: "from-success/10 to-success/30",
              iconBg: "bg-success/10",
              iconText: "text-success",
              clientText: "text-success"
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.06,
                y: -12,
                boxShadow: "0 8px 32px 0 rgba(20,184,166,0.15)"
              }}
              className="transition-all duration-300"
            >
              <Card className={`relative p-8 bg-gradient-to-br ${study.gradient} shadow-xl border border-border h-full rounded-2xl overflow-hidden group`}>
                {/* Decorative floating accent */}
                <div className={`absolute -top-8 -right-8 w-24 h-24 ${study.iconBg} rounded-full blur-2xl opacity-20 pointer-events-none`} />
                <div className={`w-16 h-16 ${study.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-105 transition-transform`}>
                  <study.icon className={`w-9 h-9 ${study.iconText}`} />
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-2 text-center tracking-tight">{study.title}</h3>
                <p className={`font-semibold mb-4 text-center ${study.clientText}`}>{study.client}</p>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-3 shadow-sm">
                    <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wide">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 shadow-sm">
                    <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wide">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 shadow-sm">
                    <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wide">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 ${study.iconText} flex-shrink-0`} />
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

        <motion.div variants={itemVariants} className="mt-16">
          <Card className="relative p-10 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-xl border border-border text-center rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-glow">
            {/* Decorative accent */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
            <Award className="w-20 h-20 text-accent mx-auto mb-8 drop-shadow" />
            <h3 className="text-2xl font-extrabold text-primary mb-6 tracking-tight">Client Satisfaction</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-accent mb-2 drop-shadow">98%</div>
                <p className="text-muted-foreground font-medium">Client Retention Rate</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-primary mb-2 drop-shadow">4.9/5</div>
                <p className="text-muted-foreground font-medium">Average Client Rating</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-success mb-2 drop-shadow">85%</div>
                <p className="text-muted-foreground font-medium">Repeat Business Rate</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 15: Risk Mitigation & Contingency
  const RiskMitigationSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Risk Mitigation & Contingency Planning
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Identified Risks */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="relative p-8 bg-gradient-to-br from-white via-destructive/5 to-destructive/10 shadow-xl border border-border rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-glow">
              {/* Decorative Accent */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-destructive/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center rounded-full bg-destructive/10 p-2">
                  <AlertTriangle className="w-14 h-14 text-destructive" />
                </span>
                <h3 className="text-2xl font-extrabold text-primary tracking-tight">Identified Risks</h3>
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
                  <div
                    key={index}
                    className="p-5 bg-white/80 border border-destructive/20 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      <h4 className="font-bold text-primary text-base">{riskItem.risk}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs mb-2">
                      <span className="bg-destructive/10 text-destructive px-2 py-0.5 rounded font-semibold">
                        Impact: <span className="font-bold">{riskItem.impact}</span>
                      </span>
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-semibold">
                        Probability: <span className="font-bold">{riskItem.probability}</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span className="text-muted-foreground text-sm">{riskItem.mitigation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contingency & Continuity */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="relative p-8 bg-gradient-to-br from-white via-success/5 to-success/10 shadow-xl border border-border rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-glow">
              {/* Decorative Accent */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-success/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center rounded-full bg-success/10 p-2">
                  <Shield className="w-14 h-14 text-success" />
                </span>
                <h3 className="text-2xl font-extrabold text-primary tracking-tight">Contingency Measures</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Emergency fund (10% of raised capital)",
                  "Flexible team structure for scaling up/down",
                  "Multiple revenue streams for stability",
                  "Strong client relationships and contracts",
                  "Backup partnerships and vendor relationships",
                  "Insurance coverage for key personnel"
                ].map((measure, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-success/5 rounded-lg px-3 py-2 hover:bg-success/10 transition"
                  >
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{measure}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="relative p-8 bg-gradient-to-br from-white via-accent/5 to-accent/10 shadow-xl border border-border rounded-2xl text-center overflow-hidden group transition-all duration-300 hover:shadow-glow">
              {/* Decorative Accent */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl opacity-20 pointer-events-none" />
              <Activity className="w-16 h-16 text-accent mx-auto mb-6 drop-shadow" />
              <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">Business Continuity Plan</h3>
              <p className="text-muted-foreground text-base">
                Comprehensive disaster recovery and business continuity protocols ensure
                minimal disruption to client services and operations.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 16: Expansion Strategy & Global Vision
  const ExpansionStrategySlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Expansion Strategy & Global Vision
        </motion.h2>
        
        {/* Enhanced: Timeline with phase highlights and tooltips */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-accent/30 via-primary/30 to-success/30 rounded-full z-0" />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                phase: "Phase 1 (Year 1)",
                title: "Market Consolidation",
                goals: [
                  "Establish strong presence in India",
                  "Build core team to 50+ members",
                  "Achieve ₹5Cr revenue"
                ],
                icon: Building,
                color: "accent",
                description: "Focus on Indian market, strengthen brand, and build a robust team foundation."
              },
              {
                phase: "Phase 2 (Year 2)",
                title: "EU Market Entry",
                goals: [
                  "Launch operations in UK & Germany",
                  "Partnerships with local firms",
                  "International team of 25+ members"
                ],
                icon: Globe,
                color: "primary",
                description: "Expand into Europe, leveraging partnerships and local expertise for rapid growth."
              },
              {
                phase: "Phase 3 (Year 3+)",
                title: "Global Scale",
                goals: [
                  "Expand to US and Asia-Pacific",
                  "Franchise/licensing model",
                  "100+ team members globally"
                ],
                icon: Rocket,
                color: "success",
                description: "Scale globally, diversify revenue streams, and establish a worldwide presence."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.07,
                  y: -12,
                  boxShadow: "0 8px 32px 0 rgba(20,184,166,0.15)"
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <Card className="p-8 bg-white shadow-elevated border border-border h-full text-center group transition-all duration-300 hover:shadow-glow">
                  <div className={`w-20 h-20 bg-${phase.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <phase.icon className={`w-10 h-10 text-${phase.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{phase.phase}</h3>
                  <h4 className={`text-xl font-bold mb-4 ${phase.color === "accent" ? "text-accent" : phase.color === "primary" ? "text-primary" : "text-success"}`}>{phase.title}</h4>
                  {/* Enhanced: Tooltip/description on hover */}
                  <div className="mb-4">
                    <span className="inline-block text-xs text-muted-foreground bg-muted/30 rounded px-2 py-1 group-hover:bg-muted/50 transition">
                      {phase.description}
                    </span>
                  </div>
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
        </div>

        {/* Enhanced: Market rationale with icons and more detail */}
        <motion.div variants={itemVariants}>
          <Card className="p-8 bg-white shadow-elevated border border-border text-center">
            <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-6">Target Markets & Rationale</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center flex flex-col items-center">
                <Globe className="w-8 h-8 text-accent mb-2" />
                <h4 className="font-bold text-primary mb-1">Europe (Primary)</h4>
                <p className="text-muted-foreground text-sm mb-1">High digital adoption, strong SME ecosystem, regulatory stability</p>
                <span className="inline-block text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">Focus: UK, Germany, France</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-bold text-primary mb-1">North America</h4>
                <p className="text-muted-foreground text-sm mb-1">Largest tech market, high spending on digital services</p>
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Focus: US, Canada</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <Rocket className="w-8 h-8 text-success mb-2" />
                <h4 className="font-bold text-primary mb-1">Asia-Pacific</h4>
                <p className="text-muted-foreground text-sm mb-1">Emerging markets with rapid digitalization needs</p>
                <span className="inline-block text-xs bg-success/10 text-success px-2 py-0.5 rounded">Focus: India, SEA, Australia</span>
              </div>
            </div>
            {/* Enhanced: Callout for global vision */}
            <div className="mt-8 flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 via-primary/10 to-success/10 rounded-full text-primary font-semibold text-base shadow-sm">
                <Rocket className="w-5 h-5 text-success" />
                Vision: Become the leading global digital partner for SMEs by 2028
              </span>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 17: Social Impact & Sustainability
  const SocialImpactSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-extrabold text-primary mb-12 text-center tracking-tight" variants={itemVariants}>
          Social Impact & Sustainability
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Impact Initiatives */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-xl border border-border rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-16 h-16 text-destructive drop-shadow" />
                <h3 className="text-2xl font-bold text-primary">Social Impact Initiatives</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Skill Development Programs",
                    description: "Free coding bootcamps for underprivileged youth, focusing on practical, job-ready skills.",
                    impact: "500+ students trained annually",
                    icon: <Users className="w-6 h-6 text-accent" />
                  },
                  {
                    title: "Startup Ecosystem Support",
                    description: "Mentorship, networking, and discounted digital services for early-stage startups.",
                    impact: "100+ startups supported",
                    icon: <Rocket className="w-6 h-6 text-primary" />
                  },
                  {
                    title: "Digital Literacy Campaigns",
                    description: "Community workshops on digital marketing, cybersecurity, and basic tech skills.",
                    impact: "1000+ individuals reached",
                    icon: <Award className="w-6 h-6 text-success" />
                  },
                  {
                    title: "Women in Tech",
                    description: "Special scholarships and mentorship for women entering technology fields.",
                    impact: "50+ women empowered yearly",
                    icon: <Heart className="w-6 h-6 text-pink-500" />
                  }
                ].map((initiative, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white/90 shadow-sm hover:bg-accent/10 transition">
                    <div className="flex-shrink-0">{initiative.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{initiative.title}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{initiative.description}</p>
                      <span className="inline-block text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-semibold">{initiative.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 via-primary/10 to-success/10 rounded-full text-primary font-semibold text-base shadow-sm">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Commitment: Inclusive growth & digital empowerment
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Sustainability Practices & SDG Alignment */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-white via-success/5 to-success/20 shadow-xl border border-border rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-16 h-16 text-success drop-shadow" />
                <h3 className="text-2xl font-bold text-primary">Sustainability Practices</h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    label: "Carbon-neutral hosting & green cloud infrastructure",
                    icon: <Globe className="w-5 h-5 text-success" />
                  },
                  {
                    label: "Paperless operations & digital workflows",
                    icon: <FileTextIcon className="w-5 h-5 text-primary" />
                  },
                  {
                    label: "Remote-first culture reducing commute emissions",
                    icon: <HomeIcon className="w-5 h-5 text-accent" />
                  },
                  {
                    label: "Green tech recommendations for clients",
                    icon: <Zap className="w-5 h-5 text-success" />
                  },
                  {
                    label: "Sustainable supplier partnerships",
                    icon: <Award className="w-5 h-5 text-primary" />
                  },
                  {
                    label: "Employee environmental awareness programs",
                    icon: <Users className="w-5 h-5 text-success" />
                  }
                ].map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {practice.icon}
                    <span className="text-muted-foreground text-sm">{practice.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold">
                  <Leaf className="w-4 h-4" />
                  Net Zero by 2030 Target
                </span>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white via-accent/5 to-accent/20 shadow-xl border border-border rounded-2xl text-center">
              <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">UN SDG Alignment</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  {
                    sdg: "Quality Education (SDG 4)",
                    icon: <Award className="w-5 h-5 text-accent mr-2 inline" />
                  },
                  {
                    sdg: "Decent Work (SDG 8)",
                    icon: <Briefcase className="w-5 h-5 text-primary mr-2 inline" />
                  },
                  {
                    sdg: "Industry Innovation (SDG 9)",
                    icon: <Zap className="w-5 h-5 text-success mr-2 inline" />
                  },
                  {
                    sdg: "Reduced Inequalities (SDG 10)",
                    icon: <Users className="w-5 h-5 text-pink-500 mr-2 inline" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center p-3 bg-accent/10 rounded-lg">
                    {item.icon}
                    <span className="text-muted-foreground text-sm font-medium">{item.sdg}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  Impact-driven & future-ready
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 18: Vision & Closing
  const VisionClosingSlide = () => <motion.div className="pitch-slide bg-background text-foreground relative overflow-hidden" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 z-0"></div>
      
      <div className="pitch-content text-center relative z-10 max-w-7xl mx-auto">
        <motion.div 
          variants={itemVariants} 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto p-12 rounded-3xl border border-accent/20">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Our Vision</h2>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-medium">
              "We aim to be the most trusted digital partner for entrepreneurs worldwide — 
              enabling them to <span className="text-accent font-bold">start</span>, <span className="text-primary font-bold">scale</span>, and <span className="text-success font-bold">succeed</span> with world-class tech and marketing support."
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
            <Card className="p-10 bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl text-center h-full relative z-10 group-hover:shadow-accent/20 group-hover:-translate-y-1 transition-all duration-300">
              <div className="w-24 h-18 mx-auto mb-6 relative">
                <img src={cmtAiLogo} alt="CMT AI" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-extrabold text-accent mb-2 tracking-tight">Technology Excellence</h3>
              <p className="text-muted-foreground">Building the digital backbone for tomorrow's business leaders</p>
            </Card>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
            <Card className="p-10 bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl text-center h-full relative z-10 group-hover:shadow-primary/20 group-hover:-translate-y-1 transition-all duration-300">
              <div className="w-24 h-18 mx-auto mb-6 relative">
                <img src={weMarketYouLogo} alt="We Market You" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-2 tracking-tight">Marketing Mastery</h3>
              <p className="text-muted-foreground">Amplifying brand stories that resonate and drive growth</p>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-12 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl">
            <h3 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">Contact Information</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary mb-1">Anurag Singh</p>
                <p className="text-lg text-accent font-medium">Founder & CEO</p>
                <p className="text-muted-foreground">Completrix MicroTechnologies Pvt. Ltd.</p>
              </div>
              <div className="h-0 md:h-20 border-l border-accent/20 hidden md:block"></div>
              <div className="flex flex-col sm:flex-row gap-6 text-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">+91-9234894293</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">ceo@cmtai.in</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-full text-primary font-semibold text-lg">
                <span className="text-accent font-bold">Start.</span> 
                <span className="text-primary font-bold">Scale.</span> 
                <span className="text-success font-bold">Succeed.</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Market Research Slide
  const MarketResearchSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Market Research & Validation
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-4">
          {/* Primary Research Findings */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-white via-slate-50 to-slate-100 border-0 shadow-xl rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-primary mb-6 tracking-tight flex items-center gap-2">
                <BarChart3 className="w-7 h-7 text-accent" />
                Primary Research Findings
              </h3>
              <ul className="space-y-5">
                {[
                  {
                    text: "78% of SMEs lack dedicated tech teams",
                    icon: <Users className="w-6 h-6 text-cyan-500" />,
                  },
                  {
                    text: "65% struggle with digital marketing ROI",
                    icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
                  },
                  {
                    text: "Market size growing at 23% CAGR",
                    icon: <PieChart className="w-6 h-6 text-indigo-500" />,
                  },
                  {
                    text: "Average project cost reduced by 40% with our model",
                    icon: <DollarSign className="w-6 h-6 text-fuchsia-500" />,
                  },
                ].map((finding, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <span className="flex-shrink-0 bg-accent/10 rounded-full p-2 group-hover:scale-110 transition-transform">{finding.icon}</span>
                    <span className="text-base sm:text-lg text-slate-700 font-medium group-hover:text-primary transition-colors">{finding.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Market Validation */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-white via-slate-50 to-slate-100 border-0 shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-primary mb-6 tracking-tight flex items-center gap-2">
                <CheckCircle className="w-7 h-7 text-accent" />
                Market Validation
              </h3>
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-cyan-500 drop-shadow-glow">200+</span>
                  <span className="text-base text-slate-500 mt-1 font-medium tracking-wide">Early Adopters</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-emerald-500 drop-shadow-glow">4.8<span className="text-3xl">/5</span></span>
                  <span className="text-base text-slate-500 mt-1 font-medium tracking-wide">Customer Satisfaction</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-fuchsia-500 drop-shadow-glow">85%</span>
                  <span className="text-base text-slate-500 mt-1 font-medium tracking-wide">Client Retention Rate</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Target Customers Slide
  const TargetCustomersSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Target Customer Profiles
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-7 px-2 sm:px-6 md:px-0 pb-10">
          {[
            {
              title: "Early-Stage Startups",
              description: "Pre-seed to Series A companies needing MVP development and market entry strategy",
              size: "40%",
              revenue: "₹0-50L",
              needs: ["MVP Development", "Digital Presence", "Growth Strategy"],
              icon: Rocket,
              iconColor: "bg-blue-100 text-blue-500"
            },
            {
              title: "SMEs & Growing Businesses",
              description: "Established businesses looking to digitize operations and scale marketing efforts",
              size: "45%",
              revenue: "₹50L-10Cr",
              needs: ["Digital Transformation", "Marketing Automation", "System Integration"],
              icon: Building,
              iconColor: "bg-green-100 text-green-500"
            },
            {
              title: "Enterprise Clients",
              description: "Large corporations needing specialized tech solutions and strategic marketing",
              size: "15%",
              revenue: "₹10Cr+",
              needs: ["Custom Solutions", "Strategic Consulting", "Large-scale Implementation"],
              icon: Briefcase,
              iconColor: "bg-purple-100 text-purple-500"
            }
          ].map((segment, index) => (
            <motion.div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl border border-border bg-white
                shadow-[0_4px_24px_0_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.13)]
                transition-all duration-300 group
                flex flex-col items-center
                px-5 sm:px-7 md:px-8 pt-10 pb-8
                min-h-[350px] max-w-[370px] mx-auto
              `}
              variants={itemVariants}
              whileHover={{
                scale: 1.035,
                y: -6
              }}
            >
              {/* Icon */}
              <div className={`mb-3 flex items-center justify-center`}>
                <div className={`rounded-full p-3 ${segment.iconColor} shadow-sm`}>
                  <segment.icon className="w-8 h-8" />
                </div>
              </div>
              {/* Card Content */}
              <div className="flex flex-col items-center text-center w-full">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">{segment.title}</h3>
                <p className="text-[15px] text-slate-600 mb-3 font-medium">{segment.description}</p>
                <div className="flex flex-col gap-1 w-full mb-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-semibold uppercase tracking-wide">Market Share</span>
                    <span className="font-bold text-cyan-600">{segment.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-semibold uppercase tracking-wide">Revenue Range</span>
                    <span className="font-bold text-fuchsia-600">{segment.revenue}</span>
                  </div>
                </div>
                <div className="w-full mt-2">
                  <h4 className="font-semibold text-primary mb-2 text-xs sm:text-sm tracking-wide">Key Needs</h4>
                  <ul className="flex flex-wrap justify-center gap-2">
                    {segment.needs.map((need, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1 bg-slate-50 border border-accent/10 rounded-full px-3 py-1 text-xs font-semibold text-accent shadow-sm hover:bg-accent/10 transition"
                      >
                        <Check className="w-3.5 h-3.5 text-accent" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>;

  // We Market You Services Detailed Slide
  const WeMarketYouServicesSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
          <div className="w-16 h-12">
            <img src={weMarketYouLogo} alt="We Market You" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-5xl font-bold text-primary">We Market You - Service Portfolio</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            {
              category: "Digital Marketing",
              services: [
                "Search Engine Optimization",
                "Pay-Per-Click Advertising",
                "Social Media Marketing",
                "Content Marketing Strategy"
              ],
              metrics: "Average 3x ROI increase",
              icon: TrendingUp,
              color: "from-pink-500 to-pink-400"
            },
            {
              category: "Brand Strategy",
              services: [
                "Brand Identity Development",
                "Corporate Communications",
                "Crisis Management",
                "Reputation Building"
              ],
              metrics: "95% brand recall improvement",
              icon: Target,
              color: "from-indigo-500 to-indigo-400"
            },
            {
              category: "Analytics & Insights",
              services: [
                "Customer Journey Mapping",
                "ROI Tracking & Reporting",
                "Market Research",
                "Competitive Analysis"
              ],
              metrics: "40% better decision making",
              icon: BarChart3,
              color: "from-yellow-500 to-amber-400"
            },
            {
              category: "Public Relations",
              services: [
                "Media Relations",
                "Press Release Distribution",
                "Event Management",
                "Influencer Partnerships"
              ],
              metrics: "200% media coverage increase",
              icon: Users,
              color: "from-teal-500 to-cyan-400"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="relative group p-6 bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 mb-2"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -2
              }}
            >
              {/* Glow background */}
              <div
                className={`
                  absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-30
                  bg-gradient-to-br ${category.color} pointer-events-none
                  group-hover:opacity-50 transition-opacity duration-300
                `}
              />
              {/* Icon in a gradient circle */}
              <div className="flex items-center justify-center mb-5">
                <div className={`
                  bg-gradient-to-br ${category.color} p-3 rounded-full shadow-md
                  group-hover:scale-105 transition-transform duration-300
                `}>
                  <category.icon className="w-10 h-10 text-white drop-shadow" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center tracking-tight">
                {category.category}
              </h3>
              <p className="text-sm text-accent font-semibold mb-2 text-center">{category.metrics}</p>
              <ul className="space-y-2 mb-1">
                {category.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 px-2 py-1 rounded hover:bg-accent/10 transition"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>;

  // Technology Architecture Slide
  const TechnologyArchitectureSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Technology Architecture & Stack
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend Technologies */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -4 }}>
            <Card className="p-7 bg-white border border-border shadow-lg h-full group transition-all duration-300">
              <div className="flex flex-col items-center mb-5">
                <div className="bg-blue-100 p-3 rounded-full mb-3 group-hover:scale-105 transition-transform">
                  <Server className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1 text-center">Backend Technologies</h3>
                <div className="w-10 h-1 bg-blue-200 rounded-full mb-2" />
              </div>
              <ul className="space-y-2">
                {[
                  "Node.js & Express",
                  "Python/Django",
                  "Java Spring Boot",
                  "Microservices Architecture",
                  "RESTful APIs",
                  "GraphQL"
                ].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-accent/10 transition">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Frontend Technologies */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -4 }}>
            <Card className="p-7 bg-white border border-border shadow-lg h-full group transition-all duration-300">
              <div className="flex flex-col items-center mb-5">
                <div className="bg-green-100 p-3 rounded-full mb-3 group-hover:scale-105 transition-transform">
                  <Monitor className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1 text-center">Frontend Technologies</h3>
                <div className="w-10 h-1 bg-green-200 rounded-full mb-2" />
              </div>
              <ul className="space-y-2">
                {[
                  "React.js & Next.js",
                  "Vue.js & Nuxt.js",
                  "Angular",
                  "TypeScript",
                  "Tailwind CSS",
                  "Progressive Web Apps"
                ].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-accent/10 transition">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Database & DevOps */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -4 }}>
            <Card className="p-7 bg-white border border-border shadow-lg h-full group transition-all duration-300">
              <div className="flex flex-col items-center mb-5">
                <div className="bg-purple-100 p-3 rounded-full mb-3 group-hover:scale-105 transition-transform">
                  <Database className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1 text-center">Database & DevOps</h3>
                <div className="w-10 h-1 bg-purple-200 rounded-full mb-2" />
              </div>
              <ul className="space-y-2">
                {[
                  "PostgreSQL & MongoDB",
                  "Redis Caching",
                  "Docker & Kubernetes",
                  "AWS/Azure/GCP",
                  "CI/CD Pipelines",
                  "Monitoring & Analytics"
                ].map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-accent/10 transition">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Revenue Streams Slide
  const RevenueStreamsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Revenue Streams & Business Model
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {[{
            stream: "Project-Based Revenue",
            description: "Custom development projects with fixed pricing",
            percentage: "60%",
            avgValue: "₹5-50L per project",
            icon: Briefcase,
            color: "from-blue-500 to-blue-400",
            ring: "ring-blue-200"
          }, {
            stream: "Subscription Services",
            description: "Monthly recurring revenue for ongoing services",
            percentage: "25%",
            avgValue: "₹50K-5L per month",
            icon: Activity,
            color: "from-green-500 to-emerald-400",
            ring: "ring-green-200"
          }, {
            stream: "Consulting & Strategy",
            description: "Strategic advisory and consulting services",
            percentage: "10%",
            avgValue: "₹2-10L per engagement",
            icon: Brain,
            color: "from-purple-500 to-fuchsia-400",
            ring: "ring-purple-200"
          }, {
            stream: "Training & Support",
            description: "Technical training and ongoing support services",
            percentage: "5%",
            avgValue: "₹1-5L per program",
            icon: Award,
            color: "from-orange-500 to-yellow-400",
            ring: "ring-orange-200"
          }].map((stream, index) => (
            <motion.div
              key={index}
              className="relative group p-7 bg-white rounded-2xl shadow-elevated border border-border overflow-hidden transition-all duration-300 hover:shadow-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.035, y: -6 }}
            >
              {/* Decorative gradient ring */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${stream.color} opacity-20 rounded-full blur-2xl pointer-events-none`} />
              {/* Icon with ring */}
              <div className={`flex items-center justify-center w-16 h-16 mb-5 mx-auto bg-gradient-to-br ${stream.color} shadow-lg rounded-full ring-4 ${stream.ring} group-hover:scale-110 transition-transform`}>
                <stream.icon className="w-8 h-8 text-white drop-shadow" />
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-1 text-center tracking-tight">{stream.stream}</h3>
              <p className="text-muted-foreground text-sm mb-5 text-center">{stream.description}</p>
              <div className="flex justify-center gap-4 mb-2">
                <div className="flex flex-col items-center bg-accent/10 px-4 py-2 rounded-lg min-w-[110px]">
                  <span className="text-2xl font-bold text-accent">{stream.percentage}</span>
                  <span className="text-xs text-muted-foreground font-medium">Revenue Share</span>
                </div>
                <div className="flex flex-col items-center bg-primary/10 px-4 py-2 rounded-lg min-w-[110px]">
                  <span className="text-lg font-bold text-primary">{stream.avgValue}</span>
                  <span className="text-xs text-muted-foreground font-medium">Avg. Value</span>
                </div>
              </div>
              {/* Subtle bottom bar for accent */}
              <div className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-1 rounded-full bg-gradient-to-r ${stream.color} opacity-60`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>;

  // CMT AI Products Detailed Slide
  const CmtAiProductsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
          <div className="w-16 h-12">
            <img src={cmtAiLogo} alt="CMT AI" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-5xl font-bold text-primary">CMT AI - Product Portfolio</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              category: "Web Development",
              products: [
                "E-commerce Platforms",
                "Content Management Systems",
                "Progressive Web Apps",
                "Custom Web Applications"
              ],
              icon: Monitor,
              color: "from-blue-500 to-blue-400"
            },
            {
              category: "AI/ML Solutions",
              products: [
                "Chatbot Development",
                "Predictive Analytics",
                "Computer Vision Systems",
                "Natural Language Processing"
              ],
              icon: Brain,
              color: "from-purple-500 to-fuchsia-500"
            },
            {
              category: "DevOps & Cloud Solutions",
              products: [
                "Cloud Migration & Management",
                "DevOps Automation",
                "CI/CD Pipeline Setup",
                "Infrastructure as Code",
                "Security & Compliance"
              ],
              icon: Cloud,
              color: "from-cyan-500 to-sky-400"
            },
            {
              category: "Mobile Development",
              products: [
                "Native iOS/Android Apps",
                "Cross-platform Solutions",
                "Hybrid Applications",
                "Mobile-first Design"
              ],
              icon: Smartphone,
              color: "from-green-500 to-emerald-400"
            },
            {
              category: "IoT Development",
              products: [
                "IoT Device Integration",
                "Custom IoT Solutions",
                "Edge Computing",
                "Remote Monitoring & Control"
              ],
              icon: Monitor, // You can replace with a more suitable IoT icon if available
              color: "from-orange-500 to-yellow-400"
            },
            {
              category: "UI/UX Design",
              products: [
                "User Research & Personas",
                "Wireframing & Prototyping",
                "UI Design Systems",
                "UX Audits & Optimization"
              ],
              icon: Award, // You can replace with a more suitable UI/UX icon if available
              color: "from-pink-500 to-rose-400"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="relative group p-6 bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 mb-2"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -2
              }}
            >
              {/* Glow background */}
              <div
                className={`
                  absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-30
                  bg-gradient-to-br ${category.color} pointer-events-none
                  group-hover:opacity-50 transition-opacity duration-300
                `}
              />
              {/* Icon in a gradient circle */}
              <div className="flex items-center justify-center mb-5">
                <div className={`
                  bg-gradient-to-br ${category.color} p-3 rounded-full shadow-md
                  group-hover:scale-105 transition-transform duration-300
                `}>
                  <category.icon className="w-10 h-10 text-white drop-shadow" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center tracking-tight">
                {category.category}
              </h3>
              <ul className="space-y-2 mb-1">
                {category.products.map((product, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 px-2 py-1 rounded hover:bg-accent/10 transition"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{product}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>;

  // Development Process Slide
  const DevelopmentProcessSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Development Process & Methodology
        </motion.h2>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            {
              phase: "Discovery",
              description: "Requirements gathering, stakeholder interviews, technical assessment",
              duration: "1-2 weeks",
              icon: Eye,
              color: "from-blue-400 to-blue-600",
              shadow: "shadow-blue-200"
            },
            {
              phase: "Design",
              description: "UI/UX design, system architecture, technical specifications",
              duration: "1-2 weeks",
              icon: Monitor,
              color: "from-green-400 to-green-600",
              shadow: "shadow-green-200"
            },
            {
              phase: "Development",
              description: "Agile development sprints, continuous integration, testing",
              duration: "2-4 weeks",
              icon: Code,
              color: "from-purple-400 to-purple-600",
              shadow: "shadow-purple-200"
            },
            {
              phase: "Deployment",
              description: "Production deployment, monitoring setup, training & handover",
              duration: "2-3 days",
              icon: Rocket,
              color: "from-orange-400 to-orange-600",
              shadow: "shadow-orange-200"
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              className={`
                relative p-7 bg-white rounded-2xl border border-border text-center overflow-hidden
                shadow-lg hover:shadow-2xl transition-all duration-300 group
              `}
              variants={itemVariants}
              whileHover={{
                scale: 1.07,
                y: -8
              }}
            >
              {/* Decorative gradient glow */}
              <div
                className={`
                  absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-25
                  bg-gradient-to-br ${phase.color} ${phase.shadow} pointer-events-none
                  group-hover:opacity-40 transition-opacity duration-300
                `}
              />
              {/* Icon in a gradient ring */}
              <div className="flex items-center justify-center mb-5 relative z-10">
                <div
                  className={`
                    bg-gradient-to-br ${phase.color} p-4 rounded-full shadow-md
                    ring-4 ring-white group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  <phase.icon className="w-12 h-12 text-white drop-shadow" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-2 tracking-tight drop-shadow-sm">{phase.phase}</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[48px]">{phase.description}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent shadow-sm">
                  {phase.duration}
                </span>
              </div>
              {/* Progress bar for visual flow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-60 mt-4" />
              {/* Arrow to next phase except last */}
              {index < 3 && (
                <div className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 z-20">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8 18H28M28 18L22 12M28 18L22 24" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <Card className="p-8 bg-white shadow-elevated border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Quality Assurance Framework</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Security First</h4>
                <p className="text-sm text-muted-foreground">OWASP compliance, security audits, penetration testing</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Automated Testing</h4>
                <p className="text-sm text-muted-foreground">Unit tests, integration tests, end-to-end testing</p>
              </div>
              <div className="text-center">
                <Activity className="w-10 h-10 text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">Load testing, optimization, monitoring & alerts</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Pricing Strategy Slide
  const PricingStrategySlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Pricing Strategy & Packages
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20 mt-16">
          {/* Starter Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 relative max-w-xs mx-auto w-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-1">Starter</h3>
            <p className="text-gray-500 text-center text-sm mb-2">Early-stage startups</p>
            <div className="text-3xl font-black text-center mb-5">₹2-10L</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">MVP Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">Basic Marketing Setup</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">3 months support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">Standard hosting</span>
              </li>
            </ul>
            <Button className="w-full bg-gray-900 text-white py-2 rounded-xl">Get Started</Button>
          </div>
          
          {/* Growth Card */}
          <div className="bg-accent/10 rounded-3xl shadow-xl p-8 relative border-4 border-accent max-w-xs mx-auto w-full scale-105 z-10">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-accent text-white px-6 py-2 rounded-full text-base font-bold shadow-xl border-2 border-white/80 whitespace-nowrap">
                Most Popular
              </span>
            </div>
            
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-1 text-accent">Growth</h3>
            <p className="text-gray-500 text-center text-sm mb-2">Growing businesses</p>
            <div className="text-3xl font-black text-center mb-5 text-accent">₹10-50L</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </span>
                <span className="text-sm text-gray-600">Full-stack development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </span>
                <span className="text-sm text-gray-600">Comprehensive marketing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </span>
                <span className="text-sm text-gray-600">12 months support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </span>
                <span className="text-sm text-gray-600">Premium infrastructure</span>
              </li>
            </ul>
            <Button className="w-full bg-accent text-white py-2 rounded-xl">Get Started</Button>
          </div>
          
          {/* Enterprise Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 relative max-w-xs mx-auto w-full">
            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-1">Enterprise</h3>
            <p className="text-gray-500 text-center text-sm mb-2">Large corporations</p>
            <div className="text-3xl font-black text-center mb-5">₹50L+</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">Custom solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">Strategic consulting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">24/7 support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-700" />
                </span>
                <span className="text-sm text-gray-600">Dedicated team</span>
              </li>
            </ul>
            <Button className="w-full bg-gray-900 text-white py-2 rounded-xl">Get Started</Button>
          </div>
        </div>
      </div>
    </motion.div>;

  // SWOT Analysis Slide
  const SwotAnalysisSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          SWOT Analysis
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Strengths */}
          <motion.div variants={itemVariants}>
            <Card className="relative p-8 bg-gradient-to-br from-green-50 via-white to-green-100 shadow-xl border border-green-100 rounded-2xl h-full group transition-all duration-300 hover:shadow-glow">
              <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition pointer-events-none">
                <TrendingUp className="w-32 h-32 text-green-400" />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow">
                  <TrendingUp className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Strengths</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Dual expertise in tech + marketing",
                  "Experienced founding team",
                  "Cost-effective pricing model",
                  "Proven track record with 200+ clients",
                  "Agile development methodology"
                ].map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-green-900">{strength}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Weaknesses */}
          <motion.div variants={itemVariants}>
            <Card className="relative p-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 shadow-xl border border-yellow-100 rounded-2xl h-full group transition-all duration-300 hover:shadow-glow">
              <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition pointer-events-none">
                <AlertTriangle className="w-32 h-32 text-yellow-400" />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow">
                  <AlertTriangle className="w-7 h-7 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">Weaknesses</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Limited brand recognition vs. large players",
                  "Scaling team capabilities",
                  "Geographic concentration in India",
                  "Dependency on founder expertise",
                  "Working capital requirements"
                ].map((weakness, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-yellow-900">{weakness}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Opportunities */}
          <motion.div variants={itemVariants}>
            <Card className="relative p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-xl border border-blue-100 rounded-2xl h-full group transition-all duration-300 hover:shadow-glow">
              <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition pointer-events-none">
                <Rocket className="w-32 h-32 text-blue-400" />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow">
                  <Rocket className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Opportunities</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Growing digital transformation market",
                  "Post-pandemic shift to digital services",
                  "Government digitization initiatives",
                  "Expansion to international markets",
                  "Strategic partnerships & acquisitions"
                ].map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-blue-900">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Threats */}
          <motion.div variants={itemVariants}>
            <Card className="relative p-8 bg-gradient-to-br from-red-50 via-white to-red-100 shadow-xl border border-red-100 rounded-2xl h-full group transition-all duration-300 hover:shadow-glow">
              <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition pointer-events-none">
                <Shield className="w-32 h-32 text-red-400" />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow">
                  <Shield className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Threats</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Competition from established players",
                  "Economic downturns affecting SME spending",
                  "Technology disruption & obsolescence",
                  "Talent acquisition challenges",
                  "Currency fluctuations in global markets"
                ].map((threat, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-red-900">{threat}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;
  const ClientsSlide: React.FC<{
    page: number;
  }> = ({
    page
  }) => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content max-w-7xl mx-auto">
        <motion.h2 className="text-5xl font-bold text-primary mb-8 text-center" variants={itemVariants}>Client Portfolio</motion.h2>
        <p className="text-center text-muted-foreground mb-6">Page {page + 1} of {clientChunks.length}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clientChunks[page]?.map((client, idx) => <motion.div key={client.url} variants={itemVariants} whileHover={{
          y: -4,
          scale: 1.01
        }}>
              <Card className="overflow-hidden group bg-card border border-border shadow-card hover:shadow-glow transition-spring">
                <div className="relative">
                  <img src={client.thumbnail || '/placeholder.svg'} loading="lazy" alt={`${client.name} - ${client.category}`} className="w-full h-40 sm:h-44 md:h-48 object-cover" onError={e => {
                (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
              }} />
                </div>
                <CardContent className="p-4 pt-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-primary">{client.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{client.category}</p>
                    </div>
                    <a href={client.url} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" aria-label={`View ${client.name}`} className="rounded-full bg-background/80 hover:bg-accent hover:text-accent-foreground shadow-card">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;
  const renderSlide = () => {
    switch (slides[currentSlide]) {
      case 'cover':
        return <CoverSlide />;
      case 'company-overview':
        return <CompanyOverviewSlide />;
      case 'problem':
        return <ProblemSlide />;
      case 'market-research':
        return <MarketResearchSlide />;
      case 'target-customers':
        return <TargetCustomersSlide />;
      case 'solution':
        return <SolutionSlide />;
      case 'cmt-ai-products':
        return <CmtAiProductsSlide />;
      case 'we-market-you-services':
        return <WeMarketYouServicesSlide />;
      case 'technology-architecture':
        return <TechnologyArchitectureSlide />;
      case 'development-process':
        return <DevelopmentProcessSlide />;
      case 'business-model':
        return <BusinessModelSlide />;
      case 'revenue-streams':
        return <RevenueStreamsSlide />;
      case 'pricing-strategy':
        return <PricingStrategySlide />;
      case 'go-to-market':
        return <GoToMarketSlide />;
      case 'marketing-sales-funnel':
        return <GoToMarketSlide />;
      // Will expand later
      case 'partnership-strategy':
        return <GoToMarketSlide />;
      // Will expand later
      case 'competitive-landscape':
        return <CompetitiveLandscapeSlide />;
      case 'swot-analysis':
        return <SwotAnalysisSlide />;
      case 'customer-acquisition':
        return <GoToMarketSlide />;
      // Will expand later
      case 'case-studies':
        return <CaseStudiesSlide />;
      case 'traction':
        return <TractionSlide />;
      case 'team-leadership':
        return <TeamLeadershipSlide />;
      case 'advisory-board':
        return <TeamLeadershipSlide />;
      // Will expand later
      case 'organizational-structure':
        return <TeamLeadershipSlide />;
      // Will expand later
      case 'financials':
        return <FinancialsSlide />;
      case 'unit-economics':
        return <FinancialsSlide />;
      // Will expand later
      case 'funding-ask':
        return <FundingAskSlide />;
      case 'use-of-funds':
        return <FundingAskSlide />;
      // Will expand later
      case 'risk-mitigation':
        return <RiskMitigationSlide />;
      case 'expansion-strategy':
        return <ExpansionStrategySlide />;
      case 'social-impact':
        return <SocialImpactSlide />;
      case 'milestones-roadmap':
        return <ExpansionStrategySlide />;
      // Will expand later
      case 'exit-strategy':
        return <VisionClosingSlide />;
      // Will expand later
      case 'qa-preparation':
        return <VisionClosingSlide />;
      // Will expand later
      case 'vision-closing':
        return <VisionClosingSlide />;
      default:
        if (slides[currentSlide]?.startsWith('clients-')) {
          const page = Number(slides[currentSlide].split('-')[1]) - 1;
          return <ClientsSlide page={isNaN(page) ? 0 : page} />;
        }
        return <CoverSlide />;
    }
  };
  return <div className="min-h-screen w-full mx-auto bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-96 h-96 rounded-full" style={{
        background: `radial-gradient(circle, hsl(180 68% ${30 + i * 5}% / 0.02), transparent)`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }} animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
        x: [0, 50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 20 + i * 2,
        repeat: Infinity,
        ease: "linear"
      }} />)}
      </div>

      {/* Left Navigation Button */}
      <motion.div className="fixed left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-50" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.4,
      delay: 0.3
    }}>
        <Button onClick={prevSlide} size="sm" variant="ghost" aria-label="Previous slide" title="Previous" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-card/95 backdrop-blur-md shadow-glow border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </motion.div>

      {/* Right Navigation Button */}
      <motion.div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-50" initial={{
      opacity: 0,
      x: 20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.4,
      delay: 0.3
    }}>
        <Button onClick={nextSlide} size="sm" variant="ghost" aria-label="Next slide" title="Next" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-card/95 backdrop-blur-md shadow-glow border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </motion.div>

      {/* Enhanced Responsive Slide Counter */}
      <motion.div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 shadow-glow border border-border/50" initial={{
      opacity: 0,
      scale: 0.8,
      x: 20
    }} animate={{
      opacity: 1,
      scale: 1,
      x: 0
    }} transition={{
      duration: 0.4
    }}>
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div className="w-2 h-2 bg-accent rounded-full" animate={{
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
          <span className="text-xs sm:text-sm font-semibold text-primary">
            {currentSlide + 1} <span className="text-muted-foreground">of</span> {slides.length}
          </span>
        </div>
      </motion.div>

      {/* AutoPlay Toggle */}
      

      {/* Main content with enhanced spacing */}
      <AnimatePresence mode="wait">
        <div className="relative z-10">
          {renderSlide()}
        </div>
      </AnimatePresence>

    </div>;
};
export default PitchDeck;