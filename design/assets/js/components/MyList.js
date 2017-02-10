var React = require('react');
var ReactDOM = require('react-dom');
var dragula = require('react-dragula');

var MyList = React.createClass({

    render: function(){
       
        var listMapped = this.props.listData.map(function(list, index){

            return (
                
                                    <li key={index} className="list-group-item card_org">
                                        <div className="col-xs-12 col-sm-3">
                                            <img src={list.picture} alt={list.name.first + ' '+ list.name.last} className="img-responsive img-circle" />
                                        </div>
                                        <div className="col-xs-12 col-sm-9">
                                            <span className="name">{list.name.first + ' '+ list.name.last}</span><br/>
                                            <span className="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title={list.company}></span>
                                            <span className="visible-xs"> <span className="text-muted">{list.company}</span><br/></span>
                                            <span className="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title={list.phone}></span>
                                            <span className="visible-xs"> <span className="text-muted">{list.phone}</span><br/></span>
                                            <span className="fa fa-comments text-muted c-info" data-toggle="tooltip" title={list.email}></span>
                                            <span className="visible-xs"> <span className="text-muted">{list.email}</span><br/></span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
               


                );

        });
    return (
       <div>
                {listMapped}
         </div>
        );
    },
  componentDidMount: function () {
       
    if(this.props.listType == 'can')
    {
        var containerCan = ReactDOM.findDOMNode(this);
        var dropCandidate =  document.getElementById('drop-zone-can');
        var drake_can = dragula({
          copy: false
        });
        drake_can.containers.push(containerCan, dropCandidate);
       
    }
    else
    {
        var containerInt = ReactDOM.findDOMNode(this);
        var dropInterviewers =  document.getElementById('drop-zone-int');
        var drake_int = dragula({
          copy: false,
          revertOnSpill: true
        });
        drake_int.containers.push(containerInt,dropInterviewers);
        drake_int.on('drop', function(el){
           // console.log($(el).parent(), $(el).parent().children.length);
            if($('#drop-zone-int')[0].children.length > 1 && $(el).parent()[0].id=='drop-zone-int')
            {
                drake_int.cancel();
                alert('You can only add one Interviewer at a time.');
                
            }

           
        });
        
       
    }
  }
});

module.exports = MyList;
