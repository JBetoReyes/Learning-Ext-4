Ext.onReady(function(){
  var myTpl = Ext.create('Ext.Template', [
    '<div style="background-color: {color}; margin: 10px;>"',
      '<b> Name :</b> {name}<br/>',
      '<b> Age :</b> {age} <br/>',
      '<b> DOB :</b> {dob} <br/>',
    '</div>'
  ]);

  myTpl.compile();

  myTpl.append(document.body,{
    color: "#E9E9FF",
    name: 'John Smith',
    age: 20,
    dob: '10/20/89'
  });

  myTpl.append(document.body,{
    color: "#FFE9E9",
    name: 'Naomi White',
    age: 25,
    dob: '03/17/84'
  });

});
