import React, { Component, PropTypes } from 'react';
import { Header, Button, Icon, Title } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';

const { popRoute } = actions;


class CommonHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    openDrawer: PropTypes.func,
    popRoute: PropTypes.func,
    navigation: PropTypes.shape({
      key: PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    const title = this.props.title || 'Unnamed View';

    return (
      <Header>
        <Button transparent onPress={() => this.popRoute()}>
          <Icon name="ios-arrow-back" />
        </Button>

        <Title>{title}</Title>

        <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
        </Button>
      </Header>
    );
  }
}


const mapStateToProps = () => ({});

const mapDispatchToProps = {
  openDrawer,
  popRoute,
};


export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader);
