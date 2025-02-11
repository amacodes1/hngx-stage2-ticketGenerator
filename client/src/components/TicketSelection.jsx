"use client";

import { useRouter } from "next/navigation";
import React from "react";

const TicketSelection = () => {
  const router = useRouter();

  return (
    <div className="w-[700px] h-[902px] p-12 bg-[#041e22] rounded-[40px] border border-[#0e464f] flex-col justify-center items-center gap-8 inline-flex">
      <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
            <div className="self-stretch text-white text-[32px] font-normal font-['JejuMyeongjo']">
              Ticket Selection
            </div>
          </div>
          <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            Step 1/3
          </div>
        </div>
        <div data-svg-wrapper>
          <svg
            width="604"
            height="4"
            viewBox="0 0 604 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z"
              fill="#0E464F"
            />
            <path
              d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z"
              fill="#24A0B5"
            />
          </svg>
        </div>
      </div>
      <div className="self-stretch h-[726px] p-6 bg-[#08252b] rounded-[32px] border border-[#0e464e] flex-col justify-center items-start gap-8 flex">
        <div className="self-stretch h-[200px] p-6 bg-[#23a0b5] rounded-3xl border-l-2 border-r-2 border-b-2 border-[#07363e] backdrop-blur-[14px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch h-[118px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-50 text-[62px] font-normal font-['Road Rage'] leading-[62px]">
              Techember Fest ”25
            </div>
            <div className="w-[340px] text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </div>
          </div>
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              📍 [Event Location]
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              | |
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              March 15, 2025 | 7:00 PM
            </div>
          </div>
        </div>
        <div data-svg-wrapper className="relative">
          <svg
            width="556"
            height="4"
            viewBox="0 0 556 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="556" height="4.0001" fill="#07373F" />
          </svg>
        </div>
        <div className="self-stretch h-[218px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            Select Ticket Type:
          </div>
          <div className="self-stretch h-[186px] p-4 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="h-[65px] p-2 bg-[#197686] rounded-xl border border-[#197686] justify-start items-start gap-2 flex overflow-hidden">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">
                    Regular Access
                  </div>
                  <div className="text-neutral-50 text-sm font-normal font-['Roboto'] leading-[21px]">
                    20 left!
                  </div>
                </div>
                <div className="w-20 p-2 bg-[#0e464e] rounded-lg border border-[#2aa3b8] flex-col justify-center items-end gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-xl font-semibold font-['Roboto'] leading-snug">
                    Free
                  </div>
                </div>
              </div>
              <div className="h-[65px] p-2 rounded-xl border border-[#07363e] justify-start items-start gap-2 flex overflow-hidden">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">
                    VVIP Access
                  </div>
                  <div className="text-neutral-50 text-sm font-normal font-['Roboto'] leading-[21px]">
                    20 left!
                  </div>
                </div>
                <div className="w-20 p-2 bg-[#0e464e] rounded-lg border border-[#2aa3b8] flex-col justify-center items-end gap-2.5 inline-flex">
                  <div className="text-right text-neutral-50 text-xl font-semibold font-['Roboto'] leading-snug">
                    $150
                  </div>
                </div>
              </div>
              <div className="h-[65px] p-2 rounded-xl border border-[#07363e] justify-start items-start gap-2 flex overflow-hidden">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">
                    VIP Access{" "}
                  </div>
                  <div className="text-neutral-50 text-sm font-normal font-['Roboto'] leading-[21px]">
                    20 left!
                  </div>
                </div>
                <div className="w-20 p-2 bg-[#0e464e] rounded-lg border border-[#2aa3b8] flex-col justify-center items-end gap-2.5 inline-flex">
                  <div className="text-right text-neutral-50 text-xl font-semibold font-['Roboto'] leading-snug">
                    $50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            {" "}
            Number of Tickets
          </div>
          <div className="self-stretch p-3 rounded-xl border border-[#07363e] justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-white text-base font-normal font-['Roboto'] leading-normal">
              1
            </div>
            <div data-svg-wrapper>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.293 8.29309L12 12.5861L7.70697 8.29309L6.29297 9.70709L12 15.4141L17.707 9.70709L16.293 8.29309Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="self-stretch h-12 p-12 bg-[#041e22] rounded-3xl border border-[#0e464f] justify-center items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 h-12 px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex overflow-hidden">
            <button
              onClick={() => router.push("/")}
              className="text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal"
            >
              Cancel
            </button>
          </div>
          <div className="grow shrink basis-0 h-12 px-6 py-3 bg-[#23a0b5] rounded-lg justify-center items-center gap-2 flex overflow-hidden">
            <button
              onClick={() => router.push("/form-details")}
              className="text-white text-base font-normal font-['JejuMyeongjo'] leading-normal"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
