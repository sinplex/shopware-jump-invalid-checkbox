/**
 * Invalid Checkbox Jump plugin
 *
 * Triggers the has--error class for the checkbox and scrolls up to display its unchecked state.
 * Especially made for iOS-Devices due to missing hints if checkbox hasn't been checked
 *
 * @example The example shows the basic usage:
 *
 * ```
 * <form>
 *    <input type="checkbox" id="invalid-checkbox" required="required" data-ga-invalid-jump="true">
 *    <label for="invalid-checkbox">label for checkbox.</label>
 * </form>
 * ```
 */
$.plugin('gaInvalidCheckboxJump', {


    /**
     * Default settings for the plugin
     * @type {Object}
     */
    defaults: {
        /**
         * Class to add on invalid
         */
        errorClass: 'has--error'
    },

    /**
     * Initializes the plugin and sets up the necessary event listeners.
     */
    init: function () {
        var me = this;
        me.applyDataAttributes();
        me.$jumpLabel = $("label[for=" + me.$el[0].id + "]");
        me._on(me.$el, 'invalid', $.proxy(me.jumpToInvalid, me));
        me._on(me.$el, 'change', $.proxy(me.onElementChange, me));
    },

    jumpToInvalid: function () {
        var me = this;

        window.scroll(0, me.$el.offset().top - (window.innerHeight / 2));
        me.$jumpLabel.addClass(me.opts.errorClass);
    },
    onElementChange:function(){
        var me = this;
        me.$jumpLabel.removeClass(me.opts.errorClass);
    }
});

$('*[data-ga-invalid-jump="true"]').gaInvalidCheckboxJump();