import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head class="post-header">
        
        <title>Ben Ballard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header title="Welcome" />
          <p className="description">
            Ben Ballard is a cybersecurity engineer at the MITRE Corporation. Ben has served as a Google Public Policy Fellow at the Electronic Frontier Foundation, an X-Force Fellow with the National Security Innovation Network, and a cybersecurity fellow at the Citizen Lab at the Munk School of Global Affairs & Public Policy, University of Toronto. His research centers around the international governance of information security and privacy, especially data appropriation, surveillance, and deception. At work, he supports hardware security projects, cyber resilience efforts, risk assessments, international capacity building, and privacy threat modeling research.
          </p>
      </main>

      </div>
  )
}
