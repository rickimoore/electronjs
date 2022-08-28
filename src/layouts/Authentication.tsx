import Typography, {TypographyType} from "../components/Typography";
import Input from '../components/Input'
import Button from "../components/Button";
import AuthForm from "../forms/AuthForm";
import {Controller} from "react-hook-form";

const Authentication = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-highlight">
            <div className="bg-white p-8 rounded-2xl w-full max-w-xl">
                <AuthForm>
                    {({control, isDisabled}) => (
                        <>
                            <div className="text-center w-full">
                                <Typography type={TypographyType.Large} isBold>
                                    Login to Account
                                </Typography>
                                <Typography color="text-gray-500" type={TypographyType.Small}>
                                    Please enter your email and password to continue
                                </Typography>
                            </div>
                            <div className="mt-12 space-y-8">
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({
                                                 field: {ref: _ref, ...props},
                                                 fieldState: { error },
                                             }) => (
                                        <Input {...props} error={error?.message} label="Email address:" placeholder="mavrik@gmail.com" type="text" />
                                    )}
                                />
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({
                                                 field: {ref: _ref, ...props},
                                                 fieldState: { error },
                                             }) => (
                                        <Input {...props} error={error?.message} label="Password" placeholder="Enter Password" type="password" />
                                    )}
                                />
                            </div>
                            <div className="w-full space-y-3 flex flex-col items-center justify-center mt-20">
                                <Button type="submit" isDisabled={isDisabled}>Login</Button>
                                <div className="flex space-x-1 items-center">
                                    <Typography type={TypographyType.XSmall}>
                                        Don’t have an account?
                                    </Typography>
                                    <Typography color="text-highlight" className="underline cursor-pointer" type={TypographyType.XSmall}>
                                        Create Account
                                    </Typography>
                                </div>
                            </div>
                        </>
                    )}
                </AuthForm>
            </div>
        </div>
    )
}

export default Authentication;