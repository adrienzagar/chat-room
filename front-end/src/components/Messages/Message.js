import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, content }) => (
  <div className="message">
    <div className="message__author">{author}</div>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
