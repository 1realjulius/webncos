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
    <div className='flex flex-col items-center justify-center'>
        <div>
            <h1>Webncos</h1>
        </div>
        <div>
            <p>Website and Software Development Agency.</p>
            <p>Made With .</p>
        </div>
        <div>
            <p className="flex flex-row">
                <span>Proudly made in
                    <svg viewBox="0 0 48 48" className="">
                        <title>Nigeria</title>
                        <g>
                            <rect x="16" y="6" fill="#E6E6E6" width="16" height="36"></rect>
                            <path fill="#078754" d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z"></path>
                            <path fill="#078754" d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z"></path>
                        </g>
                    </svg>
                </span>
                <span>by Segun Adebayo</span></p>
        </div>
    </div>
  </div>
  )
}

export default ComingSoon