import { FormInputProps } from "./FormInputProps.interface";


export interface FormInputDropdownProps extends FormInputProps {
    options: { label: string, value: string }[]
}