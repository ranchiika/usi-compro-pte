import FleetOverview from '@/components/service/FleetOverview'
import IntegratedLogistics from '@/components/service/IntegratedLogistics'
import SolutionConcept from '@/components/service/SolutionConcept'
import TruckingSolutions from '@/components/service/TruckingSolution'
import React from 'react'

const page = () => {
  return (
    <div>
      <TruckingSolutions/>
      <IntegratedLogistics/>
      <FleetOverview/>
      <SolutionConcept/>
    </div>
  )
}

export default page
