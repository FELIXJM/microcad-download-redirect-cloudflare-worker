export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);
    if (url.pathname.startsWith("/downloads/")) {
        let fileName = url.pathname.replace("/downloads/", "");
        let newUrl = "https://microcad.blob.core.windows.net/downloads/" + fileName;
        return Response.redirect(newUrl, 301);
    }
    return fetch(request);
  },
};