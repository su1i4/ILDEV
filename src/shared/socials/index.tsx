import { SocialMediaDisplay } from "@/lib/data/socials.data";

export const SocialMedia = () => (
  <div className="flex items-center gap-[10px]">
    {SocialMediaDisplay().map((item) => (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        title={item.label}
      >
        {item.icon()}
      </a>
    ))}
  </div>
);