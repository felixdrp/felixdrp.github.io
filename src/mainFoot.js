"use strict";

var MainFoot = React.createClass({
  render: function() {
    var style = {
      headerMainText: {
        flex:' 2 1 0%',
        paddingTop: '0.5em',
        fontFamily: "'Monsieur La Doulaise',cursive",
        fontSize: '2.5em',
        textAlign: 'center',
        textShadow: '0 0 2px black'
      },
      spaceLine: {
        position: 'absolute',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: '1.5px',
        borderBottom: 'white',
        borderColor: '#AEAEAE',
        top: '2px'
      },
      squareContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '0 50px',
        padding: '0 5px',
        backgroundColor: 'white',

        square: {
          display: 'inline-block',
          top:0,
          width: '5px',
          height: '5px',
          margin: '0 3px',
          backgroundColor: '#555'
        }
      }
    }
    return (
    <div>

      <div style={{position: 'relative', paddingBottom: 100, marginTop: 25}}>
        <div style={style.spaceLine}></div>
        <div style={style.squareContainer}>
          <div style={style.squareContainer.square}></div>
          <div style={style.squareContainer.square}></div>
          <div style={style.squareContainer.square}></div>
        </div>
      </div>
    </div>);
  }
});

React.render(
  <MainFoot />,
  document.getElementById('mainFoot')
);
