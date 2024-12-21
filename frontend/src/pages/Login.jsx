import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex flex-col">
      <div className="flex flex-col gap-3  m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-lg shadow-lg text-sm text-zinc-600">
        <p className="text-xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-primary">
          Please {state === "Sign Up" ? "sign up" : "Log in"} to book for
          appointment.
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <label htmlFor="name">Full name:</label> <br />
            <input
              className="border border-zinc-300 rounded mt-1 w-full  p-2"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="w-full">
          <label htmlFor="email">Email:</label> <br />
          <input
            className="border border-zinc-300 rounded mt-1 w-full p-2"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password:</label> <br />
          <input
            className="border border-zinc-300 rounded mt-1 w-full p-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="bg-primary rounded-md w-full text-base text-white py-2 px-8">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
