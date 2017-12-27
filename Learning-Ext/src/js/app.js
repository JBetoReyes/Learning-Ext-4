Ext.onReady(function(){
  var myTpl = Ext.create('Ext.Template', '<div class="myDiv">Hello {0}.</div>');
  myTpl.append(document.body, ['Marjan']);
  myTpl.append(document.body, ['Michael']);
  myTpl.append(document.body, ['Sebastian']);
});
