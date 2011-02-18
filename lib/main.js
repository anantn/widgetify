const widgets = require("widget");
const tabs = require("tabs");
const {Cc, Ci} = require("chrome");

var data = require("self").data;

var widget = widgets.Widget({
  label: "Widgetify",
  contentURL: data.url("widget.png"),
  width: 48,
  onClick: function() {
    let wm = Cc['@mozilla.org/appshell/window-mediator;1']
             .getService(Ci.nsIWindowMediator);
    let win = wm.getMostRecentWindow("navigator:browser");
    win.open(
      tabs.activeTab.url,
      "widget", "chrome=yes,resizable=no,location=no,alwaysRaised=yes"
    );
  }
});
