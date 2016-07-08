var CommentBox = React.createClass({
    render : function() {
        return (
            <div className="commentBox">
                Hello,world!I am a commentBox.
            </div>
        );
    }
});
var BootstrapTable = React.createClass({
    render : function() {
        var thead = this.props.header.map(function(head,key){
            return (
                <th>{head}</th>
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
                                <span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                            );
                        } else if(tdopt==2) {
                            return (
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            )
                        }
                    });
                }
                return (
                    <td>{td}</td>
                )
            });
            return (
                <tr>
                    {tdTmp}
                </tr>
            );
        });
        return (
                <table className="table table-striped table-bordered table-hover table-condensed">
                    <thead>
                        <tr>
                            {thead}
                        </tr>
                    </thead>
                    <tbody>
                        {datatd}
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span></td>

                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span></td>
                        </tr>
                    </tbody>
                </table>
        );
    }
});

var TableSearch = React.createClass({
    render : function() {
        var searchButton;
        var conditionInput;
        if( this.props.formData != null){
            searchButton=(
                <button type="submit" className="btn btn-info" style={{width:"34px"}}>
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
            );
            conditionInput = this.props.formData.map(function(input,key){
                var type= input.type;
                var defaultValue=input.defaultValue;
                if(type == null){
                    type="text";
                }
                return (
                    <div className="form-group">
                        <lable className="sr-only" for={input.id} >Email</lable>
                        <input type={type} className="form-control" value={defaultValue} name={input.id} id={input.id} placeholder={input.placeholder}/>
                    </div>
                );

            });
        }

        return (
            <form className="form-inline">
                <input type="hidden" name="currPage" value=""/>
                <input type="hidden" name="pageSize" value=""/>
                &nbsp;
                {conditionInput}
                {searchButton}
            </form>
        );
    }
});

var PagePanel = React.createClass({
    render : function() {
        if(this.props.pageData == null){
            return "";
        }
        var currPage = this.props.pageData.currPage;
        var countPage = this.props.pageData.countPage;
        var previous;
        var pageItem;
        var next;
        if(currPage == 1){
            previous = (
                <li className="disabled">
                    <span aria-hidden="true">&laquo;</span>
                </li>
            );
        } else {
            previous = (
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
            );
        }
        if(currPage == countPage){
            next = (
                <li className="disabled">
                    <span aria-hidden="true">&raquo;</span>
                </li>
            );
        } else {
            next = (
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            );
        }
        var itemArray = new Array(countPage);
        for(var i=1;i<=countPage;i++){
            itemArray[i-1]=i;
        }
        pageItem = itemArray.map(function(item){
            if(currPage == item){
                return  (
                    <li className="active">
                        <span>{item} <span className="sr-only">(current)</span></span>
                    </li>
                )
            } else {
                return  (
                    <li><a href="#">{item}</a></li>
                )
            }

        });
        return (
            <nav>
                <ul className="pagination">
                    {previous}
                    {pageItem}
                    {next}
                </ul>
            </nav>
        );

    }
});

var TablePanel = React.createClass({
    getInitialState:function(){
        return {
            userData:[],
            pageData:{}
        }
    },
    componentDidMount:function(){//虚拟Dom渲染成真实dom后进行操作

        $.ajax({
            url:this.props.url,
            dataType:"JSON",
            success:function(data){
                console.log(data);
                this.setState({
                    userData:data.users,
                    pageData:data.pageData
                });

            }.bind(this),
            error:function(xhr, status, err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });
    },
    render : function() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    Panel Heading without title
                </div>
                <div className="panel-body">
                    <TableSearch formData={this.props.formData} />
                    <BootstrapTable header={this.props.header} data={this.state.userData} dataProps={this.props.dataProps} />
                    <PagePanel pageData={this.state.pageData} />
                </div>
            </div>
        );
    }
});
