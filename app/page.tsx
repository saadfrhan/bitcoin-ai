"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      <div className="bg-[url('/images/hero.png')] relative bg-no-repeat bg-[center_center] bg-cover h-[110dvh] ">
        <div className="mx-auto w-full px-8 max-w-[110rem] md:py-0 max-md:p-4 grid grid-cols-[1fr_1.5fr] max-xl:grid-cols-1">
          <div className="space-y-3 max-md:text-center">
            <h1 className="font-sf-transrobotics text-[120px] max-md:text-[80px] font-bold leading-[120px] max-md:leading-[80px]">
              <span className="text-bitcoin">Bitcoin</span>
              <span className="text-nav-link-active">AI</span>
            </h1>
            <h2 className="font-sf-transrobotics font-normal text-[70px] leading-[73px] max-md:text-[40px] max-md:leading-[43px]">
              A New Symbol of{" "}
              <span className="text-nav-link-active">
                Freedom and Empowerment
              </span>{" "}
              <br />
              for All
            </h2>
            <div className="space-y-8 max-md:space-y-2">
              <div className="flex gap-0.5 items-center max-md:justify-center">
                <h6 className="font-[600] text-[32px] font-poppins max-md:text-[24px] max-md:leading-[32px] leading-[32px]">
                  Echoing
                </h6>{" "}
                <Image
                  src="/images/megaphone.png"
                  alt="megaphone"
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
                />
              </div>
              <p className="font-[700] text-[32px] font-poppins max-md:text-[24px] max-md:leading-[32px] leading-[32px]">
                &quot;GIVE ME YOUR TIRED, YOUR POOR, YOUR HUDDLED MASSES
                YEARNING TO BE FREE... TO HODL $BitcoinAI.&quot;
              </p>
              {isDesktop && <SocialLinks />}
            </div>
          </div>
          <Image
            src={isDesktop ? "/images/hero-2.png" : "/images/hero-2-mobile.png"}
            alt="hero-2"
            width={3200}
            height={3200}
            className="object-cover md:mt-[-100px] w-[100%] h-[100%] max-md:mt-0 max-md:w-[100%] max-md:h-[100%]"
          />
        </div>
        {!isDesktop && <SocialLinks />}
        <div className="font-poppins text-center flex justify-center items-center py-6">
          <h3 className=" bg-bitcoinai-gradient bg-clip-text text-transparent font-bold text-6xl text-center max-md:text-3xl">
            $BitcoinAI
          </h3>
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-6 flex-wrap pt-8 px-4 max-md:gap-3 items-center max-md:justify-center">
      <Image
        src="/images/icons/twitter.png"
        height={240}
        width={240}
        className="w-[72px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
        alt="twitter"
      />
      <Image
        src="/images/icons/telegram.png"
        height={240}
        width={240}
        className="w-[72px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
        alt="twitter"
      />
      <Image
        src="/images/icons/coinmarketcap.png"
        height={240}
        width={240}
        className="w-[72px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
        alt="twitter"
      />
      <Image
        src="/images/icons/etherscan.png"
        height={240}
        width={240}
        className="w-[72px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
        alt="twitter"
      />
      <Image
        src="/images/icons/unicorn.png"
        height={240}
        width={240}
        className="w-[72px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
        alt="twitter"
      />
      <Image
        src="/images/icons/dextools.png"
        height={240}
        width={240}
        className="w-[68px] h-[72px] max-md:w-[48px] max-md:h-[48px]"
        alt="twitter"
      />
    </div>
  );
}
