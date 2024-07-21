async function virtual () {
  const virts = []
  if (this.config.virtuals.jquery) virts.push({ prefix: 'jquery', root: 'jquery:/dist' })
  if (this.config.virtuals.prismjs) virts.push({ root: 'prismjs:', prefix: 'prismjs' })
  if (this.config.virtuals.masonry) virts.push({ prefix: 'masonry', root: 'masonry-layout:/dist' })
  if (this.config.virtuals.highlightjs) virts.push({ prefix: 'highlight.js', root: '@highlightjs/cdn-assets:' })
  if (this.config.virtuals.imagesloaded) virts.push({ prefix: 'imagesloaded', root: 'imagesloaded:' })
  if (this.config.virtuals.tempusDominus) virts.push({ prefix: 'tempus-dominus', root: '@eonasdan/tempus-dominus:/dist' })
  if (this.config.virtuals.echarts) virts.push({ prefix: 'echarts', root: 'echarts:/dist' })
  return virts
}

export default virtual
