import { useState, useContext } from "react";
import { AuthContext } from "./auth";

export default function LoginForm() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const { login } = useContext(AuthContext);

  function usernameChangeHandler(e) {
    SetUsername(e.target.value);
  }

  function passwordChangeHandler(e) {
    SetPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    login({
      username,
      password,
    });
  }

  return (
    <div className="flex w-full   justify-center items-center  ">
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24 text-center">
          <form
            className="bg-white rounded-md shadow-2xl p-5 text-center"
            onSubmit={submitHandler}
          >
            <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center">
              Stay Healthy!
            </h1>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="text"
                name="email"
                placeholder="text"
                onChange={usernameChangeHandler}
              />
            </div>
            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
              <input
                class="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={passwordChangeHandler}
              />
            </div>
            <button
              type="submit"
              class="dark:bg-white block w-full bg-emerald-300 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
