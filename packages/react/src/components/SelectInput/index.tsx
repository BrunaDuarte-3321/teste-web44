import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React from 'react'
import { styled } from '../../styles'

export const FormContainer = styled(FormControl, {
  width: '100%',
  maxWidth: '$64',
})

interface SelectProps {
  options: string[]
  label?: string
  checkbox?: boolean
  selectAll?: string
}

export const SelectInput = ({
  options,
  label,
  checkbox = false,
  selectAll = 'Select All',
}: SelectProps) => {
  const [option, setOption] = React.useState<string[]>([])

  const isAllSelected =
    options && options?.length > 0 && option.length === options?.length

  const OptionsValue = options && options.map((item) => item)

  const handleChange = (event: SelectChangeEvent<typeof option>) => {
    const {
      target: { value },
    } = event

    if (value.includes('all')) {
      setOption(
        (option && option.length) === (options && options.length)
          ? []
          : OptionsValue!,
      )

      return
    }
    setOption(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <>
      {checkbox ? (
        <FormContainer>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ '&.Mui-focused': { color: '#006B54' } }}
          >
            {label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            multiple
            value={option}
            label={label}
            onChange={handleChange}
            defaultValue={option}
            renderValue={(selected) => selected.join(', ')}
            sx={{
              '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#006B54',
                },
            }}
          >
            <MenuItem value="all" sx={{ display: 'flex', gap: '.5rem' }}>
              <Checkbox
                checked={isAllSelected!}
                sx={{ '&.Mui-checked': { color: '#006B54' } }}
              />
              <ListItemText primary={selectAll} />
            </MenuItem>
            {options.map((item, index) => (
              <MenuItem key={index} value={item}>
                <Checkbox
                  checked={option.indexOf(item) > -1}
                  sx={{ '&.Mui-checked': { color: '#006B54' } }}
                />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormContainer>
      ) : (
        <FormContainer>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ '&.Mui-focused': { color: '#006B54' } }}
          >
            {label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option}
            label={label}
            onChange={handleChange}
            defaultValue={option}
            sx={{
              '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#006B54',
                },
            }}
          >
            {options.map((item, index) => (
              <MenuItem key={index} value={item}>
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormContainer>
      )}
    </>
  )
}
