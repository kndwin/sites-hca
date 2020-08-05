const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/home/knd/projects/sites/hca/hca-fe/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/knd/projects/sites/hca/hca-fe/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/knd/projects/sites/hca/hca-fe/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/knd/projects/sites/hca/hca-fe/src/pages/index.js")))
}

