// Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Private Info</p>
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.authenticated ? 
                <WrappedComponent {...props} /> : 
                <p>Log in to view the info</p>
            }
        </div>
    );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<Info info="This is the info" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo info="This are the details." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo authenticated={!true} info="These are the details." />, document.getElementById('app'));