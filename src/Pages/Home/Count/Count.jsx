import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Count = () => {
    const [countStart, setCountStart] = useState(true)
    return (
        <section className='bg-base-content w-full text-base-300 py-5'>
            <div className='container'>
                <ScrollTrigger onEnter={() => setCountStart(true)} onExit={() => setCountStart(false)}>
                    <div className=' grid gap-5 grid-cols-2 md:grid-cols-4 justify-center items-center'>
                        <div className='flex flex-wrap gap-3 justify-center items-center'>
                            <span className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={155} duration={3} delay={0} /> : 0}+</span> <span>Products</span>
                        </div>
                        <div className='flex flex-wrap gap-3 justify-center items-center'>
                            <span className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={10} duration={3} delay={0} /> : 0}+</span> <span>Categories</span>
                        </div>
                        <div className='flex flex-wrap gap-3 justify-center items-center'>
                            <span className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={555} duration={3} delay={0} /> : 0}+</span> <span>Happy Customers</span>
                        </div>
                        <div className='flex flex-wrap gap-3 justify-center items-center'>
                            <span className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={7} duration={3} delay={0} /> : 0}+</span> <span>Honors and Awards</span>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </section>
    );
};

export default Count;