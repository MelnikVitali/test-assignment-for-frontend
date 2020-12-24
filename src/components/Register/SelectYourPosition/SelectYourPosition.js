import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';
import CustomRadio from '../CustomRadio/CustomRadio';

import useStyles from './styles';

const SelectYourPosition = () => {
    const classes = useStyles();

    return (
        <FormControl component="fieldset"  className={classes.root}>
            <FormLabel className={classes.label} color='secondary' component="legend" >Select your position</FormLabel >
            <RadioGroup className={classes.formControl} defaultValue="Frontend developer" aria-label="position" name="customized-radios" >
                <FormControlLabel className={classes.formControl} value="Frontend developer" control={<CustomRadio />} label="Frontend developer" />
                <FormControlLabel className={classes.formControl} value="Backend developer" control={<CustomRadio />} label="Backend developer" />
                <FormControlLabel className={classes.formControl} value="Designer" control={<CustomRadio />} label="Designer" />
                <FormControlLabel className={classes.formControl} value="QA" control={<CustomRadio />} label="QA" />
            </RadioGroup >
        </FormControl >
    );
};

export default SelectYourPosition;
