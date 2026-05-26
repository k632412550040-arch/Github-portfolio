import React from 'react';
import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    id: "01",
    name: "Content Strategy",
    description: "Conceptualizing and executing comprehensive communication strategies and webinar scripts for large-scale projects."
  },
  {
    id: "02",
    name: "Social Media Management",
    description: "Managing daily content distribution, optimizing posting schedules, and maintaining brand consistency across platforms."
  },
  {
    id: "03",
    name: "Video Production",
    description: "Directing, filming, and editing high-quality video content to capture brand elegance and drive engagement."
  },
  {
    id: "04",
    name: "Event Organization",
    description: "Coordinating tournaments, workshops, and speaker alignments, ensuring dynamic interactions and high participant satisfaction."
  },
  {
    id: "05",
    name: "Design & Branding",
    description: "Designing visual identities, main cover photos, and presentation materials that communicate a clear presence."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="skills" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <h2 
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn 
            key={service.id} 
            delay={i * 0.1} 
            className="flex flex-col sm:flex-row gap-4 sm:gap-10 border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-0"
          >
            <div 
              className="text-[#0C0C0C] font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.id}
            </div>
            
            <div className="flex flex-col justify-center gap-3">
              <h3 
                className="text-[#0C0C0C] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p 
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
