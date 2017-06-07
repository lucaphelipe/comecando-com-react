
var React = require('react');
var SearchUser = require('./SearchUser.js');

var createReactClass = require('create-react-class');
var GitHub = createReactClass({
	
	render: function(){
		return (
			<div className="container">
				<SearchUser />
			</div>
		);
	}
});




module.exports = GitHub;