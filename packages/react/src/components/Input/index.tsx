import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import {
  FormContainer,
  InputContainer,
  InputStyle,
  InputWrapper,
} from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  label?: string
  sizeInput: 'login' | 'search'
  password?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, sizeInput, password = false }) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

    return (
      <>
        {password ? (
          <FormContainer variant="outlined" size={sizeInput}>
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{
                '&.Mui-focused': { color: '#006B54' },
              }}
              error={!!error}
            >
              {label}
            </InputLabel>
            <OutlinedInput
              sx={{
                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                  { borderColor: '#006B54' },
              }}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
              error={!!error}
            />
            <FormHelperText
              sx={{ margin: '0.3rem 0', fontSize: '1rem' }}
              error={!!error}
            >
              {error}
            </FormHelperText>
          </FormContainer>
        ) : (
          <InputWrapper>
            <InputContainer>
              <InputStyle
                id="outlined-basic"
                label={label}
                variant="outlined"
                error={!!error}
                size={sizeInput}
              />
            </InputContainer>
            {error && <p>{error}</p>}
          </InputWrapper>
        )}
      </>
    )
  },
)

Input.displayName = 'Input'
