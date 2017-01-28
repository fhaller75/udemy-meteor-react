import React, { Component } from 'react';

class BinsShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;

    Meteor.call('bins.share', this.props.bin, email);
  }

  renderSharedList() {
    return this.props.bin.sharedWith.map(email => {
      return <button
        className="btn btn-default"
        key={email}>
          {email}
        </button>
    });
  }

  render() {
    return (
      <footer className="bins-share">
        <div className="input-group">
          <input ref="email" className="form-control"/>
          <div className="input-group-btn">
            <button 
              onClick={this.onShareClick.bind(this)} 
              className="btn btn-default">
              Share bin
            </button>
          </div>
        </div>
        <div>Shared With:</div>
        <div className="btn-group">
          {this.renderSharedList()}
        </div>
      </footer>
    );
  }
}

export default BinsShare;
