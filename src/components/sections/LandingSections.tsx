import { motion } from 'motion/react';
import { Blocks, FileCode, Monitor, Smartphone, CheckCircle2, Star, UserCheck, Zap, Rocket } from 'lucide-react';
import React from 'react';
import { LEARNING_JOURNEY, FAQS, TESTIMONIALS, COURSES } from '../../constants/content';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { RegistrationForm } from '../ui/RegistrationForm';

// SVG Curve for section separation
const Curve = ({ color = 'fill-white' }: { color?: string }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-[0] -mt-px ${color}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
    </svg>
  </div>
);

// --- About Section ---
export const About: React.FC = () => (
  <section id="about" className="py-24 bg-sky-50 transition-colors relative">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">Our Mission at Codera</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          We believe that every child has a creative spark. Our mission is to empower the next generation 
          of creators, thinkers, and problem-solvers through the magic of code. We don't just teach syntax; 
          we teach the confidence to build the future.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Star, title: "Modern Curriculum", text: "Always up-to-date with industry trends." },
          { icon: UserCheck, title: "Inspiring Mentors", text: "Passionate teachers who connect with kids." },
          { icon: Zap, title: "Active Learning", text: "No boring lectures. Just building and doing." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-sky-100/50 flex flex-col items-center text-center border border-white"
          >
            <div className="w-16 h-16 bg-brand-sky/10 rounded-2xl flex items-center justify-center text-brand-sky mb-6">
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-500">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Learning Journey Section ---
export const Journey: React.FC = () => (
  <section id="journey" className="py-24 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">The Learning Journey</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A clear, progressive path designed to take your child from a digital explorer to an expert builder.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-inner">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-12 text-center">Curriculum Roadmap</h3>
        <div className="flex flex-col md:flex-row items-center justify-between relative gap-12 md:gap-4">
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
          
          {LEARNING_JOURNEY.map((step, i) => {
            const Icon = { Monitor, Blocks, FileCode, Smartphone }[step.icon] as any;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center group w-full md:w-1/4"
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white text-xl font-black ${step.color} transition-transform group-hover:scale-110 mb-4`}>
                  0{i+1}
                </div>
                <div className="text-center">
                  <span className="text-sm md:text-base font-black text-slate-800 block mb-1">{step.level}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.title}</span>
                </div>
                {/* Mobile descriptor */}
                <p className="md:hidden text-xs text-slate-500 mt-2 max-w-[200px]">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

// --- Why Choose Us ---
export const WhyUs: React.FC = () => (
  <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="blob-yellow -left-20 top-20 opacity-50" />
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-8">Why Parents Trust <span className="text-brand-blue">Codera</span></h2>
          <div className="space-y-6">
            {[
              "Small groups for personalized attention (4-6 kids max)",
              "Project-based learning that keeps kids engaged",
              "Passionate tutors who are industry experts",
              "Fun interactive lessons that feel like play",
              "Progressive learning path for long-term growth"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="bg-brand-sky/10 p-1.5 rounded-full text-brand-sky">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-semibold text-slate-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
              alt="Classroom" 
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Course Details Section ---
export const CourseDetails: React.FC = () => (
  <section id="courses" className="py-24 bg-white relative">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">Explore Our <span className="text-brand-sky">Programs</span></h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Tailored curriculums that grow with your child's passion and skill level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COURSES.map((course, i) => {
          const Icon = { Monitor, Blocks, FileCode, Smartphone }[course.icon] as any;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col h-full hover:shadow-2xl hover:shadow-sky-200/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${course.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-sky-100`}>
                <Icon size={28} />
              </div>
              <div className="mb-2 inline-block px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100 w-fit">
                {course.age}
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-4">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-8 flex-1">{course.description}</p>
              
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Learning Outcomes</p>
                {course.outcomes.map((outcome, j) => (
                  <div key={j} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-brand-emerald mt-0.5 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

// --- Testimonials ---
export const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-24 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">Shared from Our Parents</h2>
        <p className="text-xl text-slate-600">Pure, unedited feedback from the wonderful community we're building together.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {[
          { 
            img: "/input_file_1.png", 
            title: "Exceptional Python Progress",
            desc: "Sharing their journey in our PictoBlox and Python tracks." 
          },
          { 
            img: "/input_file_2.png", 
            title: "Fun & Engaging Lessons",
            desc: "How our interactive teaching style sparks curiosity." 
          }
        ].map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="flex flex-col h-full"
          >
            <div className="glass-card rounded-[2.5rem] p-4 flex-1 flex flex-col items-center bg-slate-50/50">
              <div className="rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-200">
                <img 
                  src={t.img} 
                  alt={`Codera Review ${i+1}`} 
                  className="w-full h-auto object-contain max-h-[400px]" 
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="font-bold text-slate-800 text-lg mb-2">{t.title}</h3>
                <p className="text-slate-500 text-sm">{t.desc}</p>
                <div className="flex justify-center gap-1 text-brand-yellow mt-4">
                  {[1, 2, 3, 4, 5].map(j => <Star key={j} size={16} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Registration Section ---
export const Registration: React.FC = () => (
  <section id="register" className="py-24 bg-sky-50 transition-colors overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sky text-white text-xs font-bold mb-6">
            <Rocket className="w-4 h-4" />
            <span>EXPRESS REGISTRATION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            Ready to Unlock Your Child's <span className="text-brand-sky">Potential?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Fill out the form to join our next cohort. We'll contact you to schedule 
            a free orientation and placement test.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-emerald-500" />
              <span>Free 30-minute introductory trial</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-emerald-500" />
              <span>Academic counselor consultation</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-emerald-500" />
              <span>Full curriculum overview</span>
            </div>
          </div>
        </div>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </div>
  </section>
);

// --- FAQ Section ---
export const FAQ: React.FC = () => (
  <section id="faq" className="py-24 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 mb-8">
            Everything you need to know about starting your child's coding adventure with Codera.
          </p>
          <div className="bg-brand-yellow-soft p-8 rounded-[2rem] border border-brand-yellow/20">
            <p className="font-bold text-slate-800 mb-2">Still have questions?</p>
            <p className="text-slate-600 mb-6 text-sm">Our friendly team is here to help you choose the best path for your child.</p>
            <a href="https://wa.me/20123456789" target="_blank">
              <Button variant="whatsapp">Talk to us now</Button>
            </a>
          </div>
        </div>
        <Accordion items={FAQS} />
      </div>
    </div>
  </section>
);

// --- CTA Section ---
export const CTA: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-brand-sky rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-sky-200">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Give Your Child the Power to Create</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Join the community of parents preparing their kids for a future where technology is a language, not a barrier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#register">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Join Now - Free Trial
              </Button>
            </a>
            <a href="https://wa.me/20123456789" target="_blank">
              <Button variant="outline" size="lg" className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10">
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Footer ---
export const Footer: React.FC = () => (
  <footer className="pt-20 pb-10 bg-slate-900 text-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <img src="/input_file_0.png" alt="Codera" className="h-12 w-auto mb-6 brightness-0 invert" />
          <p className="text-slate-400 mb-6 leading-relaxed">
            Premium online coding academy for children ages 7–16. Empowering creators of the future.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            {['Home', 'About', 'Journey', 'Testimonials', 'FAQ'].map(item => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-brand-sky transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Contacts</h4>
          <ul className="space-y-4 text-slate-400">
            <li>Email: hello@codera.academy</li>
            <li>Phone: +20 123 456 789</li>
            <li>Address: Virtual Studio, Worldwide</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Follow Us</h4>
          <div className="flex gap-4">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-slate-400 rounded-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Codera Academy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
