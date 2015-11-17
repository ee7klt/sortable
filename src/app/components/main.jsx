/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const List = require('./list.jsx');
const colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

const Main = React.createClass({



  render () {

    return <div>
      <List data = {colors} />
      </div>
  },
});

module.exports = Main;
