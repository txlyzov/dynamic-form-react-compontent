import "./DynamicForm.scss"
import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import Textarea from "../textarea/Textarea";

export const FIELD_TYPE_1 = 'checkbox';
export const FIELD_TYPE_2 = 'input';
export const FIELD_TYPE_3 = 'textarea';


function DynamicForm({
    className = '',
    formTitle,
    formSettings,
    setFormSettings,
    onSubmitFormButtonClick,
    buttonText = 'Submit',
    disableCondition = false,
}) {

    const handleFieldChange = (event, index) => {
        const data = [...formSettings];
        data[index].value = data[index].fieldType === FIELD_TYPE_1 ? event.target.checked : event.target.value;
        setFormSettings(data)
    }

    const insertField = (element, index) => {
        switch (element.fieldType) {
            case FIELD_TYPE_2:
                return (
                    <Input
                        id={element.key}
                        type={element.type}
                        min={element.min}
                        className="form-element__input"
                        setInputValueExtended={(e) => handleFieldChange(e, index)}
                        inputValue={element.value}
                    />
                );
            case FIELD_TYPE_3:
                return (
                    <Textarea
                        id={element.key}
                        className="form-element__textarea"
                        onChange={(e) => handleFieldChange(e, index)}
                        value={element.value}
                    />
                );
            case FIELD_TYPE_1:
                return (
                    <Input
                        id={element.key}
                        type='checkbox'
                        className="form-element__checkbox"
                        setInputValueExtended={(e) => handleFieldChange(e, index)}
                        inputValue={element.value}
                    />
                )

            default:
                return null;
        }
    }

    return (
        <form className={`form-element ${className}`}>
            {formTitle ? <h2>{formTitle}</h2> : null}
            {formSettings.map((element, index) =>
            (
                <div
                    className={`form-element__input-group ${element.name ? 'separated' : 'centralized'}`}
                    key={element.key}
                >
                    {element.name ?
                        <label htmlFor={element.key}>
                            {element.name}
                        </label>
                        :
                        null
                    }
                    {insertField(element, index)}
                </div>
            )
            )
            }
            <Button
                className='form-element__submit-button'
                type='submit'
                onClick={onSubmitFormButtonClick}
                disabled={disableCondition}
            >
                {buttonText}
            </Button>
        </form >
    );
}

export default DynamicForm;
