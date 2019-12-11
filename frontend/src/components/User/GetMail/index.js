import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../../store/modules/user/actions';
import { Input, Button } from './styles';

function GetMail({ getUserRequest }) {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleClick() {
    getUserRequest(inputText);
  }

  return (
    <>
      <h2>Let's start with your email</h2>
      <Input onChange={handleChange} value={inputText} />
      <Button type="button" onClick={handleClick}>enter</Button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);
export default connect((state) => ({}), mapDispatchToProps)(GetMail);
