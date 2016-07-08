var CommentBox = React.createClass({displayName: "CommentBox",
    render : function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello,world!I am a commentBox."
            )
        );
    }
});
var BootstrapTable = React.createClass({displayName: "BootstrapTable",
    render : function() {
        var thead = this.props.header.map(function(head,key){
            return (
                React.createElement("th", null, head)
            );
        });
        var dataProps = this.props.dataProps;
        var data = this.props.data;
        var datatd = data.map(function(user,key){
            var dataTmp = new Array();
            for(var i =0;i<dataProps.length;i++){
                dataTmp[i] = user[dataProps[i]];
            };
            var tdTmp = dataTmp.map(function(td,key){
                if(td.constructor===Array){
                    td = td.map(function(tdopt,key){
                        if(tdopt==1){
                            return (
                                React.createElement("span", {className: "glyphicon glyphicon-wrench", "aria-hidden": "true"})
                            );
                        } else if(tdopt==2) {
                            return (
                                React.createElement("span", {className: "glyphicon glyphicon-remove", "aria-hidden": "true"})
                            )
                        }
                    });
                }
                return (
                    React.createElement("td", null, td)
                )
            });
            return (
                React.createElement("tr", null, 
                    tdTmp
                )
            );
        });
        return (
                React.createElement("table", {className: "table table-striped table-bordered table-hover table-condensed"}, 
                    React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            thead
                        )
                    ), 
                    React.createElement("tbody", null, 
                        datatd, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "1"), 
                            React.createElement("td", null, "Mark"), 
                            React.createElement("td", null, "Otto"), 
                            React.createElement("td", null, "@mdo"), 
                            React.createElement("td", null, React.createElement("span", {className: "glyphicon glyphicon-wrench", "aria-hidden": "true"}))

                        ), 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "2"), 
                            React.createElement("td", null, "Jacob"), 
                            React.createElement("td", null, "Thornton"), 
                            React.createElement("td", null, "@fat"), 
                            React.createElement("td", null, React.createElement("span", {className: "glyphicon glyphicon-align-left", "aria-hidden": "true"}))
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "3"), 
                            React.createElement("td", null, "Larry"), 
                            React.createElement("td", null, "the Bird"), 
                            React.createElement("td", null, "@twitter"), 
                            React.createElement("td", null, React.createElement("span", {className: "glyphicon glyphicon-align-left", "aria-hidden": "true"}))
                        )
                    )
                )
        );
    }
});

var TableSearch = React.createClass({displayName: "TableSearch",
    render : function() {
        console.log(this.props.formData);
        var searchButton;
        var conditionInput;
        if( this.props.formData != null){
            searchButton=(
                React.createElement("button", {type: "submit", className: "btn btn-info", style: {width:"34px"}}, 
                    React.createElement("span", {className: "glyphicon glyphicon-search", "aria-hidden": "true"})
                )
            );
            conditionInput = this.props.formData.map(function(input,key){
                var type= input.type;
                var defaultValue=input.defaultValue;
                if(type == null){
                    type="text";
                }
                return (
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("lable", {className: "sr-only", for: input.id}, "Email"), 
                        React.createElement("input", {type: type, className: "form-control", value: defaultValue, name: input.id, id: input.id, placeholder: input.placeholder})
                    )
                );

            });
        }

        return (
            React.createElement("form", {className: "form-inline"}, 
                React.createElement("input", {type: "hidden", name: "currPage", value: ""}), 
                React.createElement("input", {type: "hidden", name: "pageSize", value: ""}), 
                " ", 
                conditionInput, 
                searchButton
            )
        );
    }
});

var PagePanel = React.createClass({displayName: "PagePanel",
    render : function() {
        var currPage = this.props.pageData.currPage;
        var countPage = this.props.pageData.countPage;
        var previous;
        var pageItem;
        var next;
        if(currPage == 1){
            previous = (
                React.createElement("li", {className: "disabled"}, 
                    React.createElement("span", {"aria-hidden": "true"}, "«")
                )
            );
        } else {
            previous = (
                React.createElement("li", null, 
                    React.createElement("a", {href: "#", "aria-label": "Previous"}, 
                        React.createElement("span", {"aria-hidden": "true"}, "«")
                    )
                )
            );
        }
        if(currPage == countPage){
            next = (
                React.createElement("li", {className: "disabled"}, 
                    React.createElement("span", {"aria-hidden": "true"}, "»")
                )
            );
        } else {
            next = (
                React.createElement("li", null, 
                    React.createElement("a", {href: "#", "aria-label": "Next"}, 
                        React.createElement("span", {"aria-hidden": "true"}, "»")
                    )
                )
            );
        }
        var itemArray = new Array(countPage);
        for(var i=1;i<=countPage;i++){
            itemArray[i-1]=i;
        }
        console.log(itemArray);
        pageItem = itemArray.map(function(item){
            if(currPage == item){
                return  (
                    React.createElement("li", {className: "active"}, 
                        React.createElement("span", null, item, " ", React.createElement("span", {className: "sr-only"}, "(current)"))
                    )
                )
            } else {
                return  (
                    React.createElement("li", null, React.createElement("a", {href: "#"}, item))
                )
            }

        });
        return (
            React.createElement("nav", null, 
                React.createElement("ul", {className: "pagination"}, 
                    previous, 
                    pageItem, 
                    next
                )
            )
        );

    }
});

var TablePanel = React.createClass({displayName: "TablePanel",
    render : function() {
        return (
            React.createElement("div", {className: "panel panel-info"}, 
                React.createElement("div", {className: "panel-heading"}, 
                    "Panel Heading without title"
                ), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement(TableSearch, {formData: this.props.formData}), 
                    React.createElement(BootstrapTable, {header: this.props.header, data: this.props.data, dataProps: this.props.dataProps}), 
                    React.createElement(PagePanel, {pageData: this.props.pageData})
                )
            )
        );
    }
});


