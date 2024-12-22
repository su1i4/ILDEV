import { IService } from "@/common"

export const ServiceCard = ({name}: IService) => {
    return (
        <div className="!min-w-[410px] h-[450px] rounded-[80px] bg-lightDark p-[40px]">
            <p className="text-[24px] font-[500]">{name}</p>
        </div>
    )
}