import React from 'react';

const GH_LINK = "http://github.com/rottney"

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div>
					Stay tuned for updates, 
					including best of 3 and multi-player modes...
				</div>
				<a href={GH_LINK} target="_blank">
					Check out my other projects
				</a>
			</div>
		);
	}
}

export default Footer;
