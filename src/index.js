export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
  
    if (url.hostname === 'microcad.blob.core.windows.net') {
      return fetch(request)
    }
    
    const dynamicPath = url.pathname.split('/').slice(-1)[0]
    
    const newUrl = `https://microcad.blob.core.windows.net/downloads/${dynamicPath}`

    return Response.redirect(newUrl, 301)
  },
};