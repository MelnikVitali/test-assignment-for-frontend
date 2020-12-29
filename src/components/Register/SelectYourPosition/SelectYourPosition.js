import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';
import CustomRadio from '../CustomRadio/CustomRadio';

import useStyles from './styles';

const SelectYourPosition = ({ positions, value, onChange, setFieldValue }) => {
    const classes = useStyles();
    // if (positions && positions.length > 0) {
    //     setFieldValue(positions[0].name);
    // }

    return (
        <>
            {positions && positions.length > 0  && <FormControl component="fieldset" className={classes.root} >
                <FormLabel className={classes.label} color='secondary' component="legend" >Select your
                    position</FormLabel >
                <RadioGroup className={classes.formControl} defaultValue={positions[0].name} aria-label="position"
                            name="customized-radios" >
                    {positions.map((position, index) => {
                        return <FormControlLabel
                            key={position.id}
                            name={position.name}
                            id={`${position.name}${position.id}`}
                            className={classes.formControl}
                            value={position.name}
                            // checked={position.name === value}
                            onChange={() => onChange(position.name)}
                            control={<CustomRadio />} label={position.name} />;
                    })}
                </RadioGroup >
                <div >Picked: {value}</div >
            </FormControl >}
        </ >
    );

};

export default SelectYourPosition;
