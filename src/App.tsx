import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobLisiting from './components/JobLisiting'

const App = () => {
  const heroTitle = 'Become a React Dev'
  const heroSubTitle = 'Find the React job that fits your skills and needs'
  return (
    <>
      <Navbar />
      <Hero title={heroTitle} subTitle={heroSubTitle} />
      <HomeCards />
      <JobLisiting /> 
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
      </section>
    </>
  )
}

export default App