import React from 'react';

const GH_LINK = "https://github.com/rottney/rock-paper-scissors";

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div>
					Stay tuned for updates, 
					including best of 3 and multi-player modes...
				</div>
				<a href={GH_LINK} target="_blank">
					See the source code
				</a>
			</div>
		);
	}
}

export default Footer;
