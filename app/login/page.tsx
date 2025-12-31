"use client";
import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Love_Light } from "next/font/google";

const loveLight = Love_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Login = () => {
  const tagErrors = [
    ["الشهر غلط يروحي", "ده مش الشهر الي اتولدتي فيه"],
    ["اليوم غلط يروحي", "ده مش اليوم الي اتولدتي فيه"],
  ] as const;

  const router = useRouter();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (month === "12" && day === "19") {
      if (mounted) {
        localStorage.setItem("loggedIn", "true");
        router.push("/");
      }
    } else if (month !== "12" && month !== "") {
      const randomError =
        tagErrors[0][Math.floor(Math.random() * tagErrors[0].length)];
      setError(randomError);
    } else if (day !== "19" && day !== "") {
      const randomError =
        tagErrors[1][Math.floor(Math.random() * tagErrors[1].length)];
      setError(randomError);
    } else {
      setError("حاولي تاني يا قمر");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex justify-center items-center w-full  from-pink-100 via-pink-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <form
        onSubmit={handleLogin}
        className="relative flex flex-col items-center justify-around gap-6 bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-pink-300 shadow-2xl rounded-3xl w-full max-w-md p-8 sm:p-10 lg:p-12 min-h-[500px]"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h1
            className={`${loveLight.className} text-7xl sm:text-8xl text-white drop-shadow-lg`}
          >
            Zainab
          </h1>
          <p className="text-white text-lg sm:text-xl font-medium">
            حطي تاريخ ميلادك
          </p>
          <div className="text-5xl animate-bounce mt-2">❤️</div>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="month"
              className="text-white text-base font-medium px-1"
            >
              الشهر
            </label>
            <input
              id="month"
              type="number"
              value={month}
              placeholder="اكتبي الشهر (1-12)"
              onChange={(e) => {
                setMonth(e.target.value);
                setError("");
              }}
              min="1"
              max="12"
              className="bg-white/90 backdrop-blur-sm border-2 border-pink-300 text-gray-800 text-base focus:ring-2 focus:ring-pink-600 focus:border-pink-600 block w-full px-4 py-3 rounded-xl shadow-md placeholder:text-gray-400 transition-all duration-200 hover:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="day"
              className="text-white text-base font-medium px-1"
            >
              اليوم
            </label>
            <input
              id="day"
              type="number"
              value={day}
              placeholder="اكتبي اليوم (1-31)"
              onChange={(e) => {
                setDay(e.target.value);
                setError("");
              }}
              min="1"
              max="31"
              className="bg-white/90 backdrop-blur-sm border-2 border-pink-300 text-gray-800 text-base focus:ring-2 focus:ring-pink-600 focus:border-pink-600 block w-full px-4 py-3 rounded-xl shadow-md placeholder:text-gray-400 transition-all duration-200 hover:bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="group relative w-full bg-gradient-to-r from-pink-800 to-pink-900 hover:from-pink-900 hover:to-pink-950 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <span className="relative flex items-center justify-center gap-2">
            <span className="text-2xl group-hover:animate-pulse">❤</span>
            <span>دوسي هنا يا قمر</span>
          </span>
        </button>

        <div className="w-full min-h-[48px] flex items-center justify-center">
          {error && (
            <div className="w-full bg-white/95 backdrop-blur-sm border-2 border-red-400 rounded-xl px-4 py-3 animate-shake">
              <p className="text-red-600 text-center font-medium text-sm sm:text-base">
                {error}
              </p>
            </div>
          )}
        </div>
      </form>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Login;
