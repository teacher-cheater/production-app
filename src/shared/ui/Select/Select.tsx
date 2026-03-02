import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string
}

interface SelectProps {
    className?: string;
    label: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, onChange, value, readOnly,
    } = props;
    const { t } = useTranslation();

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        onChange?.(e.target.value);
    }

    const optionsList = useMemo(() => options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>{opt.content}</option>
    )), [options]);

    const mods: Mods = {};

    return (
        <div
            className={classNames(cls.Wrapper, mods, [className])}
        >
            {label && (
                <span className={classNames(cls.label, {}, [className])}>
                    {`${label}>`}
                </span>
            )}

            <select
                onChange={onChangeHandler}
                value={value}
                className={classNames(cls.select, mods, [className])}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
});
