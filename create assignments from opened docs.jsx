
#include "Document/createAssignment.jsx"
#include "Document/updateAssignments.jsx"
#include "Document/exportStories.jsx"
#include "Document/updateStories.jsx"


var path = "ASSIGNMENTS";
var storiesPath = "ASSIGNMENTS/INCX";

var docs =  app.documents;
var docCount = docs.count();

for (var d=0; d < docCount; d++) {
	
	var doc = docs.item(d);
	createAssignment(doc, path);
	updateAssignments(doc);
	exportStories(doc, storiesPath);
	updateStories(doc);

}
