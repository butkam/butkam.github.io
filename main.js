Parse.initialize("Im6zn3uSDvj6IGp6jKIaG27LUrO4NeA0ld72ZfZZ", "zWsVL1EHUonbznb2NwfMWvOGsDeDptF7iTzDCY1C");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});