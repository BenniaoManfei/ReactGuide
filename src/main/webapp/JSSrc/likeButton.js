

var LikeButton = React.createClass({
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
            <p onClick={this.handleClick}>
                you {text} this.Click to toggle.
            </p>
        )
    }
});
ReactDOM.render(
    <LikeButton />,
    document.getElementById("example"),
    function(){
        console.log("数据渲染完毕");
    }
);
