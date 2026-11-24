<!--
  Release highlights box for GA release notes pages. It floats right beside the page's opening summary when the content column is wide enough, and sits full width above it otherwise. The default slot is the "What's new" Markdown list: keep a blank line after the opening tag and before the closing tag so Markdown renders it. The fields match the Release highlights box on the almalinux.org blog post for the same version. See README.md, "Release notes pages".
-->
<template>
  <aside class="release-highlights" aria-label="Release highlights">
    <div class="release-highlights-eyebrow">Release highlights</div>
    <dl>
      <template v-if="codename">
        <dt>Codename</dt>
        <dd>{{ codename }}</dd>
      </template>
      <template v-if="released">
        <dt>Released</dt>
        <dd>{{ released }}</dd>
      </template>
      <template v-if="kernel">
        <dt>Kernel</dt>
        <dd>
          <code>{{ kernel }}</code>
        </dd>
      </template>
      <template v-if="rhel">
        <dt>Compatible</dt>
        <dd><abbr title="Red Hat Enterprise Linux">RHEL</abbr> {{ rhel }}</dd>
      </template>
      <template v-if="arches">
        <dt>Arches</dt>
        <dd>{{ arches }}</dd>
      </template>
    </dl>
    <div v-if="$slots.default" class="release-highlights-new">
      <div class="release-highlights-new-label">What's new</div>
      <slot />
    </div>
    <div v-if="announcement" class="release-highlights-announcement">
      <div class="release-highlights-new-label">Announcement</div>
      <a class="release-highlights-link" :href="announcement"
        >{{ announcementTitle || "Read it on the AlmaLinux blog" }} →</a
      >
    </div>
  </aside>
</template>

<script>
export default {
  name: "ReleaseHighlights",
  props: {
    codename: { type: String, default: "" },
    released: { type: String, default: "" },
    kernel: { type: String, default: "" },
    rhel: { type: String, default: "" },
    arches: { type: String, default: "" },
    announcement: { type: String, default: "" },
    announcementTitle: { type: String, default: "" },
  },
};
</script>

<style lang="stylus">
.release-highlights
  margin 0 0 1rem
  padding 0.875rem 1rem
  background #f3f6f9
  border 1px solid #dfe4ea
  border-radius 10px
  font-size 0.875rem
  line-height 1.45

  // The sidebar shows from 720px, so the content column only has room for text beside the box from about 1100px.
  @media (min-width: 1100px)
    float right
    width 290px
    margin 0.25rem 0 1rem 1.5rem

  .release-highlights-eyebrow
    font-size 0.7rem
    font-weight 700
    letter-spacing 0.08em
    text-transform uppercase
    color #017698

  dl
    display grid
    grid-template-columns 92px 1fr
    gap 0.2rem 0.625rem
    margin 0.625rem 0 0

  dt
    font-size 0.7rem
    letter-spacing 0.04em
    text-transform uppercase
    // 0.85 keeps these small labels above WCAG AA contrast on the box background.
    opacity 0.85
    padding-top 0.125rem

  dd
    margin 0

  abbr
    text-decoration none
    cursor help

  .release-highlights-new
    margin-top 0.625rem
    padding-top 0.5rem
    border-top 1px solid #dfe4ea

    ul
      margin 0.25rem 0 0
      padding-left 1.125rem

    li
      margin 0.125rem 0

  .release-highlights-new-label
    font-weight 600

  .release-highlights-announcement
    margin-top 0.625rem
    padding-top 0.5rem
    border-top 1px solid #dfe4ea

  .release-highlights-link
    font-weight 600

// Headings beside the box stop at its edge, so the h2 underline doesn't run behind it. flow-root (not overflow hidden) keeps the hover "#" anchor, which sits in the left margin, visible.
.theme-default-content:has(.release-highlights)
  h2, h3
    display flow-root

  div[class*="language-"], table
    clear right
</style>
