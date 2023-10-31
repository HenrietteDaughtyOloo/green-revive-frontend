'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setValidationError("All fields are required.");
    } else if (password.length < 8) {
      setValidationError("Password must be at least 8 characters.");
    } else if (password !== confirmPassword) {
      setValidationError("Passwords mis-match.");
    } else {
      setValidationError("");
      alert("Sign-up successful!");
      window.location.href = "/login";
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);

    if (newPassword && newPassword !== password) {
      setValidationError("Passwords mis-match.");
    } else {
      setValidationError("");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-[#fbf9f9] flex flex-col items-center justify-center min-h-screen">
      <div className="bg-grey-5 w-[500px] p-8 rounded-lg shadow-lg">
        <h2 className="font-bold text-3xl text-center text-black mb-4">
          Welcome
        </h2>
        <h2 className="font-bold text-3xl text-center text-black mb-4">
          Create your admin account
        </h2>
        <p className="text-lg text-center text-black mb-4">
          It's our pleasure to have you onboard!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block font-medium text-lg text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block font-medium text-lg text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black"
              placeholder="Enter your Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium text-lg text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block font-medium text-lg text-black"
            >
              Create Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black pr-10"
                placeholder="Create a Password (at least 8 characters)"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="h-6 w-6 text-[#527845]"
                />
              </button>
            </div>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="confirmPassword"
              className="block font-medium text-lg text-black"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full h-10 px-2 border border-solid border-[#527845] mt-1 rounded-md focus:outline-none text-black pr-10"
                placeholder="Confirm Password"
              />
              {validationError && (
                <div className="text-red-500 mt-2 text-center">
                  {validationError}
                </div>
              )}
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ zIndex: 1 }}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEye : faEyeSlash}
                  className="h-6 w-6 text-[#527845]"
                />
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg text-[#EE1933] mt-2">
              Password must be 8 characters
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full h-10 bg-[#527845] text-white text-lg rounded-md mt-4"
            >
              Sign up
            </button>
          </div>
        </form>
        <div>
          <p className="text-lg text-black">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-bold text-[#008000]">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
