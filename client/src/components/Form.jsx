"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar"; // Import Progress Bar component

const Form = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [dragging, setDragging] = useState(false);
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

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#041e22] to-[#08252b] p-6">
      <div className="w-full max-w-2xl p-8 bg-[#041e22] rounded-3xl border border-[#0e464f] flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-semibold">
            Attendee Details
          </h2>
          <span className="text-neutral-50 text-sm">Step 2/3</span>
        </div>

        {/* Progress Bar */}
        <ProgressBar step={2} totalSteps={3} />

        {/* Form Section */}
        <div className="p-6 bg-[#08252b] rounded-[32px] border border-[#0e464e] flex flex-col gap-6">
          {/* Avatar Upload */}
          <span className="text-neutral-50 text-base">
            Upload Profile Photo
          </span>
          <div className="w-full flex flex-col items-center gap-4">
            <div
              className={`w-full max-w-lg h-[200px] bg-black/20 flex justify-center items-center rounded-lg border-2 border-dashed ${
                dragging ? "border-[#23a0b5]" : "border-gray-500"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label
                htmlFor="avatar-upload"
                className="cursor-pointer w-full flex flex-col items-center"
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Avatar Preview"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-60 h-60 p-6 bg-[#0e464e] rounded-[32px] border-4 border-[#23a0b5]/50 flex flex-col justify-center items-center gap-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M25.2639 14.8161C24.6812 10.2267 20.7505 6.66675 16.0052 6.66675C12.3305 6.66675 9.13854 8.81475 7.68121 12.2001C4.81721 13.0561 2.67188 15.7601 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.8721 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33341 16.0052 9.33341C19.6812 9.33341 22.6719 12.3241 22.6719 16.0001V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20.0001C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20.0001C29.337 18.8048 28.9347 17.6445 28.196 16.7047C27.4574 15.765 26.425 15.1 25.2639 14.8161Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                    <span className="text-neutral-50 text-base">
                      Drag & drop or click to upload
                    </span>
                  </div>
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
                id="avatar-upload"
              />
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

        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-50">Enter your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-xl border border-[#07363e] text-white bg-transparent"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-50">Enter your email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl border border-[#07363e] text-white bg-transparent"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Request Input */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-50">Special Request?</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="p-3 rounded-xl border border-[#07363e] text-white bg-transparent"
          ></textarea>
          {errors.about && (
            <span className="text-red-500 text-sm">{errors.about}</span>
          )}
        </div>

        {/* Buttons */}
        {/* Big screen */}
        <div className="hidden sm:flex justify-between">
          <button
            onClick={() => router.push("/select-ticket")}
            className="text-[#23a0b5] h-12 px-20 lg:px-32 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="text-white bg-[#23a0b5] px-16 lg:px-20 py-3 rounded-lg"
          >
            Get My Free Ticket
          </button>
        </div>

        {/* Mobile screen */}
        <div className="flex sm:hidden flex-col items-center space-y-4 w-full">
          <button
            onClick={handleSubmit}
            className="text-white bg-[#23a0b5] w-full max-w-[90%] py-3 rounded-lg"
          >
            Get My Free Ticket
          </button>
          <button
            onClick={() => router.push("/select-ticket")}
            className="text-[#23a0b5] w-full max-w-[90%] py-3 rounded-lg border border-[#23a0b5]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

{
  /* <div className="flex flex-col items-center gap-4">
  <span className="text-neutral-50 text-base">Upload Profile Photo</span>
  <input
    type="file"
    accept="image/*"
    onChange={handleAvatarUpload}
    className="hidden"
    id="avatar-upload"
  />
  <label htmlFor="avatar-upload" className="cursor-pointer">
    {avatar ? (
      <img
        src={avatar}
        alt="Avatar Preview"
        className="w-24 h-24 rounded-full object-cover"
      />
    ) : (
      <div className="w-24 h-24 bg-[#0e464e] rounded-full flex items-center justify-center text-neutral-50">
        Click to Upload
      </div>
    )}
  </label>
</div>; */
}
