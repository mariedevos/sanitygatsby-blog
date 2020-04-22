export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea012ce08fbde2de346a1b7',
                  title: 'Sanity Studio',
                  name: 'sanitygatsby-blog-studio',
                  apiId: '088e6a50-4c97-4e0b-8756-d90f7507d54c'
                },
                {
                  buildHookId: '5ea012ce17e36c38b8b3d0d3',
                  title: 'Blog Website',
                  name: 'sanitygatsby-blog',
                  apiId: 'cc093749-87ef-4fdd-bffa-68bf8ae4c9c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariedevos/sanitygatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanitygatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
