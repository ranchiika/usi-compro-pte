import GoalsObjective from '@/components/about/GoalsObjective'
import HistorySection from '@/components/about/HistorySection'
import VisionMission from '@/components/about/VisionMission'
import React from 'react'

const page = () => {
  return (
    <div>
      <VisionMission/>
      <GoalsObjective/>
      <HistorySection/>
    </div>
  )
}

export default page
