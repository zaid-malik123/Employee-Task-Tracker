import React, { useState } from 'react';

function Login({ handlerLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handlerLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black px-4 sm:px-6">
      <div className="border-2 border-emerald-600 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg bg-black w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-600 text-center mb-6 sm:mb-8">Log In</h2>

        <form autoComplete="off" onSubmit={submitHandler} className="flex flex-col gap-4 sm:gap-6">
          {/* Dummy hidden fields to trick browser autofill */}
          <input type="text" name="username_fake" style={{ display: 'none' }} />
          <input type="password" name="password_fake" style={{ display: 'none' }} />

          <input
            required
            name="email_fake"
            autoComplete="off"
            className="border-2 border-emerald-600 text-base sm:text-lg bg-transparent text-white outline-none py-2.5 px-4 sm:py-3 sm:px-5 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-emerald-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            name="password_fake2"
            autoComplete="new-password"
            className="border-2 border-emerald-600 text-base sm:text-lg bg-transparent text-white outline-none py-2.5 px-4 sm:py-3 sm:px-5 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-emerald-300"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-emerald-600 text-base sm:text-lg font-semibold py-2.5 px-4 sm:py-3 sm:px-5 rounded-full hover:bg-emerald-700 transition-all duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
