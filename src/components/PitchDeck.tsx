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
  const slides = ['cover', 'company-overview', 'problem', 'market-research', 'target-customers', 'solution', 'cmt-ai-products', 'we-market-you-services', 'technology-architecture', 'development-process', 'business-model', 'revenue-streams', 'pricing-strategy', 'go-to-market', 'competitive-landscape', 'swot-analysis', 'case-studies', 'traction', 'team-leadership', 'financials', 'funding-ask', 'risk-mitigation', 'expansion-strategy', 'social-impact', 'vision-closing'];

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
      <div className="pitch-content text-center relative z-10">
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
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative">
              <div className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36 mx-auto mb-4 sm:mb-6 relative">
                <img src={cmtAiLogo} alt="CMT AI Logo" className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-card" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">CMT AI</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Software Development & AI Solutions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center relative">
              <div className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36 mx-auto mb-4 sm:mb-6 relative">
                <img src={weMarketYouLogo} alt="We Market You Logo" className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-card" />
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
                <span className="break-all sm:break-normal">contact@completrix.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 2: Company Overview
  const CompanyOverviewSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          About Completrix Microtechnologies
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <motion.div variants={itemVariants}>
            <Card className="p-4 sm:p-6 bg-white shadow-elevated border border-border h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                To democratize technology and marketing services for startups and SMEs, enabling them to compete with enterprise-level capabilities at affordable costs.
              </p>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm sm:text-base font-semibold text-accent">Start. Scale. Succeed.</span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-4 sm:p-6 bg-white shadow-elevated border border-border h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                To become the go-to technology and marketing partner for emerging businesses across India and globally, fostering innovation and growth.
              </p>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm sm:text-base font-semibold text-accent">Global Innovation Partner</span>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <Card className="p-8 bg-white shadow-elevated border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Company Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[{
              label: "Founded",
              value: "2024",
              icon: Calendar
            }, {
              label: "Headquarters",
              value: "India",
              icon: MapPin
            }, {
              label: "Team Size",
              value: "30+",
              icon: Users
            }, {
              label: "Active Clients",
              value: "200+",
              icon: Briefcase
            }].map((stat, index) => <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>;

  // Slide 2: Problem
  const ProblemSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          The Problem
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[{
          title: "Technical Expertise Gap",
          description: "85% of startups fail due to lack of technical co-founders. Entrepreneurs struggle to find reliable, full-stack tech partners who understand modern frameworks, AI/ML, and scalable cloud infrastructure.",
          stats: "85% startup failure rate",
          icon: Brain,
          color: "text-red-500"
        }, {
          title: "Fragmented Service Ecosystem",
          description: "Traditional agencies focus on single domains - either technology OR marketing. This creates coordination challenges, inconsistent branding, and project delays for growing businesses.",
          stats: "60% project delays",
          icon: Target,
          color: "text-orange-500"
        }, {
          title: "High Cost Barriers",
          description: "Enterprise-grade tech and marketing services are priced for large corporations. SMEs and startups can't afford ₹50L+ budgets that traditional providers demand.",
          stats: "₹50L+ typical cost",
          icon: DollarSign,
          color: "text-yellow-500"
        }].map((problem, index) => <motion.div key={index} className="p-4 sm:p-6 bg-white rounded-xl shadow-elevated border border-border hover:shadow-glow transition-spring h-full" variants={itemVariants} whileHover={{
          scale: 1.03,
          y: -5
        }}>
              <problem.icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${problem.color} mb-3 sm:mb-4`} />
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 text-xs sm:text-sm">{problem.description}</p>
              <div className="bg-accent/10 p-2 rounded-lg">
                <p className="font-bold text-accent text-xs">{problem.stats}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;

  // Slide 3: Our Solution
  const SolutionSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Our Solution
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 lg:space-y-8">
            <Card className="p-4 sm:p-6 bg-white shadow-elevated border border-border">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">CMT AI</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Offers end-to-end technology development – from custom web/mobile apps to AI/ML model training, DevOps, and cloud migration.</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-white shadow-elevated border border-border">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">We Market You</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">A full-service marketing arm handling SEO, PR, advertising, and brand building.</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-elevated border border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">One-Stop Growth Partner</h3>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                A comprehensive tech + marketing powerhouse enabling businesses to ideate, launch, and scale.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[{
                label: "Modern",
                icon: Rocket
              }, {
                label: "Scalable",
                icon: TrendingUp
              }, {
                label: "Affordable",
                icon: DollarSign
              }, {
                label: "Expert-Led",
                icon: Award
              }].map((feature, index) => <div key={index} className="p-4 bg-accent/10 rounded-lg">
                    <feature.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold text-primary">{feature.label}</p>
                  </div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 4: Enhanced Market Opportunity with Interactive Charts
  const MarketOpportunitySlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
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
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
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
                {["Startups", "SMBs", "Corporations", "Political Entities", "NGOs"].map((audience, index) => <div key={index} className="p-3 bg-accent/10 rounded-lg">
                    <span className="font-semibold text-primary">{audience}</span>
                  </div>)}
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
    </motion.div>;

  // Slide 7: Go-To-Market Strategy
  const GoToMarketSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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
                {["Content marketing, SEO, partnerships, PR", "Collaboration with incubators & VC firms for referrals"].map((strategy, index) => <div key={index} className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{strategy}</span>
                  </div>)}
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
                {["Localized outreach in UK, Germany, France", "Online advertising + partnerships with consultants"].map((strategy, index) => <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{strategy}</span>
                  </div>)}
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
    </motion.div>;

  // Slide 8: Enhanced Traction & Milestones with Interactive Charts
  const TractionSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
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
                {competitorData.map((competitor, index) => <tr key={index} className={`border-b border-border ${competitor.name === 'CMT' ? 'bg-accent/10' : ''}`}>
                    <td className="p-4 font-bold text-primary">{competitor.name}</td>
                    <td className="text-center p-4">
                      {competitor.tech ? <Check className="w-6 h-6 text-success mx-auto" /> : <X className="w-6 h-6 text-destructive mx-auto" />}
                    </td>
                    <td className="text-center p-4">
                      {competitor.marketing ? <Check className="w-6 h-6 text-success mx-auto" /> : <X className="w-6 h-6 text-destructive mx-auto" />}
                    </td>
                    <td className="text-center p-4">
                      {competitor.fullStack ? <Check className="w-6 h-6 text-success mx-auto" /> : <X className="w-6 h-6 text-destructive mx-auto" />}
                    </td>
                    <td className="text-center p-4 text-muted-foreground">{competitor.price}</td>
                    <td className="text-center p-4 text-muted-foreground">{competitor.target}</td>
                  </tr>)}
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
    </motion.div>;

  // Slide 10: Team & Leadership
  const TeamLeadershipSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Team & Leadership
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
        }].map((member, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          scale: 1.05,
          y: -10
        }}>
              <Card className="p-8 bg-white shadow-elevated border border-border text-center h-full">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <h4 className="text-lg font-semibold text-accent mb-4">{member.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{member.experience}</p>
              </Card>
            </motion.div>)}
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
    </motion.div>;

  // Slide 11: Enhanced Financials & Projections with Interactive Charts
  const FinancialsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
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
                {[{
                percentage: "10%",
                use: "Infra (build tech & content studios)",
                amount: "₹10L"
              }, {
                percentage: "20%",
                use: "EU Market Expansion",
                amount: "₹20L"
              }, {
                percentage: "30%",
                use: "Team Hiring (devs, PMs, marketers)",
                amount: "₹30L"
              }, {
                percentage: "20%",
                use: "National-level marketing campaigns",
                amount: "₹20L"
              }, {
                percentage: "10%",
                use: "R&D/Product Development",
                amount: "₹10L"
              }, {
                percentage: "10%",
                use: "Risk & Emergency Fund",
                amount: "₹10L"
              }].map((item, index) => <div key={index} className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                        {item.percentage}
                      </div>
                      <span className="text-muted-foreground">{item.use}</span>
                    </div>
                    <span className="font-bold text-primary">{item.amount}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 10: Technology Stack
  const TechnologyStackSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Case Studies & Success Stories
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          title: "E-commerce Platform",
          client: "Retail Startup",
          challenge: "Needed a scalable e-commerce solution with AI recommendations",
          solution: "Built MERN stack platform with ML-powered product recommendations",
          results: ["300% increase in sales", "50% better user engagement", "Deployed in 8 weeks"],
          icon: Smartphone,
          color: "accent"
        }, {
          title: "Digital Marketing Campaign",
          client: "Tech Company",
          challenge: "Low brand awareness and poor online presence",
          solution: "Comprehensive SEO, content marketing, and social media strategy",
          results: ["400% increase in web traffic", "200% growth in leads", "10x social media reach"],
          icon: TrendingUp,
          color: "primary"
        }, {
          title: "Healthcare Management System",
          client: "Medical Clinic Chain",
          challenge: "Manual processes and poor patient data management",
          solution: "Custom ERP with patient management, scheduling, and analytics",
          results: ["80% reduction in admin time", "99.9% uptime", "Improved patient satisfaction"],
          icon: Heart,
          color: "success"
        }].map((study, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          scale: 1.05,
          y: -10
        }}>
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
                      {study.results.map((result, idx) => <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 text-${study.color} flex-shrink-0`} />
                          <span className="text-muted-foreground text-sm">{result}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>)}
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
    </motion.div>;

  // Slide 15: Risk Mitigation & Contingency
  const RiskMitigationSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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
                {[{
                risk: "Market Competition",
                impact: "Medium",
                probability: "High",
                mitigation: "Differentiation through integrated services and competitive pricing"
              }, {
                risk: "Talent Retention",
                impact: "High",
                probability: "Medium",
                mitigation: "Competitive compensation, equity participation, growth opportunities"
              }, {
                risk: "Economic Downturn",
                impact: "High",
                probability: "Low",
                mitigation: "Diversified client base, flexible cost structure, recession-proof services"
              }].map((riskItem, index) => <div key={index} className="p-4 border border-border rounded-lg">
                    <h4 className="font-bold text-primary mb-2">{riskItem.risk}</h4>
                    <div className="flex gap-4 text-sm mb-2">
                      <span className="text-muted-foreground">Impact: <span className="font-medium">{riskItem.impact}</span></span>
                      <span className="text-muted-foreground">Probability: <span className="font-medium">{riskItem.probability}</span></span>
                    </div>
                    <p className="text-muted-foreground text-sm">{riskItem.mitigation}</p>
                  </div>)}
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
                {["Emergency fund (10% of raised capital)", "Flexible team structure for scaling up/down", "Multiple revenue streams for stability", "Strong client relationships and contracts", "Backup partnerships and vendor relationships", "Insurance coverage for key personnel"].map((measure, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{measure}</span>
                  </div>)}
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
    </motion.div>;

  // Slide 16: Expansion Strategy & Global Vision
  const ExpansionStrategySlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-5xl font-bold text-primary mb-12 text-center" variants={itemVariants}>
          Expansion Strategy & Global Vision
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[{
          phase: "Phase 1 (Year 1)",
          title: "Market Consolidation",
          goals: ["Establish strong presence in India", "Build core team to 50+ members", "Achieve ₹5Cr revenue"],
          icon: Building,
          color: "accent"
        }, {
          phase: "Phase 2 (Year 2)",
          title: "EU Market Entry",
          goals: ["Launch operations in UK & Germany", "Partnerships with local firms", "International team of 25+ members"],
          icon: Globe,
          color: "primary"
        }, {
          phase: "Phase 3 (Year 3+)",
          title: "Global Scale",
          goals: ["Expand to US and Asia-Pacific", "Franchise/licensing model", "100+ team members globally"],
          icon: Rocket,
          color: "success"
        }].map((phase, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          scale: 1.05,
          y: -10
        }}>
              <Card className="p-8 bg-white shadow-elevated border border-border h-full text-center">
                <div className={`w-20 h-20 bg-${phase.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <phase.icon className={`w-10 h-10 text-${phase.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2">{phase.phase}</h3>
                <h4 className="text-xl font-bold text-accent mb-4">{phase.title}</h4>
                
                <ul className="space-y-2 text-left">
                  {phase.goals.map((goal, idx) => <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 text-${phase.color} mt-1 flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm">{goal}</span>
                    </li>)}
                </ul>
              </Card>
            </motion.div>)}
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
    </motion.div>;

  // Slide 17: Social Impact & Sustainability
  const SocialImpactSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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
                {[{
                title: "Skill Development Programs",
                description: "Free coding bootcamps for underprivileged youth",
                impact: "500+ students trained annually"
              }, {
                title: "Startup Ecosystem Support",
                description: "Mentorship and discounted services for early-stage startups",
                impact: "100+ startups supported"
              }, {
                title: "Digital Literacy Campaigns",
                description: "Community workshops on digital marketing and basic tech skills",
                impact: "1000+ individuals reached"
              }].map((initiative, index) => <div key={index} className="p-4 border border-border rounded-lg">
                    <h4 className="font-bold text-primary mb-2">{initiative.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{initiative.description}</p>
                    <p className="text-accent font-medium text-sm">{initiative.impact}</p>
                  </div>)}
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
                {["Carbon-neutral hosting and cloud services", "Paperless operations and digital workflows", "Remote-first culture reducing commute emissions", "Green technology recommendations for clients", "Sustainable supplier partnerships", "Employee environmental awareness programs"].map((practice, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{practice}</span>
                  </div>)}
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-elevated border border-border text-center">
              <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">UN SDG Alignment</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Quality Education (SDG 4)", "Decent Work (SDG 8)", "Industry Innovation (SDG 9)", "Reduced Inequalities (SDG 10)"].map((sdg, index) => <div key={index} className="p-3 bg-accent/10 rounded-lg">
                    <span className="text-muted-foreground text-sm font-medium">{sdg}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Slide 18: Vision & Closing
  const VisionClosingSlide = () => <motion.div className="pitch-slide bg-background text-foreground relative overflow-hidden" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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

        <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-elevated border border-border">
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
    </motion.div>;

  // Market Research Slide
  const MarketResearchSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Market Research & Validation
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <h3 className="text-xl font-bold text-primary mb-4">Primary Research Findings</h3>
              <div className="space-y-4">
                {["78% of SMEs lack dedicated tech teams", "65% struggle with digital marketing ROI", "Market size growing at 23% CAGR", "Average project cost reduced by 40% with our model"].map((finding, index) => <div key={index} className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">{finding}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <h3 className="text-xl font-bold text-primary mb-4">Market Validation</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-sm text-muted-foreground">Early Adopters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">85%</div>
                  <div className="text-sm text-muted-foreground">Client Retention Rate</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Target Customers Slide
  const TargetCustomersSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Target Customer Profiles
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[{
          title: "Early-Stage Startups",
          description: "Pre-seed to Series A companies needing MVP development and market entry strategy",
          size: "40%",
          revenue: "₹0-50L",
          needs: ["MVP Development", "Digital Presence", "Growth Strategy"],
          icon: Rocket,
          color: "text-blue-500"
        }, {
          title: "SMEs & Growing Businesses",
          description: "Established businesses looking to digitize operations and scale marketing efforts",
          size: "45%",
          revenue: "₹50L-10Cr",
          needs: ["Digital Transformation", "Marketing Automation", "System Integration"],
          icon: Building,
          color: "text-green-500"
        }, {
          title: "Enterprise Clients",
          description: "Large corporations needing specialized tech solutions and strategic marketing",
          size: "15%",
          revenue: "₹10Cr+",
          needs: ["Custom Solutions", "Strategic Consulting", "Large-scale Implementation"],
          icon: Briefcase,
          color: "text-purple-500"
        }].map((segment, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border" variants={itemVariants} whileHover={{
          scale: 1.02,
          y: -5
        }}>
              <segment.icon className={`w-12 h-12 ${segment.color} mb-4`} />
              <h3 className="text-xl font-bold text-primary mb-2">{segment.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{segment.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Market Share:</span>
                  <span className="font-semibold text-accent">{segment.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Revenue Range:</span>
                  <span className="font-semibold text-accent">{segment.revenue}</span>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-primary mb-2">Key Needs:</h4>
                  <ul className="space-y-1">
                    {segment.needs.map((need, idx) => <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <Check className="w-3 h-3 text-accent" />
                        {need}
                      </li>)}
                  </ul>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;

  // We Market You Services Detailed Slide
  const WeMarketYouServicesSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
          <div className="w-16 h-12">
            <img src={weMarketYouLogo} alt="We Market You" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-4xl font-bold text-primary">We Market You - Service Portfolio</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[{
          category: "Digital Marketing",
          services: ["Search Engine Optimization", "Pay-Per-Click Advertising", "Social Media Marketing", "Content Marketing Strategy"],
          metrics: "Average 3x ROI increase",
          icon: TrendingUp,
          color: "text-pink-500"
        }, {
          category: "Brand Strategy",
          services: ["Brand Identity Development", "Corporate Communications", "Crisis Management", "Reputation Building"],
          metrics: "95% brand recall improvement",
          icon: Target,
          color: "text-indigo-500"
        }, {
          category: "Analytics & Insights",
          services: ["Customer Journey Mapping", "ROI Tracking & Reporting", "Market Research", "Competitive Analysis"],
          metrics: "40% better decision making",
          icon: BarChart3,
          color: "text-yellow-500"
        }, {
          category: "Public Relations",
          services: ["Media Relations", "Press Release Distribution", "Event Management", "Influencer Partnerships"],
          metrics: "200% media coverage increase",
          icon: Users,
          color: "text-teal-500"
        }].map((category, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border" variants={itemVariants} whileHover={{
          scale: 1.02
        }}>
              <category.icon className={`w-10 h-10 ${category.color} mb-4`} />
              <h3 className="text-xl font-bold text-primary mb-2">{category.category}</h3>
              <p className="text-sm text-accent font-semibold mb-4">{category.metrics}</p>
              <ul className="space-y-2">
                {category.services.map((service, idx) => <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;

  // Technology Architecture Slide
  const TechnologyArchitectureSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Technology Architecture & Stack
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <Server className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Backend Technologies</h3>
              <div className="space-y-2">
                {["Node.js & Express", "Python/Django", "Java Spring Boot", "Microservices Architecture", "RESTful APIs", "GraphQL"].map((tech, index) => <div key={index} className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <Monitor className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Frontend Technologies</h3>
              <div className="space-y-2">
                {["React.js & Next.js", "Vue.js & Nuxt.js", "Angular", "TypeScript", "Tailwind CSS", "Progressive Web Apps"].map((tech, index) => <div key={index} className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <Database className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Database & DevOps</h3>
              <div className="space-y-2">
                {["PostgreSQL & MongoDB", "Redis Caching", "Docker & Kubernetes", "AWS/Azure/GCP", "CI/CD Pipelines", "Monitoring & Analytics"].map((tech, index) => <div key={index} className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </div>)}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  // Revenue Streams Slide
  const RevenueStreamsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Revenue Streams & Business Model
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {[{
          stream: "Project-Based Revenue",
          description: "Custom development projects with fixed pricing",
          percentage: "60%",
          avgValue: "₹5-50L per project",
          icon: Briefcase,
          color: "text-blue-500"
        }, {
          stream: "Subscription Services",
          description: "Monthly recurring revenue for ongoing services",
          percentage: "25%",
          avgValue: "₹50K-5L per month",
          icon: Activity,
          color: "text-green-500"
        }, {
          stream: "Consulting & Strategy",
          description: "Strategic advisory and consulting services",
          percentage: "10%",
          avgValue: "₹2-10L per engagement",
          icon: Brain,
          color: "text-purple-500"
        }, {
          stream: "Training & Support",
          description: "Technical training and ongoing support services",
          percentage: "5%",
          avgValue: "₹1-5L per program",
          icon: Award,
          color: "text-orange-500"
        }].map((stream, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border" variants={itemVariants} whileHover={{
          scale: 1.02
        }}>
              <stream.icon className={`w-10 h-10 ${stream.color} mb-4`} />
              <h3 className="text-xl font-bold text-primary mb-2">{stream.stream}</h3>
              <p className="text-muted-foreground text-sm mb-4">{stream.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{stream.percentage}</div>
                  <div className="text-xs text-muted-foreground">Revenue Share</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{stream.avgValue}</div>
                  <div className="text-xs text-muted-foreground">Average Value</div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;

  // CMT AI Products Detailed Slide
  const CmtAiProductsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
          <div className="w-16 h-12">
            <img src={cmtAiLogo} alt="CMT AI" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-4xl font-bold text-primary">CMT AI - Product Portfolio</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[{
          category: "Web Development",
          products: ["E-commerce Platforms", "Content Management Systems", "Progressive Web Apps", "Custom Web Applications"],
          icon: Monitor,
          color: "text-blue-500"
        }, {
          category: "AI/ML Solutions",
          products: ["Chatbot Development", "Predictive Analytics", "Computer Vision Systems", "Natural Language Processing"],
          icon: Brain,
          color: "text-purple-500"
        }, {
          category: "Cloud Services",
          products: ["Cloud Migration", "DevOps Implementation", "Infrastructure Management", "Security & Compliance"],
          icon: Cloud,
          color: "text-cyan-500"
        }, {
          category: "Mobile Development",
          products: ["Native iOS/Android Apps", "Cross-platform Solutions", "Hybrid Applications", "Mobile-first Design"],
          icon: Smartphone,
          color: "text-green-500"
        }].map((category, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border" variants={itemVariants} whileHover={{
          scale: 1.02
        }}>
              <category.icon className={`w-10 h-10 ${category.color} mb-4`} />
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.products.map((product, idx) => <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground text-sm">{product}</span>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;

  // Development Process Slide
  const DevelopmentProcessSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Development Process & Methodology
        </motion.h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[{
          phase: "Discovery",
          description: "Requirements gathering, stakeholder interviews, technical assessment",
          duration: "1-2 weeks",
          icon: Eye,
          color: "text-blue-500"
        }, {
          phase: "Design",
          description: "UI/UX design, system architecture, technical specifications",
          duration: "2-3 weeks",
          icon: Monitor,
          color: "text-green-500"
        }, {
          phase: "Development",
          description: "Agile development sprints, continuous integration, testing",
          duration: "4-12 weeks",
          icon: Code,
          color: "text-purple-500"
        }, {
          phase: "Deployment",
          description: "Production deployment, monitoring setup, training & handover",
          duration: "1-2 weeks",
          icon: Rocket,
          color: "text-orange-500"
        }].map((phase, index) => <motion.div key={index} className="p-6 bg-white rounded-xl shadow-elevated border border-border text-center" variants={itemVariants} whileHover={{
          scale: 1.05,
          y: -5
        }}>
              <phase.icon className={`w-12 h-12 ${phase.color} mx-auto mb-4`} />
              <h3 className="text-lg font-bold text-primary mb-2">{phase.phase}</h3>
              <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
              <div className="text-xs font-semibold text-accent">{phase.duration}</div>
            </motion.div>)}
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
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          Pricing Strategy & Packages
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          tier: "Starter",
          target: "Early-stage startups",
          price: "₹2-10L",
          features: ["MVP Development", "Basic Marketing Setup", "3 months support", "Standard hosting"],
          popular: false,
          color: "border-gray-200"
        }, {
          tier: "Growth",
          target: "Growing businesses",
          price: "₹10-50L",
          features: ["Full-stack development", "Comprehensive marketing", "12 months support", "Premium infrastructure"],
          popular: true,
          color: "border-accent"
        }, {
          tier: "Enterprise",
          target: "Large corporations",
          price: "₹50L+",
          features: ["Custom solutions", "Strategic consulting", "24/7 support", "Dedicated team"],
          popular: false,
          color: "border-gray-200"
        }].map((tier, index) => <motion.div key={index} className={`p-8 bg-white rounded-xl shadow-elevated border-2 ${tier.color} relative`} variants={itemVariants} whileHover={{
          scale: 1.02,
          y: -5
        }}>
              {tier.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>}
              
              <h3 className="text-2xl font-bold text-primary mb-2">{tier.tier}</h3>
              <p className="text-muted-foreground mb-4">{tier.target}</p>
              <div className="text-3xl font-bold text-accent mb-6">{tier.price}</div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>)}
              </ul>
              
              <Button className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                Get Started
              </Button>
            </motion.div>)}
        </div>
      </div>
    </motion.div>;

  // SWOT Analysis Slide
  const SwotAnalysisSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="text-4xl font-bold text-primary mb-8 text-center" variants={itemVariants}>
          SWOT Analysis
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold text-primary">Strengths</h3>
              </div>
              <ul className="space-y-2">
                {["Dual expertise in tech + marketing", "Experienced founding team", "Cost-effective pricing model", "Proven track record with 200+ clients", "Agile development methodology"].map((strength, index) => <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-muted-foreground">{strength}</span>
                  </li>)}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-bold text-primary">Weaknesses</h3>
              </div>
              <ul className="space-y-2">
                {["Limited brand recognition vs. large players", "Scaling team capabilities", "Geographic concentration in India", "Dependency on founder expertise", "Working capital requirements"].map((weakness, index) => <li key={index} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-yellow-500 mt-1" />
                    <span className="text-sm text-muted-foreground">{weakness}</span>
                  </li>)}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-bold text-primary">Opportunities</h3>
              </div>
              <ul className="space-y-2">
                {["Growing digital transformation market", "Post-pandemic shift to digital services", "Government digitization initiatives", "Expansion to international markets", "Strategic partnerships & acquisitions"].map((opportunity, index) => <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
                    <span className="text-sm text-muted-foreground">{opportunity}</span>
                  </li>)}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white shadow-elevated border border-border h-full">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold text-primary">Threats</h3>
              </div>
              <ul className="space-y-2">
                {["Competition from established players", "Economic downturns affecting SME spending", "Technology disruption & obsolescence", "Talent acquisition challenges", "Currency fluctuations in global markets"].map((threat, index) => <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                    <span className="text-sm text-muted-foreground">{threat}</span>
                  </li>)}
              </ul>
            </Card>
          </motion.div>
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
        return <CoverSlide />;
    }
  };
  return <div className="min-h-screen w-full bg-background relative overflow-hidden max-w-full">
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
        <Button onClick={prevSlide} size="lg" variant="ghost" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/95 backdrop-blur-md shadow-glow border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
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
        <Button onClick={nextSlide} size="lg" variant="ghost" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/95 backdrop-blur-md shadow-glow border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </motion.div>

      {/* Enhanced Responsive Slide Counter */}
      <motion.div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 shadow-glow border border-border/50" initial={{
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