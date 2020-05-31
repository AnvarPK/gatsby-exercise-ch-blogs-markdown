import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
            {
        allMarkdownRemark {
            edges {
            node {
                fields{
                    slug
                }
                frontmatter {
                title
                date
                }
                excerpt
                timeToRead
            }
            }
        }
            }
    `)

    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ul className={blogStyles.posts}>
                    {
                        data.allMarkdownRemark.edges.map(post => (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${post.node.fields.slug}`} >
                                    <h3>
                                        {post.node.frontmatter.title}
                                    </h3>
                                    <strong>{post.node.frontmatter.date}</strong>
                                    <p>{post.node.excerpt}</p>
                                    <span>Time to read: {post.node.timeToRead}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </Layout>
        </div>
    )
}

export default BlogPage;