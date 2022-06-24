import React, {useEffect} from 'react'
import { StaticQuery, graphql } from "gatsby"

function Blog() {
    
    return (
        <StaticQuery
            query={graphql` 
                query Blog {
                    allFile(
                    filter: {sourceInstanceName: {eq: "blog"}}
                    sort: {order: DESC, fields: childrenMarkdownRemark___frontmatter___date}
                    ) {
                    edges {
                        node {
                        id
                        childMarkdownRemark {
                            frontmatter {
                            blogTemplateKey
                            featuredimage
                            featuredpost
                            date(formatString: "d MMMM y", locale: "it")
                            category
                            link
                            title
                            }
                        }
                        }
                    }
                    }
                }
            `}
            render={data => {
                return (
                    <div className="container-faq-fluid">
                        <article className="first-article">
                            <img className="article-image" src={data.allFile.edges[0].node.childMarkdownRemark.frontmatter.featuredimage}/>
                            <div className="article-content">
                                <p className="sigle-title">
                                    <img  src="/sigle.svg"/>
                                    {data.allFile.edges[0].node.childMarkdownRemark.frontmatter.category}
                                </p>
                                <p className="title">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.title}</p>
                                <p className="date">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.date}</p>
                                <a target="_blank" href={data.allFile.edges[0].node.childMarkdownRemark.frontmatter.link} className='button'>Read more</a>
                            </div>
                        </article>
                        <div className="other-articles">
                            {data.allFile.edges.map((node, index) => (
                                index == 0 ? null :
                                (
                                    <article className="normal-article">
                                        <img className="article-image" src={node.node.childMarkdownRemark.frontmatter.featuredimage}/>
                                        <div className="article-content">
                                            <p className="sigle-title">
                                                <img  src="/sigle.svg"/>
                                                {node.node.childMarkdownRemark.frontmatter.category}
                                            </p>
                                            <p className="title">{node.node.childMarkdownRemark.frontmatter.title}</p>
                                            <p className="date">{node.node.childMarkdownRemark.frontmatter.date}</p>
                                            <a target="_blank" href={node.node.childMarkdownRemark.frontmatter.link} className='button'>Read more</a>
                                        </div>
                                    </article>
                                )
                            ))}
                        </div>
                    </div>
                )
            }}
        />
    )
}

export default Blog