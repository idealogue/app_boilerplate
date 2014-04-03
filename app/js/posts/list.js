

/** @jsx React.DOM */

var React = require('react'),
    $     = require('jquery'),
    Item  = require('./item'),
    Posts = require('./post_data'),
    List;

List = React.createClass({

  getInitialState: function () {

    var _array = [],
        cached_data = localStorage.getItem('haustraliaer_towerPosts');

    if(cached_data) {
      _array = JSON.parse(cached_data);
    }

    return { posts: _array };
  },
  
  componentWillMount: function () {
    this.fetch_latest_posts();
  },
  
  fetch_latest_posts: function () {
    $.ajax({
      dataType:  'jsonp',
      data:      { format: 'jsonp' },
      url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

      success: function (result) {

        var local_posts = this.state.posts,
            local_length = local_posts.length,
            remote_posts = result.response.posts.reverse(),
            temp_posts = local_posts;


        $(remote_posts).each(function(index) {

          if((index + 1) > local_length) {
            var object = {
              id: this.id,
              body: this.body
            };

            local_posts.push(object);

            console.log('pushed new object');
          }
        });

        this.setState({ posts: local_posts });
        localStorage.setItem('haustraliaer_towerPosts', JSON.stringify(local_posts));

        // todo... remove deleted posts by diffing the ajax result with local data
        
      }.bind(this),

      error: function () {
        console.log("nope - couldn't connect");
      }.bind(this)

    });
  },

  // --- render component ---------------------------------------- //

  render: function () {
    return <div className="posts">
      {this.state.posts.map(function (post) {
        return <Item key={post.id} post={post}/>
      })}
    </div>;
  }
});

module.exports = List;
