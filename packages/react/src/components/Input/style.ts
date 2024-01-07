import { FormControl, TextField } from '@mui/material'
import { styled } from '../../styles'

export const InputContainer = styled('div', {
  height: '$16',
  width: '100%',
  maxWidth: '$100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const InputStyle = styled(TextField, {
  width: '100%',

  variants: {
    size: {
      login: {
        maxWidth: '$100',
        height: '$16',
      },
      search: {
        maxWidth: '$50',
        height: '$16',
      },
    },

    hasError: {
      true: {
        borderColor: '$error',
      },
    },
  },

  '&& .MuiInputLabel-outlined.Mui-focused': {
    color: '$primary',
  },

  '&& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '$primary',
  },
})

export const InputWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '> p': {
    color: '$error',
    margin: 0,
    fontFamily: '$default',
  },
})

export const FormContainer = styled(FormControl, {
  width: '100%',

  variants: {
    size: {
      login: {
        maxWidth: '$100',
        height: '$16',
      },
      search: {
        maxWidth: '$50',
        height: '$16',
      },
    },

    hasError: {
      true: {
        borderColor: '$error',
      },
    },
  },
})
