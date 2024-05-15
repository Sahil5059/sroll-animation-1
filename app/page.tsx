//imports
"use client";
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

type Props = {}

const Page = (props: Props) => {

	const mainContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: mainContainer,
		offset: ['end end', 'start start'],
	});

	const sm1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
	const sm2 = useTransform(scrollYProgress, [0, 1], [0, 25]);
	const sm3 = useTransform(scrollYProgress, [0, 1], [0, 35]);
	const sm4 = useTransform(scrollYProgress, [0, 1], [0, 45]);

	useEffect(() => {
		const lenis = new Lenis();

		function raf( time:any ) {
		lenis.raf( time );
		requestAnimationFrame( raf );
		}

		requestAnimationFrame( raf );
	}), [];

  	return (
		<>
			<div  className='h-[100vh] w-[100%] flex justify-center items-center bg-[#272727]'>
				<h1 className='font-[900] text-[200px] text-[#F8F6D6] leading-[237px] text-center black-outline londrina-solid'>Keep Scrolling!!</h1>
			</div>
			<div className='min-h-screen w-[100%] flex items-center justify-center bg-[#272727]'>
				<div
					ref={mainContainer}
					className='w-[1095px] h-[500px] flex items-center justify-between relative'
				>
					<div className='w-[100%] flex items-center justify-center relative'>
						<h1 className='absolute inset-0 m-auto z-[99] font-[900] text-[200px] text-[#F8F6D6] leading-[237px] text-center black-outline londrina-solid'>reachrocket</h1>
						<div className='w-[100%] h-[237px] flex flex-col relative items-center justify-center' >
							<motion.h1
								style={{ rotate: sm1 }}
								className='absolute inset-0 m-auto z-[98] font-[900] text-[200px] text-[#E1BB71] leading-[237px] text-center black-outline londrina-solid rotate-min'
							>
								reachrocket
							</motion.h1>
							<motion.h1
								style={{ rotate: sm2 }}
								className='absolute inset-0 m-auto z-[97] font-[900] text-[200px] text-[#FFAE50] leading-[237px] text-center black-outline londrina-solid rotate-normal'
							>
								reachrocket
							</motion.h1>
							<motion.h1
								style={{ rotate: sm3 }}
								className='absolute inset-0 m-auto z-[96] font-[900] text-[200px] text-[#DC7237] leading-[237px] text-center black-outline londrina-solid rotate-big'
							>
								reachrocket
							</motion.h1>
							<motion.h1
								style={{ rotate: sm4 }}
								className='absolute inset-0 m-auto z-[95] font-[900] text-[200px] text-[#7C3EA1] leading-[237px] text-center black-outline londrina-solid rotate-large'
							>
								reachrocket
							</motion.h1>
						</div>
					</div>
				</div>
			</div>
		</>
  	)
}

export default Page;