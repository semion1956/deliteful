define([
  "dojo",
  "..",
  "./ValidationTextBox",
  "./ComboBoxMixin"], function(dojo, dijit) {
	// module:
	//		dijit/form/ComboBox
	// summary:
	//		TODOC


dojo.declare(
	"dijit.form.ComboBox",
	[dijit.form.ValidationTextBox, dijit.form.ComboBoxMixin],
	{
		// summary:
		//		Auto-completing text box, and base class for dijit.form.FilteringSelect.
		//
		// description:
		//		The drop down box's values are populated from an class called
		//		a data provider, which returns a list of values based on the characters
		//		that the user has typed into the input box.
		//		If OPTION tags are used as the data provider via markup,
		//		then the OPTION tag's child text node is used as the widget value
		//		when selected.  The OPTION tag's value attribute is ignored.
		//		To set the default value when using OPTION tags, specify the selected
		//		attribute on 1 of the child OPTION tags.
		//
		//		Some of the options to the ComboBox are actually arguments to the data
		//		provider.
	}
);

return dijit.form.ComboBox;
});