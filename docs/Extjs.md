# Ext-js

## Panels

**Weight property in docked items**

Each quadrant where items are docked has a default weight.
Top is 1, left is , right is 5, and bottom is 7.


**constraint property in windows**

instructs the window's drag and drop handlers to prevent the window from being moved from outside the browser's viewport.

```javascript
    win = Ext.create('Ext.window.Window',{
      animateTarget: btn.el,
      html: 'My first vanilla windows',
      closeAction: 'hide',
      id: 'myWin',
      height: 200,
      width: 300,
      constrain: true
    });
```
