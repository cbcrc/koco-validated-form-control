# koco-validated-form-control
Simple Koco component to wrap form controls in markup for koco-validation

##Installation
```bash
bower install koco-validated-form-control
```

## Usage with KOCO

This is a shared module that is used in many other modules. The convention is to register the component in the `components.js` file like so:

```javascript
koUtilities.registerComponent('validated-form-control', {
    basePath: 'bower_components/koco-validated-form-control/src'
});
```

You will also need to require the handler dependencies in the `knockout-binding-handlers.js` file:

```javascript
define([
  ...
        'bower_components/koco-validation/src/binding-handlers/form-group-validation-css-class-binding-handler',
        'bower_components/koco-validation/src/binding-handlers/help-block-validation-message-binding-handler',
  ...
], function() {});
```


##Usage
```html
<validated-form-control params="property: observableContent().propertyName, required: boolean"> 
	... 
</validated-form-control>
```

Where `params` can contain:
* `property` : The observable data you want validated 
* `required` : boolean; adds the `required` class to your `form-group` div

The `validated-form-control` component will expand to:

```html
<div class="form-group <!-- ko if: required -->required<!-- /ko-->" data-bind="formGroupValidationCssClass : property.formGroupValidationCssClass">
	...
    <span class="help-block" data-bind="helpBlockValidationMessage: property.helpBlockValidationMessage"></span>
</div>
```

It expects your observable data to be extended with knockout-validation rules. For example:

```javascript
content.title.extend({
    required: {
        message: 'The title is required.'
    },
    maxLength: {
        params: 200,
        message: 'The title should not be longer than 200 characters.'
    }
});
```
