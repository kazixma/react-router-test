import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router-dom';
class TestPage extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }
    render () {
        return (
            <div>
                <button onClick={() => { this.props.history.push('/test/1')}}>
                    { this.props.match.params.id }
                </button> 
            </div>
        )
    }
}

TestPage.propTypes = {

}

export default withRouter(TestPage);