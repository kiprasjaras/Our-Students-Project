const htmlForms = {
    shiping: {
        progress: `<div class="formContainer__progress">
        <span>Freight Details</span>
        <span>Freight Locations</span>
        <span>Other Details</span>
        <span>Contact Details</span>
    </div>
    <div class="formContainer__inputs"></div>`,
        inputForms: {
            freightDetails: `<div class="h3-s">Freight Details</div>
            <label for="movement">Type of Movement*</label>
            <select name="movement" class="formContainer__input formContainer__input--select">
                <option value="" disabled selected>Please select</option>
                <option value="road">Road</option>
                <option value="sea">Sea</option>
                <option value="rail">Rail</option>
                <option value="air">Air</option>
            </select>
            <div class="formContainer__error js-error-movement hide"></div>
            <label for="description">Description of Freight (type, weight, dimentions)</label>
            <input type="text" name="description" class="formContainer__input">
            <div class="formContainer__error  hide"></div>
            <label for="date">Date*</label>
            <input type="date" name="date" class="formContainer__input">
            <div class="formContainer__error js-error-date hide"></div>
            <div class="formContainer__buttons">
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-next right">Next</button>
            </div>`,
            freightLocations: `<div class="h3-s">Freight Locations</div>
            <label for="origins">Origins*</label>
            <select name="origins" class="formContainer__input formContainer__input--select">
                <option value="" disabled selected>Please select</option>
                <option value="klaipeda">Klaipeda</option>
                <option value="sea">Ventspils</option>
                <option value="rail">Riga</option>
                <option value="tallinn">Tallinn</option>
                <option value="saint-petersburg">Saint-Petersburg</option>
                <option value="stockholm">Stockholm</option>
                <option value="lubeck">Lübeck</option>
                <option value="gdansk">Gdańsk</option>
                <option value="helsinki">Helsinki</option>
            </select>
            <div class="formContainer__error js-error-origins hide"></div>
            <label for="destination">Destination*</label>
            <select name="destination" class="formContainer__input formContainer__input--select">
                <option value="" disabled selected>Please select</option>
                <option value="klaipeda">Klaipeda</option>
                <option value="sea">Ventspils</option>
                <option value="rail">Riga</option>
                <option value="tallinn">Tallinn</option>
                <option value="saint-petersburg">Saint-Petersburg</option>
                <option value="stockholm">Stockholm</option>
                <option value="lubeck">Lübeck</option>
                <option value="gdansk">Gdańsk</option>
                <option value="helsinki">Helsinki</option>
            </select>
            <div class="formContainer__error js-error-destination hide"></div>
            
            <div class="formContainer__buttons">
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-back left">Back</button>
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-next right">Next</button>
            </div>`,
            otherDetails: `<div class="h3-s">Other Details</div>
            <label for="goods">Goods Reference Number</label>
            <input type="text" name="goods" class="formContainer__input">
            <div class="formContainer__error hide"></div>
            <label for="order">Order reference number</label>
            <input type="text" name="order" class="formContainer__input">
            <div class="formContainer__error hide"></div>
            <label for="comment">Comments or Instructions</label>
            <textarea name="comment" class="formContainer__input-h100"></textarea>
            <div class="formContainer__buttons">
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-back left">Back</button>
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-next right">Next</button>
            </div>`,
            contactDetails: `            <div class="h3-s">Contact Details</div>
            <label for="name">Name*</label>
            <input type="text" name="name" class="formContainer__input">
            <div class="formContainer__error js-error-name hide"></div>
            <label for="company">Company</label>
            <input type="text" name="company" class="formContainer__input">
            <div class="formContainer__error hide"></div>
            <label for="email">Email*</label>
            <input type="text" name="email" class="formContainer__input">
            <div class="formContainer__error js-error-email hide"></div>
            <label for="number">Contact Number*</label>
            <input type="text" name="number" class="formContainer__input">
            <div class="formContainer__error js-error-telephone hide"></div>
            <div class="formContainer__buttons">
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-back left">Back</button>
                <div class="formContainer__success hide js-shiping-success"></div>
                <button class="btn btn--forms btn--outline form-btn-text js-form-btn-submit right">Submit</button>
            </div>`
        }
    },
    administration: {
        progress: `<div class="formContainer__progress">
        <span>Contact Details</span>
        <span>Experience</span>
        <span>Cover Letter</span>
    </div>
    <div class="formContainer__inputs"></div>`,
        inputForms: {
            contactDetails: `<div class="h3-s">Contact Details</div>
        <div class="formContainer__inputs-double">
            <label for="name" class="formContainer__flex-basis45">First Name</label>
            <label for="lastname" class="formContainer__flex-basis45">Last Name</label>
        </div>
        <div class="formContainer__inputs-double">
            <input type="text" name="name" class="formContainer__input-small">
            <input type="text" name="lastname" class="formContainer__input-small">
        </div>
        <div class="formContainer__inputs-double">
            <div class="formContainer__error formContainer__flex-basis45 js-error-name hide"></div>
            <div class="formContainer__error formContainer__flex-basis45 js-error-lastname hide"></div>

        </div>
        <label for="adress">Adress</label>
        <input type="text" name="adress" class="formContainer__input">
        <div class="formContainer__error hide"></div>
        <label for="number">Phone Number</label>
        <input type="text" name="number" class="formContainer__input">
        <div class="formContainer__error js-error-number hide"></div>
        <label for="number">Email</label>
        <input type="email" name="email" class="formContainer__input">
        <div class="formContainer__error js-error-email hide"></div>
        <div class="formContainer__buttons">
            <button class="right btn btn--forms btn--outline form-btn-text js-form-btn-next">Next</button>
        </div>`,
            experience: `<div class="h3-s">Experience</div>

        <label for="period1">Period</label>
        <input type="text" name="period1" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <label for="experiance1">Experience</label>
        <input type="text" name="experiance1" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <label for="period2">Period</label>
        <input type="text" name="period2" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <label for="experiance2">Experience</label>
        <input type="text" name="experiance2" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <div class="formContainer__buttons">
        <button class="right btn btn--forms btn--outline form-btn-text js-form-btn-next">Next</button>
        <button class="left btn btn--forms btn--outline form-btn-text js-form-btn-back">Back</button>
        </div>`,
            coverletter: `<div class="h3-s">Cover Letter</div>
        <textarea name="coverletter" class="formContainer__input-h300" rows="20" ></textarea>
    <div class="formContainer__buttons">
        <button class="right btn btn--forms btn--outline form-btn-text js-form-btn-submit">Submit</button>
        <div class="formContainer__success hide js-administration-success"></div>
        <button class="left btn btn--forms btn--outline form-btn-text js-form-btn-back">Back</button>
    </div>`
        }
    },
    drivers:{
        progress:`         <div class="formContainer__progress">
        <span>Contact Details</span>
        <span>Vehicle Details</span>
        <span>Experience</span>
    </div>
    <div class="formContainer__inputs"></div>`,
    inputForms: {
        contactDetails:` <div class="h3-s">Contact Details</div>
        <div class="formContainer__inputs-double">
            <label for="name" class="formContainer__flex-basis45">First Name</label>
            <label for="lastname" class="formContainer__flex-basis45">Last Name</label>
        </div>
        <div class="formContainer__inputs-double">
            <input type="text" name="name" class="formContainer__input-small">
            <input type="text" name="lastname" class="formContainer__input-small">
        </div>
        <div class="formContainer__inputs-double">
            <div class="formContainer__error formContainer__flex-basis45 js-error-name hide"></div>
            <div class="formContainer__error formContainer__flex-basis45 js-error-lastname hide"></div>

        </div>
        <label for="adress">Adress</label>
        <input type="text" name="adress" class="formContainer__input">
        <div class="formContainer__error hide"></div>
        <label for="number">Phone Number</label>
        <input type="text" name="number" class="formContainer__input">
        <div class="formContainer__error js-error-number hide"></div>
        <label for="number">Email</label>
        <input type="email" name="email" class="formContainer__input">
        <div class="formContainer__error js-error-email hide"></div>
        <div class="formContainer__buttons">
            <button class="right btn btn--forms btn--outline form-btn-text js-form-btn-next">Next</button>
        </div>`,
        vehicle:`<div class="h3-s">Vehicle details</div>

        <label for="brand">Vehicle brand</label>
        <input type="text" name="brand" class="formContainer__input">
        <div class="formContainer__error js-error-brand  hide">asdsadas</div>
        <label for="model">Model</label>
        <input type="text" name="model" class="formContainer__input">
        <div class="formContainer__error js-error-model hide">asdsadas</div>
        <label for="name">Year</label>
        <input type="text" name="year" class="formContainer__input">
        <div class="formContainer__error js-error-year hide">asdsadas</div>
        <label for="fuel">Fuel type</label>
        <input type="text" name="fuel" class="formContainer__input">
        <div class="formContainer__error js-error-fuel hide">asdsadas</div>
        <div class="formContainer__buttons">
            <button class="right btn btn--forms btn--outline form-btn-text js-form-btn-next">Next</button>
            <button class="left btn btn--forms btn--outline form-btn-text js-form-btn-back">Back</button>
        </div>`,
        experience:`<div class="h3-s">Experience</div>

        <label for="period1">Period</label>
        <input type="text" name="period1" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <label for="experiance1">Experience</label>
        <input type="text" name="experiance1" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <label for="period2">Period</label>
        <input type="text" name="period2" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <label for="experiance2">Experience</label>
        <input type="text" name="experiance2" class="formContainer__input">
        <div class="formContainer__error hide">asdsadas</div>
        <div class="formContainer__buttons">
            <button class="right btn btn--forms btn--outline form-btn-text js-form-btn-submit">Submit</button>
            <div class="formContainer__success hide js-drivers-success"></div>
            <button class="left btn btn--forms btn--outline form-btn-text js-form-btn-back">Back</button>
        </div>`
    }
    }

}

const formBuild = (formFamily, form, generation) => {
    if (generation === 'first') {
        const mainContainer = document.querySelector('.js-form-container');
        mainContainer.innerHTML = htmlForms[formFamily].progress
    }
    const inputsContainer = document.querySelector('.formContainer__inputs');
    inputsContainer.innerHTML = htmlForms[formFamily].inputForms[form];
}
module.exports = formBuild