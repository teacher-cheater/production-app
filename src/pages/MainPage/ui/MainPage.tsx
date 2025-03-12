import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface MainPageProps {
    customText?: string;
}

const MainPage = ({ customText }: MainPageProps) => {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t('Главная страница')}</div>
            <Counter />
        </div>
    );
};

export default MainPage;
