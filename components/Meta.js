import Head from 'next/head'

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

// Default props
Meta.defaultProps = {
  title: 'Ben Ballard | Cybersecurity Engineer',
  keywords: 'cybersecurity, hardware security, privacy, research, engineering',
  description: 'Personal website of Ben Ballard, a cybersecurity engineer specializing in hardware security and privacy research',
}