import React, {useState} from 'react'

export default function DataLink() {
    const [isHover, setIsHover] = useState(false);

    const longLink = (url) => {
        return url.slice(0, 50)
    }

    return (
        <>
            <div className='cursor-pointer' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div className='flex space-x-6'>
                    <div className='font-bold'>
                        <span className='text-primary'>shooooort.com/</span>
                        <span className='text-accent'>aa124aa</span>
                    </div>
                    {isHover && <span className='text-accent'>Click to copy this link</span>}
                </div>
                <div className='text-unimportant'>
                    {longLink('https://fonts.google.com/specimen/Montserrat?query=Montserrat')}...
                </div>
            </div>
        </>
    )
}
