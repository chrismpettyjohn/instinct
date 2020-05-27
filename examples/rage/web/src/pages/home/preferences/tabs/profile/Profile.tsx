import React, { useState } from 'react';
import { Form, Icon, Input, Row } from 'instinct-frontend';
import { defaultProfilePreferencesState, ProfilePreferencesState } from './';

export function ProfilePreferences() {
  const [ state, setState ] = useState<ProfilePreferencesState>(defaultProfilePreferencesState);

  const isDisabled: boolean = state.youtube === '' || state.showSpinner;

  function updateField<K extends keyof ProfilePreferencesState>(key: K, value: ProfilePreferencesState[K]): void {
    setState({
      ...state,
      [key]: value,
    })
  }

  function toggleSpinner(showSpinner: boolean): void {
    setState({
      ...state,
      showSpinner,
    })
  }

  async function onSubmit(): Promise<void> {
    toggleSpinner(true);
    setTimeout(() => {
      toggleSpinner(false);
    }, 1200);
  }

  return (
    <Form className="" onSubmit={onSubmit}>
      <div>
        <h4 className="form-subcategory">Youtube Video</h4>
        <Row>
          <div className="column-2">
            <Input type="email" name="youtube" placeholder="5x-d3pabd5o" value={state.youtube} onChange={updateField}/>
          </div>
        </Row>
      </div>
      <div className="form-help">
        <p>Hint: It looks like <b>5x-d3pabd5o</b></p>
      </div>
      <div className="submit-button">
        <button className="rounded-button grey" disabled={isDisabled} type="submit">
          {
            state.showSpinner
              ? <Icon className="fa-spin" type="spinner"/>
              : 'Save'
          }
        </button>
      </div>
    </Form>
  )
}