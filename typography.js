module.exports = ({ theme }) => ({
  DEFAULT: {
    css: {
      // Prefer design tokens so light/dark/storm stay in sync with marketing + radar.
      '--tw-prose-body': 'var(--design-body)',
      '--tw-prose-headings': 'var(--design-ink)',
      '--tw-prose-links': 'var(--design-ink)',
      '--tw-prose-links-hover': 'var(--design-ink)',
      '--tw-prose-links-underline': 'var(--design-mid)',
      '--tw-prose-bold': 'var(--design-ink)',
      '--tw-prose-counters': 'var(--design-mid)',
      '--tw-prose-bullets': 'var(--design-line)',
      '--tw-prose-hr': 'var(--design-line)',
      '--tw-prose-quotes': 'var(--design-ink)',
      '--tw-prose-quote-borders': 'var(--design-line)',
      '--tw-prose-captions': 'var(--design-secondary)',
      '--tw-prose-code': 'var(--design-ink)',
      '--tw-prose-code-bg': 'var(--design-bg-lift)',
      '--tw-prose-code-ring': 'var(--design-line)',
      '--tw-prose-th-borders': 'var(--design-line)',
      '--tw-prose-td-borders': 'var(--design-line)',

      // Tokens already flip under html.dark / html.storm — keep invert aligned.
      '--tw-prose-invert-body': 'var(--design-body)',
      '--tw-prose-invert-headings': 'var(--design-ink)',
      '--tw-prose-invert-links': 'var(--design-ink)',
      '--tw-prose-invert-links-hover': 'var(--design-ink)',
      '--tw-prose-invert-links-underline': 'var(--design-mid)',
      '--tw-prose-invert-bold': 'var(--design-ink)',
      '--tw-prose-invert-counters': 'var(--design-mid)',
      '--tw-prose-invert-bullets': 'var(--design-line)',
      '--tw-prose-invert-hr': 'var(--design-line)',
      '--tw-prose-invert-quotes': 'var(--design-ink)',
      '--tw-prose-invert-quote-borders': 'var(--design-line)',
      '--tw-prose-invert-captions': 'var(--design-secondary)',
      '--tw-prose-invert-code': 'var(--design-ink)',
      '--tw-prose-invert-code-bg': 'var(--design-bg-lift)',
      '--tw-prose-invert-code-ring': 'var(--design-line)',
      '--tw-prose-invert-th-borders': 'var(--design-line)',
      '--tw-prose-invert-td-borders': 'var(--design-line)',

      // Base — design-text-size
      color: 'var(--tw-prose-body)',
      fontSize: 'var(--design-text-size)',
      lineHeight: '1.5',

      // Layout
      '> *': {
        maxWidth: theme('maxWidth.2xl'),
        marginLeft: 'auto',
        marginRight: 'auto',
        '@screen lg': {
          maxWidth: theme('maxWidth.3xl'),
          marginLeft: `calc(50% - min(50%, ${theme('maxWidth.lg')}))`,
          marginRight: `calc(50% - min(50%, ${theme('maxWidth.lg')}))`,
        },
      },

      // Text
      p: {
        marginTop: theme('spacing.4'),
        marginBottom: theme('spacing.4'),
      },
      '[class~="lead"]': {
        fontSize: 'var(--design-text-size)',
        lineHeight: '1.5',
      },

      // Lists
      ol: {
        listStyleType: 'decimal',
        marginTop: theme('spacing.3'),
        marginBottom: theme('spacing.3'),
        paddingLeft: '1.625rem',
      },
      'ol[type="A"]': {
        listStyleType: 'upper-alpha',
      },
      'ol[type="a"]': {
        listStyleType: 'lower-alpha',
      },
      'ol[type="A" s]': {
        listStyleType: 'upper-alpha',
      },
      'ol[type="a" s]': {
        listStyleType: 'lower-alpha',
      },
      'ol[type="I"]': {
        listStyleType: 'upper-roman',
      },
      'ol[type="i"]': {
        listStyleType: 'lower-roman',
      },
      'ol[type="I" s]': {
        listStyleType: 'upper-roman',
      },
      'ol[type="i" s]': {
        listStyleType: 'lower-roman',
      },
      'ol[type="1"]': {
        listStyleType: 'decimal',
      },
      ul: {
        listStyleType: 'disc',
        marginTop: theme('spacing.3'),
        marginBottom: theme('spacing.3'),
        paddingLeft: '2rem',
      },
      li: {
        marginTop: theme('spacing.1'),
        marginBottom: theme('spacing.1'),
      },
      ':is(ol, ul) > li': {
        paddingLeft: theme('spacing.2'),
      },
      'ol > li::marker': {
        fontWeight: '400',
        color: 'var(--tw-prose-counters)',
      },
      'ul > li::marker': {
        color: theme('colors.zinc.600'),
        fontWeight: '500',
        fontSize: '1.1em',
      },
      '> ul > li p': {
        marginTop: theme('spacing.1'),
        marginBottom: theme('spacing.1'),
      },
      '> ul > li > *:first-child': {
        marginTop: theme('spacing.2'),
      },
      '> ul > li > *:last-child': {
        marginBottom: theme('spacing.2'),
      },
      '> ol > li > *:first-child': {
        marginTop: theme('spacing.2'),
      },
      '> ol > li > *:last-child': {
        marginBottom: theme('spacing.2'),
      },
      'ul ul, ul ol, ol ul, ol ol': {
        marginTop: theme('spacing.3'),
        marginBottom: theme('spacing.3'),
      },

      // Horizontal rules
      hr: {
        borderColor: 'var(--tw-prose-hr)',
        borderTopWidth: 1,
        marginTop: theme('spacing.16'),
        marginBottom: theme('spacing.16'),
        maxWidth: 'none',
        marginLeft: `calc(-1 * ${theme('spacing.4')})`,
        marginRight: `calc(-1 * ${theme('spacing.4')})`,
        '@screen sm': {
          marginLeft: `calc(-1 * ${theme('spacing.6')})`,
          marginRight: `calc(-1 * ${theme('spacing.6')})`,
        },
        '@screen lg': {
          marginLeft: `calc(-1 * ${theme('spacing.8')})`,
          marginRight: `calc(-1 * ${theme('spacing.8')})`,
        },
      },

      // Quotes
      blockquote: {
        fontWeight: '500',
        fontStyle: 'italic',
        color: 'var(--tw-prose-quotes)',
        borderLeftWidth: '0.25rem',
        borderLeftColor: 'var(--tw-prose-quote-borders)',
        quotes: '"\\201C""\\201D""\\2018""\\2019"',
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.8'),
        paddingLeft: theme('spacing.5'),
      },
      'blockquote p:first-of-type::before': {
        content: 'open-quote',
      },
      'blockquote p:last-of-type::after': {
        content: 'close-quote',
      },

      // Headings — title size (h1) vs body size (h2+); weight 500 like radar titles
      h1: {
        color: 'var(--tw-prose-headings)',
        fontWeight: '500',
        fontSize: 'var(--design-text-title)',
        lineHeight: '1.25',
        marginBottom: theme('spacing.2'),
      },
      h2: {
        color: 'var(--tw-prose-headings)',
        fontWeight: '500',
        fontSize: 'var(--design-text-size)',
        lineHeight: '1.5',
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.2'),
      },
      h3: {
        color: 'var(--tw-prose-headings)',
        fontSize: 'var(--design-text-size)',
        lineHeight: '1.5',
        fontWeight: '500',
        marginTop: theme('spacing.10'),
        marginBottom: theme('spacing.2'),
      },
      h5: {
        color: 'var(--tw-prose-captions)',
        fontSize: 'var(--design-text-compact)',
        lineHeight: '1.35',
      },
      'h5 a': {
        color: 'var(--tw-prose-captions)',
        textDecoration: 'none',
        '&:hover': {
          color: 'var(--tw-prose-body)',
        },
      },

      // Media
      'img, video, figure': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.8'),
      },
      'figure > *': {
        marginTop: '0',
        marginBottom: '0',
      },
      figcaption: {
        color: 'var(--tw-prose-captions)',
        fontSize: 'var(--design-text-compact)',
        lineHeight: '1.35',
        marginTop: theme('spacing.2'),
      },

      // Tables
      table: {
        width: '100%',
        tableLayout: 'auto',
        textAlign: 'left',
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.8'),
        lineHeight: theme('lineHeight.6'),
      },
      thead: {
        borderBottomWidth: '1px',
        borderBottomColor: 'var(--tw-prose-th-borders)',
      },
      'thead th': {
        color: 'var(--tw-prose-headings)',
        fontWeight: '600',
        verticalAlign: 'bottom',
        paddingRight: theme('spacing.2'),
        paddingBottom: theme('spacing.2'),
        paddingLeft: theme('spacing.2'),
      },
      'thead th:first-child': {
        paddingLeft: '0',
      },
      'thead th:last-child': {
        paddingRight: '0',
      },
      'tbody tr': {
        borderBottomWidth: '1px',
        borderBottomColor: 'var(--tw-prose-td-borders)',
      },
      'tbody tr:last-child': {
        borderBottomWidth: '0',
      },
      'tbody td': {
        verticalAlign: 'baseline',
      },
      tfoot: {
        borderTopWidth: '1px',
        borderTopColor: 'var(--tw-prose-th-borders)',
      },
      'tfoot td': {
        verticalAlign: 'top',
      },
      ':is(tbody, tfoot) td': {
        paddingTop: theme('spacing.2'),
        paddingRight: theme('spacing.2'),
        paddingBottom: theme('spacing.2'),
        paddingLeft: theme('spacing.2'),
      },
      ':is(tbody, tfoot) td:first-child': {
        paddingLeft: '0',
      },
      ':is(tbody, tfoot) td:last-child': {
        paddingRight: '0',
      },

      // Inline elements — body links use .design-link (../radar design/link)
      a: {
        borderBottom: 'none',
        fontWeight: 'inherit',
      },
      'a.no-underline, a.no-underline:hover': {
        borderBottom: 'none',
        textDecoration: 'none',
      },
      'h5 a, h5 a:hover': {
        color: 'var(--tw-prose-captions)',
        textDecoration: 'none',
        borderBottom: 'none',
        fontWeight: '400',
      },
      ':is(h1, h2, h3) a': {
        fontWeight: 'inherit',
      },
      strong: {
        color: 'var(--tw-prose-bold)',
        fontWeight: '600',
      },
      ':is(a, blockquote, thead th) strong': {
        color: 'inherit',
      },
      code: {
        color: 'var(--tw-prose-code)',
        borderRadius: theme('borderRadius.lg'),
        paddingTop: theme('padding.1'),
        paddingRight: theme('padding[1.5]'),
        paddingBottom: theme('padding.1'),
        paddingLeft: theme('padding[1.5]'),
        boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
        backgroundColor: 'var(--tw-prose-code-bg)',
        fontSize: 'var(--design-text-compact)',
        lineHeight: '1.35',
      },
      ':is(a, h1, h2, h3, blockquote, thead th) code': {
        color: 'inherit',
      },
      'h2 code': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
      },
      'h3 code': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
      },

      // Overrides
      ':is(h1, h2, h3) + *': {
        marginTop: '0',
      },
      '> :first-child': {
        marginTop: '0 !important',
      },
      '> :last-child': {
        marginBottom: '0 !important',
      },
    },
  },
  invert: {
    css: {
      '--tw-prose-body': 'var(--tw-prose-invert-body)',
      '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
      '--tw-prose-links': 'var(--tw-prose-invert-links)',
      '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
      '--tw-prose-links-underline': 'var(--tw-prose-invert-links-underline)',
      '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
      '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
      '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
      '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
      '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
      '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
      '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
      '--tw-prose-code': 'var(--tw-prose-invert-code)',
      '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
      '--tw-prose-code-ring': 'var(--tw-prose-invert-code-ring)',
      '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
      '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
    },
  },
})
