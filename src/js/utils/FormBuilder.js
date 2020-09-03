const ValidationsListener = require('./InputEventListener');
const formBuild = require('../components/htmlForms')
class Form {
    constructor() {
        this.formFamilyList = [
            {
                formFamily: 'shiping',
                formData: [{
                    form: 'freightDetails', buttons: { next: ".js-form-btn-next" },
                    inputInfo: [{ selector: "[name='movement']", validations: ['required'], value: '' ,errorDiv:'.js-error-movement'},
                    { selector: "[name='description']", validations: ['noValidation'], value: '',errorDiv:'#' },
                    { selector: "[name='date']", validations: ['required'], value: '' ,errorDiv:'.js-error-date'}]
                },
                {
                    form: 'freightLocations', buttons: { next: ".js-form-btn-next",back: ".js-form-btn-back"},
                    inputInfo: [{ selector: "[name='origins']", validations: ['required', 'locations'],pairName:'shiping', value: '' ,errorDiv:'.js-error-origins'},
                    { selector: "[name='destination']", validations: ['required', 'locations'],pairName:'shiping', value: '' ,errorDiv:'.js-error-destination'}]
                },
                {
                    form: 'otherDetails', buttons: { next: ".js-form-btn-next",back: ".js-form-btn-back"},
                    inputInfo: [{ selector: "[name='goods']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='order']", validations: ['noValidation'], value: '' ,errorDiv:'#' },
                    { selector: "[name='comment']", validations: ['noValidation'], value: '',errorDiv:'#' }]
                },
                {
                    form: 'contactDetails', buttons: { submit: ".js-form-btn-submit",back: ".js-form-btn-back",success:'.js-shiping-success'},
                    inputInfo: [{ selector: "[name='name']", validations: ['required'], value: '' ,errorDiv:'.js-error-name'},
                    { selector: "[name='company']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='email']", validations: ['required','email'], value: '' ,errorDiv:'.js-error-email'},
                    { selector: "[name='number']", validations: ['required','telephone'], value: '' ,errorDiv:'.js-error-telephone'}]
                }]
            },
            {
                formFamily: "administration",
                formData: [{
                    form: 'contactDetails', buttons: { next: ".js-form-btn-next" },
                    inputInfo: [{ selector: "[name='name']", validations: ['required'], value: '' ,errorDiv:'.js-error-name'},
                    { selector: "[name='lastname']", validations: ['required'], value: '', errorDiv:'.js-error-lastname'},
                    { selector: "[name='adress']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='number']", validations: ['required', 'telephone'], value: '', errorDiv:'.js-error-number'},
                    { selector: "[name='email']", validations: ['required', 'email'], value: '',errorDiv:'.js-error-email' }]
                
                },
                {
                    form: 'experience', buttons: { next: ".js-form-btn-next",back: ".js-form-btn-back"},
                    inputInfo: [{ selector: "[name='period1']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='experiance1']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='period2']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='experiance2']", validations: ['noValidation'], value: '' ,errorDiv:'#'}]
                },
                {
                    form: 'coverletter', buttons: { submit: ".js-form-btn-submit",back: ".js-form-btn-back",success:'.js-administration-success'},
                    inputInfo: [{ selector: "[name='coverletter']", validations: ['noValidation'], value: '' ,errorDiv:'#'}]
                }]
            },
            {
                formFamily: "drivers",
                formData: [{
                    form: 'contactDetails', buttons: { next: ".js-form-btn-next" },
                    inputInfo: [{ selector: "[name='name']", validations: ['required'], value: '' ,errorDiv:'.js-error-name'},
                    { selector: "[name='lastname']", validations: ['required'], value: '', errorDiv:'.js-error-lastname'},
                    { selector: "[name='adress']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='number']", validations: ['required', 'telephone'], value: '', errorDiv:'.js-error-number'},
                    { selector: "[name='email']", validations: ['required', 'email'], value: '',errorDiv:'.js-error-email' }]
                
                },
                {
                    form: 'vehicle', buttons: { next: ".js-form-btn-next",back: ".js-form-btn-back"},
                    inputInfo: [{ selector: "[name='brand']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='model']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='year']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='fuel']", validations: ['noValidation'], value: '' ,errorDiv:'#'}]
                },
                {
                    form: 'experience', buttons: { submit: ".js-form-btn-submit",back: ".js-form-btn-back",success:'.js-drivers-success'},
                    inputInfo: [{ selector: "[name='period1']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='experiance1']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='period2']", validations: ['noValidation'], value: '' ,errorDiv:'#'},
                    { selector: "[name='experiance2']", validations: ['noValidation'], value: '' ,errorDiv:'#'}]
                }]
            }

        ]
    }

    startForm(formFamily,form,formFamilyClassVariable,generation) {
        formBuild(formFamily,form,generation);
        for(let family of this.formFamilyList){
            if(family.formFamily===formFamily){
                for(let formPage of family.formData){
                    if(formPage.form === form){
                        new ValidationsListener(formPage,family.formData,formFamilyClassVariable,formFamily).addAllListeners();
                        for(let input of formPage.inputInfo){
                            const inputNode = document.querySelector(input.selector);
                            inputNode.value = input.value;
                        }
                    }
                }
            }
        }




    }
}
module.exports = Form;