import React, {useEffect, useState} from 'react';
import {Button} from "shared/ui/Button/Button";

// компонент для тестирования
const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            /* eslint-disable-next-line i18next/no-literal-string */
            onClick={onThrow}>
            Throw error
        </Button>
    );
};

export default BugButton;
