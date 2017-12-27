Ext.require([
  'Ext.window.MessageBox',
  'Ext.tip.*'
]);

Ext.onReady(function() {
  var myDiv1 = Ext.get('div1');  
  myDiv1.createChild({
    tag: 'div',
    id: 'nestedDiv',
    style: 'border: 1px dashed;' +
           'padding: 5px;',
    children: {
      tag: 'div',
      html: '... a nested div',
      style: 'color: #EE0000;' + 
             'border: 1px solid;'
    }
  });

  myDiv1.insertFirst({
    tag: 'div',
    html: 'Child inserted as node 0 of myDiv1',
    style: 'padding: 5px;'
  });

  myDiv1.createChild({
    tag: 'div',
    html: 'Child inserted as node 2 of myDiv1',
    id: 'removeMeLater',
    style: 'padding: 5px;'
  }, myDiv1.dom.childNodes[3]);

  setTimeout(function(){
    myDiv1.load({
      url: 'fragments/htmlFragment.html',
      scripts: true
    }, 10000);
  })

});

