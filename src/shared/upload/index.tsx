import React, { useCallback, useState } from "react";
import { X } from "lucide-react";
import { Download } from "@/assets/icons/Download";
import { useTranslations } from "next-intl";

interface FileUploadProps {
  maxSize?: number;
  allowedTypes?: string[];
  onFileSelect?: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  maxSize = 5 * 1024 * 1024,
  allowedTypes = [],
  onFileSelect,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const t = useTranslations();

  const validateFile = (file: File): boolean => {
    setError("");

    if (maxSize && file.size > maxSize) {
      setError(
        `Файл слишком большой. Максимальный размер: ${maxSize / 1024 / 1024}MB`
      );
      return false;
    }

    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      setError(
        `Неподдерживаемый тип файла. Разрешены: ${allowedTypes.join(", ")}`
      );
      return false;
    }

    return true;
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setFile(file);
      onFileSelect?.(file);
    } else {
      onFileSelect?.(null);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, []);

  const removeFile = useCallback(() => {
    setFile(null);
    setError("");
    onFileSelect?.(null);
  }, [onFileSelect]);

  return (
    <label htmlFor="file-upload" className="w-fit">
      <div
        className={`
            relative
            cursor-pointer
            rounded-[53px]
			bg-[#000000]
			py-[14px]
			px-[24px]
            transition-colors
            ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            ${error ? "border-red-500 bg-red-50" : ""}
          `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleChange}
          accept={allowedTypes.join(",")}
        />

        <div className="flex items-center justify-center gap-4">
          <div className="text-center text-[18px] font-[400] lg:text-[15px] lg:font-[300]">
            {file ? (
              <div className="flex items-center gap-2">
                <span>{file.name}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFile();
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className=" text-gray-500" />
                </button>
              </div>
            ) : (
              <div>
                <span>{t("home.form.file")}</span>
              </div>
            )}
          </div>
          <div className="rounded-full bg-white p-3 shadow-sm">
            <Download />
          </div>
          {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
        </div>
      </div>
    </label>
  );
};

export default FileUpload;
