import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDatailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div
            className={classNames(cls.ArticleDatailsPage, {}, [className])}
        >
            ARTICLE DETAILS
        </div>
    );
};

export default memo(ArticleDetailsPage);
