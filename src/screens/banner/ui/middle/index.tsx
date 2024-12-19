import { Button } from "@/shared/ui/button"
import { Link } from "@/assets/icons/Link"

export const Middle = () => {
    return (
        <div className="container mx-auto px-24">
            <p className="text-[64px] font-[600] leading-[60px] mb-[20px]">ILDEV — МЫ СОЗДАЕМ РЕВОЛЮЦИОННЫЕ ЦИФРОВЫЕ РЕШЕНИЯ</p>
            <Button text="Оставить заявку" icon={<Link />} />
        </div>
    )
}