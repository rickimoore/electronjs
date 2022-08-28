import {FC, ReactNode, HTMLAttributes, HTMLAttributeAnchorTarget} from "react";

export enum ButtonFace  {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    TERTIARY = "TERTIARY"
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    type?: 'submit' | 'reset' | 'button';
    isDisabled?: boolean
    isFullWidth?: boolean
    face?: ButtonFace
    href?: string,
    target?: HTMLAttributeAnchorTarget
}

const Button:FC<ButtonProps> = ({
    children,
    isDisabled,
    isFullWidth,
    type = 'button',
    face = ButtonFace.PRIMARY,
    target = '_self',
    href,
    className,
    ...props
}) => {
    const renderFaceStyle = () => {
        switch (face) {
            case ButtonFace.TERTIARY:
                return 'bg-gray-200 hover:bg-gray-100 text-gray-600'
            case ButtonFace.SECONDARY:
                return 'bg-amber-500 hover:bg-amber-400 text-white'
            default:
                return 'bg-highlight hover:bg-highlight400 text-white'
        }
    }

    const renderContent = () => {
        return (
            <button {...props} disabled={isDisabled} type={type}
                    className={`p-3 disabled:opacity-70 disabled:pointer-events-none rounded-lg ${renderFaceStyle()} ${isFullWidth ? 'w-full' : 'w-full max-w-xs'} ${className}`}>
                {children}
            </button>
        )
    }

    return href ? (
        <a target={target} href={href}>{renderContent()}</a>
    ) : renderContent()
}

export default Button;