import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t('Главная страница')}</div>
        </div>
    );
};

export default MainPage;
