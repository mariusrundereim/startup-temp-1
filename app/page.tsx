'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle,
  ChevronRight,
  Globe2,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Users2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'We\'ll get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovate. Transform. Succeed.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help businesses transform their digital presence and achieve
              unprecedented growth through innovative solutions.
            </p>
            <Button size="lg" className="mr-4">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-muted-foreground mb-6">
                Since 2020, we've been at the forefront of digital innovation,
                helping businesses transform their operations and achieve
                remarkable growth through cutting-edge technology solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>500+ Projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>98% Success Rate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="h-8 w-8" />,
                title: 'Digital Strategy',
                description:
                  'Comprehensive digital strategies tailored to your business goals',
              },
              {
                icon: <Laptop className="h-8 w-8" />,
                title: 'Web Development',
                description:
                  'Custom web solutions built with cutting-edge technologies',
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: 'Growth Marketing',
                description:
                  'Data-driven marketing strategies to accelerate your growth',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                name: 'Sarah Johnson',
                position: 'CEO',
                bio: 'Visionary leader with 15+ years of experience',
              },
              {
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                name: 'David Chen',
                position: 'CTO',
                bio: 'Tech innovator specializing in AI and blockchain',
              },
              {
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                name: 'Emily Rodriguez',
                position: 'Design Director',
                bio: 'Award-winning designer focused on user experience',
              },
              {
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                name: 'Michael Smith',
                position: 'Marketing Lead',
                bio: 'Digital marketing expert driving growth strategies',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to work together? We'd love to hear from
                you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>contact@company.com</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px]"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}