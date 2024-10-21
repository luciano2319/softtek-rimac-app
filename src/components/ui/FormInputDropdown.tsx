import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, MenuItem, Select } from '@mui/material';

import { FormInputDropdownProps } from '../../shared/interfaces';
import { grey } from '@mui/material/colors';



const FormInputDropdown = ({ name, control, sx, options }: FormInputDropdownProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={(renderProps) => (
                <FormControl
                    sx={{ minWidth: 120 }}
                >
                    <Select
                        onChange={renderProps.field.onChange}
                        value={renderProps.field.value}
                        size='small'
                        sx={{
                            ...sx,
                            '& label': {
                                color: grey[900],
                            },
                            '& label.Mui-focused': {
                                color: grey[900],
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: grey[900],
                                },
                                '&:hover fieldset': {
                                    borderColor: grey[900],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: grey[900],
                                },
                            },
                        }}
                    >
                        {
                            options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>
            )}
        />
    )
}

export default FormInputDropdown