import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import { FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';

import CustomRadio from '../CustomRadio/CustomRadio';

import useStyles from './styles';

const SelectYourPosition = React.memo(({ positions, value, onChange }) => {
    const classes = useStyles();

    return (
        <>
            {positions && positions.length > 0 &&
            <FormControl component="fieldset" className={classes.root} >
                <FormLabel className={classes.label} color='secondary' component="legend" >
                    Select your position
                </FormLabel >

                <RadioGroup className={classes.formControl}
                            defaultValue={positions[0].name}
                            aria-label="position"
                            name="customized-radios"
                >
                    {positions.map((position) => {
                        return <FormControlLabel
                            key={position.id}
                            name={position.name}
                            id={position.id}
                            className={classes.formControl}
                            value={position.name}
                            checked={value === position.id}
                            onChange={() => onChange(position.id)}
                            control={<CustomRadio />} label={position.name} />;
                    })}
                </RadioGroup >
            </FormControl >}
        </ >
    );

});

export default SelectYourPosition;
