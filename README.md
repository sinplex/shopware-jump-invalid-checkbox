# shopware-jump-invalid-checkbox
jQuery plugin for shopware that jumps to a checkboxlabel and sets has--error class if the checkbox is not checked on submit.

Checkbox needs to be in a form and label for the plugin to jump to.


<form>
    <input type="checkbox" id="invalid-checkbox" required="required" data-ga-invalid-jump="true">
    <label for="invalid-checkbox">label for checkbox.</label>
</form>
