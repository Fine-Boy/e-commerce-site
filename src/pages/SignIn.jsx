import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Sign-in backend is not connected yet.");
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6 py-16">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm sm:p-10">

        <Link
          to="/"
          className="block text-center text-5xl font-extrabold tracking-[-3px]"
        >
          volt<span className="text-[#315BFF]">.</span>
        </Link>

        <div className="mt-8 text-center">

          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue shopping with Volt.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="mt-9 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email address
            </label>

            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#315BFF]"
            />
          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 outline-none focus:border-[#315BFF]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#315BFF] py-4 font-semibold text-white hover:bg-blue-700"
          >
            <LockKeyhole size={18} />
            Sign in
          </button>

        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          New to Volt?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#315BFF]"
          >
            Create an account
          </Link>
        </p>

      </div>

    </section>
  );
};

export default SignIn;