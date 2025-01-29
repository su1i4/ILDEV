import { Socials } from "@/lib/data/socials.data";

export const SocialMedia = () => (
  <div className="flex items-center gap-[10px]">
    {Socials.map((item, index) => (
      <a key={index}>{item}</a>
    ))}
  </div>
);
