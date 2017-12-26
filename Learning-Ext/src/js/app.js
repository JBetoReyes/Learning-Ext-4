Ext.require([
  'Ext.window.MessageBox',
  'Ext.tip.*'
]);

Ext.onReady(function() {
  var myDiv1 = Ext.get('div1');
  // myDiv1.setSize(350, 350, {duration: 750, easing:'bounceOut'});
    setTimeout(function(){ Ext.Msg.alert("Alert","We're ready to go!"); }, 10000);
});

