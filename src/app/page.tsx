"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Industrial automation background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-emerald-900/90" />
        <motion.div 
          className="relative z-10 container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your Trusted Partner in Industrial Automation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            PLC Programming, SCADA Design, and Customized Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PLC Programming",
                description: "Expert programming for industrial automation",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              },
              {
                title: "SCADA Design",
                description: "Modern monitoring and control systems",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              },
              {
                title: "Automation Systems",
                description: "End-to-end automation solutions",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive solutions tailored to your specific industry needs
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Industrial PLCs",
                description: "High-performance controllers",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
              },
              {
                title: "HMI Systems",
                description: "Interactive control interfaces",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
              },
              {
                title: "Sensor Systems",
                description: "Precision monitoring devices",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
              },
              {
                title: "Control Panels",
                description: "Custom automation solutions",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Industry-leading quality and reliability
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

