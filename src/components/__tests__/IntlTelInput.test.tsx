import React from 'react'

import { CountryData } from '../../types'
import IntlTelephoneInput from '../IntlTelephoneInput'

interface AppProps {}
interface AppState {
  value: string
  fullNumber: string
  iso2: string
}

class App extends React.Component<AppProps, AppState> {
  IntlTelephoneInput: React.RefObject<IntlTelephoneInput> = React.createRef()

  state: AppState = {
    value: '',
    fullNumber: '',
    iso2: '',
  }

  handlePhoneNumberChange = (
    isValid: boolean,
    value: string,
    seletedCountryData: CountryData,
    fullNumber: string,
    extension: string,
  ) => {
    console.log('Details:', {
      isValid,
      value,
      fullNumber,
      extension,
    })
    const { iso2 = '' } = seletedCountryData

    this.setState({
      value,
      fullNumber,
      iso2,
    })
  }

  handlePhoneNumberBlur = (
    isValid: boolean,
    value: string,
    seletedCountryData: CountryData,
    fullNumber: string,
    extension: string,
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    console.log('Blur event', event)
    console.log('Native event type:', event.type)
    console.log('Details:', {
      isValid,
      value,
      seletedCountryData,
      fullNumber,
      extension,
      event,
    })
  }

  handlePhoneNumberFocus = (
    isValid: boolean,
    value: string,
    seletedCountryData: CountryData,
    fullNumber: string,
    extension: string,
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    console.log('Focus event')
    console.log('Native event type:', event.type)
    console.log('Details:', {
      isValid,
      value,
      seletedCountryData,
      fullNumber,
      extension,
      event,
    })
  }

  render() {
    const { value, fullNumber, iso2 } = this.state

    return (
      <div>
        <IntlTelephoneInput
          ref={this.IntlTelephoneInput}
          onPhoneNumberChange={this.handlePhoneNumberChange}
          onPhoneNumberBlur={this.handlePhoneNumberBlur}
          onPhoneNumberFocus={this.handlePhoneNumberFocus}
          value={value}
        />
        <div>
          <span>Full number:</span>
          <span>{fullNumber}</span>
        </div>
        <div>
          <span>ISO-2:</span>
          <span>{iso2}</span>
        </div>
      </div>
    )
  }
}

React.createElement(App)
