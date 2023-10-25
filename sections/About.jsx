'use client';

import { motion } from 'framer-motion'
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}
  >
    <div
      className='z-0 gradient-02' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        the <span className='font-extrabold text-white'>"metaverse" </span>is a hypothetical iteration of the Internet as a single,
        universal, and immersive virtual world that is facilitated by the use of
        virtual reality and augmented reality  headsets. In colloquial usage, a <span className='font-extrabold text-white'>"metaverse"</span>
        is a network of 3D virtual worlds focused on social and economic connection.
        The term <span className='font-extrabold text-white'>"metaverse"</span> originated in the <span className='font-extrabold text-white'>1992</span> science fiction novel Snow Crash as a portmanteau
        of <span className='font-extrabold text-white'>"meta"</span> and <span className='font-extrabold text-white'>"universe"</span>. Metaverse development is often linked to advancing virtual reality
        technology due to the increasing demands for immersion.
        Recent interest in metaverse development is influenced by <span className='font-extrabold text-white'>Web3</span>, a concept for a decentralized
        iteration of the internet. The term <span className='font-extrabold text-white'>metaverse</span> has been used as a buzzword by companies to exaggerate
        the development progress of various related technologies and projects for public relations purposes.
        Information privacy, user addiction, and user safety are concerns within the metaverse, stemming from
        challenges facing the <span className='font-extrabold text-white'>social media and video game industries</span> as a whole.
      </motion.p>

      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]' />
    </motion.div>


  </section>
);

export default About;
