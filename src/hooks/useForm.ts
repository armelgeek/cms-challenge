import { useState, FormEvent, useEffect } from 'react'
import _ from 'lodash';
type PartialErrorRecord<T extends string | number | symbol> = Partial<
  Record<T, string | string[]>
>

interface ServerValidationError {
  message: string
  field: string
  validation: string
}

export function useForm<
  FormInput extends { [key: string]: any },
  Errors = PartialErrorRecord<keyof FormInput>
>({
  defaultValues,
  onSubmit,
  onSuccess
}: {
  defaultValues: FormInput
  onSubmit: <
    T,
    E = {
      errors: ServerValidationError[]
    }
  >(
    form: FormInput
  ) => any
  onSuccess?: <T>(payload: {
    response: any
    form: FormInput
  }) => void
}) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormInput>({} as any) as any
  const [errors, setErrors] = useState<Errors>()
  useEffect(() => {
    if (!_.isEmpty(defaultValues)) {
      Object.keys(defaultValues).forEach(key => form[key] = defaultValues[key]);
    }
  }, [defaultValues])
  console.log('defaultValues', form)
  const setValue = (field: keyof FormInput, value: any) => {
    setForm({
      ...form,
      [field]: value
    })
    setErrors({
      ...errors,
      [field]: undefined
    } as any)
  }

  const submit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    setLoading(true)
    //const [response, error] = await onSubmit(form)

    /** if (error) {
       let formErrors: any = {}
       error?.response?.data?.errors?.forEach(error => {
         formErrors[error.field as keyof Errors] = [error?.message]
       })
 
       setErrors(formErrors)
     } else {
       onSuccess?.({
         response: response!,
         form
       })
     }
  */
    setLoading(false)

    //return [response, error]
  }

  const resetForm = () => {
   // setForm(defaultValues || {})
  }
  console.log('REST', form);
  return {
    form,
    errors,
    submit,
    loading,
    setForm,
    setValue,
    resetForm
  }
}
