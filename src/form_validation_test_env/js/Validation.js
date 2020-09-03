class Validate {
  constructor(inputValue,inputData) {
    this.input = inputValue;
    this.inputData = inputData;
    this.errors = [];
  }
  required() {
    if (`${this.input}`.length === 0 || this.input === undefined) {
      this.errors.push({ errorName: `field is required`,errorContainer:this.inputData.errorDiv  });
    }
    return this;
  }
  email() {
    if (this.input.length >= 3 && this.input.length <= 345) {
      const etaIndex = this.input.search(/\@/g);
      if (etaIndex === -1 || etaIndex === 0 || etaIndex === this.input.length - 1) {
        this.errors.push({ errorName: `email is invalid`,errorContainer:this.inputData.errorDiv  })
      }
    } else {
      this.errors.push({ errorName: `email is invalid`,errorContainer:this.inputData.errorDiv });
    }
  }
  locations(allFormsData){
    this.inputData.value=this.input;
    let valueArr = [];
    allFormsData.forEach(form => {
      form.inputInfo.forEach(input=>{
        if(this.inputData.pairName === input.pairName){
          if(input.value) valueArr.push(input.value);
        }
      })
    });
    for (let i = 0; i < valueArr.length; i++) {
      for (let y = i+1; y < valueArr.length; y++) {
        if(valueArr[i] === valueArr[y]){
          this.errors.push({ errorName: `origin and destination can't match` ,errorContainer:this.inputData.errorDiv });
        }
      }
    };
  }
  number(){
    const unpermittedCharSearch = this.input.search(/^\d$/g);
    if(unpermittedCharSearch !== -1){
      this.data.push({ errorName: `number is invalid`,errorContainer:this.inputData.errorDiv  })
    }
  }
  telephone() {
      if (this.input.length >= 4 && this.input.length <= 18) {
        const unpermittedCharSearch = this.input.search(/^[0-9()-+]+$/g);
        if (unpermittedCharSearch === -1) {
          this.errors.push({ errorName: `telephone number is invalid`,errorContainer:this.inputData.errorDiv  });

        }
      } else {
        this.errors.push({ errorName: `telephone number is invalid`,errorContainer:this.inputData.errorDiv  });
      }
  }
  noValidation() {
    return 
  }
  getError() {
    return this.errors;
  }
}

module.exports = Validate;