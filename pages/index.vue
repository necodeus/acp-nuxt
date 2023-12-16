<script setup>
import '@formkit/themes'
</script>

<template>
  <div style="color: green !important">
    <!-- <FormKit
      type="text"
      label="Number"
      validation="required|number|between:20,50"
      validation-visibility="live"
      help="Enter a number between 20 and 50."
    />
    <br />
    <br /> -->
    ---<br/>
    <b>Schemas / Common</b><br />
    <NuxtLink to="/schemas/common-contents">c_contents</NuxtLink>
    <NuxtLink to="/schemas/common-contents-fragments">c_contents_fragments</NuxtLink>
    <NuxtLink to="/schemas/common-fragments">c_fragments</NuxtLink>
    <NuxtLink to="/schemas/common-images">c_images</NuxtLink>
    <NuxtLink to="/schemas/common-navigation-tree">c_navigation_tree</NuxtLink>
    <NuxtLink to="/schemas/common-navigations">c_navigations</NuxtLink>
    <NuxtLink to="/schemas/common-pages">c_pages</NuxtLink>
    <NuxtLink to="/schemas/common-redirections">c_redirections</NuxtLink>
    <NuxtLink to="/schemas/common-resources">c_resources</NuxtLink>
    <NuxtLink to="/schemas/common-setting-groups">c_setting_groups</NuxtLink>
    <NuxtLink to="/schemas/common-setting-items">c_setting_items</NuxtLink>
    ---<br/>
    <b>Schemas / User</b><br />
    <NuxtLink to="/schemas/user-accounts">u_accounts</NuxtLink>
    <NuxtLink to="/schemas/user-authorizations">u_authorizations</NuxtLink>
    <NuxtLink to="/schemas/user-profiles">u_profiles</NuxtLink>
    <NuxtLink to="/schemas/user-roles">u_roles</NuxtLink>
    <NuxtLink to="/schemas/user-sessions">u_sessions</NuxtLink>
    <NuxtLink to="/schemas/user-verifications">u_verifications</NuxtLink>
    ---<br/>
    <b>Schemas / Blog</b><br />
    <NuxtLink to="/schemas/blog-categories">b_categories</NuxtLink>
    <NuxtLink to="/schemas/blog-comments">b_comments</NuxtLink>
    <NuxtLink to="/schemas/blog-posts">b_posts</NuxtLink>
    <NuxtLink to="/schemas/blog-tags">b_tags</NuxtLink>
    ---<br/>
    <b>Schemas / Forum</b><br />
    <NuxtLink to="/schemas/forum-posts">f_posts</NuxtLink>
    <NuxtLink to="/schemas/forum-threads">f_threads</NuxtLink>
    ---<br/>
    <b>Schemas / Shop</b><br />
    <NuxtLink to="/schemas/shop-complaints">s_complaints</NuxtLink>
    <NuxtLink to="/schemas/shop-coupons">s_coupons</NuxtLink>
    <NuxtLink to="/schemas/shop-couriers">s_couriers</NuxtLink>
    <NuxtLink to="/schemas/shop-deliveries">s_deliveries</NuxtLink>
    <NuxtLink to="/schemas/shop-discount-types">s_discount_types</NuxtLink>
    <NuxtLink to="/schemas/shop-invoices">s_invoices</NuxtLink>
    <NuxtLink to="/schemas/shop-order-products">s_order_products</NuxtLink>
    <NuxtLink to="/schemas/shop-orders">s_orders</NuxtLink>
    <NuxtLink to="/schemas/shop-parcel-lockers">s_parcel_lockers</NuxtLink>
    <NuxtLink to="/schemas/shop-payment-providers">s_payment_providers</NuxtLink>
    <NuxtLink to="/schemas/shop-payments">s_payments</NuxtLink>
    <NuxtLink to="/schemas/shop-product-attributes">s_product_attributes</NuxtLink>
    <NuxtLink to="/schemas/shop-product-categories">s_product_categories</NuxtLink>
    <NuxtLink to="/schemas/shop-products">s_products</NuxtLink>
    <NuxtLink to="/schemas/shop-returns">s_returns</NuxtLink>
    <NuxtLink to="/schemas/shop-reviews">s_reviews</NuxtLink>
    <NuxtLink to="/schemas/shop-shipments">s_shipments</NuxtLink>
    <NuxtLink to="/schemas/shop-shipping-providers">s_shipping_providers</NuxtLink>
    <NuxtLink to="/schemas/shop-streets">s_streets</NuxtLink>
    ---<br/>
  </div>
</template>

<style>
a {
  display: block;
}
</style>