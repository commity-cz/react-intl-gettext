'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buildMessage = function buildMessage(copyDefaultTranslation) {
  return function (_ref) {
    var description = _ref.description,
        id = _ref.id,
        defaultMessage = _ref.defaultMessage,
        translatedMessage = _ref.translatedMessage;
    return [description ? '#. ' + description : null, '# ' + id, 'msgctxt "' + id + '"', 'msgid "' + defaultMessage + '"', 'msgstr "' + (copyDefaultTranslation ? translatedMessage || defaultMessage : '') + '"', ''].join('\n');
  };
};

exports.default = function (messages, copyDefaultTranslation) {
  var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var body = messages.map(buildMessage(copyDefaultTranslation)).join('\n');
  return header ? [header, '', body].join('\n') : body;
};