import {useTranslation} from "react-i18next";

interface MainPageProps {
    customText?: string;
}

const MainPage = ({ customText }: MainPageProps) => {
    const {t} = useTranslation();
    return (
        <div>
            <div>{t("Главная страница")}</div>
        </div>
    );
};

export default MainPage;
