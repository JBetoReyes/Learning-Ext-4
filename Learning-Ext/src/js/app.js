Ext.onReady(function(){
  var myBtnHandler = function(btn){
    Ext.MessageBox.alert('You clicked', btn.text);
  }

  var fileBtn = Ext.create('Ext.button.Button',{
    text: 'File',
    handler: myBtnHandler
  });

  var editBtn = Ext.create('Ext.button.Button',{
    text: 'Edit',
    handler: myBtnHandler
  });

  var tbFill = new Ext.toolbar.Fill();

  var myTopToolbar = Ext.create('Ext.toolbar.Toolbar',{
    items: [
      fileBtn,
      tbFill,
      editBtn
    ]
  });

  var myBottomToolbar = [
    {
      text: 'Save',
      handler: myBtnHandler,
    },
    '-',
    {
      text: 'Cancel',
      handler: myBtnHandler
    },
    '->',
    '<b>Items open: 1</b>'
  ];

  var myPanel = Ext.create('Ext.panel.Panel',{
    width: 200,
    height: 150,
    title: 'Ext Panel rock!',
    collapsible: true,
    //renderTo: Ext.getBody(),
    tbar: myTopToolbar,
    bbar: myBottomToolbar,
    html: 'My First Toolbar Panel!',
    bottonAlign: 'left',
    buttons: [
      {
        text: 'Press me',
        handler: myBtnHandler
      }
    ],
    tools: [
      {
        type: 'gear',
        handler: function(evt, toolEl, panel){
          var toolClassNames = toolEl.className.split(' ');
          var toolClass = toolEl.className;
          var toolId = toolClass.split('-')[2];

          Ext.MessageBox.alert('You Clicked', 'Tool: ' + toolId);
        }
      }, {
        type: 'help',
        handler: function(){
          Ext.MessageBox.alert('You Clicked', 'The help tool!');
        }
      }
    ]
  });

  var buttons = [
    {
      text: 'Btn 1'
    }, {
      text: 'Btn 2'
    }, {
      text: 'Btn 3'
    }
  ];

  var topDockedToolBar = {
    xtype: 'toolbar',
    dock:  'top',
    items: buttons
  };

  var bottomDockedToolBar = {
    xtype: 'toolbar',
    dock: 'bottom',
    items: buttons
  }

  var leftDockedToolBar = {
    xtype: 'toolbar',
    dock: 'left',
    items: buttons,
    vertical: true,
    weight: 10
  }

  var rightDockedToolbar = {
    xtype: 'toolbar',
    dock: 'right',
    items: buttons,
    vertical: true,
    weight: 10
  }

  var myPanel2 = Ext.create('Ext.panel.Panel',{
    width: 350,
    height: 250,
    title: 'Ext Panels rock!',
    renderTo: Ext.getBody(),
    html: 'Content body',
    buttons: {
      weight:-1,
      items: buttons
    },
    dockedItems: [
      topDockedToolBar,
      bottomDockedToolBar,
      leftDockedToolBar,
      rightDockedToolbar
    ]
  });
});
