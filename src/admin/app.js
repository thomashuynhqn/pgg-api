export default {
  config: {
    // Configure field customizations for all article types
    contentManager: {
      editView: {
        components: {
          'api::article.article': {
            fields: {
              publishDate: {
                label: 'Scheduled Publication',
                placeholder: {
                  date: 'Publish date',
                  time: 'Publish time'
                },
                hint: 'Set when this article should be automatically published'
              }
            }
          },
          'api::article-ftk.article-ftk': {
            fields: {
              publishDate: {
                label: 'Scheduled Publication',
                placeholder: {
                  date: 'Publish date',
                  time: 'Publish time'
                },
                hint: 'Set when this FTK article should be automatically published'
              }
            }
          },
          'api::article-eco.article-eco': {
            fields: {
              publishDate: {
                label: 'Scheduled Publication',
                placeholder: {
                  date: 'Publish date',
                  time: 'Publish time'
                },
                hint: 'Set when this Eco article should be automatically published'
              }
            }
          }
        }
      }
    }
  },
  bootstrap() {},
};