import { SocialMediaDisplay } from "@/lib/data/socials.data";

export const SocialMedia = () => (
  <div className="flex items-center gap-[10px]">
    {SocialMediaDisplay().map((item, index) => (
      <a key={index}>{item}</a>
    ))}
  </div>
);
