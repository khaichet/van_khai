import React from "react";
import {
  Calendar,
  Bot,
  Database,
  Code,
  Smartphone,
  Brain,
  Globe,
  CircleCheckBig,
  Code as CodeIcon,
  Users,
  Award,
  Target,
} from "lucide-react";

const timeline = [
  {
    step: 1,
    time: "Tuần 1-2",
    title: "Học thử & Định hướng",
    desc: "Thực tập sinh tham gia trải nghiệm miễn phí: làm quen quy trình Agile, GitHub, xây dựng portfolio cá nhân, tạo chatbot AI cơ bản với React.js + API. Được mentor hỗ trợ và đánh giá định kỳ.",
  },
  {
    step: 2,
    time: "Tuần 3-4",
    title: "Thực chiến Frontend",
    desc: "Tập trung xây dựng giao diện web chuẩn UX/UI bằng React.js, TailwindCSS. Học làm việc nhóm qua dự án: landing page, hệ thống quản lý thực tập sinh. Tiếp cận kiến thức responsive design, Git nâng cao và animation.",
  },
  {
    step: 3,
    time: "Tháng thứ 2",
    title: "Backend & Tư duy AI",
    desc: "Làm việc với Supabase, Firebase hoặc FastAPI, thiết kế API và xây dựng hệ thống CMS/CRM. Học cách tích hợp AI: phân tích ngôn ngữ (NLP), tạo chatbot đa nhiệm, sử dụng API Gemini và prompt engineering.",
  },
  {
    step: 4,
    time: "Tháng thứ 3",
    title: "Dự án cuối kỳ & Kết nối doanh nghiệp",
    desc: "Thực hiện capstone project (AI/CRM/Chatbot/ERP) có mentor hướng dẫn. Được review, demo, ghi nhận đóng góp theo mô hình 'cổ phần hóa nhân lực'. Kết nối doanh nghiệp hàng đầu trong nước và quốc tế như Nhật Bản & CHLB Đức, hỗ trợ chuẩn bị hồ sơ/phỏng vấn.",
  },
];

const projects = [
  {
    icon: <Bot className="text-white w-8 h-8" />,
    gradient: "from-blue-500 to-purple-600",
    title: "AI Chatbot Platform",
    desc: "Xây dựng nền tảng chatbot AI đa ngôn ngữ với khả năng học hỏi và tùy chỉnh theo từng doanh nghiệp.",
    tech: [
      "React + TypeScript Frontend",
      "Node.js + OpenAI API Backend",
      "Vector Database Integration",
      "Real-time Chat Interface",
    ],
  },
  {
    icon: <Database className="text-white w-8 h-8" />,
    gradient: "from-green-500 to-teal-600",
    title: "E-commerce CRM System",
    desc: "Hệ thống quản lý khách hàng thông minh với AI analytics và automation marketing.",
    tech: [
      "Next.js + Prisma Stack",
      "PostgreSQL Database",
      "AI-powered Analytics",
      "Email Automation",
    ],
  },
  {
    icon: <Code className="text-white w-8 h-8" />,
    gradient: "from-orange-500 to-red-600",
    title: "Blockchain DApp",
    desc: "Ứng dụng phi tập trung cho việc quản lý và xác thực chứng chỉ giáo dục trên blockchain.",
    tech: [
      "Solidity Smart Contracts",
      "Web3.js Integration",
      "MetaMask Wallet Connect",
      "IPFS File Storage",
    ],
  },
  {
    icon: <Smartphone className="text-white w-8 h-8" />,
    gradient: "from-purple-500 to-pink-600",
    title: "AI Learning Mobile App",
    desc: "Ứng dụng mobile học tập cá nhân hóa với AI tutor và gamification elements.",
    tech: [
      "React Native + Expo",
      "Firebase Backend",
      "AI Recommendation Engine",
      "Offline Learning Support",
    ],
  },
  {
    icon: <Brain className="text-white w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-600",
    title: "AI Data Analytics Platform",
    desc: "Nền tảng phân tích dữ liệu với machine learning models và interactive dashboards.",
    tech: [
      "Python + FastAPI",
      "TensorFlow/PyTorch ML",
      "D3.js Data Visualization",
      "Real-time Data Processing",
    ],
  },
  {
    icon: <Globe className="text-white w-8 h-8" />,
    gradient: "from-teal-500 to-cyan-600",
    title: "IoT Smart Home System",
    desc: "Hệ thống nhà thông minh với AI automation và voice control integration.",
    tech: [
      "Arduino/Raspberry Pi",
      "MQTT Protocol",
      "Voice Assistant Integration",
      "Mobile Control App",
    ],
  },
];

const benefits = [
  {
    icon: <CodeIcon className="text-blue-600" />,
    color: "bg-blue-100",
    title: "Hands-on Experience",
    desc: "Làm việc với code thực tế, không chỉ tutorial",
  },
  {
    icon: <Users className="text-green-600" />,
    color: "bg-green-100",
    title: "Team Collaboration",
    desc: "Học cách làm việc nhóm như trong công ty",
  },
  {
    icon: <Award className="text-purple-600" />,
    color: "bg-purple-100",
    title: "Portfolio Building",
    desc: "Xây dựng portfolio ấn tượng cho CV",
  },
  {
    icon: <Target className="text-orange-600" />,
    color: "bg-orange-100",
    title: "Industry Ready",
    desc: "Chuẩn bị sẵn sàng cho môi trường làm việc",
  },
];

export default function InternshipTheme() {
  return (
    <section>
      {/* Timeline Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              🗓️ Lộ trình thực tập 3 tháng
            </h2>
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.step}
                    </div>
                    {item.step !== timeline.length && (
                      <div className="w-0.5 h-20 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 card-feature">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                      <Calendar className="text-muted-foreground w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              🚀 Dự án thực tập sinh tham gia
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Các dự án thực tế mà thực tập sinh sẽ được tham gia phát triển, từ
              ý tưởng đến sản phẩm hoàn chỉnh
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="card-elegant group hover:scale-[1.02] transition-all duration-300"
                >
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto bg-gradient-to-br ${proj.gradient}`}
                  >
                    {proj.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                    {proj.desc}
                  </p>
                  <div className="space-y-2">
                    {proj.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CircleCheckBig className="text-green-500 mr-2 w-4 h-4" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-16 card-elegant">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-6">
                💡 Lợi ích khi tham gia dự án thực tế
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`w-12 h-12 ${b.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      {b.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {b.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
