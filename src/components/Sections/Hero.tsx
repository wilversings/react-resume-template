import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {plaqueSrc: imageSrc, sideDecorationSrc, name, description} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div style={{minHeight: 958}} className="z-10 relative overflow-hidden flex h-screen w-full items-center justify-center bg-darkBlue bg-opacity-70 bg-grain">
        <div className="absolute w-full flex h-2/5 px-5">
          {' '}
          {/* Side decorations */}
          <Image alt="sideDecoration" className="opacity-50 w-auto" src={sideDecorationSrc} />
          <div className="flex-1" />
          <Image alt="sideDecoration" className="opacity-50 rotate-180 w-auto" src={sideDecorationSrc} />
        </div>

        <div className="absolute z-10 object-fill w-full-x3 animate-spin-slowest opacity-30">
          <div className="absolute border-t border-gold w-full rotate-0"></div>
          <div className="absolute border-t border-gold w-full rotate-5"></div>
          <div className="absolute border-t border-gold w-full rotate-10"></div>
          <div className="absolute border-t border-gold w-full rotate-15"></div>
          <div className="absolute border-t border-gold w-full rotate-20"></div>
          <div className="absolute border-t border-gold w-full rotate-25"></div>
          <div className="absolute border-t border-gold w-full rotate-30"></div>
          <div className="absolute border-t border-gold w-full rotate-35"></div>
          <div className="absolute border-t border-gold w-full rotate-40"></div>
          <div className="absolute border-t border-gold w-full rotate-45"></div>
          <div className="absolute border-t border-gold w-full rotate-50"></div>
          <div className="absolute border-t border-gold w-full rotate-55"></div>
          <div className="absolute border-t border-gold w-full rotate-60"></div>
          <div className="absolute border-t border-gold w-full rotate-65"></div>
          <div className="absolute border-t border-gold w-full rotate-70"></div>
          <div className="absolute border-t border-gold w-full rotate-75"></div>
          <div className="absolute border-t border-gold w-full rotate-80"></div>
          <div className="absolute border-t border-gold w-full rotate-85"></div>
          <div className="absolute border-t border-gold w-full rotate-90"></div>
          <div className="absolute border-t border-gold w-full -rotate-5"></div>
          <div className="absolute border-t border-gold w-full -rotate-10"></div>
          <div className="absolute border-t border-gold w-full -rotate-15"></div>
          <div className="absolute border-t border-gold w-full -rotate-20"></div>
          <div className="absolute border-t border-gold w-full -rotate-25"></div>
          <div className="absolute border-t border-gold w-full -rotate-30"></div>
          <div className="absolute border-t border-gold w-full -rotate-35"></div>
          <div className="absolute border-t border-gold w-full -rotate-40"></div>
          <div className="absolute border-t border-gold w-full -rotate-45"></div>
          <div className="absolute border-t border-gold w-full -rotate-50"></div>
          <div className="absolute border-t border-gold w-full -rotate-55"></div>
          <div className="absolute border-t border-gold w-full -rotate-60"></div>
          <div className="absolute border-t border-gold w-full -rotate-65"></div>
          <div className="absolute border-t border-gold w-full -rotate-70"></div>
          <div className="absolute border-t border-gold w-full -rotate-75"></div>
          <div className="absolute border-t border-gold w-full -rotate-80"></div>
          <div className="absolute border-t border-gold w-full -rotate-85"></div>
        </div>

        <Image alt={`${name}-image`} className="absolute z-20 object-fill top-28" priority src={imageSrc} width="855" />

        <div className="z-20 max-w-screen-lg px-4 lg:px-0">
          <div className="text-monsante flex flex-col items-center gap-y-6 p-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-rust to-gold">
            <h1 className="tracking-wider text-4xl font-bold sm:text-5xl lg:text-7xl uppercase">{name}</h1>
            <h2 className="text-m sm:text-m lg:text-2xl break-words">{description}</h2>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
