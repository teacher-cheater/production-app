import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };
    return (
        <div
            className={classNames(cls.Text, mods, [className])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
