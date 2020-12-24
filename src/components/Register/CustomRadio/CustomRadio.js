import React from 'react';

import { Radio } from '@material-ui/core';


import useStyles from './styles';

const CustomRadio = (props) => {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={[ classes.icon, classes.checkedIcon ].join(' ')} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
};

export default CustomRadio;
