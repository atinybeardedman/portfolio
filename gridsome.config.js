// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Sean Dickinson",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content/projects",
        path: "*.md",
        typeName: "Project",
        pathPrefix: '/projects',
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-svg',
      options: {
      // default options below
      goesBothWays: true,
      svgo: [
        {
          removeTitle: false
        },
        {
          prefixIds: {
            prefix: (_, {path}) => basename(path, '.svg'),
            delim: '-',
          },
        },
        {
          removeDesc: false
        },
        {
          removeViewBox: false,
        },
        {
          sortAttrs: true,
        }
        ],
      }
    }
  ],
  templates: {
    Project: [
      {
        path: "/projects/:title",
        component: "~/templates/Project.vue",
      },
    ],
    Tag: [
      {
        path: "/tag/:title",
        componenent: "~/templates/Tag.vue",
      },
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },
};
