import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeadsAd extends Component {

  componentDidMount() {
    const { pId } = this.props;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'teadstag'
    script.src = `//a.teads.tv/page/${pId}/tag`;
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    try {
      document.body.removeChild(document.getElementById("teadstag"));
      document.body.removeChild(document.getElementById("teadsusersync"));
      window.teads.pageInstance.clearInstances();
      delete window.teads.page;
      delete window.teadsscript;
      document.querySelectorAll(".teads-inline-style").forEach(function(e) {e.remove()});
      document.querySelectorAll("script[src='//a.teads.tv/media/format/v3/teads-format.min.js']").forEach(function(e){e.remove()})
    } catch (e) {}
  }

  render() {
    const { className } = this.props;
    return <div id="teads-experience" className={className} />;
  }
}

TeadsAd.propTypes = {
  className: PropTypes.string,
  pId: PropTypes.number.isRequired,
};

TeadsAd.defaultProps = {
  className: null,
};

export default TeadsAd;
