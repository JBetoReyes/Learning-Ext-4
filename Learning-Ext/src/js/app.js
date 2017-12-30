Ext.onReady(function(){
  var viewport = Ext.create('Ext.container.Viewport', {
    layout: 'border',
    defaults: {
      frame: true,
      split: true
    },
    items:[
      {
        title: 'North Panel',
        region: 'north',
        hieght: 100,
        minHeight: 100,
        maxHeight: 150,
        collapsible: true
      }, {
        title: 'South Panel',
        region: 'south',
        height: 75,
        split: false,
        margins: {
          top: 5
        }
      }, {
        title: 'East Panel',
        region: 'east',
        width: 100,
        minWidth: 75,
        maxWidth: 150,
        collapsible: true
      }, {
        title: 'West Panel',
        region: 'west',
        collapsible: true,
        collapseMode: 'mini',
        width: 100
      }, {
        title: 'Center panel',
        region: 'center'
      }
    ]
  });
});
