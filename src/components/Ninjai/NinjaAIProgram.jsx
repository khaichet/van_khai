import React from "react";

const NinjaAIProgram = () => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 relative z-30 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg animate-fade-in">
            Chương trình Thực tập sinh{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              Ninja AI
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100">
            Chương trình thực tập sinh chuyên sâu 3 tháng, biến những người đam
            mê công nghệ thành những ninja AI với kỹ năng thực chiến.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in delay-200">
            {[
              "🚀 3 tháng intensive",
              "💼 100% Improve your skill & mindset",
              "🏆 Hands-on projects",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm font-medium shadow hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mục tiêu chương trình */}
      <section className="py-20 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            🎯 Mục tiêu chương trình
          </h2>
          <div className="bg-background rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto border border-gray-100 dark:border-gray-800">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Chương trình Ninja AI được thiết kế để đào tạo thế hệ kỹ sư công
              nghệ mới - những người không chỉ thành thạo về lập trình mà còn
              hiểu sâu về lập trình và ứng dụng AI vào công việc, đời sống và có
              khả năng áp dụng vào các dự án thực tế.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kỹ năng cốt lõi */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Kỹ năng cốt lõi:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Full-stack development",
                    "Building a strong Blockchain, AI community",
                    "Problem-solving mindset - AI First",
                    "Team collaboration",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-indigo-500 flex-shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Đầu ra mong đợi */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Đầu ra mong đợi:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Fresher/Junior Developer ready",
                    "Portfolio dự án thực tế + Chatbot AI",
                    "Kết nối industry network",
                    "Mindset startup - Mindset AI First",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check-big text-indigo-500 flex-shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phương châm làm việc */}
      <section className="py-20 bg-secondary/20 dark:bg-secondary/10 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-foreground">
            🚀 Phương châm làm việc
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                emoji: "📚",
                title: "Learning by Doing",
                desc: "80% thực hành, 20% lý thuyết. Học qua các dự án thực tế từ ngày đầu tiên.",
                gradient: "from-indigo-400 to-indigo-600",
              },
              {
                emoji: "👥",
                title: "Peer Learning",
                desc: "Làm việc nhóm, code review, và knowledge sharing giữa các thành viên.",
                gradient: "from-purple-400 to-purple-600",
              },
              {
                emoji: "🎯",
                title: "Industry Focus",
                desc: "Curriculum cập nhật theo nhu cầu thị trường và công nghệ mới nhất.",
                gradient: "from-pink-400 to-pink-600",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl shadow-md p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg`}
                >
                  <span className="text-2xl">{card.emoji}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NinjaAIProgram;
