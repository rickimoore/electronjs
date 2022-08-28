import {FC, ReactNode} from "react";

export enum TypographyType {
    XLarge = "XLarge",
    Large = 'Large',
    Medium = 'Medium',
    Small = 'Small',
    XSmall = 'XSmall',
    Base = 'Base'
}

export interface TypographyProps {
    children: ReactNode,
    isBold?: boolean,
    className?: string,
    color?: string,
    type?: TypographyType
}

const Typography:FC<TypographyProps> = ({
    children,
    isBold,
    color,
    className,
    type = TypographyType.Base
}) => {
    const getSize = () => {
        switch (type) {
            case TypographyType.XLarge:
                return 'text-4xl'
            case TypographyType.Large:
                return 'text-3xl';
            case TypographyType.Medium:
                return 'text-xl'
            case TypographyType.XSmall:
                return 'text-xs'
            case TypographyType.Small:
                return 'text-sm'
            default:
                return 'text-base'
        }
    }

    return (
        <p className={`${color ? color : 'text-textPrimary'} ${isBold ? 'font-bold' : 'font-normal'} ${getSize()}${className ? ` ${className}` : ''}`}>{children}</p>
    )
}

export default Typography;