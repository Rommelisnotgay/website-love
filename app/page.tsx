"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Cairo } from "next/font/google";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700"],
});

const Page = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  // التأكد من أن الكومبوننت mounted قبل استخدام localStorage
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Audio play failed");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const images = [
    "0fe9ec52271816383f63550772480dad.jpg",
    "1d6f4c8d75342159ee840089e0dceacd.jpg",
    "a3a6080e070e477dbd836d0ca672cfbf.jpg",
    "c9fa48c542d0bd578c7768220c216c03.jpg",
    "e5a92cddaf0526c464f8b9b35a6ff936.jpg",
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <audio ref={audioRef} loop>
        <source
          src="/Bahaa Sultan - Ma3aya  2025  بهاء سلطان - معايا (أغنية فيلم ولنا فى الخيال ... حب؟) - Craft Media  كرافت ميديا.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10">
          <h1
            className={`${cairo.className} text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-400 mb-4`}
          >
            From My Heart
          </h1>
          <h2
            className={`${cairo.className} text-3xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-400 mb-4`}
          >
            15/3/2024
          </h2>
          <div className="text-6xl mb-8 animate-bounce">❤️</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-pink-100">
          <div
            className={`${cairo.className} text-lg md:text-xl leading-relaxed text-gray-700 text-right`}
            style={{ direction: "rtl" }}
          >
            <p className="mb-6 text-red-500 font-bold text-2xl">يا زينب ❤️</p>

            <p className="mb-6">
              مع بداية سنة جديدة وإحنا مع بعض، حاسس إني أغنى واحد في الدنيا عشان
              إنتِ في حياتي يا زينب ❤️ السنة اللي فاتت عدّت علينا بحاجات كتير،
              فرحنا، زعلنا، اتخانقنا، وصالحنا بعض… بس في الآخر فضلنا مع بعض، وده
              في حد ذاته نعمة كبيرة قوي. السنة دي وأنا داخلها، أول دعوة في قلبي
              إن ربنا يفضل محافظ عليكي ليا يا زينب، ويفضل محافظ علينا لبعض. نفسي
              السنة الجديدة تكون أخف علينا، أهدى، مليانة ضحك أكتر من الزعل،
              ومليانة حضن يطمن بدل كلام يوجع. عايزك تعرفي إن وجودك في حياتي فارق
              معايا في كل حاجة، في مزاجي، في نفسيتي، وفي نظرتي للحياة.
            </p>

            <p className="mb-6">
              إنتِ مش بس حبيبتي، إنتِ صاحبتي، وونس أيامي، والسبب اللي بيخليني
              أعدّي أي يوم صعب وأنا مطمّن. وعد مني ليكي في السنة الجديدة إني
              أفضل جنبك، أسمعك قبل ما أتكلم، وأفهمك قبل ما أزعل. وعد إني أختارك
              كل يوم من جديد، مش عشان اتعودت، لا، عشان بحبك وبطمن وأنا معاكي يا
              زينب. يمكن المستقبل مش واضح كله، بس الحاجة الوحيدة اللي متأكد منها
              إني عايز أكمله وإنتِ في إيدي. سنة ورا سنة، وحلم ورا حلم، لحد ما
              نوصل للي ربنا كاتبه لينا وإحنا مع بعض. كل سنة وإنتِ حبيبتي يا
              زينب، والأمان، وأجمل بداية، وأحلى نهاية لأي سنة ❤️
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`${cairo.className} text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500`}
          >
            Our Memories
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src={`/${src}`}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`${cairo.className} text-4xl font-bold text-center mb-8 text-gray-800`}
          >
            From My Heart
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              muted
              loop
              className="w-full h-auto"
              playsInline
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={`${cairo.className} text-4xl font-bold mb-8 text-gray-800`}
          >
            معايا - بهاء سلطان 🎵
          </h2>
          <button
            onClick={toggleMusic}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-400 group-hover:from-red-600 group-hover:via-pink-600 group-hover:to-red-500 transition-all duration-300"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>

            <span
              className={`${cairo.className} relative flex items-center gap-3`}
            >
              {isPlaying ? (
                <>
                  <span className="text-2xl animate-bounce">🎵</span>
                  <span>وقفي الأغنية</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">▶️</span>
                  <span>شغلي الأغنية</span>
                </>
              )}
            </span>
          </button>

          {isPlaying && (
            <div className="flex items-end justify-center gap-1 mt-12">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-t from-red-500 to-pink-500 rounded-full"
                  style={{
                    width: "4px",
                    height: `${Math.random() * 40 + 10}px`,
                    animation: `bounce ${
                      Math.random() * 0.5 + 0.3
                    }s ease-in-out infinite`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-6xl mb-8 animate-pulse">❤️</p>
          <p
            className={`${cairo.className} text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500`}
          >
            I Love You Zainab
          </p>
          <p className={`${cairo.className} text-2xl text-gray-600 mt-6`}>
            Happy New Year 2025 ✨
          </p>
          <p
            className={`${cairo.className} text-lg text-gray-500 mt-12`}
            style={{ direction: "rtl" }}
          >
            بحبك
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
