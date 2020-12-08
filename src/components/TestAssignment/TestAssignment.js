import React from 'react';
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const TestAssignment = () => {
    const classes = useStyles();

    return (
        <Container component='section' maxWidth={false} className={classes.root}  >
            <div>

            </div>
        </Container >
    );
};

export default TestAssignment;
