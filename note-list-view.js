(function(exports) {
  function ListView(list){
    this.list = list;
  };

  const trimNotesLength = function() {

    return this.list.notelist.map(note => note.slice(0,20));

  }



  ListView.prototype.display = function(){

    return '<ul><li><div><a href="http://localhost:8080/note/1"</a>'+(trimNotesLength()).join("</div></li><li><div>")+"</div></li></ul>";
  };
 exports.ListView = ListView;
  })(this);
