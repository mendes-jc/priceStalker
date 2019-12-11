import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetMail from './GetMail';
import GetName from './GetName';
import Greet from './Greet';

import * as AlertActions from '../../store/modules/alerts/actions';

function User({ getAlertsRequest, user }) {
  const {
    firstAccess, name, email,
  } = user;

  if (!email) {
    return <GetMail />;
  }

  if (firstAccess) {
    return <GetName />;
  }
  getAlertsRequest(email);
  return <Greet name={name} />;
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(AlertActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
