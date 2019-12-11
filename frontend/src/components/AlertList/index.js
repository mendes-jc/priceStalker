import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AlertActions from '../../store/modules/alerts/actions';
import {
  Container,
  Button,
} from './styles';

import Alert from './Alert';

function AlertList({
  alerts, user, createAlertRequest, getAlertsRequest,
}) {
  function handleAddAlert() {
    const { email } = user;
    createAlertRequest(email);
    getAlertsRequest(email);
  }
  return (
    <Container>
      {alerts.map((alert) => (
        <Alert key={alert._id} alertData={alert} />
      ))}
      {user.name && <Button onClick={handleAddAlert}>Add Alert</Button> }
    </Container>
  );
}

const mapStateToProps = (state) => ({
  alerts: state.alerts,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(AlertActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlertList);
