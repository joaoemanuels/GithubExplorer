const ErrorMessage = ({ message, className = "" }) =>
	!message ? null : <div className=""> {message}</div>;

export default ErrorMessage;
