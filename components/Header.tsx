import { DropdownMenuDemo } from "./menu";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <header className="p-5 flex justify-between">
            <ModeToggle />
            <div className="flex gap-12">
                <p>О нас</p>
                <p>Карта покрытия</p>
                <p>Инфраструктура</p>
                <p>Партнеры</p>
                <p>Новости</p>
                <p>Вакансии</p>
            </div>
            <DropdownMenuDemo />
        </header>
    )
}
