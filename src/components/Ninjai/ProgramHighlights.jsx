import React from "react";
import { Users, Target, Award, CircleCheckBig } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship 1-on-1",
    desc: "Được mentor trực tiếp bởi anh Nguyễn Hữu Kiên - CTO và team experts với kinh nghiệm thực tế",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Project-based Learning",
    desc: "Học qua các dự án thực tế, không chỉ lý thuyết mà còn hands-on experience",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Chứng nhận & Portfolio",
    desc: "Nhận chứng nhận hoàn thành, dấu mộc thực tập và portfolio chuyên nghiệp để apply việc",
  },
  {
    icon: <CircleCheckBig className="w-6 h-6 text-primary" />,
    title: "Job Placement Support",
    desc: "Trở thành các Technical Leader & Mentor nội bộ công ty, hỗ trợ tìm việc và kết nối với mạng lưới các công ty công nghệ partner",
  },
];

const suitableFor = [
  "Sinh viên năm cuối hoặc fresh graduate IT",
  "Người đã có kiến thức cơ bản về lập trình",
  "Có đam mê học hỏi và phát triển bản thân",
  "Sẵn sàng commit full-time trong 3 tháng",
  "Muốn làm việc trong môi trường startup",
];

const requirements = [
  "Hiểu biết cơ bản về HTML, CSS, JavaScript",
  "Đã từng làm ít nhất 1 dự án cá nhân",
  "Kỹ năng tiếng Anh đọc hiểu tài liệu",
  "Thái độ học hỏi và tinh thần teamwork",
  "Có laptop cá nhân",
];

const ProgramHighlights = () => (
  <div>
    {/* === Features Section === */}
    <section className="py-20 bg-secondary/20 dark:bg-secondary/10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            ⭐ Điểm nổi bật chương trình
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="card-feature p-5 bg-background rounded-xl shadow-md hover:shadow-lg transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* === Audience Section === */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            👨‍💻 Đối tượng tham gia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Suitable For */}
            <div className="card-elegant p-5 bg-background rounded-xl shadow-md transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ✅ Phù hợp với:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {suitableFor.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CircleCheckBig className="text-primary mr-2 mt-0.5 flex-shrink-0 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Requirements */}
            <div className="card-elegant p-5 bg-background rounded-xl shadow-md transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                📋 Yêu cầu kỹ năng:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {requirements.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Target className="text-primary mr-2 mt-0.5 flex-shrink-0 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ProgramHighlights;
