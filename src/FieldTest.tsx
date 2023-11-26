import React from 'react'
import { ResourceView } from './components/resources/resource/resource';
import { useForm } from './hooks/useForm';
const FieldTest = () => {
  const {
    setValue: setPasswordFormValue,
    form: updatePasswordForm,
    loading: isUpdatingPassword,
    submit: onUpdatePasswordSubmit,
    errors: updatePasswordErrors
  } = useForm<any>({
    defaultValues: {
      currentPassword: '',
      newPassword: ''
    },
    onSubmit: ()=> {
      console.log('onSubmit');
    },
    onSuccess: ({ form }) => {
     

      console.log('Saved.','Your password has been updated successfully');
    }
  })

  return (
    <><ResourceView/></>
  )
}
export default FieldTest;