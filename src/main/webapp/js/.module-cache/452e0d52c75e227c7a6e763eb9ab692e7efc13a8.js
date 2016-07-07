

var likeButton = React.createClass({displayName: "likeButton",
    getInitialState:function(){
        return {
            liked:false
        }
    },
    handleClick:function(){
        this.setState(
            {
                liked:!this.state.liked
            }
        )
    },
    render:function(){
        var text = this.state.liked?"like":"haven't liked "
        return (
            React.createElement("p", {onClick: this.handleClick}, 
                "you ", text, " this.Click to toggle."
            )
        )
    }
});
