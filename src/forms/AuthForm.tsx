import {Control, useForm} from "react-hook-form";
import {FC, FormEvent, useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {authValidation} from "./validation/AuthValidation";
import {useSetRecoilState} from "recoil";
import {appView} from "../recoil/atoms";
import {AppView} from "../constants/enums";

export interface AuthForm {
    email: string,
    password: string
}

export interface RenderProps {
    control: Control<AuthForm>
    isDisabled: boolean,
    isLoading: boolean,
}

export interface AuthFormProps {
    children: (props: RenderProps) => any
}

const AuthForm:FC<AuthFormProps> = ({children}) => {
    const setView = useSetRecoilState(appView);

    const [isLoading, setLoading] = useState<boolean>(false);
    const { control, formState: {isValid} } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange',
        resolver: yupResolver(authValidation)
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setView(AppView.DASHBOARD), 1000);
    }
  return (
      <form onSubmit={onSubmit}>
          {
              children && children({
                  control,
                  isLoading,
                  isDisabled: !isValid,
              })
          }
      </form>
  )
}

export default AuthForm;