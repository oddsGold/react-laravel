export const required = (value) =>
    (value || typeof value === 'number' ? undefined : 'Required')

export const passwordsMustMatch = (value, allValues) =>
    value !== allValues.password_confirmation ?
        'Пароли не совпадают' :
        undefined

export const maxLength = (max) => (value) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = (min) => (value) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

