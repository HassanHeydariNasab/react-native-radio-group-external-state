declare module 'react-native-radio-group-external-state' {
    import { ViewProps } from 'react-native'
    import { ReactElement } from 'react'
    interface RadioGroupProps extends ViewProps {
        options: object[]
        value: string
        onChange?: () => void
        groupStyle?: object
        optionStyle?: object
        labelStyle?: object
        buttonSize?: number
        rtl?: boolean
    }
    export default function RadioGroup(
        props: RadioGroupProps
    ): ReactElement | null
}
