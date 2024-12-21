import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobLisiting'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    const heroTitle = 'Become a React Dev'
    const heroSubTitle = 'Find the React job that fits your skills and needs'
    return (
        <>
            <Hero title={heroTitle} subTitle={heroSubTitle} />
            <HomeCards />
            <JobListing />
            <ViewAllJobs />
        </>

    )
}

export default HomePage