"use strict";
var SteBuildClasses = React.createClass({
    getInitialState: function() {
        return {
          isAMobile: (navigator.userAgent.indexOf('Mobile') > -1)? true : false,
          StevensonBuilding: STEVENSON_BUILDING
        }
    },

    presentHours: function(hours) {
        var Color1 = '#CC6699';
        var style = {
            rowEven: {
                display: 'flex',
                color: Color1
            },

            rowOdd: {
                display: 'flex',
                color: 'white',
                backgroundColor: Color1
            },

            rowCell: {
              display: 'inline',
              flex: 1,
              marginLeft: '5px',
              marginRight: '1px',
              fontWeight: 'bolder',
              fontFamily: 'sans-serif'
            },

        };

        var rows = [];
        hours.map(
            function(hour, index) {
                var temporalStyle = (index % 2) > 0? style.rowOdd : style.rowEven;
                rows.push(
                    <div key={index} style={temporalStyle}>
                      <div style={style.rowCell}>
                        {hour.hour}
                      </div>
                      <div style={style.rowCell}>
                        {hour.name}
                      </div>
                      <div style={style.rowCell}>
                        {hour.place}
                      </div>
                    </div>
                );

            }
        );

        return rows;
    },

    render: function() {
        var style = {
          title: (this.state.isAMobile)? {fontSize: 4 + 'vh'} : {},
          tableRow: (this.state.isAMobile)? {fontSize: 3 + 'vh'} : {}
        };
        return (
            <div className="commentBox">
              <div style={style.title}>
                {/* Title */}
                {this.state.StevensonBuilding.name}
              </div>
              <div>
              {this.state.StevensonBuilding.classes.map(
                  function(objClass, index) {
                      return (
                          <div key={index} style={{
                               marginBottom: '12px'
                              }}>
                            <div style={{
                              marginTop: '10px',
                              marginBottom: '2px',
                              fontWeight: 'bolder',
                              fontFamily: 'sans-serif'

                              }}>
                               <span style={style.title}> {objClass.day} </span>
                            </div>
                             <div style={style.tableRow}>
                                   {this.presentHours(objClass.hours)}
                             </div>
                          </div>);
                  }.bind(this)
              )}
              </div>
            </div>
        );
    }
});
