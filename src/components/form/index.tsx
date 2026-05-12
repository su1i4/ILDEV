"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/shared/button";
import { Input } from "@/shared/input";
import { Checkbox } from "@/shared/checkbox";
import FileUpload from "@/shared/upload";
import { TextArea } from "@/shared/textArea";
import { SocialMedia } from "@/shared/socials";
import { useTranslations } from "next-intl";

interface FormDataProps {
  title: string;
  description: string;
  textarea?: boolean;
}

interface FormData {
  name: string;
  phone: string;
  file: File | null;
  agree: boolean;
  description?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  file?: string;
  agree?: string;
}

export default function QuestionForm({
  title = "",
  description = "",
  textarea = false,
}: FormDataProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    file: null,
    agree: false,
    description: "",
  });

  const t = useTranslations();

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, "");
    // KG: 996 + 9 цифр = 12 всего
    return /^996\d{9}$/.test(digits);
  };

  const formatPhoneNumber = (value: string): string => {
    let digits = value.replace(/\D/g, "");

    // если ввели без кода 996 — подставляем
    if (digits.length > 0 && !digits.startsWith("996")) {
      // 0XXX → 996XXX (локальный формат KG)
      if (digits.startsWith("0")) {
        digits = "996" + digits.slice(1);
      } else {
        digits = "996" + digits;
      }
    }

    // обрезаем до 12 цифр (996 + 9)
    digits = digits.slice(0, 12);

    const code = digits.slice(0, 3);
    const part1 = digits.slice(3, 6);
    const part2 = digits.slice(6, 8);
    const part3 = digits.slice(8, 10);
    const part4 = digits.slice(10, 12);

    if (digits.length === 0) return "";
    if (digits.length <= 3) return `+${code}`;
    if (digits.length <= 6) return `+${code} ${part1}`;
    if (digits.length <= 8) return `+${code} ${part1} ${part2}`;
    if (digits.length <= 10) return `+${code} ${part1} ${part2} ${part3}`;
    return `+${code} ${part1} ${part2} ${part3} ${part4}`;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя";
    } else if (formData.name.length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Введите корректный номер (+996 XXX XX XX XX)";
    }

    if (!formData.agree) {
      newErrors.agree = "Необходимо согласиться с политикой конфиденциальности";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("phone", formData.phone);
      if (formData.description)
        body.append("description", formData.description);
      if (formData.file) body.append("file", formData.file);

      const res = await fetch("/api/lead", {
        method: "POST",
        body,
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Не удалось отправить");
      }

      setFormData({
        name: "",
        phone: "",
        file: null,
        agree: false,
        description: "",
      });

      alert("Заявка успешно отправлена!");
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке заявки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="form" className="overflow-y-auto pt-[100px] md:pt-0">
      <div className="flex flex-col items-center lg:flex-col">
        <div className="bg-[#18191E] p-6 xs:p-4 rounded-2xl shadow-lg w-full flex gap-[30px] lg:flex-col">
          <div className="flex flex-col">
            <h2 className="text-[48px] font-medium lg:text-[32px] xs:text-[24px]">
              {title}
            </h2>
            <p className="text-[#FFFFFF] text-[18px] font-[300] mb-4 lg:text-[15px]">
              {description}
            </p>
            <SocialMedia />
            <h3 className="text-[48px] mt-[30px] font-medium text-white lg:text-[24px]">
              +996 777 79 27 77
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
            <div>
              <Input
                placeholder={t("home.form.name")}
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="+996 XXX XX XX XX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: formatPhoneNumber(e.target.value),
                  }))
                }
                required
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {textarea && (
              <div>
                <TextArea
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  value={formData.description || ""}
                  placeholder={t("vacancies.about_myself")}
                />
              </div>
            )}

            <FileUpload
              maxSize={2024 * 2024}
              allowedTypes={["image/jpeg", "image/png"]}
              onFileSelect={(file) =>
                setFormData((prev) => ({ ...prev, file }))
              }
            />

            <label className="flex items-center gap-2 text-[#464646] font-[300] text-[15px]">
              <Checkbox
                checked={formData.agree}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, agree: !!checked }))
                }
              />
              {t("home.form.checked")}
            </label>
            {errors.agree && (
              <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
            )}

            <button type="submit" disabled={isSubmitting} className="contents">
              <Button
                type="primary"
                classNames="text-center xs:text-[14px] xs:py-1 w-full"
                text={
                  isSubmitting ? "Отправка..." : t("home.form.send_request")
                }
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
