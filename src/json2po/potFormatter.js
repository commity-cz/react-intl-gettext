const buildMessage = copyDefaultTranslation => ({
  description,
  id,
  defaultMessage,
  translatedMessage,
}) =>
[
  description ? `#. ${description}` : null,
  `# ${id}`,
  `msgctxt "${id}"`,
  `msgid "${defaultMessage}"`,
  `msgstr "${copyDefaultTranslation ? translatedMessage || defaultMessage : ''}"`,
  '',
].join('\n')

export default (messages, copyDefaultTranslation, header = '') => {
  const body = messages.map(buildMessage(copyDefaultTranslation)).join('\n')
  return header ? [header, '', body].join('\n') : body
}
