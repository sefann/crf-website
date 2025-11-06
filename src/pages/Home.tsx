import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import MissionSection from '../components/MissionSection'
import ProgramsGrid from '../components/ProgramsGrid'
import ImpactStats from '../components/ImpactStats'
import PartnersCarousel from '../components/PartnersCarousel'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ProgramsGrid />
      <ImpactStats />
      <PartnersCarousel />
    </div>
  )
}

export default Home

