
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';

import styles from './style';


const menuItems = [
  {
    slug: 'home',
    text: 'Tapahtuman etusivu',
  },
  {
    slug: 'info',
    text: 'Tapahtumainfo',
  },
  {
    slug: 'programme',
    text: 'Ohjelma',
  },
  {
    slug: 'shifts',
    text: 'Työvuorosi',
  },
  {
    slug: 'feedback',
    text: 'Palaute',
  }
];


class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >
        <List>
          {menuItems.map(menuItem => (
            <ListItem key={menuItem.slug} button onPress={() => this.navigateTo(menuItem.slug)} >
              <Text>{menuItem.text}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
