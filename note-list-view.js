(function(exports) {
  function ListView(list){
    this.list = list
  };

  ListView.prototype.display = function(){
    var htmlString = '<ul><li><div id="0"> <a href="notes/0">';
    for (var i = 0; i<this.list.notelist.length; i++){
      var note = this.list.notelist[i].slice(0,20);
      htmlString += note;
      if (i !== this.list.notelist.length - 1) {
        htmlString += `</a></div></li></ul><div id="${i+1}"<a href="notes/${i+1}"`;
      }
    }
    htmlString += "</a></div></li></ul>";
    return htmlString;
    // return "<ul><li><div>"+(this.list.notelist.map(note => note.slice(0,20)).join("</div></li><li><div>"))+"</div></li></ul>";
  };
 exports.ListView = ListView;
  })(this);
