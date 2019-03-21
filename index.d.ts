declare module 'react-native-radio-group-external-state' {
    import { ViewProps } from 'react-native'
    interface RadioGroupProps {
        options: object[]
        value: string
        onChange?: () => void
        groupStyle?: object
        optionStyle?: object
        labelStyle?: object
        buttonSize?: number
        rtl?: boolean
    }
    export const RadioGroup: RadioGroupProps<ViewProps> = { buttonSize: 24 }
}
