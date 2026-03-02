import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
}

export const Select = (props: SelectProps) => {
    const { className, label, options } = props;
    const { t } = useTranslation();
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

            <select className={classNames(cls.select, mods, [className])}>
                <option value="">123</option>
                <option value="">333</option>
                <option value="">555</option>
            </select>
        </div>
    );
};
