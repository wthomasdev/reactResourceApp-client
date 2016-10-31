//This component handles the Layout template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  // children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

}

export default connect(mapStateToProps)(App);
