/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Showcase } from './components/Showcase';
import { Quote } from './components/Quote';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Showcase />
      <Quote />
      <CTA />
    </main>
  );
}

function PageLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">{title}</h1>
      <div className="text-lg space-y-4 [&>p]:leading-relaxed [&>p]:text-neutral-400 [&>h2]:text-2xl [&>h2]:font-medium [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:text-neutral-400 [&>ul>li]:mb-2">
        {children}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-1 w-full flex flex-col relative">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={
            <PageLayout title="Privacy Policy">
              <p>Last Updated: June 2026</p>
              <p>Welcome to Ascend Network. Ascend Network is a professional growth platform where users can showcase achievements, build reputation, participate in challenges, join communities, and access opportunities.</p>
              
              <h2>Information We Collect</h2>
              <p>We may collect:</p>
              <ul>
                <li>Account information such as username, name, email address, and profile details.</li>
                <li>User-generated content including posts, achievements, projects, portfolio links, certificates, GitHub links, and uploaded content.</li>
                <li>Reputation and XP data generated through platform activity.</li>
                <li>Challenge participation and completion records.</li>
                <li>Guild and community participation data.</li>
                <li>Opportunity applications and related information.</li>
                <li>Device, browser, IP address, and usage information.</li>
                <li>Authentication information provided through Firebase Authentication.</li>
              </ul>
              
              <h2>How We Use Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provide and maintain the platform.</li>
                <li>Create and manage user profiles.</li>
                <li>Calculate reputation and XP.</li>
                <li>Verify achievements and platform integrity.</li>
                <li>Match users with opportunities.</li>
                <li>Improve platform functionality and security.</li>
                <li>Detect fraud, spam, abuse, and manipulation.</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>We implement reasonable technical and organizational measures to protect user information. No method of electronic storage or transmission is completely secure.</p>
              
              <h2>Data Retention</h2>
              <p>Information is retained only as long as necessary to provide platform services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
              
              <h2>User Rights</h2>
              <p>Users may request access, correction, or deletion of personal information where permitted by applicable law.</p>
              
              <h2>Third-Party Services</h2>
              <p>Ascend Network may use services including Firebase and other infrastructure providers to operate the platform.</p>
              
              <h2>Contact</h2>
              <p>For privacy-related inquiries contact:</p>
              <p className="font-mono bg-white/5 py-4 px-6 rounded-lg inline-block border border-white/10 mt-4 text-white">adityaaconnecti@gmail.com</p>
              
              <p className="mt-8 text-neutral-500">By using Ascend Network, you agree to this Privacy Policy.</p>
            </PageLayout>
          } />
          <Route path="/terms" element={
            <PageLayout title="Terms of Service">
              <p>Last Updated: June 2026</p>
              
              <h2>Acceptance of Terms</h2>
              <p>By creating an account or using Ascend Network, you agree to these Terms of Service.</p>
              
              <h2>User Responsibilities</h2>
              <p>Users agree to:</p>
              <ul>
                <li>Provide accurate information.</li>
                <li>Maintain account security.</li>
                <li>Use the platform lawfully.</li>
                <li>Respect other users.</li>
              </ul>
              
              <h2>Prohibited Activities</h2>
              <p>Users may not:</p>
              <ul>
                <li>Submit false achievements, certificates, projects, or reputation claims.</li>
                <li>Manipulate XP, reputation, challenges, or rankings.</li>
                <li>Impersonate individuals or organizations.</li>
                <li>Upload malicious, harmful, illegal, or fraudulent content.</li>
                <li>Use automated systems to abuse platform features.</li>
                <li>Post misleading opportunities or employment offers.</li>
              </ul>
              
              <h2>Content Ownership</h2>
              <p>Users retain ownership of content they submit. By posting content, users grant Ascend Network a limited license to display, store, and distribute that content within the platform.</p>
              
              <h2>Verification and Reputation</h2>
              <p>Ascend Network may verify achievements, projects, portfolio links, certificates, and other information. Verification status may affect reputation, XP, opportunities, and platform visibility.</p>
              
              <h2>Account Suspension</h2>
              <p>Ascend Network may suspend or terminate accounts involved in fraud, abuse, manipulation, spam, or violations of these Terms.</p>
              
              <h2>Service Availability</h2>
              <p>The platform may be modified, updated, interrupted, or discontinued at any time.</p>
              
              <h2>Limitation of Liability</h2>
              <p>Ascend Network is provided on an "as is" basis without warranties of any kind to the extent permitted by law.</p>
              
              <h2>Contact</h2>
              <p className="font-mono bg-white/5 py-4 px-6 rounded-lg inline-block border border-white/10 mt-4 text-white">adityaaconnecti@gmail.com</p>
            </PageLayout>
          } />
          <Route path="/report" element={
            <PageLayout title="Report an Issue">
              <p>We take abuse and technical issues seriously. Please send detailed reports including screenshots to:</p>
              <p className="font-mono bg-white/5 py-4 px-6 rounded-lg inline-block border border-white/10 mt-4 text-white">adityaaconnecti@gmail.com</p>
            </PageLayout>
          } />
          <Route path="/contact" element={
            <PageLayout title="Contact Us">
              <p>For general inquiries, partnerships, or media requests, reach out below:</p>
              <p className="font-mono bg-white/5 py-4 px-6 rounded-lg inline-block border border-white/10 mt-4 text-white">adityaaconnecti@gmail.com</p>
            </PageLayout>
          } />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
