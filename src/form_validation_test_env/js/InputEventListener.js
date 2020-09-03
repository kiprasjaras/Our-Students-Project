const Validate = require('./Validation');

class InputEventListenerBuilder{
    constructor(formData,allFamilyFormsData,formFamilyClassVariable,formFamily){
        this.currentForm = formData
        this.elementBtns = formData.buttons;
        this.selectorValidationsArr = formData.inputInfo;
        this.allData = allFamilyFormsData;
        this.formVariableFromMain = formFamilyClassVariable;
        this.formFamily= formFamily
    }
    validationBuilder(value,inputObj){
        let validate = new Validate(value,inputObj);
        const validationArr = inputObj.validations;
        validationArr.forEach((validation) => {
            if(validation==='locations'){
                //  validate[validation](value,inputObj,this.allData)
                validate[validation](this.allData)

                }
           else {validate[validation]()}
        });
        return validate.getError();
    }
    
    checkAllInputs(){
        let errorList = [];
      this.selectorValidationsArr.forEach(pair=>{
          const input = document.querySelector(pair.selector);
          const error =  this.validationBuilder(input.value,pair);
          if(error.length>0){
              pair.value = "";
               errorList.push(error)
               console.log(pair.errorDiv)
               this.hideShowErrorDivs('show',pair.errorDiv,error[0].errorName)
            }else{
                pair.value = input.value;
                this.hideShowErrorDivs('hide',pair.errorDiv)
          };
      })
      return errorList;
    }
    checkAllFormsData(data){
    let errorList=[];
        data.forEach((form)=>{
            const formInputs = form.inputInfo;
            formInputs.forEach((input)=>{
                const error = this.validationBuilder(input.value,input);
                if(error.length>0){ errorList.push(error)};
            })
        })
        return errorList;
    }
    addUnfocusListener(pair){
        const input = document.querySelector(pair.selector);
        input.addEventListener('blur',()=>{
          const error =  this.validationBuilder(input.value,pair);
          if(error.length>0){
            pair.value = "";
            this.hideShowErrorDivs('show',pair.errorDiv,error[0].errorName)
            return error
          }else{
            pair.value = input.value;
            this.hideShowErrorDivs('hide',pair.errorDiv)
            return
        };
        })
    }
    addNextBtnListener(){
        
        const nextBtn = document.querySelector(this.elementBtns.next)
        nextBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            const error = this.checkAllInputs();
            if(error.length>0){
                console.log(error);
                return error
            }else if(error.length===0){
                for (let i = 0; i < this.allData.length; i++) {
                    if(this.allData[i].form===this.currentForm.form){
                    this.formVariableFromMain.startForm(this.formFamily,this.allData[i+1].form,this.formVariableFromMain,'second');
                    }
                }
                console.log('added new events');
            }
        })
    }
    addBackBtnListener(){
        const backBtn = document.querySelector(this.elementBtns.back);
        backBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            for (let i = 0; i < this.allData.length; i++) {
                if(this.allData[i].form===this.currentForm.form){
                this.formVariableFromMain.startForm(this.formFamily,this.allData[i-1].form,this.formVariableFromMain,'second');
                }
            }
        })
    }
    addSubmitListener(){
        const submitBtn = document.querySelector(this.elementBtns.submit)
        submitBtn.addEventListener('click',(e)=>{
            e.preventDefault();
        const lastPageErrors = this.checkAllInputs();
        if(lastPageErrors.length>0){
            console.log(lastPageErrors);
            return lastPageErrors;
        }else{
            const allPagesErrors = this.checkAllFormsData(this.allData);
            if(allPagesErrors.length>0){
                console.log('BAD DATA',allPagesErrors)
                return allPagesErrors
            } else{
                this.hideShowErrorDivs('show',this.elementBtns.success,'Form sent')
                console.log('SUCCESS',allPagesErrors);
                console.log(this.allData);
            }
        }
        })
    }
    hideShowErrorDivs(hideShow,div,error){
        if(div!=='#'){
        const errorDiv=document.querySelector(div);
        const classList = errorDiv.classList;
        if(hideShow==='hide'){
            errorDiv.innerText=''
           if( !classList.contains('hide')){
                classList.add('hide')
           }
        }else if (hideShow==='show'){
            errorDiv.innerText=error;
            if( classList.contains('hide')){
                classList.remove('hide')
           }
        }}
    }
    addAllListeners(){
        if(this.elementBtns.next){
        this.addNextBtnListener();
        }
        if(this.elementBtns.submit){
            this.addSubmitListener();
        }
        if(this.elementBtns.back){
            this.addBackBtnListener();
        }
        this.selectorValidationsArr.forEach((pair)=>{
            this.addUnfocusListener(pair);
        })
    }

}

module.exports = InputEventListenerBuilder;