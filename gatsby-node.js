const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)

    const res = await graphql(`
    {
        allMarkdownRemark {
            edges {
            node {
                fields {
                slug
                }
            }
            }
        }
        }
        `)

    res.data.allMarkdownRemark.edges.forEach(edge => {

        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

}