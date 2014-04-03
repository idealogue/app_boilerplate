
/** @jsx React.DOM */

var React = require('react'),
    Item;

Item = React.createClass({
  render: function () {
    var post = this.props.post;
    return <p>{post.body}</p>;
  }
});

module.exports = Item;
