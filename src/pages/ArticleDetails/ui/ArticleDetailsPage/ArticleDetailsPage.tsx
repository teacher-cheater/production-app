import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
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
            <ArticleDetails />
        </div>
    );
};

export default memo(ArticleDetailsPage);
