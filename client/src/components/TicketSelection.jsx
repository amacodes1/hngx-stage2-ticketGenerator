"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";

const TicketSelection = () => {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState("Free");

  const tickets = [
    {
      id: "Free",
      price: "Free",
      type: "Regular Access",
      slots: "20/52",
      defaultBg: "bg-[#12464e] border border-[#197686]",
      hoverBg: "hover:bg-[#2b545a]",
    },
    {
      id: "VIP",
      price: "$150",
      type: "VIP Access",
      slots: "20/52",
      defaultBg: "border border-[#197686]",
      hoverBg: "hover:bg-[#2b545a]",
    },
    {
      id: "VVIP",
      price: "$200",
      type: "VVIP Access",
      slots: "20/52",
      defaultBg: "border border-[#197686]",
      hoverBg: "hover:bg-[#2b545a]",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#042127] p-4">
      <div className="w-full max-w-[700px] p-8 bg-[#041e22] rounded-[40px] border border-[#0e464f] flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-normal font-['JejuMyeongjo']">
            Ticket Selection
          </h2>
          <span className="text-neutral-50 text-base font-normal font-['Roboto']">
            Step 1/3
          </span>
        </div>

        {/* Progress Bar */}
        <ProgressBar step={1} />

        {/* Ticket Details */}
        <div className="bg-[#08252b] p-6 rounded-[32px] border border-[#0e464e] flex flex-col gap-8">
          <div className="bg-[#08252b] p-6 rounded-3xl border border-[#07363e] text-center text-white">
            <h3 className="text-[32px] font-['Road Rage']">
              Techember Fest '25
            </h3>
            <p className="text-base font-['Roboto']">
              Join us for an unforgettable experience at Techember Fest!
            </p>
            <p className="text-base font-['Roboto'] mt-2">
              📍 [Event Location] | March 15, 2025 | 7:00 PM
            </p>
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

          {/* Ticket Selection */}
          <div>
            <h4 className="text-neutral-50 text-base font-['Roboto']">
              Select Ticket Type:
            </h4>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket.id)}
                  className={`w-full md:w-[162px] h-[110px] p-3 rounded-xl flex flex-col justify-start items-start gap-3 transition-all ${
                    selectedTicket === ticket.id
                      ? "bg-[#2b545a]"
                      : ticket.defaultBg
                  } ${selectedTicket !== ticket.id ? ticket.hoverBg : ""}`}
                >
                  <p className="text-2xl font-semibold text-white">
                    {ticket.price}
                  </p>
                  <div>
                    <p className="text-[12px] uppercase font-semibold text-white">
                      {ticket.type}
                    </p>
                    <p className="text-sm items-start text-[#d9d9d9]">
                      {ticket.slots}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Number of Tickets */}
          <div>
            <h4 className="text-neutral-50 text-base font-['Roboto']">
              Number of Tickets
            </h4>
            <div className="p-3 rounded-xl border border-[#07363e] flex justify-between items-center mt-2">
              <span className="text-white">1</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.293 8.293L12 12.586L7.707 8.293L6.293 9.707L12 15.414L17.707 9.707L16.293 8.293Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Buttons */}
          {/* Big screen */}
          <div className="hidden sm:flex justify-between">
            <button
              onClick={() => router.push("/")}
              className="text-[#23a0b5] h-12 px-20 lg:px-28 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex"
            >
              Cancel
            </button>
            <button
              onClick={() => router.push("/form-details")}
              className="text-white bg-[#23a0b5] px-16 lg:px-32 py-3 rounded-lg"
            >
              Next
            </button>
          </div>

          {/* Mobile screen */}
          <div className="flex sm:hidden flex-col items-center space-y-4 w-full">
            <button
              onClick={() => router.push("/form-details")}
              className="text-white bg-[#23a0b5] w-full max-w-[90%] py-3 rounded-lg"
            >
              Next
            </button>
            <button
              onClick={() => router.push("/")}
              className="text-[#23a0b5] w-full max-w-[90%] py-3 rounded-lg border border-[#23a0b5]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;

// {
//   /* Buttons */
// }
// {
//   /* Big screen */
// }
// <div className="hidden sm:flex justify-between">
//   <button
//     onClick={() => router.push("/")}
//     className="text-[#23a0b5] h-12 px-20 lg:px-28 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex"
//   >
//     Cancel
//   </button>
//   <button
//     onClick={() => router.push("/form-details")}
//     className="text-white bg-[#23a0b5] px-16 lg:px-32 py-3 rounded-lg"
//   >
//     Next
//   </button>
// </div>;

// {
//   /* Mobile screen */
// }
// <div className="flex sm:hidden flex-col items-center space-y-4 w-full">
//   <button
//     onClick={() => router.push("/form-details")}
//     className="text-white bg-[#23a0b5] w-full max-w-[90%] py-3 rounded-lg"
//   >
//     Next
//   </button>
//   <button
//     onClick={() => router.push("/")}
//     className="text-[#23a0b5] w-full max-w-[90%] py-3 rounded-lg border border-[#23a0b5]"
//   >
//     Cancel
//   </button>
// </div>;

// {
//   /* Number of Tickets */
// }
// <div>
//   <h4 className="text-neutral-50 text-base font-['Roboto']">
//     Number of Tickets
//   </h4>
//   <div className="p-3 rounded-xl border border-[#07363e] flex justify-between items-center mt-2">
//     <span className="text-white">1</span>
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M16.293 8.293L12 12.586L7.707 8.293L6.293 9.707L12 15.414L17.707 9.707L16.293 8.293Z"
//         fill="white"
//       />
//     </svg>
//   </div>
// </div>;
