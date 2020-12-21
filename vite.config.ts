/**
 * can not with * like "@/*": "/src/*"
 */
const pathAliasMap = {
  "@/": "/src/",
  "@components/": "/src/components/",
  "@utils/": "/src/utils/"
}

export default {
  resolvers: [{
    alias(path: string) {
      for (const [slug, res] of Object.entries(pathAliasMap)) {
        if (path.startsWith(slug)) {
          return path.replace(slug, res)
        }
      }
    }
  }],
  base: './',
  assetsDir: 'assets'
}
