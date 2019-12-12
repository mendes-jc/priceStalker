import React, { useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MdEdit, MdDeleteForever, MdSave } from 'react-icons/md';
import {
  Container, Row, Button, Text, SmallText, TextEdit, Select,
} from './styles';

import * as AlertActions from '../../../store/modules/alerts/actions';

const options = [
  {
    interval: 2,
    title: '2 Minutes',
  },
  {
    interval: 10,
    title: '10 Minutes',
  },
  {
    interval: 30,
    title: '30 Minutes',
  },
];

function Alert({
  alertData, getAlertsRequest, removeAlertRequest, setAlertRequest,
}) {
  const [data, setData] = useState(alertData.data);
  const [editing, setEditing] = useState(false);

  function handleChangePhrase(e) {
    setData({
      ...data,
      searchPhrase: e.target.value,
    });
  }

  function handleChangeInterval(e) {
    setData({
      ...data,
      interval: e.target.value,
    });
  }

  function handleEdit() {
    if (editing) {
      if (!data.searchPhrase) {
        alert('Please, provide a search phrase.');
        return;
      } else if (!data.interval) {
        alert('Please, provide an interval.');
        return;
      } else {
        setAlertRequest(alertData._id, data);
        getAlertsRequest(data.email);
      }
    }
    setEditing(!editing);
  }

  function handleRemove() {
    removeAlertRequest(alertData._id);
    getAlertsRequest(data.email);
  }

  return (
    <Container>
      <Row>
        <SmallText>You're searching for</SmallText>
        {editing
          ? <TextEdit value={data.searchPhrase} onChange={handleChangePhrase} />
          : <Text>{data.searchPhrase}</Text>}
        <SmallText>Every</SmallText>
        {editing
          ? (
            <Select value={data.interval} onChange={handleChangeInterval}>
              {options.map((option) => <option value={option.interval}>{option.title}</option>)}
            </Select>
          )
          : <Text>{`${data.interval} minutes`}</Text>}
      </Row>
      <Row>
        <Button onClick={handleEdit} color={editing ? '#99FF22' : '#FFF'}>
          {editing
            ? <MdSave fontSize="23" />
            : <MdEdit fontSize="23" />}
        </Button>
        <Button onClick={handleRemove} color="#e53238">
          <MdDeleteForever fontSize="23" />
        </Button>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AlertActions, dispatch);
export default connect(null, mapDispatchToProps)(Alert);
