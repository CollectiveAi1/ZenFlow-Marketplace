
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="bg-slate-800/50 rounded-xl shadow-2xl overflow-hidden border border-slate-700 p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-gradient mb-4">About ZenFlow Solutions</h1>
        <p className="text-lg text-slate-300 mb-6">
          As a division of The Collective Ai, ZenFlow Solutions believes wholeheartedly that technology should empower, not overwhelm. Our mission is to
          streamline your business operations by building intelligent, automated systems that work for you,
          so you can focus on what truly matters: growth, innovation, and customer relationships.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-3">Our Philosophy</h2>
            <p className="text-slate-400 leading-relaxed">
              We approach every project with a "zen" philosophy—finding simplicity in complexity. We don't just
              implement tools; we design elegant, cohesive workflows that integrate seamlessly into your existing
              processes. By harnessing the power of AI and automation, we eliminate repetitive tasks, reduce
              human error, and unlock new levels of efficiency for your team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-3">What We Do</h2>
            <p className="text-slate-400 leading-relaxed">
              Our marketplace offers a curated selection of pre-built automation packages, AI agents, and
              customizable workflows designed to solve common business challenges. From automating lead
              generation and client onboarding to managing social media and providing 24/7 customer support,
              our solutions are crafted to deliver immediate value and scale with your business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-3">Our Commitment</h2>
            <p className="text-slate-400 leading-relaxed">
              We are more than just developers; we are your partners in growth. We are committed to providing
              robust, reliable solutions and exceptional support. Your success is our success, and we're
              dedicated to helping you achieve a state of operational zen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
