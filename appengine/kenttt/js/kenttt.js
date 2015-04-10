/**
 * Blockly Games: Kenttt

/**
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Kenttt');

goog.require('Kenttt.soy');
goog.require('Kenttt.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'Kenttt';

/**
 * Initialize Blockly and the Kenttt.  Called on page load.
 */
Kenttt.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Kenttt.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
    blocklyDiv.style.height = 
        (window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
  };
  onresize();
  //window.addEventListener('resize', onresize);  

  Blockly.inject(document.getElementById('blockly'),
      {toolbox: document.getElementById('toolbox'),
     grid:
         {spacing: 20,
          length: 3,
          colour: '#00f',
          snap: true},
     trashcan: true});

};

window.addEventListener('load', Kenttt.init);

