import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import logo from '../../img/logo.svg'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/profiles">Developers</Link>
			</li>
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link to="/posts">
					<i className="fas fa-user" /> <span className="hide-sm">Posts</span>
				</Link>
			</li>
			<li>
				<Link
					onClick={logout}
					to="#!">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
				</Link>
			</li>
		</ul>
	)

	const guestLinks = (
		<ul>
			<li>
				<Link to="/profiles">Developers</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	)

	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<img
						src={logo}
						alt="slice"
					/>
				</Link>
			</h1>
			{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
		</nav>
	)
}

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
