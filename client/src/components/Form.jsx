"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Form = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState({ name: "", email: "", about: "" });

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedAbout = localStorage.getItem("about");
    const savedAvatar = localStorage.getItem("avatar");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedAbout) setAbout(savedAbout);
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const validateForm = () => {
    let newErrors = { name: "", email: "", about: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!about.trim()) {
      newErrors.about = "Please provide some details";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("about", about);
      if (avatar) localStorage.setItem("avatar", avatar);
      router.push("/ticket-confirmation");
    }
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[700px] h-[1099px] p-12 bg-[#041e22] rounded-3xl border border-[#0e464f] flex-col justify-center items-center gap-8 inline-flex">
      <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
            <div className="self-stretch text-white text-[32px] font-normal font-['JejuMyeongjo']">
              Attendee Details
            </div>
          </div>
          <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            Step 2/3
          </div>
        </div>
      </div>
      <div className="self-stretch h-[923px] p-6 bg-[#08252b] rounded-[32px] border border-[#0e464e] flex-col justify-center items-start gap-8 flex">
        <div className="h-[344px] p-6 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-start items-start gap-8 flex">
          <div className="text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            Upload Profile Photo
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="hidden"
            id="avatar-upload"
          />
          <label
            htmlFor="avatar-upload"
            className="self-stretch bg-black/20 justify-center items-center gap-2.5 inline-flex cursor-pointer"
          >
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar Preview"
                className="w-60 h-60 rounded-[32px] object-cover"
              />
            ) : (
              <div className="w-60 h-60 p-6 bg-[#0e464e] rounded-[32px] flex-col justify-center items-center gap-4 inline-flex">
                <span className="text-neutral-50">
                  Drag & drop or click to upload
                </span>
              </div>
            )}
          </label>
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
          <label className="text-neutral-50">Enter your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="self-stretch p-3 rounded-xl border border-[#07363e] text-white bg-transparent"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
          <label className="text-neutral-50">Enter your email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="self-stretch p-3 rounded-xl border border-[#07363e] text-white bg-transparent"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="self-stretch h-[159px] flex-col justify-start items-start gap-2 flex">
          <label className="text-neutral-50">About the project</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="self-stretch h-[127px] p-3 rounded-xl border border-[#07363e] text-white bg-transparent"
          ></textarea>
          {errors.about && (
            <span className="text-red-500 text-sm">{errors.about}</span>
          )}
        </div>
        <div className="self-stretch h-12 justify-end items-end gap-6 inline-flex">
          <button
            onClick={() => router.push("/select-ticket")}
            className="text-[#23a0b5] border border-[#23a0b5] px-6 py-3 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="text-white bg-[#23a0b5] px-6 py-3 rounded-lg"
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
