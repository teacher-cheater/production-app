import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLng = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLng}
            className={classNames('', {}, [className])}
        >
            {t("Язык")}
        </Button>
    );
};

export default LangSwitcher;
