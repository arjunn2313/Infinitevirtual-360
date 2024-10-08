import RecentWorks from '@/components/HomePage/RecentWorks'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'

export default function Page() {
  return (
    <div>
         <PageHeader heading="Projects" />
         <RecentWorks/>
    </div>
  )
}
