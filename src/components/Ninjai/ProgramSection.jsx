import React from "react";
import { Send, Upload } from "lucide-react";

const ProgramSection = () => (
  <div className="space-y-24">
    {/* === Registration Section === */}
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground transition-colors">
              🚀 Đăng ký tham gia
            </h2>
            <p className="text-lg text-muted-foreground">
              Gửi thông tin của bạn và chúng tôi sẽ liên hệ trong vòng{" "}
              <span className="font-semibold text-primary">24-48 giờ</span>
            </p>
          </div>

          {/* Form */}
          <div className="p-8 bg-background rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <form className="space-y-8">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-foreground placeholder-gray-400 bg-background transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-foreground placeholder-gray-400 bg-background transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="0901234567"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-foreground placeholder-gray-400 bg-background transition"
                />
              </div>

              {/* GPA & Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    GPA hiện tại *
                  </label>
                  <input
                    type="number"
                    name="gpa"
                    step="0.01"
                    min="0"
                    max="4"
                    placeholder="3.50"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-foreground placeholder-gray-400 bg-background transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Vị trí ứng tuyển *
                  </label>
                  <select
                    name="desiredPosition"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-foreground bg-background transition"
                  >
                    <option value="">Chọn vị trí ứng tuyển</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full-stack Developer">
                      Full-stack Developer
                    </option>
                    <option value="AI/ML Engineer">AI/ML Engineer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="Other">Khác</option>
                  </select>
                </div>
              </div>

              {/* About */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Chia sẻ về bản thân và động lực tham gia
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Ví dụ: Kinh nghiệm lập trình, dự án đã làm, lý do muốn tham gia..."
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-foreground placeholder-gray-400 bg-background transition"
                ></textarea>
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Upload CV (PDF, tối đa 5MB)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer block">
                    <Upload className="mx-auto h-12 w-12 text-primary mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Kéo thả file PDF hoặc{" "}
                      <span className="text-primary font-semibold">
                        chọn file
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      Chỉ chấp nhận file PDF, tối đa 5MB
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 h-12 bg-primary text-white rounded-lg font-medium shadow-lg transition hover:shadow-xl hover:bg-primary/90"
              >
                <Send className="w-5 h-5" /> Gửi đơn ứng tuyển
              </button>

              {/* Terms */}
              <p className="text-sm text-muted-foreground text-center">
                Bằng cách gửi form, bạn đồng ý với{" "}
                <a
                  href="/dieu-khoan-su-dung"
                  className="text-primary hover:underline"
                >
                  điều khoản
                </a>{" "}
                &{" "}
                <a
                  href="/chinh-sach-bao-mat"
                  className="text-primary hover:underline"
                >
                  chính sách bảo mật
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ProgramSection;
