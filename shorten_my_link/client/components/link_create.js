import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error : '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.longlink.value, (error) => {
      if (error) {
        this.setState({ error: 'Please enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.longlink.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="">Link to shorten</label>
          <input ref="longlink" type="text" className="form-control"/>
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
