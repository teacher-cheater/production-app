import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed(toggle => !toggle);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [
                className,
            ])}
        >
            <button onClick={onToggle}>{t("toggle")}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;
