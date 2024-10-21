import { Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material'
import { grey } from '@mui/material/colors';

import { FormInputProps } from '../../shared/interfaces'

const FormCheckbox = ({ name, label, control, sx }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={(renderProps) => (
                <FormControl
                    error={!!renderProps.fieldState.error}
                    sx={sx}
                >
                    <FormControlLabel
                        control={<Checkbox
                                    value={renderProps.field.value}
                                    onChange={renderProps.field.onChange}
                                    // required={required}
                                    sx={{
                                        color: grey[900],
                                        '&.Mui-checked': {
                                            color: grey[900],
                                        },
                                    }}
                                />}
                        label={label}
                    />
                    {renderProps.fieldState.error && (
                        <FormHelperText>{renderProps.fieldState.error?.message}</FormHelperText>
                    )}
                </FormControl>
            )}
        />
    )
}

export default FormCheckbox