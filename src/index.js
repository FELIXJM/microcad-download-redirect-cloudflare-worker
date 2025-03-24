export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Prevent redirection loop: If the request is already at microcad.blob.core.windows.net, don't redirect
    if (url.hostname === 'microcad.blob.core.windows.net') {
      return fetch(request)  // No redirection needed, just fetch the file
    }
  
    // Extract the dynamic part of the URL path (e.g., "TOPOCAD2000V19.EXE")
    const dynamicPath = url.pathname.split('/').slice(-1)[0]
  
    // Construct the new URL for redirection
    const newUrl = `https://microcad.blob.core.windows.net/downloads/${dynamicPath}`
  
    // Check if the URL is already pointing to the destination to prevent infinite loop
    if (url.href === newUrl) {
      return fetch(request)  // No redirection, just return the request
    }
  
    // Perform the 301 redirect to the new URL
    return Response.redirect(newUrl, 301)
  },
};