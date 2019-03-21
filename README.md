# React Native Radio Group External State

_A radio group component that doesn't use the internal state of itself!_

<img src=" data:image/png;base64,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">

## Why another radio-group for React Native?

Because I've tried many of those components called react-native-radio-group and they didn't fit into my mind; so I created mine.

**It uses your states!**

## Installation

`npm install --save react-native-radio-group-external-state`

or

`yarn add react-native-radio-group-external-state`

## Usage

```jsx
import React, { Component } from 'react'
import { View } from 'react-native'
import RadioGroup from 'react-native-radio-group-external-state'

export default class App extends Component {
    state = { gender: 'unspecified' }
    onChange_gender = value => {
        this.setState({ gender: value })
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F5FCFF'
                }}
            >
                <RadioGroup
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' }
                    ]}
                    value={this.state.gender}
                    onChange={this.onChange_gender}
                    groupStyle={{ marginTop: 10 }}
                    optionStyle={{ marginHorizontal: 14 }}
                    labelStyle={{ paddingHorizontal: 8 }}
                    buttonSize={26}
                    rtl
                />
            </View>
        )
    }
}
```
