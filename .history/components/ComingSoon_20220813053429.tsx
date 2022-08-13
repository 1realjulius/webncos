import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-between md:p-8 p-6'>
    <div className='flex flex-col items-center justify-center pt-16'>
      <h1 className=''>Hey, there 👋</h1>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl leading-none'>Page Coming Soon</h1>
    </div>
    <div className='flex flex-col items-center justify-center mb-12'>
        <div>
            <h1>Webncos</h1>
        </div>
        <div>
            <p>Website and Software Development Agency.</p>
        </div>
        <div>
            <p className="flex flex-row text-sm">
                <span>Made with 💖 by</span>
                <Link href='https://www.iamjulius.com/'>
                    <span className=' cursor-pointer text-blue-500'>Julius Eghan</span>
                </Link>
            </p>
        </div>
    </div>
  </div>
  )
}

export default ComingSoon