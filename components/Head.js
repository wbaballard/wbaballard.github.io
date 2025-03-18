import NextHead from 'next/head'

export default function Head({ title, description }) {
  return (
    <NextHead>
      <title>{title || 'Ben Ballard | Cybersecurity Engineer'}</title>
      <meta name="description" content={description || 'Personal website of Ben Ballard, a cybersecurity engineer'} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap" rel="stylesheet" />
    </NextHead>
  )
}