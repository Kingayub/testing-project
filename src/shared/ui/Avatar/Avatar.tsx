import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?:string;
}

export const Avatar = ({
    className, src, size, alt,
}:AvatarProps) => {
    const { t } = useTranslation();
    const mods:Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
    }), [size]);
    return (
        <img
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
