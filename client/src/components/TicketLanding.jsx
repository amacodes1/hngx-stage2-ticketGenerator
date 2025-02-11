"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TicketLanding = () => {
  const router = useRouter();

  return (
    <div className="w-[700px] h-[902px] p-12 bg-[#041e22] rounded-[40px] border border-[#0e464f] flex flex-col justify-center items-center gap-8">
      <div className="self-stretch text-center text-white text-[42px] font-normal font-['JejuMyeongjo']">
        Welcome to Techember Fest ’25
      </div>
      <div className="w-[600px] text-center text-neutral-50 text-lg font-normal font-['Roboto'] leading-normal">
        Join us for an unforgettable experience at Techember Fest ’25! Get ready
        for an evening of innovation, networking, and entertainment. Secure your
        tickets now.
      </div>
      <div className="w-full flex justify-center">
        <img
          src="/event-banner.jpg"
          alt="Techember Fest Banner"
          className="w-[500px] h-[300px] rounded-3xl border border-[#0e464e] object-cover"
        />
      </div>
      <div className="flex justify-center items-center gap-4 text-neutral-50 text-base font-normal font-['Roboto']">
        <span>📍 Lagos, Nigeria</span>
        <span>| |</span>
        <span>March 15, 2025 | 7:00 PM</span>
      </div>
      <button
        onClick={() => router.push("/select-ticket")}
        className="w-[200px] h-12 bg-[#23a0b5] rounded-lg text-white text-lg font-['JejuMyeongjo'] font-normal flex justify-center items-center hover:bg-[#1c899c] transition duration-300"
      >
        Get Tickets
      </button>
    </div>
  );
};

export default TicketLanding;
