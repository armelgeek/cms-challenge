import React from 'react';
import {
  Formik,
  Form as FormikForm,
  FastField as FormikField,
  ErrorMessage,
} from 'formik';
import { get, mapValues } from 'lodash';
import Field from './field';
const Form = ({ validate, validations, children, ...otherProps }:any) => (
  <Formik
    {...otherProps}
    enableReinitialize={true}
    validationSchema={validations}
    validateOnChange={false}
    validateOnBlur={false}
    
  />
);
Form.Element = (props:any) => <FormikForm noValidate {...props} />;

Form.Field = mapValues(
  Field,
  FieldComponent =>
    ({ name, validate, ...props }:any) =>
      (
        <>
          <FormikField name={name} validate={validate}>
            {({ field, form: { touched, errors, setFieldValue } }:any) => (
              <FieldComponent
                {...field}
                {...props}
                name={name}
                mb={2}
                error={get(touched, name) && get(errors, name)}
                changeValue={(value:any) => setFieldValue(name, value)}
              />
            )}
          </FormikField>
        </>
      )
);

Form.initialValues = (data:any, getFieldValues:any) =>
  getFieldValues((key:any, defaultValue = '') => {
    const value = get(data, key);
    return value === undefined || value === null ? defaultValue : value;
  });

export default Form;
