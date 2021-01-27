/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        {
            allWpContentType {
                edges {
                    node {
                      id
                      uri
                      name
                    }
                }
            }
            allWpContentNode{
                edges{
                    node{
                        id
                        uri
                        nodeType  
                    }
                }
            }
        }
    `);


    const archives = result.data.allWpContentType.edges
    const projects = result.data.allWpContentNode.edges



    archives.forEach(archive => {
        if(archive.node.uri != null && archive.node.uri != "/" && archive.node.name != "client"){
            actions.createPage({
                path: archive.node.uri,
                component: require.resolve('./src/wp/wp_archive_template.js'),
                context:{
                    id: archive.node.id
                },
            })
        }
    })

    projects.forEach(project => {
        if(project.node.nodeType != "MediaItem" && project.node.nodeType != "Client"){
            actions.createPage({
                path: project.node.uri,
                component: require.resolve('./src/wp/wp_project_template.js'),
                context:{
                    id: project.node.id
                },
            })
        }
    })
}