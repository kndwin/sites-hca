const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/knd/projects/sites/hca/.cache/dev-404-page.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/home/knd/projects/sites/hca/src/pages/about-us.js"))),
  "component---src-pages-community-blog-js": hot(preferDefault(require("/home/knd/projects/sites/hca/src/pages/community-blog.js"))),
  "component---src-pages-contact-us-js": hot(preferDefault(require("/home/knd/projects/sites/hca/src/pages/contact-us.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/knd/projects/sites/hca/src/pages/index.js")))
}

