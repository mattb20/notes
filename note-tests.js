
(function(exports){
  // const Assert = function {};
  // Assert.prototype.isTrue = function (assertionToCheck) {
  //   if(!assertionToCheck) {
  //     throw new Error("Assertion failed: " + assertionToCheck);
  //   } else {
  //     console.log("Test for " + assertionToCheck + "passed");
  //   }
  // };
  function testDisplayFunction() {
    var note = new Note("my first note");
    if (note.display() !== "my first note"){
      throw new Error ("did not work, fix your code!")
    }
    else {console.log("1st test passed");
    }
  };
  testDisplayFunction();

  function testListModel() {
    var list = new List();
    if (!Array.isArray(list.display())) {
      throw new Error ("note list does not include '[]'")
    }
    else {console.log("2nd test passed");
    }
  };
  testListModel();

  function testListStorage() {
    var list = new List();
    var note2 = new Note("second note");
    var note3 = new Note("third note");
    list.store(note2);
    list.store(note3);
    if (list.display()[0] !== note2.text) {
      throw new Error ("note has not been stored")
    };
    if (list.display()[1] !== note3.text) {
      throw new Error ("note has not been stored")
    }
    else {console.log("3rd test passed");
    }
  };
  testListStorage();

  function testListView() {
    var list = new List();
    var note2 = new Note("second note");
    var note3 = new Note("third note");
    list.store(note2);
    list.store(note3);
    var listView = new ListView(list)
    if (listView.display()!== '<ul><li><div><a href="http://localhost:8080/note/1"</a>second note</div></li><li><div>third note</div></li></ul>') {
      throw new Error ("testfailed. list not in html format")
    }
    else {console.log("4th test passed");
    }
  };
  testListView();



   function testSingleNote() {
     var singlenoteview = new SingleNoteView(note = new Note("this is a note"));
     if (singlenoteview.display() != "<div>this is a note</div>") {
       throw new Error ("test failed. string is not inside div element")
     }
     else {console.log("5th test passed");
     }
   };
   testSingleNote();

   function test20Characters() {
     var list = new List();
     var note2 = new Note("This note has way more than 20 characters!");
     var note3 = new Note("This note also has way more than 20 characters!");
     list.store(note2);
     list.store(note3);
     var listView = new ListView(list)
     if (listView.display()!== "<ul><li><div>This note has way mo</div></li><li><div>This note also has w</div></li></ul>") {
       throw new Error ("testfailed. Notes not under 20 characters")
     }
     else {console.log("7th test passed");
     }
   };
   test20Characters();

   function testNoteID() {
     var note = new Note("text");
     if (note.id == null) {
       throw new Error ("note does not have ID");
     } else {
       console.log("8th test passed");
     }
   }
   testNoteID();

   function testUniqueID() {

     var note1 = new Note("some text");
     var note2 = new Note("some different text");
     var note3 = new Note("more different text");
     var note4 = new Note("more different text");


     if (note1.id == note2.id) {
       throw new Error ("IDs are not unique")
     } else if (note2.id == note3.id) {
       throw new Error ("IDs are not unique")
     } else {


       console.log("9th test passed")
     }


   }
   testUniqueID();

   function testDisplayNoteURL() {
     var list = new List();
     var note1 = new Note("some text");
     var note2 = new Note("some different text");
     var note3 = new Note("more different text");
     var note4 = new Note("more different text");
     list.store(note1);
     list.store(note2);
     list.store(note3);
     list.store(note4);
     var listView = new ListView(list);
     var actual = listView.display().includes('<a href="http://localhost:8080/note/1">');
     var expected = true;
     if (actual === expected) {
       console.log("10th test passed");
     }
     else {
       throw new Error ("Link is not displayed");
     }



   }
   testDisplayNoteURL();
})(this);
