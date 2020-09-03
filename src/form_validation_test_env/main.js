import '../scss/main.scss';

const FormBuilder = require('./js/FormBuilder');

const shipingFormFamily = new FormBuilder();
shipingFormFamily.startForm('administration','contactDetails',shipingFormFamily,'first');
