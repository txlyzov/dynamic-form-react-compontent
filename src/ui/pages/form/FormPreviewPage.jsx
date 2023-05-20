import './FormPreviewPage.scss'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DynamicForm, { FIELD_TYPE_1, FIELD_TYPE_2, FIELD_TYPE_3 } from '../../components/dynamic-form/DynamicForm';

const INPUT_AMOUNT_FIELD_INDEX = 0;
const TEXTAREA_AMOUNT_FIELD_INDEX = 1;
const CHECKBOX_AMOUNT_FIELD_INDEX = 2;
const MIN_FIELDS_VALUE = 0;
const INIT_FORM_FIELDS = [
    { fieldType: FIELD_TYPE_2, type: 'number', min: MIN_FIELDS_VALUE, name: 'Inputs:', value: MIN_FIELDS_VALUE, key: uuidv4() },
    { fieldType: FIELD_TYPE_2, type: 'number', min: MIN_FIELDS_VALUE, name: 'Textareas:', value: MIN_FIELDS_VALUE, key: uuidv4() },
    { fieldType: FIELD_TYPE_2, type: 'number', min: MIN_FIELDS_VALUE, name: 'Checkboxes:', value: MIN_FIELDS_VALUE, key: uuidv4() }
]

function FormPreviewPage() {

    const [formFields, setFormFields] = useState(null);
    const [formSettings, setFormSettings] = useState(INIT_FORM_FIELDS);

    const onBuildButtonClick = (e) => {
        e.preventDefault();
        const fieldsArray = [];

        for (let i = 0; i < formSettings[INPUT_AMOUNT_FIELD_INDEX].value; i += 1) {
            fieldsArray.push({ fieldType: FIELD_TYPE_2, value: '', key: uuidv4() })
        }
        for (let i = 0; i < formSettings[TEXTAREA_AMOUNT_FIELD_INDEX].value; i += 1) {
            fieldsArray.push({ fieldType: FIELD_TYPE_3, value: '', key: uuidv4() })
        }
        for (let i = 0; i < formSettings[CHECKBOX_AMOUNT_FIELD_INDEX].value; i += 1) {
            fieldsArray.push({ fieldType: FIELD_TYPE_1, value: false, key: uuidv4() })
        }

        setFormFields(fieldsArray);
    }

    const resetInputs = () => {
        setFormSettings(formSettings.map((element) => ({ ...element, value: MIN_FIELDS_VALUE })))
    }

    const onSubmitFormButtonClick = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.table(formFields);
        setFormFields(null);
        resetInputs();
    }

    return (
        <div className='preview wrapper'>
            <div className="preview__elements-block">
                {
                    formFields
                        ?
                        <DynamicForm
                            formSettings={formFields}
                            setFormSettings={(data) => setFormFields(data)}
                            onSubmitFormButtonClick={(e) => onSubmitFormButtonClick(e)}
                        />
                        :
                        <DynamicForm
                            formTitle='Set up form firlds'
                            formSettings={formSettings}
                            setFormSettings={(data) => setFormSettings(data)}
                            onSubmitFormButtonClick={(e) => onBuildButtonClick(e)}
                            buttonText='Build'
                            disableCondition={formSettings.every(element => element.value <= 0)}
                        />
                }
                <p>Form results are printed to the console</p>
            </div>
        </div >
    );
}

export default FormPreviewPage;
