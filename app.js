const url = 'https://raw.githubusercontent.com/JACKUSR2089/v2ray-subscribed/master/README.md'
async function handleRequest() {
  const getinit = {
    headers: {
      'Referer': 'https://raw.githubusercontent.com/',
      'User-Agent': 'Cloudflare Workers'
    },
  }
  let init = {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  }
  const response = await fetch(url, getinit)
  const results = await response.text()
  const res = getData(results)
  return new Response(res, init)
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest())
})
function getData(d){
  var n = d.split("\n")
  let ls = [];
  n.forEach( function(element, index) {
    if (element !== "") {
      if (element.startsWith("vmess://") || element.startsWith("vless://")) {
        if(element.indexOf("%2f") !== -1) {
          element = element.replace(/%2f/g,"/")
        }
        ls = [...ls, element]
      }
    }
  });
  let data = ls.join("\n")
  return btoa(data)
}