import React, { useState, useEffect } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import PassTable from "./PassTable";
import Hero from "./Hero";

const DUMMY_DATA = [
  { url: "http://google.com", username: "asmitk27", password: "813242" },
  { url: "http://google.com", username: "asmitk27", password: "813242" },
  { url: "http://google.com", username: "asmitk27", password: "813242" },
  { url: "http://google.com", username: "asmitk27", password: "813242" },
];
// const DUMMY_DATA = [];

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerPassword, setRegisterPassword] = useState("");
  const [registername, setRegisterName] = useState("");
  const [registerUrl, setRegisterUrl] = useState("");
  const [savedPasswords, setSavedPasswords] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("passList");
    // console.log(typeof JSON.parse(storedData));
    if (storedData) {
      setSavedPasswords(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("passList", JSON.stringify(savedPasswords));
  }, [savedPasswords]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      url: registerUrl,
      username: registername,
      password: registerPassword,
    };
    setSavedPasswords((prev) => [...prev, data]);
    setRegisterName("");
    setRegisterUrl("");
    setRegisterPassword("");
  };

  return (
    <section className="h-full">
      <div className="absolute inset-0 -z-10 h-full w-full  bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <Hero></Hero>
      <div className=" mx-auto max-w-[70%] h-[80%]">
        <div className="text-white  flex flex-col p-4">
          <form onSubmit={formSubmitHandler}>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-[#86198f] dark:text-white"
              >
                Website URL
              </label>
              <input
                type="string"
                id="website"
                value={registerUrl}
                onChange={(e) => setRegisterUrl(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="flowbite.com"
                required
              />
            </div>

            <div className="grid gap-6 mt-1 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#86198f] dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={registername}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#86198f] dark:text-white"
                >
                  Password
                </label>
                {registerPassword === "" || (
                  <button
                    className="absolute top-[70%] transform -translate-y-1/2 right-4 z-10 "
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <IoMdEyeOff className=" text-black hover:cursor-pointer" />
                    ) : (
                      <IoMdEye className=" text-black hover:cursor-pointer" />
                    )}
                  </button>
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={registerPassword}
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-[#6d28d9] hover:bg-[#c084fc] focus:ring-4 focus:outline-none focus:ring-[#c084fc] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Save Password
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="border-t border-gray-400 mx-40 mt-4"></div> */}
      <PassTable savedPassword={savedPasswords}></PassTable>
    </section>
  );
};

export default Manager;
