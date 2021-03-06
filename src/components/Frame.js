import React from 'react';
import PropTypes from 'prop-types';

import Devtools from './Devtools';

const Frame = (props) => {
    const { children } = props;
    return (
        <div>
            {children}
            {process.env.environment === 'develop'
                ? <Devtools />
                : null
            }
        </div>
    );
};

Frame.propTypes = {
    children: PropTypes.node,
};

Frame.defaultProps = {
    children: null,
};

export default Frame;
