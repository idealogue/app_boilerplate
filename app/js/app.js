/** @jsx React.DOM */
// yeeyeyey

var React    = window.React = require('react'), // assign it to window for react chrome extension
    post_list    = require('./posts/list.js'),
    App;

App = React.createClass({
    render: function () {
        return <post_list/>;
    }
});

App.start = function () {
    React.renderComponent(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;
