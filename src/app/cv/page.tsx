import Link from 'next/link'
import React from 'react'

function cv() {
  return (
<div className="p-6 text-center text-gray-200 bg-[#141235] rounded-lg shadow-md max-w-lg mx-auto mt-10">
  <p className="mb-4">
    CV is not available yet. Sorry for the inconvenience.  
    You can always{' '}
    <a
      href="mailto:me.a.alahyane@gmail.com"
      className="text-[#5E52FF] hover:underline"
    >
      contact me
    </a>
    , or{' '}
    <Link href="/" className="text-[#5E52FF] hover:underline">
      go back
    </Link>
    .
  </p>
</div>  )
}

export default cv