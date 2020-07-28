import React from 'react';

import Alert from '@material-ui/lab/Alert';

const Error = props => {
	return (
		<div className="error"><Alert severity="error">{props.error}</Alert></div>
	);
}

export default Error;