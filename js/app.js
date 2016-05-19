


var NavigationItem = React.createClass({
    onClick: function() {
        this.props.itemSelected(this.props.item);

        //console.log("NavigationItem onclick",this.props.selected);
    },
    render: function() {
        //console.log("idx",this.props.idx);
        return (
            <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
                <a >{this.props.idx} - {this.props.item.title}</a>
            </li>
        );
    }
});

var Navigation = React.createClass({
    getInitialState: function() {
        return {activeNavigationUrl: ""};
    },

    setSelectedItem: function(item) {
        var _this = this;

       // console.log("Navigation setSelectedItem 1",item.url,this.props.activeUrl,this.state.activeNavigationUrl);


        this.props.activeUrl=item.url;

        this.props.itemSelected(item);

        console.log("Navigation setSelectedItem 2",item,this.props.activeUrl,this.state.activeNavigationUrl);
    },
    render: function() {
        var _this = this;

        var items = this.props.items.map(function(item,i) {
            return (


                <NavigationItem
                    idx={i+1}
                    item={item}
                    itemSelected={_this.setSelectedItem}
                    selected={item.url === _this.props.activeUrl}
                />
            );
        });

        return (

            <div id="sidebar-wrapper">

                <ul className="sidebar-nav" activeUrl="">
                    <li className="sidebar-brand">

                            API List

                    </li>
                    {items}
                    <li className="sidebar-brand">

                        @CopyLeft cans

                    </li>
                </ul>
            </div>
        );
    }
});
var Content = React.createClass({
    getInitialState: function() {
        return {rst: "",
            url:"",
            body:this.props.item.example_body,
            error:"",


        };
    },
    showbody: function() {



       // this.refs.thetextarea.value=this.props.item.example_body;

        return this.props.item.example_body;


    },
    handleChangeBody: function(event) {



            this.props.item.example_body=event.target.value;

            this.setState({
                body:event.target.value,

            });


    },
    handleChangeUrl: function(event) {


        this.props.item.example_url=event.target.value;

        this.setState({
            url:event.target.value,

        });
    },
    showText:function(){
        // var jjson = '{"e":{"desc":"","code":1},"data":{"sid":"","token_expire_day":0,"sendData":null,"count":0,"token":""}}';

        //$("#jjson").jJsonViewer(jjson);
        //  $('#jjson').innerText= '{"e":{"desc":"","code":1},"data":{"sid":"","token_expire_day":0,"sendData":null,"count":0,"token":""}}';
        // $('#jjson').jsonFormatter();
        //   $('#jjson').jsonFormatter({ quoteKeys: false, collapsible: false, hideOriginal: false });


        window.prompt("Copy to clipboard: Ctrl+C, Enter", JSON.stringify(this.props.item.example_result));

        console.log("show text");


        // {!this.props.item.example_result ? null :JSON.stringify(this.props.item.example_result)}
    },
    showError:function(val){
        // var jjson = '{"e":{"desc":"","code":1},"data":{"sid":"","token_expire_day":0,"sendData":null,"count":0,"token":""}}';

        //$("#jjson").jJsonViewer(jjson);
        //  $('#jjson').innerText= '{"e":{"desc":"","code":1},"data":{"sid":"","token_expire_day":0,"sendData":null,"count":0,"token":""}}';
        // $('#jjson').jsonFormatter();
        //   $('#jjson').jsonFormatter({ quoteKeys: false, collapsible: false, hideOriginal: false });




        console.log("show error",val);

        $("#jjson").jJsonViewer(JSON.stringify(val));


        // {!this.props.item.example_result ? null :JSON.stringify(this.props.item.example_result)}
    },

    showJson:function(val){
       // var jjson = '{"e":{"desc":"","code":1},"data":{"sid":"","token_expire_day":0,"sendData":null,"count":0,"token":""}}';

        //$("#jjson").jJsonViewer(jjson);
      //  $('#jjson').innerText= '{"e":{"desc":"","code":1},"data":{"sid":"","token_expire_day":0,"sendData":null,"count":0,"token":""}}';
       // $('#jjson').jsonFormatter();
     //   $('#jjson').jsonFormatter({ quoteKeys: false, collapsible: false, hideOriginal: false });
           $("#jjson").jJsonViewer(this.props.item.example_result);

       // {!this.props.item.example_result ? null :JSON.stringify(this.props.item.example_result)}
    },
    clicksubmit:function(item){
        console.log( "click submit:", Config.baseurl+this.props.item.example_url );
        console.log( "click submit post body", this.props.item.example_body );


        console.log( "click submit post session", Config.sessionid);
        var _this=this;
        $.ajax({
            type: this.props.item.method,
            url: Config.baseurl+this.props.item.example_url,
            contentType: "application/json",
            headers: {
                "sessionid":Config.sessionid,
            },
            timeout: 3000,
            data: this.props.item.example_body,

            success: function( response1 ){
                console.log("ajax",response1);
                var response2=JSON.parse(response1);

                // Put the plain text in the PRE tag.
                console.log( "ok:", response2 );
                console.log( "data", response2.data );
                console.log( "sid", response2.data.sid );
                _this.props.item.example_result=response2;


                if (response2.data&&response2.data.sid){
                    Config.sessionid=response2.data.sid;
                }

                console.log( "Config.sessionid", Config.sessionid );
                _this.setState({
                    rst:response2,

                });

            },
            error: function( error ,t,m){

                // Log any error.

                if(t==="timeout") {
                    console.log("got timeout");
                    _this.showError({error:"server timeout "});
                }else{
                    console.log( "ERROR:",error );
                    _this.showError(error);
                }


               // rst_error="error "+error.status+" "+error.responseText;



            },
            complete: function(){


            }
        });

    },

    render: function() {

        console.log("this.props.item example_body",this.props.item.example_body);

        console.log("this.state.body",this.state.body);
        return (



            <div id="api_get_form">

                <div className="panel panel-default">

                    <div className="panel-heading ">

                        <h3>API BASE URL -- {this.props.config.baseurl}</h3>
                        <h4>sessionID: {this.props.config.sessionid}</h4>

                    </div>

                    <div className="panel-body hide">
                        Panel content
                    </div>
                </div>
                <h3><a href="#api_get_form">#</a>{!this.props.item.desc ? null :this.props.item.desc}</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped bs-events-table">
                        <thead>
                        <tr>
                            <th ></th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Method</td>
                            <td>{!this.props.item.method ? null :this.props.item.method}</td>
                        </tr>
                        <tr>
                            <td>Resource URL</td>
                            <td><code><span data-apipath></span>{!this.props.item.url ? null :this.props.item.url}</code></td>
                        </tr>
                        <tr>
                            <td>Parameters</td>
                            <td>
                               <pre><code>{!this.props.item.parameters ? null :this.props.item.parameters} </code></pre>

                            </td>
                        </tr>
                        <tr>
                            <td>Response formats</td>
                            <td>
                                <ul>
                                    <li><code>JSON</code> </li>

                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Example Request</td>
                            <td>
                                <input type="text" className="form-control" value={!this.props.item.example_url ? null :this.props.item.example_url} onChange={this.handleChangeUrl}/>

                                 <textarea ref="thetextarea" className="form-control" id ="example_body" rows="2" value={this.props.item.example_body} onChange={this.handleChangeBody}/>
                                <button type="button" className="btn btn-primary" onClick={this.clicksubmit}>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Example Result  <button type="button" className="btn btn-info btn-xs pull-right" onClick={this.showText}>Copy</button></td>

                            <td >

                                <div id="jjson" className="jjson">
                                </div>

                                {this.showJson()}

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
});



var App = React.createClass({
    componentDidMount: function() {

    },
    getInitialState: function() {
        return ({
            activeNavigationUrl: "",
            navigationItems: NavigationListDATA,
            selectedItem: {},
            config:Config
            //storyItems: [],
           // title: "Please select a sub"
        });
    },
    render: function() {
        return (
            <div id="wrapper">
                <Navigation itemSelected={this.setSelectedItem} activeUrl={this.state.activeNavigationUrl} items={this.state.navigationItems}/>
                <div id="page-content-wrapper">
                    <Content className="container-fluid" item={this.state.selectedItem} config={this.state.config}/>

                </div>

            </div>

        );
    },
    setSelectedItem: function(item) {
        var _this = this;
        this.setState({
            selectedItem:item,
            activeNavigationUrl: item.url,
        });
        console.log("app setSelectedItem",this.state.selectedItem);
    }
});


ReactDOM.render(<App />, document.getElementById('App'));
