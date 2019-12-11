import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../../store/modules/user/actions';
import { Input, Button } from './styles';

function GetName({ newUserRequest, user }) {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleClick() {
    newUserRequest({ ...user, name: inputText });
  }

  return (
    <>
      <h2>Cool! It's your first access! What's your name ?</h2>
      <Input onChange={handleChange} value={inputText} />
      <Button type="button" onClick={handleClick}>enter</Button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(GetName);
