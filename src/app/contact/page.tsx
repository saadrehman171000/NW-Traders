'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Loader2 } from 'lucide-react'
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { contactDetails } from '@/lib/contact'
import { submitContactForm } from '../actions'

function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    const result = await submitContactForm(formData)
    if (result.success) {
      setFormSubmitted(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Contact us"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-8"
                    >
                      <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        We've received your message and will get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form action={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          required
                          aria-label="Your Name"
                        />
                        {state?.error?.name && (
                          <p className="text-sm text-red-500 mt-1">{state.error.name}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                          aria-label="Email Address"
                        />
                        {state?.error?.email && (
                          <p className="text-sm text-red-500 mt-1">{state.error.email}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="Phone Number"
                          required
                          aria-label="Phone Number"
                        />
                        {state?.error?.phone && (
                          <p className="text-sm text-red-500 mt-1">{state.error.phone}</p>
                        )}
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          className="min-h-[150px]"
                          aria-label="Your Message"
                        />
                        {state?.error?.message && (
                          <p className="text-sm text-red-500 mt-1">{state.error.message}</p>
                        )}
                      </div>
                      <SubmitButton />
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">
                          {contactDetails.address.street}<br />
                          {contactDetails.address.area}<br />
                          {contactDetails.address.city}, {contactDetails.address.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">{contactDetails.phone.primary}</p>
                        <p className="text-muted-foreground">{contactDetails.phone.secondary}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">{contactDetails.email.sales}</p>
                        <p className="text-muted-foreground">{contactDetails.email.support}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-muted-foreground">{contactDetails.hours.weekdays}</p>
                        <p className="text-muted-foreground">{contactDetails.hours.weekend}</p>
                        <p className="text-muted-foreground">{contactDetails.hours.timezone}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57904.05315489976!2d66.94576065!3d24.9072829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90157042d3%3A0x93d609e8bec9a880!2sBaldia%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1629890000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NW-Traders Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how our automation solutions can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

