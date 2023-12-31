<template>
  <span class="outline-badge">
    <span class="badge-content">
      <slot></slot>
    </span>
  </span>
</template>

<style scoped>
.outline-badge {
  display: inline-block;
  border: 1px solid var(--color-text);
  border-radius: 3px;
  padding: 2px 6px;
  line-height: 1 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
}

.badge-content {
  color: var(--color-text);
  font-size: 10px !important;
}

.badge-margin:last-child {
  margin-right: 0; /* Remove margin from the last badge */
}
</style>