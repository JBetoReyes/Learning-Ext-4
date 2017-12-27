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
    renderTo: Ext.getBody(),
    tbar: myTopToolbar,
    bbar: myBottomToolbar,
    html: 'My First Toolbar Panel!'
  });
});
