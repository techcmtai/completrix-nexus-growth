import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, ArrowRight, TrendingUp, Users, DollarSign, Zap, Globe, Shield, Brain, Smartphone, BarChart3, Target, Award, Mail, Phone, PieChart, LineChart, Activity, Building, Calendar, Star, Briefcase, Rocket } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie, Legend } from 'recharts';
import weMarketYouLogo from '@/assets/we-market-you-logo.png';
import cmtAiLogo from '@/assets/cmt-ai-logo.png';
const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const slides = ['hero', 'problem', 'solution', 'services-cmt', 'services-wmy', 'business-model', 'traction', 'projections', 'team', 'investment', 'contact'];

  // Chart data
  const revenueData = [{
    month: 'Jan',
    revenue: 8,
    projection: 12
  }, {
    month: 'Feb',
    revenue: 9,
    projection: 15
  }, {
    month: 'Mar',
    revenue: 10,
    projection: 18
  }, {
    month: 'Apr',
    revenue: 11,
    projection: 22
  }, {
    month: 'May',
    revenue: 12,
    projection: 26
  }, {
    month: 'Jun',
    revenue: 11,
    projection: 30
  }, {
    month: 'Jul',
    revenue: 10,
    projection: 35
  }, {
    month: 'Aug',
    revenue: 12,
    projection: 40
  }, {
    month: 'Sep',
    revenue: 11,
    projection: 50
  }, {
    month: 'Oct',
    revenue: 10,
    projection: 60
  }, {
    month: 'Nov',
    revenue: 12,
    projection: 75
  }, {
    month: 'Dec',
    revenue: 11,
    projection: 100
  }];
  const marketShareData = [{
    name: 'CMT AI',
    value: 40,
    color: '#14b8a6'
  }, {
    name: 'We Market You',
    value: 35,
    color: '#0d9488'
  }, {
    name: 'Partnership Revenue',
    value: 25,
    color: '#0f766e'
  }];
  const growthMetrics = [{
    metric: 'Client Acquisition',
    current: 50,
    target: 200
  }, {
    metric: 'Team Size',
    current: 20,
    target: 50
  }, {
    metric: 'Monthly Revenue',
    current: 12,
    target: 100
  }, {
    metric: 'Market Presence',
    current: 2,
    target: 8
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
  const HeroSlide = () => <motion.div className="pitch-slide bg-background text-foreground relative overflow-hidden" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-accent/20 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [-20, 20],
        opacity: [0.2, 0.8, 0.2]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 2
      }} />)}
      </div>

      <div className="pitch-content text-center relative z-10">
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-primary" initial={{
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
          <motion.p className="text-2xl md:text-3xl font-light mb-4 text-muted-foreground" initial={{
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
          <motion.div className="w-32 h-1 bg-accent mx-auto mb-8" initial={{
          width: 0
        }} animate={{
          width: 128
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }}></motion.div>
          <motion.p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed text-foreground" initial={{
          y: 30,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.7
        }}>
            Transforming Businesses Through <span className="text-accent font-bold">AI Innovation</span> 
            {' '}& <span className="text-accent font-bold">Strategic Marketing</span>
          </motion.p>
        </motion.div>
        
        <motion.div className="grid md:grid-cols-2 gap-8 mt-16" variants={itemVariants}>
          <motion.div whileHover={{
          scale: 1.05,
          y: -10
        }} whileTap={{
          scale: 0.95
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <motion.div className="absolute inset-0 bg-accent/5" initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 1
              }} />
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <img src={cmtAiLogo} alt="CMT AI Logo" className="w-full h-full object-contain rounded-2xl shadow-card" />
                    <motion.div className="absolute inset-0 bg-accent/20 rounded-2xl" initial={{
                    opacity: 0
                  }} animate={{
                    opacity: [0, 0.3, 0]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">CMT AI</h3>
                  <p className="text-lg text-muted-foreground mb-4">Advanced Technology Solutions</p>
                  <div className="flex justify-center gap-2">
                    {[Brain, Smartphone, Globe, Rocket].map((Icon, i) => <motion.div key={i} className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center" whileHover={{
                    scale: 1.2
                  }} transition={{
                    delay: i * 0.1
                  }}>
                        <Icon className="w-4 h-4 text-accent" />
                      </motion.div>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div whileHover={{
          scale: 1.05,
          y: -10
        }} whileTap={{
          scale: 0.95
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <Card className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <motion.div className="absolute inset-0 bg-accent/5" initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 1.2
              }} />
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <img src={weMarketYouLogo} alt="We Market You Logo" className="w-full h-full object-contain rounded-2xl shadow-card" />
                    <motion.div className="absolute inset-0 bg-accent/20 rounded-2xl" initial={{
                    opacity: 0
                  }} animate={{
                    opacity: [0, 0.3, 0]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">We Market You</h3>
                  <p className="text-lg text-muted-foreground mb-4">Strategic Digital Marketing</p>
                  <div className="flex justify-center gap-2">
                    {[Target, TrendingUp, BarChart3, Award].map((Icon, i) => <motion.div key={i} className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center" whileHover={{
                    scale: 1.2
                  }} transition={{
                    delay: i * 0.1
                  }}>
                        <Icon className="w-4 h-4 text-accent" />
                      </motion.div>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Animated Stats Bar */}
        <motion.div className="mt-16 bg-white border border-border rounded-2xl shadow-elevated p-6" initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.5
      }}>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[{
            value: "₹1.2Cr+",
            label: "Annual Revenue",
            icon: DollarSign
          }, {
            value: "50+",
            label: "Clients Served",
            icon: Users
          }, {
            value: "20+",
            label: "Team Members",
            icon: Briefcase
          }].map((stat, i) => <motion.div key={i} className="flex flex-col items-center" whileHover={{
            scale: 1.1
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
                <stat.icon className="w-8 h-8 text-accent mb-2" />
                <motion.div className="text-2xl font-bold text-primary" initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 1.8 + i * 0.2
            }}>
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </motion.div>;
  const ProblemSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="section-title" variants={itemVariants}>The Challenge</motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h3 className="subsection-title text-primary">Market Pain Points</h3>
            <div className="space-y-6">
              {[{
              text: "70% of businesses struggle with digital transformation",
              stat: "70%"
            }, {
              text: "Small-medium businesses lack access to enterprise-grade AI solutions",
              stat: "85%"
            }, {
              text: "Marketing ROI remains unpredictable for most companies",
              stat: "60%"
            }, {
              text: "Technical expertise gap prevents innovation adoption",
              stat: "90%"
            }].map((point, index) => <motion.div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-card border border-border hover:shadow-elevated transition-spring group" initial={{
              x: -50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02
            }}>
                  <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                    <span className="text-white font-bold">{point.stat}</span>
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium">{point.text}</p>
                    <div className="w-full bg-muted rounded-full h-2 mt-3">
                      <motion.div className="h-2 bg-destructive rounded-full" initial={{
                    width: 0
                  }} animate={{
                    width: point.stat
                  }} transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1
                  }} />
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <motion.div className="bg-white p-8 rounded-2xl shadow-elevated border border-border" whileHover={{
            scale: 1.05,
            rotateY: 5
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <motion.div className="absolute inset-0" animate={{
                rotate: 360
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}>
                  <PieChart className="w-full h-full text-accent" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white rounded-full p-4 shadow-card">
                    <motion.div className="text-4xl font-bold text-accent" initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} transition={{
                    duration: 0.8,
                    delay: 0.5
                  }}>
                      70%
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Struggling</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-4">Market Gap</h4>
                <p className="text-lg text-muted-foreground">
                  ₹2.3 Trillion Indian IT market with growing demand for integrated AI & marketing solutions
                </p>
                <motion.div className="mt-6 grid grid-cols-2 gap-4" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 1
              }}>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-xl font-bold text-accent">₹2.3T</div>
                    <div className="text-xs text-muted-foreground">Market Size</div>
                  </div>
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <div className="text-xl font-bold text-success">15%</div>
                    <div className="text-xs text-muted-foreground">Growth Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>;
  const SolutionSlide = () => <div className="pitch-slide bg-background">
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
    </div>;
  const ServicesCMTSlide = () => <div className="pitch-slide bg-background">
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
          {[{
          title: "Web Development",
          services: ["Custom Websites", "E-commerce", "Web Apps", "CMS", "PWAs"]
        }, {
          title: "Mobile Apps",
          services: ["Android", "iOS", "Cross-Platform", "Hybrid", "Support"]
        }, {
          title: "AI & ML",
          services: ["Chatbots", "Analytics", "NLP", "Computer Vision", "Model Training"]
        }, {
          title: "Cloud Services",
          services: ["App Development", "Migration", "Infrastructure", "DevOps", "Backup"]
        }, {
          title: "Custom Software",
          services: ["Enterprise", "ERP/CRM", "Inventory", "POS", "SaaS"]
        }, {
          title: "Maintenance",
          services: ["Bug Fixes", "Optimization", "Upgrades", "Security", "SLA Support"]
        }].map((category, index) => <Card key={index} className="bg-white border border-border hover:shadow-elevated transition-smooth">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-primary mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-accent" />
                      {service}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </div>;
  const ServicesWMYSlide = () => <div className="pitch-slide bg-background">
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
                {["SEO & SEM", "Social Media", "Paid Campaigns", "Email Marketing", "Content Strategy", "Analytics"].map((service, index) => <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Strategic Communications</h3>
              <div className="grid grid-cols-2 gap-4">
                {["PR Services", "Crisis Communication", "Reputation Management", "Advocacy & Lobbying", "Election Campaigns", "Media Relations"].map((service, index) => <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
  const BusinessModelSlide = () => <div className="pitch-slide bg-background">
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
    </div>;
  const TractionSlide = () => <div className="pitch-slide bg-background">
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
              {["Helped 50+ startups scale successfully", "Generated ₹1.2Cr annual revenue (bootstrapped)", "Built solutions for global MNCs (HSBC, UWE)", "Established strong market presence in 18 months"].map((achievement, index) => <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-lg text-foreground">{achievement}</p>
                </div>)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
  const ProjectionsSlide = () => <motion.div className="pitch-slide bg-background" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="pitch-content">
        <motion.h2 className="section-title" variants={itemVariants}>Financial Projections & Charts</motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Revenue Chart */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border border-border shadow-elevated h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Revenue Growth Trajectory</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} />
                      <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Current Revenue (₹L)" dot={{
                      fill: '#10b981',
                      strokeWidth: 2,
                      r: 6
                    }} />
                      <Line type="monotone" dataKey="projection" stroke="#14b8a6" strokeWidth={3} strokeDasharray="5 5" name="Projected Revenue (₹L)" dot={{
                      fill: '#14b8a6',
                      strokeWidth: 2,
                      r: 6
                    }} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Market Share Chart */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border border-border shadow-elevated h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Revenue Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie data={marketShareData} cx="50%" cy="50%" outerRadius={100} innerRadius={40} dataKey="value" startAngle={90} endAngle={-270}>
                        {marketShareData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} formatter={value => [`${value}%`, 'Share']} />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Growth Metrics Bar Chart */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white border border-border shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Growth Metrics (Current vs Target)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={growthMetrics} margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60
                }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="metric" stroke="#64748b" angle={-45} textAnchor="end" height={100} interval={0} />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />
                    <Bar dataKey="current" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="target" fill="#14b8a6" name="Target" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Financial Summary */}
        <motion.div className="grid md:grid-cols-4 gap-6 mt-12" variants={itemVariants}>
          {[{
          label: "Current ARR",
          value: "₹1.2Cr",
          growth: "+45%",
          icon: TrendingUp
        }, {
          label: "Target ARR",
          value: "₹12Cr",
          growth: "10x",
          icon: Target
        }, {
          label: "Break-even",
          value: "18 Months",
          growth: "Post-funding",
          icon: Calendar
        }, {
          label: "ROI Timeline",
          value: "3-5 Years",
          growth: "8-10x",
          icon: Star
        }].map((metric, index) => <motion.div key={index} whileHover={{
          scale: 1.05,
          y: -5
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
              <Card className="bg-white border border-border shadow-card hover:shadow-elevated transition-spring">
                <CardContent className="p-6 text-center">
                  <metric.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                  <div className="text-sm font-semibold text-success">{metric.growth}</div>
                </CardContent>
              </Card>
            </motion.div>)}
        </motion.div>
      </div>
    </motion.div>;
  const TeamSlide = () => <div className="pitch-slide bg-background">
      <div className="pitch-content">
        <h2 className="section-title">Leadership Team</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[{
          name: "Anurag Singh",
          role: "Founder & CEO",
          experience: "7+ Years",
          expertise: "Tech, Performance Marketing, AI/ML",
          background: "HSBC, UWE, CMT AI Founder",
          achievement: "Helped 50+ Startups Scale",
          email: "ceo@wemarketyou.in"
        }, {
          name: "Shailesh Sinha",
          role: "Co-founder & Mentor",
          experience: "25+ Years",
          expertise: "Communication, Media",
          background: "Times of India, TV Today, Aajtak",
          achievement: "Trusted Communication Expert",
          email: "mentor@wemarketyou.in"
        }, {
          name: "Dharmendra Singh",
          role: "Co-founder & CMO",
          experience: "15+ Years",
          expertise: "Marketing, Business Development",
          background: "Club Mahindra, Axis Bank",
          achievement: "Founded Edvertia, Prexa",
          email: "cmo@wemarketyou.in"
        }].map((member, index) => <Card key={index} className="bg-white border border-border shadow-elevated hover:shadow-glow transition-spring">
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
            </Card>)}
        </div>
      </div>
    </div>;
  const InvestmentSlide = () => <div className="pitch-slide bg-background">
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
          {[{
          title: "Market Expansion",
          desc: "International presence"
        }, {
          title: "Team Scaling",
          desc: "50+ professionals"
        }, {
          title: "Technology",
          desc: "Proprietary AI platforms"
        }, {
          title: "Partnerships",
          desc: "Global alliances"
        }].map((use, index) => <Card key={index} className="bg-white border border-border shadow-card">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold mb-2 text-accent">{use.title}</h4>
                <p className="text-sm text-muted-foreground">{use.desc}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </div>;
  const ContactSlide = () => <div className="pitch-slide bg-background">
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
    </div>;
  const renderSlide = () => {
    switch (slides[currentSlide]) {
      case 'hero':
        return <HeroSlide />;
      case 'problem':
        return <ProblemSlide />;
      case 'solution':
        return <SolutionSlide />;
      case 'services-cmt':
        return <ServicesCMTSlide />;
      case 'services-wmy':
        return <ServicesWMYSlide />;
      case 'business-model':
        return <BusinessModelSlide />;
      case 'traction':
        return <TractionSlide />;
      case 'projections':
        return <ProjectionsSlide />;
      case 'team':
        return <TeamSlide />;
      case 'investment':
        return <InvestmentSlide />;
      case 'contact':
        return <ContactSlide />;
      default:
        return <HeroSlide />;
    }
  };
  return <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} initial={{
        opacity: 0,
        x: 300
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -300
      }} transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}>
          {renderSlide()}
        </motion.div>
      </AnimatePresence>
      
      {/* Left Navigation Button */}
      <motion.div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50" initial={{
      x: -100,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      delay: 0.5
    }}>
        <Button variant="outline" size="lg" onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-elevated hover:scale-110 transition-transform border-2">
          ←
        </Button>
      </motion.div>
      
      {/* Right Navigation Button */}
      <motion.div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50" initial={{
      x: 100,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      delay: 0.5
    }}>
        <Button variant="outline" size="lg" onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-elevated hover:scale-110 transition-transform border-2">
          →
        </Button>
      </motion.div>
      
      {/* Slide Counter & Controls */}
      <motion.div className="fixed top-8 right-8 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-card flex items-center gap-4" initial={{
      y: -50,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      delay: 0.3
    }}>
        <span className="text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
        <div className="w-px h-4 bg-border"></div>
        <Button variant={isAutoPlay ? "default" : "outline"} size="sm" onClick={() => setIsAutoPlay(!isAutoPlay)} className="rounded-full hover:scale-110 transition-transform">
          {isAutoPlay ? "⏸" : "▶"}
        </Button>
      </motion.div>

      {/* Slide Indicators */}
      <motion.div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50" initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      delay: 0.7
    }}>
        
      </motion.div>
    </div>;
};
export default PitchDeck;