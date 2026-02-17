import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    return (
        <div
            className={classNames(cls.ProfilePageHeader, {}, [className])}
        >
            <Text title={t('Профиль')} />
            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                {t('Редактировать')}
            </Button>
        </div>
    );
};
