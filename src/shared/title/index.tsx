import { twMerge } from "tailwind-merge"
 
interface TitleProp {
    classNames: string
    text: string
}

export const Title = ({text, classNames}: TitleProp) => {
    return (
        <h1 className={twMerge('text-[64px] lg:text-[48px] sm:text-[32px] xs:text-[24px] font-[600] leading-[56px] text-white', classNames )}>
            {text}
        </h1>
    )
}