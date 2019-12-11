import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';
import AlertList from '../AlertList';
import User from '../User';

function Body({ user }) {
  return (
    <Container>
      <User />
      <AlertList />
    </Container>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Body);
