"use strict";

var MainHeader = React.createClass({
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
      <div
        style={{
            display: 'flex',
            alignItems: 'center'
            /*background: linear-gradient(0deg, #FFCCCC, #F8ECC2);*/
        }}
      >
        <span style={style.headerMainText}>
          Félix Daniel Rodríguez Pérez
        </span>
        <div
          style={{
            display: 'inline-flex',
            alignContent: 'center',
            flexFlow: 'column nowrap',
            flex: '1 1 0%'
          }}
        >
          <div
            style={{
              fontFamily: 'mono, cursive',
              textAlign: 'center',
              fontSize: '13px'
            }}
          >
            Software Developer at
          </div>
          <img src="/images/glasgow.svg" />
        </div>
      </div>
      <div style={{position: 'relative'}}>
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

var Main = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render: function() {
    var style = {margin: '10px 0', fontSize:'15px'};
    var tabsSpaceChar = '&#x00B7;';
    var tabs = [
      {
        title: 'A little introduction to myself',
        url: '/felixdrp.github.io/'
      },
      {
        title: 'Glasgow Uni Sport',
        url: '/felixdrp.github.io/gla/sport/stevenson/'
      },
      {
        title: 'Hall of Fame',
        url: '/felixdrp.github.io/hall_of_fame.html'
      },
    ];

    var menuTabs = [];
// debugger
    for (let item of tabs) {
      // Add space character
      if (menuTabs.length > 0) {
        menuTabs.push(
          <span
            // menu spacing character
            key={menuTabs.length}
            style={{padding: '0 9px'}}
          >
            &#x00B7;
          </span>);
      }
      // Don't assign a link to the actual menu.
      if (document.location.pathname == item.url) {
        menuTabs.push(<span key={menuTabs.length}><b>{item.title}</b></span>);
      } else {
        menuTabs.push(<span key={menuTabs.length}><a href={item.url}>{item.title}</a></span>);
      }
    }

    return (
      <div
        // Text color for the header
        style={{color: '#555'}}
      >
        <MainHeader />

        <div
          // Text menu
          style={{
             margin: '30px 0',
             fontSize: '1em',
             textAlign: 'center'
          }}
        >
          {menuTabs}
        </div>
      </div>
    );
  }
});

React.render(
  <Main />,
  document.getElementById('mainHead')
);
