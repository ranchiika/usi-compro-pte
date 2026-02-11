import GoalsObjective from '@/components/about/GoalsObjective'
import HistorySection from '@/components/about/HistorySection'
import JoinUsSection from '@/components/about/JoinUsSection'
import VisionMission from '@/components/about/VisionMission'
import React from 'react'

const page = () => {
  return (
    <div>
      <VisionMission/>
      <GoalsObjective/>
      <HistorySection/>
      <JoinUsSection/>
    </div>
  )
}

export default page
