import {FC, InputHTMLAttributes} from "react";
import Typography, {TypographyType} from "./Typography";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
}

const Input:FC<InputProps> = ({
          label,
            error,
          type= 'text',
    className,
            ...props}) => {
    return (
        <div className={className}>
            {label && (
                <Typography type={TypographyType.Small} className="mb-4">{label}</Typography>
            )}
            <input className="p-2 bg-lightGrey outline-none border rounded w-full" type={type} {...props}/>
            {error && (
                <Typography color="text-red-500" type={TypographyType.XSmall} className="mt-2">{error}</Typography>
            )}
        </div>
    )
}

export default Input;