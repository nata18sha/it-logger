import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    tech: PropTypes.shape({}).isRequired,
};
 
const TechItem = ({tech}) => {
    return <li className='collection-item'>
        <div>
            {tech.firstName} {tech.lastName}
            <a href='#!' className='secondary-content'>
                <i className='material-icons grey-text'>delete</i>
            </a>
        </div>
    </li>;
}

TechItem.propTypes = propTypes;

export default TechItem;