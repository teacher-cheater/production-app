import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// компонент для тестирования
const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            /* eslint-disable-next-line i18next/no-literal-string */
            onClick={onThrow}
        >
            {t('Throw error')}
        </Button>
    );
};

export default BugButton;
