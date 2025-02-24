import { useTranslation } from "react-i18next";

interface AboutPageProps {
    customText?: string
}

const AboutPage = ({ customText }: AboutPageProps) => {
    const { t } = useTranslation("about");
    return (
        <div>
            <div>{t("О сайте")}</div>
        </div>
    );
};

export default AboutPage;
