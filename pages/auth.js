// pages/auth.js
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // or "signup"
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleAuth = async () => {
    setError(null);
    const fn = mode === "login" ? supabase.auth.signInWithPassword : supabase.auth.signUp;
    const { data, error } = await fn({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard"); // redirect after login/signup
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-neutral-900 p-8 rounded-xl w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {mode === "login" ? "Dealer Login" : "Dealer Signup"}
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-neutral-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-neutral-800 text-white"
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleAuth}
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 transition"
        >
          {mode === "login" ? "Log In" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setMode("signup")} className="underline cursor-pointer">
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setMode("login")} className="underline cursor-pointer">
                Log In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
