import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
   latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs'

})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  async redirects(){
    return[
      {
        source:"/",
        destination:"/resources",
        permanent:true,
      }
    ]
  }
})