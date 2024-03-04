import Image from 'next/image'
import headshot from '@/../public/headshot.jpeg'

const About = () => {

    return (
        <main className='flex min-h-screen items-center justify-center p-24'>
        {/* <div className="flex w-screen h-screen items-center justify-center"> */}
            <div className='w-6/12 flex items-center justify-center'>
                <Image
                    src={headshot}
                    alt='Kelvin Headshot'
                    className='rounded-full object-cover w-80 h-80'
                />
            </div>
            <div className='w-6/12'>
                <div className='text-center text-xl font-400 w-10/12 rounded-lg text-black shadow m-4 dark:bg-gray-200 p-6'>
                    Hi! My name is Kelvin Yip and I am a senior at Yale University majoring in Computer Science. 
                    <br/>
                    I am interested in full-time software engineering and technical research opportunities. 
                    <br/>
                    Please feel free to contact me with the socials at the bottom of my site.
                </div>
            </div>
        </main>
    )

}

export default About