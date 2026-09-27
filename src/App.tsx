/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressHUD } from './components/ScrollProgressHUD';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tracks } from './components/Tracks';
import { InfinityVault } from './components/InfinityVault';
import { Schedule } from './components/Schedule';
import { Prizes } from './components/Prizes';
import { Speakers } from './components/Speakers';
import { VenueFaq } from './components/VenueFaq';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [preselectedTrackId, setPreselectedTrackId] = useState<string>('stark-ai');

  const handleOpenRegister = (trackId?: string) => {
    if (trackId) {
      setPreselectedTrackId(trackId);
    }
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-[#E62429] selection:text-white relative">
      {/* Iron Man HUD Scroll Progress Bar at very top of viewport */}
      <ScrollProgressHUD />

      {/* Top Navbar adhering to 3-zone contract */}
      <Navbar onOpenRegister={() => handleOpenRegister()} />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero with live countdown, video/image backdrop, value proposition */}
        <Hero onOpenRegister={() => handleOpenRegister()} />

        {/* 5 Multiverse Tracks Bento Grid */}
        <Tracks onSelectTrack={(trackId) => handleOpenRegister(trackId)} />

        {/* Interactive Infinity Stones Gauntlet Console */}
        <InfinityVault />

        {/* 36-Hour Endgame Protocol Schedule */}
        <Schedule />

        {/* ₹2,50,000 Prize Pool & Swag Box */}
        <Prizes />

        {/* Mentors, Judges & Faculty */}
        <Speakers />

        {/* Bennett University Venue, Logistics & Interactive FAQ */}
        <VenueFaq />
      </main>

      {/* Quiet Footer with GFG Bennett credentials */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Interactive Registration & Holo-Pass Generator Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        preselectedTrackId={preselectedTrackId}
      />
    </div>
  );
}
