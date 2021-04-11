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
        path: "**/*.md",
        typeName: "Project",
        pathPrefix: '/Solutions',
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
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-W6TS8HB',
        enabled: true,
        debug: false
      }
    }
  ],
  templates: {
    Project: [
      {
        path: "/solutions/:title",
        component: "~/templates/Project.vue",
      },
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        [
          "gridsome-remark-figure-caption",
            {
              // All the options here are optional
              figureClassName: "md-figure",
              imageClassName: "md-figure-image",
              captionClassName: "md-figure-caption",
            },
        ]
      ],
    },
  },
};
