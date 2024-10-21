import { Controller } from 'react-hook-form'
import { grey } from '@mui/material/colors'
import { TextField } from '@mui/material'

import { FormInputProps } from '../../shared/interfaces'

const FormInputText = ({ name, control, label, sx }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={(renderProps) => (
                <TextField
                    size='small'
                    onChange={renderProps.field.onChange}
                    value={renderProps.field.value}
                    error={!!renderProps.fieldState.error}
                    helperText={renderProps.fieldState.error?.message ?? null}
                    fullWidth
                    label={label}
                    variant='outlined'
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
                />
            )}
        />
    )
}

export default FormInputText