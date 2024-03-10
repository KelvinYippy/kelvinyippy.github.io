import Image from 'next/image'
import headshot from '@/../public/headshot.jpeg'

const About = () => {

    return (
        <main className='flex flex-col lg:flex-row h-4/5 items-center justify-center p-3 sm:p-6 md:p-24 '>
            <div className='w-full lg:w-6/12 flex items-center justify-center'>
                <Image
                    src={headshot}
                    alt='Kelvin Headshot'
                    className='rounded-full object-cover w-60 h-60 md:w-80 md:h-80'
                />
            </div>
            <div className='w-full lg:w-6/12 flex items-center justify-center'>
                <div className='text-center text-xl font-400 rounded-lg text-black shadow m-4 dark:bg-gray-200 p-6'>
                    Hi! My name is Kelvin Yip and I am a senior at Yale University majoring in Computer Science. I am interested in full-time software engineering and technical research opportunities. Please feel free to contact me with the socials at the bottom of my site for any opportunities.
                </div>
            </div>
        </main>
    )

}

export default About