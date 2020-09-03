import './scss/main.scss'
const FormBuilder = require('./js/utils/FormBuilder');

const shipingFormFamily = new FormBuilder();
shipingFormFamily.startForm('administration','contactDetails',shipingFormFamily,'first');