import React, { useState } from 'react';
import { X, Shield, Check, Copy, Printer, ArrowRight, ArrowLeft, Sparkles, QrCode, Download, Share2 } from 'lucide-react';
import { MULTIVERSE_TRACKS, EVENT_DETAILS } from '../data/eventData';
import { RegistrationFormData, HoloPassData } from '../types';
import { soundManager } from '../utils/audio';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrackId?: string;
}

const HERO_CLASSES = [
  { id: 'iron-coder', name: 'Iron Coder', role: 'AI & Core Algorithm Specialist', color: '#00F0FF' },
  { id: 'vibranium-architect', name: 'Vibranium Architect', role: 'Spatial UI & Creative Technologist', color: '#9D4EDD' },
  { id: 'mystic-cryptographer', name: 'Mystic Hacker', role: 'Zero-Knowledge & Cyber Defense', color: '#F59E0B' },
  { id: 'web-weaver', name: 'Web Weaver', role: 'Distributed Mesh & Mobile Builder', color: '#E62429' },
  { id: 'galactic-data-lord', name: 'Galactic Data Lord', role: 'High-Scale Analytics & FinTech', color: '#10B981' },
];

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedTrackId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [copiedPassId, setCopiedPassId] = useState(false);

  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    college: 'Bennett University',
    isBennettStudent: true,
    enrollmentNo: '',
    phone: '',
    githubUrl: '',
    discordHandle: '',
    trackId: preselectedTrackId || 'stark-ai',
    teamType: 'team',
    teamName: '',
    teamSize: 3,
    superheroClass: 'iron-coder',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generatedPass, setGeneratedPass] = useState<HoloPassData | null>(null);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Agent identity (Full name) is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'A valid university or personal email is required';
    }
    if (!formData.college.trim()) errs.college = 'College/University name is required';
    if (formData.isBennettStudent && !formData.enrollmentNo?.trim()) {
      errs.enrollmentNo = 'Bennett enrollment number (e.g. E23CSE...) is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (formData.teamType === 'team' && !formData.teamName.trim()) {
      errs.teamName = 'Team codename is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    soundManager.playHUDClick();
    if (step === 1 && !validateStep1()) return;
    if (step === 3 && !validateStep3()) return;

    if (step === 3) {
      // Generate Holo-Pass
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const code = `GFG-BU-2026-${randomSuffix}`;
      const newPass: HoloPassData = {
        ...formData,
        passId: code,
        issueDate: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        qrPayload: `MULTIVERSE-PASS-${code}-${formData.fullName}-${formData.trackId}`,
      };
      setGeneratedPass(newPass);
      soundManager.playBadgeGenerated();
      setStep(4);
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    soundManager.playHUDClick();
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleCopyPassId = () => {
    if (!generatedPass) return;
    soundManager.playHUDClick();
    navigator.clipboard.writeText(generatedPass.passId);
    setCopiedPassId(true);
    setTimeout(() => setCopiedPassId(false), 2000);
  };

  const handlePrint = () => {
    soundManager.playHUDClick();
    window.print();
  };

  const selectedTrack = MULTIVERSE_TRACKS.find((t) => t.id === formData.trackId) || MULTIVERSE_TRACKS[0];
  const selectedHeroClass = HERO_CLASSES.find((h) => h.id === formData.superheroClass) || HERO_CLASSES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0E121B] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#141926] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#E62429] flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-cinematic text-lg sm:text-xl text-white tracking-wider block leading-none">
                AVENGER CLEARANCE PORTAL
              </span>
              <span className="text-[11px] text-slate-400 font-mono-nums">
                Bennett University · Sprint 2026
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playHUDClick();
              onClose();
            }}
            type="button"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progression Indicators */}
        {step < 4 && (
          <div className="px-6 py-3 bg-black/40 border-b border-white/5 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-[#E62429] text-white' : 'bg-white/10'}`}>1</span>
              <span>Identity</span>
            </div>
            <span className="text-slate-600">/</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-[#E62429] text-white' : 'bg-white/10'}`}>2</span>
              <span>Realm & Class</span>
            </div>
            <span className="text-slate-600">/</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-[#E62429] text-white' : 'bg-white/10'}`}>3</span>
              <span>Squad Setup</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: IDENTITY */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Agent Credentials</h3>
                <p className="text-xs text-slate-400">
                  Provide your official details for campus physical pass and hacker clearance.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tony Stark / Aarav Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  placeholder="name@bennett.edu.in or student@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              {/* Bennett Student Toggle */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Bennett University Student?</div>
                  <div className="text-xs text-slate-400">Enables on-campus fast-track check-in</div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.isBennettStudent}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setFormData({
                      ...formData,
                      isBennettStudent: checked,
                      college: checked ? 'Bennett University' : '',
                    });
                  }}
                  className="w-5 h-5 accent-[#E62429] cursor-pointer"
                />
              </div>

              {formData.isBennettStudent ? (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Bennett Enrollment Number *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. E23CSEU0123"
                    value={formData.enrollmentNo || ''}
                    onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-mono-nums"
                  />
                  {errors.enrollmentNo && (
                    <p className="text-xs text-red-400 mt-1">{errors.enrollmentNo}</p>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    College / University Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IIT Delhi, BITS Pilani, DTU"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                  {errors.college && <p className="text-xs text-red-400 mt-1">{errors.college}</p>}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    GitHub Handle / Profile
                  </label>
                  <input
                    type="text"
                    placeholder="github.com/username"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Discord Username
                  </label>
                  <input
                    type="text"
                    placeholder="username#0000"
                    value={formData.discordHandle}
                    onChange={(e) => setFormData({ ...formData, discordHandle: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: REALM & SUPERHERO CLASS */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Choose Realm & Superhero Class</h3>
                <p className="text-xs text-slate-400">
                  Select your primary Multiverse track and your superhero specialty archetype.
                </p>
              </div>

              {/* Multiverse Track Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Target Multiverse Track *
                </label>
                <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                  {MULTIVERSE_TRACKS.map((track) => {
                    const isSelected = formData.trackId === track.id;
                    return (
                      <div
                        key={track.id}
                        onClick={() => {
                          soundManager.playHUDClick();
                          setFormData({ ...formData, trackId: track.id });
                        }}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#182030] border-cyan-400 shadow-md'
                            : 'bg-black/40 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-mono-nums text-slate-400">{track.codename}</div>
                          <div className="text-sm font-bold text-white">{track.alliance}</div>
                        </div>
                        <div className="text-xs font-mono-nums font-bold text-amber-400 shrink-0">
                          {track.bounty.split('+')[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Superhero Class Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select Your Superhero Class Archetype
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {HERO_CLASSES.map((hClass) => {
                    const isSelected = formData.superheroClass === hClass.id;
                    return (
                      <div
                        key={hClass.id}
                        onClick={() => {
                          soundManager.playHUDClick();
                          setFormData({ ...formData, superheroClass: hClass.id });
                        }}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#182030] border-amber-400 shadow-md'
                            : 'bg-black/40 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">{hClass.name}</span>
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: hClass.color }}
                          />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{hClass.role}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SQUAD CONFIGURATION */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Squad Deployment</h3>
                <p className="text-xs text-slate-400">
                  Hack solo or lock in with a team of 2 to 4 engineers.
                </p>
              </div>

              {/* Solo vs Squad Selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playHUDClick();
                    setFormData({ ...formData, teamType: 'team' });
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.teamType === 'team'
                      ? 'bg-[#182030] border-[#E62429] text-white shadow-lg'
                      : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-bold">Assembled Squad (2–4)</div>
                  <div className="text-xs text-slate-400 mt-0.5">Formed team with shared codename</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playHUDClick();
                    setFormData({ ...formData, teamType: 'solo', teamName: 'Solo Avenger' });
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.teamType === 'solo'
                      ? 'bg-[#182030] border-[#E62429] text-white shadow-lg'
                      : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-bold">Solo Avenger</div>
                  <div className="text-xs text-slate-400 mt-0.5">Match with squad in Discord lounge</div>
                </button>
              </div>

              {formData.teamType === 'team' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Squad Codename *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Midnight Sons / Vibranium Protocol"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                    />
                    {errors.teamName && (
                      <p className="text-xs text-red-400 mt-1">{errors.teamName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Team Size (Including You)
                    </label>
                    <div className="flex items-center gap-3">
                      {[2, 3, 4].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            soundManager.playHUDClick();
                            setFormData({ ...formData, teamSize: size });
                          }}
                          className={`flex-1 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border ${
                            formData.teamSize === size
                              ? 'bg-[#E62429] border-[#E62429] text-white'
                              : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {size} Members
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-300">
                ⚡ Note: Squad members will be sent instant invitations via email with this clearance pass.
              </div>
            </div>
          )}

          {/* STEP 4: THE HOLO-PASS GENERATOR */}
          {step === 4 && generatedPass && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Clearance Granted · Badge Issued</span>
                </div>
                <h3 className="font-cinematic text-3xl sm:text-4xl text-white">
                  YOUR OFFICIAL MULTIVERSE PASS
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Present this digital badge or printed card at Bennett University check-in desk on October 24.
                </p>
              </div>

              {/* The Holographic Pass Card */}
              <div
                id="holo-ticket"
                className="relative rounded-2xl bg-gradient-to-br from-[#1A1F2E] via-[#0E121B] to-[#121620] border-2 border-white/20 p-6 sm:p-7 shadow-2xl overflow-hidden print:border-black print:text-black"
                style={{
                  boxShadow: `0 0 40px ${selectedHeroClass.color}33`,
                }}
              >
                {/* Holographic Watermark Pattern */}
                <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

                {/* Ticket Header */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#E62429] flex items-center justify-center text-white font-bold">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-cinematic text-xl text-white tracking-wider leading-none">
                        MULTIVERSE OF CODE
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono-nums">
                        GeeksForGeeks Bennett University Chapter
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                      CLEARANCE
                    </span>
                    <span className="font-mono-nums text-xs font-bold text-white">
                      SPRINT PASS
                    </span>
                  </div>
                </div>

                {/* Ticket Core Content */}
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div className="col-span-2 space-y-3">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                        Agent / Attendee
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-white block leading-tight">
                        {generatedPass.fullName}
                      </span>
                      <span className="text-xs text-slate-400">
                        {generatedPass.college} {generatedPass.enrollmentNo ? `(${generatedPass.enrollmentNo})` : ''}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                          Superhero Class
                        </span>
                        <span className="font-bold text-cyan-300">
                          {selectedHeroClass.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                          Squad Codename
                        </span>
                        <span className="font-bold text-amber-300">
                          {generatedPass.teamType === 'team' ? generatedPass.teamName : 'Solo Avenger'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                        Assigned Realm
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {selectedTrack.alliance}
                      </span>
                    </div>
                  </div>

                  {/* QR Code Graphic Representation */}
                  <div className="col-span-1 flex flex-col items-center justify-center p-3 rounded-xl bg-black/60 border border-white/10">
                    <QrCode className="w-16 h-16 text-white mb-1.5" />
                    <span className="font-mono-nums text-[10px] font-bold text-cyan-400 text-center tracking-wider">
                      {generatedPass.passId}
                    </span>
                  </div>
                </div>

                {/* Ticket Barcode Strip Footer */}
                <div className="pt-3 border-t border-dashed border-white/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-nums font-bold text-white">BENNETT CAMPUS · OCT 24-25</span>
                    <span aria-hidden="true">·</span>
                    <span>36H HACKATHON</span>
                  </div>
                  <div className="font-mono-nums tracking-widest text-[9px] uppercase text-slate-500">
                    ||||| ||| ||||||| |||| |||||
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyPassId}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>{copiedPassId ? 'Pass ID Copied!' : 'Copy Pass ID'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E62429] to-[#990F13] hover:from-[#FF2D33] hover:to-[#B3191D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Badge</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="px-6 py-4 bg-[#141926] border-t border-white/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#E62429] to-[#990F13] hover:from-[#FF2D33] hover:to-[#B3191D] text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all shadow-md shadow-red-950/40"
            >
              <span>{step === 3 ? 'Generate Holo-Pass' : 'Proceed'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
