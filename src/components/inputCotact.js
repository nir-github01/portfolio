import React from 'react'

const InputCotact = ({id, placeholder, name, contactForm}) => {
  return (
    <div>
        <input
          type='text'
          name={name}
          id={id}
          className={'form-control text-sm '+ contactForm}
          placeholder={placeholder}
        />

    </div>
  )
}

export default InputCotact;