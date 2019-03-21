import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RadioGroup = ({
    options,
    value,
    onChange,
    groupStyle,
    optionStyle,
    labelStyle,
    buttonSize = 26,
    rtl,
    ...rest
}) => {
    return (
        <View style={[groupStyle, { flexDirection: 'row' }]} {...rest}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onChange(option.value)}
                    style={[
                        optionStyle,
                        {
                            flexDirection: rtl ? 'row-reverse' : 'row'
                        },
                        { justifyContent: 'center', alignItems: 'center' }
                    ]}
                >
                    <Text style={[labelStyle, { textAlignVertical: 'center' }]}>
                        {option.label}
                    </Text>
                    {value === option.value ? (
                        <Icon name='radiobox-marked' size={buttonSize} />
                    ) : (
                        <Icon name='radiobox-blank' size={buttonSize} />
                    )}
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default RadioGroup
