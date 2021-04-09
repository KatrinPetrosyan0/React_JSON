import React, { useRef } from 'react';
import { useFieldState, useForm, useFormState } from 'react-form-hooks';
import './styles.css';


function Demo2() {
  const initialValues = useRef({ name: 'Katrin' }).current
  const form = useForm({ initialValues })
  const formState = useFormState(form)
  const { anyError, anyDirty, anyTouched} = formState

  const firstName = useFieldState(form, 'name.firstName')
  const lastName = useFieldState(form, 'name.lastName')
  const ageState = useFieldState(form, 'age', undefined, {
    validate: value => value < 18 && 'age should be above 18',
  })
  const cityState = useFieldState(form, 'location.city')
  const countryState = useFieldState(form, 'location.country')
  const adressState = useFieldState(form, 'location.adress')
  const emailState = useFieldState(form, 'email', undefined, {
    validate: val => !/^\S+@\S+\.\S+$/.test(val) && 'should be a valid email',
  })
  
  const onSubmit = values => alert(JSON.stringify(values, null, 2))

  return (
    <form onSubmit={form.formActions.submitHandler(onSubmit)}>     
      <div>
        <label htmlFor="name.firstName">First Name</label>
        <input
          id="name.firstName"
          onChange={e =>
            form.fieldActions.changeFieldValue(
              'name.firstName',
              e.target.value
            )
          }
          onBlur={() => form.fieldActions.touchField('name.firstName')}
          value={firstName.value || ''}
        />
      </div>

      <div>
        <label htmlFor="name.lastName">Last Name</label>
        <input
          id="name.lastName"
          onChange={e =>
            form.fieldActions.changeFieldValue(
              'name.lastName',
              e.target.value
            )
          }
          onBlur={() => form.fieldActions.touchField('name.lastName')}
          value={lastName.value || ''}
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={e =>
            form.fieldActions.changeFieldValue(
              'age',
              e.target.value.toUpperCase()
            )
          }
          onBlur={() => form.fieldActions.touchField('age')}
          value={ageState.value || ''}
        />
      </div>

      <div>
        <label htmlFor="location.city">City</label>
        <input
          id="location.city"
          type="text"
          onChange={e =>
            form.fieldActions.changeFieldValue(
              'location.city',
              e.target.value
            )
          }
          onBlur={() => form.fieldActions.touchField('location.city')}
          value={cityState.value || ''}
        />
      </div>

      <div>
        <label htmlFor="location.country">Country</label>
        <input
          id="location.country"
          type="text"
          onChange={e =>
            form.fieldActions.changeFieldValue(
              'location.country',
              e.target.value
            )
          }
          onBlur={() => form.fieldActions.touchField('location.country')}
          value={countryState.value || ''}
        />
      </div>

      <div>
        <label htmlFor="location.adress">Adress</label>
        <input
          id="location.adress"
          type="text"
          onChange={e =>
            form.fieldActions.changeFieldValue(
              'location.adress',
              e.target.value
            )
          }
          onBlur={() => form.fieldActions.touchField('location.adress')}
          value={adressState.value || ''}
        />
      </div>


      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={e =>
            form.fieldActions.changeFieldValue('email', e.target.value)
          }
          onBlur={() => form.fieldActions.touchField('email')}
          value={emailState.value || ''}
        />
      </div>

      {anyError && <div>Form Error</div>}
      {anyDirty}
      {anyTouched && <div>Form Touched</div>}
      <button type="submit">Submit</button>
      <button onClick={() => form.formActions.resetFormValues()}>Reset</button>
    </form>
  )
}

export default Demo2;