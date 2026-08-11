import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, ExternalLink, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | 'mailto_fallback' | null
  const [statusMessage, setStatusMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const triggerMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = personalInfo.web3FormsAccessKey;

    if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Contact from ${formData.name}`,
            message: formData.message,
            from_name: `${formData.name} via Web3Forms`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully via Web3Forms.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
          setStatusMessage(result.message || 'Web3Forms API key invalid. Opening email client fallback...');
          setTimeout(() => triggerMailtoFallback(), 1500);
        }
      } catch (err) {
        setSubmitStatus('error');
        setStatusMessage('Network error. Opening email client fallback...');
        setTimeout(() => triggerMailtoFallback(), 1500);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Key not set yet - launch mailto fallback directly
      setIsSubmitting(false);
      setSubmitStatus('mailto_fallback');
      setStatusMessage('Opening default email client... (Add your Web3Forms Access Key to receive messages directly in background)');
      triggerMailtoFallback();
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
          <p className="text-slate-400 text-sm max-w-xl">
            Whether you have an internship opportunity, a collaborative project idea, or just want to connect—my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-teal-950/80 border border-teal-800 text-teal-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-white hover:text-teal-300 transition-colors block mt-0.5"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-950/80 border border-indigo-800 text-indigo-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn</h3>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-indigo-300 transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <span>bhavadharini-s-2b0382324</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">GitHub</h3>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <span>github.com/BHAVA-MS</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300 font-medium">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Location: {personalInfo.location}</span>
            </div>

          </div>

          {/* Right Column: Web3Forms Integrated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl relative">
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-cyan-400" />
                  <span>Send Me A Message</span>
                </h3>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[10px] font-mono text-cyan-300">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Powered by Web3Forms
                </span>
              </div>

              {/* Status Banners */}
              {submitStatus === 'success' && (
                <div className="p-6 rounded-2xl bg-teal-950/80 border border-teal-800 text-teal-200 text-center space-y-3 mb-6 animate-fadeIn">
                  <Check className="w-10 h-10 text-teal-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">{statusMessage}</p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="px-4 py-2 rounded-xl bg-teal-900 text-white text-xs font-semibold hover:bg-teal-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs space-y-2 mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-rose-100">{statusMessage}</p>
                    <p className="text-[11px] text-rose-300 mt-1">
                      To receive messages directly to your inbox, obtain a free Web3Forms key at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">web3forms.com</a> and paste it into <code className="bg-rose-900/60 px-1 rounded">portfolioData.js</code>.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'mailto_fallback' && (
                <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-200 text-xs space-y-2 mb-6 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Opening Email Client...</p>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Tip: Get your free Web3Forms Access Key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline text-cyan-300 font-bold">web3forms.com</a> (takes 30 sec) and paste it into <code className="bg-slate-900 px-1 rounded text-cyan-400">portfolioData.js</code> to receive submissions silently in the background!
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
