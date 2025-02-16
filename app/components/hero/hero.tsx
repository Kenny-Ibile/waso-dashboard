import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#00000] p-2 pt-24 py-32">
      <div className="flex grow flex-col gap-4 md:flex-row items-center justify-top px-6 py-2 md:px-20">
        <div className="flex flex-col justify-center items-start gap-6 rounded-lg bg-white p-6 md:w-1/2">
          <h1 className="text-2xl text-gray-900 md:text-4xl md:leading-bold">
            <strong>Verify Your Property Investment with Confidence</strong>
          </h1>
          <p>Avoid land scams and fraudulent property deals with LandVerify. Our expert-backed verification service ensures you buy only genuine, legally documented land and homes. Get your property verified within 48 hours to 7 days.</p>
          <div className="flex gap-4">
            <Link
              href="/verify"
              className="flex items-center gap-5 self-start rounded-lg bg-[#3a7a01] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a7a01] md:text-base"
            >
              <span>Start Verification</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/learn-more"
              className="flex items-center gap-5 self-start rounded-lg border border-[#479101] px-6 py-3 text-sm font-medium text-[#479101] transition-colors hover:bg-[#e6f4e1] md:text-base"
            >
              <span>Learn More</span>
            </Link>
          </div>
          <p className="text-xs"><span>🚀 Pilot Phase: Currently serving Lagos and Ogun states, expanding soon.</span></p>
        </div>
        <div className="">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            layout="responsive"
            width={1920}
            height={1080}
            className="hidden md:block"
            alt="Hero Desktop"
            priority
          />
          <Image
            src="/hero-desktop.png"
            layout=""
            width={560}
            height={620}
            className="block md:hidden"
            alt="Hero Mobile"
            priority
          />
        </div>
      </div>
    </div>
  );
}