(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.urlSlug = factory());
})(this, (function () { 'use strict';

  const INVALID_SEPARATOR = /[^-._~!$&'()*+,;=]/;

  const CAMELCASE_REGEXP_PATTERN = '(?:[a-z](?=[A-Z])|[A-Z](?=[A-Z][a-z]))';

  function validate (options, extra) {
    const camelCase = options.camelCase;

    if (camelCase !== undefined && typeof camelCase !== 'boolean') {
      throw new Error('camelCase must be a boolean: "' + camelCase + '".')
    }

    const separator = options.separator;
    extra = extra || {};

    if (
      separator !== undefined &&
      !('separator' in extra && separator === extra.separator)
    ) {
      if (typeof separator !== 'string') {
        throw new Error(
          'separator must be a string' +
          ('separator' in extra ? ' or ' + extra.separator : '') + ': "' +
          separator + '".'
        )
      } else if (INVALID_SEPARATOR.test(separator)) {
        throw new Error(
          'separator has an invalid character: "' +
          separator.match(INVALID_SEPARATOR)[0] + '".'
        )
      }
    }

    const transformer = options.transformer;

    if (
      transformer !== undefined &&
      transformer !== false &&
      typeof transformer !== 'function'
    ) {
      throw new Error(
        'transformer must be false or a function: "' +
        transformer + '".'
      )
    }
  }

  function replace (string, definitions) {
    for (let index = 0, length = string.length; index < length; index++) {
      const char = string[index];
      const replacement = definitions[char];

      if (replacement !== undefined) {
        string = string.substr(0, index) +
          replacement +
          string.substr(index + 1);

        const addedCharsCount = String(replacement).length - 1;

        index += addedCharsCount;
        length += addedCharsCount;
      }
    }

    return string
  }

  const LOWERCASE_TRANSFORMER = function (fragments, separator) {
    return fragments.join(separator).toLowerCase()
  };

  const SENTENCECASE_TRANSFORMER = function (fragments, separator) {
    const sentence = fragments.join(separator);
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
  };

  const TITLECASE_TRANSFORMER = function (fragments, separator) {
    const buffer = [];
    for (let index = 0; index < fragments.length; index++) {
      buffer.push(
        fragments[index].charAt(0).toUpperCase() +
        fragments[index].slice(1).toLowerCase()
      );
    }
    return buffer.join(separator)
  };

  const UPPERCASE_TRANSFORMER = function (fragments, separator) {
    return fragments.join(separator).toUpperCase()
  };

  var transformers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LOWERCASE_TRANSFORMER: LOWERCASE_TRANSFORMER,
    SENTENCECASE_TRANSFORMER: SENTENCECASE_TRANSFORMER,
    TITLECASE_TRANSFORMER: TITLECASE_TRANSFORMER,
    UPPERCASE_TRANSFORMER: UPPERCASE_TRANSFORMER
  });

  // eslint-disable-next-line no-misleading-character-class
  const COMBINING_CHARS = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF]+/g;

  const CONVERT = /[A-Za-z\d]+/g;

  const CONVERT_CAMELCASE = new RegExp(
    '[A-Za-z\\d]*?' + CAMELCASE_REGEXP_PATTERN + '|[A-Za-z\\d]+',
    'g'
  );

  function convert (string, options) {
    options = options || {};

    if (process.env.NODE_ENV !== 'production') {
      validate(options);
    }

    const camelCase = options.camelCase !== undefined
      ? options.camelCase
      : true;

    const separator = options.separator !== undefined
      ? options.separator
      : '-';

    const transformer = options.transformer !== undefined
      ? options.transformer
      : LOWERCASE_TRANSFORMER;

    const fragments = (
      options.dictionary
        ? replace(String(string), options.dictionary)
        : String(string)
    )
      .normalize('NFKD')
      .replace(COMBINING_CHARS, '')
      .match(camelCase ? CONVERT_CAMELCASE : CONVERT);

    if (!fragments) {
      return ''
    }

    return transformer
      ? transformer(fragments, separator)
      : fragments.join(separator)
  }

  const REVERT = /[^-._~!$&'()*+,;=]+/g;

  const REVERT_CAMELCASE = new RegExp(
    '[^-._~!$&\'()*+,;=]*?' + CAMELCASE_REGEXP_PATTERN + '|[^-._~!$&\'()*+,;=]+',
    'g'
  );

  const REVERT_CAMELCASE_ONLY = new RegExp(
    '.*?' + CAMELCASE_REGEXP_PATTERN + '|.+',
    'g'
  );

  function revert (slug, options) {
    options = options || {};

    if (process.env.NODE_ENV !== 'production') {
      validate(options, { separator: null });
    }

    const camelCase = options.camelCase !== undefined
      ? options.camelCase
      : false;

    const separator = options.separator;

    const transformer = options.transformer !== undefined
      ? options.transformer
      : false;

    let fragments;
    slug = String(slug);

    /* Determine which method will be used split the slug */

    if (separator === '') {
      fragments = camelCase ? slug.match(REVERT_CAMELCASE_ONLY) : [String(slug)];
    } else if (typeof separator === 'string') {
      fragments = slug.split(separator);
    } else {
      fragments = slug.match(camelCase ? REVERT_CAMELCASE : REVERT);
    }

    if (!fragments) {
      return ''
    }

    return transformer ? transformer(fragments, ' ') : fragments.join(' ')
  }

  const urlSlug = function (string, options) {
    return convert(string, options)
  };

  for (const transformer in transformers) {
    urlSlug[transformer] = transformers[transformer];
  }

  urlSlug.convert = convert;
  urlSlug.revert = revert;

  return urlSlug;

}));
