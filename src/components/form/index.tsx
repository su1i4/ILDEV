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
    const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
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
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (!formData.agree) {
      newErrors.agree = "Необходимо согласиться с политикой конфиденциальности";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value: string): string => {
    const phone = value.replace(/\D/g, "");
    if (phone.length === 0) return "";
    if (phone.length <= 1) return `+${phone}`;
    if (phone.length <= 4) return `+${phone.slice(0, 1)} (${phone.slice(1)}`;
    if (phone.length <= 7)
      return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4)}`;
    if (phone.length <= 9)
      return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
        4,
        7
      )}-${phone.slice(7)}`;
    return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
      4,
      7
    )}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Форма содержит ошибки:", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Отправка данных:", {
        name: formData.name,
        phone: formData.phone,
        file: formData.file,
        agree: formData.agree,
        description: formData.description,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

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
    <div className=" overflow-y-auto">
      <div className="flex flex-col items-center">
        <div className="bg-[#18191E] p-6 rounded-2xl shadow-lg w-full flex gap-[30px] lg:flex-col">
          <div className="flex flex-col">
            <h2 className="text-[48px] font-medium lg:text-[24px]">{title}</h2>
            <p className="text-[#FFFFFF] text-[18px] font-[300] mb-4 lg:text-[15px]">
              {description}
            </p>
            <SocialMedia />
            <h3 className="text-[48px] mt-[30px] font-medium text-white lg:text-[24px]">
              +7 777 777 77 77
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
                placeholder={t("home.form.phoneNumber")}
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
                  placeholder="Напиши немного о себе..."
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

            <Button
              type="primary"
              classNames="text-center"
              text={isSubmitting ? "Отправка..." : t("home.form.send_request")}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
