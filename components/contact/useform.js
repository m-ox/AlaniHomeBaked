import {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailSend, setEmailSending] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
        setEmailSending(e)
    }

    //TODO UPDATE THE EMAILJS INFORMATION
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect( () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {

              emailjs.sendForm('gmail', 'TODO PLACEHOLDER', emailSend.target, 'TODO PLACEHOLDER')
          .then((result) => {
              console.log(result.text);
              setIsSubmitting(true);
              emailSend.target.reset()
          }, (error) => {
              console.log(error.text);
          })

            callback()
          }
        },
        [errors]
    )

    return {handleChange, values, handleSubmit, errors}
}

export default useForm