export const mainNavigation = [
    [
        {
            id: 0,
            name: 'Struktura bazy',
            url: '/schemas',
            redirectTo: '/schemas/blog-categories',
            icon: 'DatabaseIcon',
            subitems: [
                // BLOG
                {
                    id: 0,
                    name: 'b_categories',
                    url: '/schemas/blog-categories',
                },
                {
                    id: 1,
                    name: 'b_comments',
                    url: '/schemas/blog-comments',
                },
                {
                    id: 2,
                    name: 'b_posts',
                    url: '/schemas/blog-posts',
                },
                {
                    id: 3,
                    name: 'b_tags',
                    url: '/schemas/blog-tags',
                },
                // COMMON
                {
                    id: 4,
                    name: 'c_contents',
                    url: '/schemas/common-contents',
                },
                {
                    id: 5,
                    name: 'c_contents_fragments',
                    url: '/schemas/common-contents-fragments',
                },
                {
                    id: 6,
                    name: 'c_fragments',
                    url: '/schemas/common-fragments',
                },
                {
                    id: 7,
                    name: 'c_images',
                    url: '/schemas/common-images',
                },
                {
                    id: 8,
                    name: 'c_navigation_tree',
                    url: '/schemas/common-navigation-tree',
                },
                {
                    id: 9,
                    name: 'c_navigations',
                    url: '/schemas/common-navigations',
                },
                {
                    id: 10,
                    name: 'c_pages',
                    url: '/schemas/common-pages',
                },
                {
                    id: 11,
                    name: 'c_redirections',
                    url: '/schemas/common-redirections',
                },
                {
                    id: 12,
                    name: 'c_resources',
                    url: '/schemas/common-resources',
                },
                {
                    id: 13,
                    name: 'c_setting_groups',
                    url: '/schemas/common-setting-groups',
                },
                {
                    id: 14,
                    name: 'c_setting_items',
                    url: '/schemas/common-setting-items',
                },
                // FORUM
                {
                    id: 15,
                    name: 'f_categories',
                    url: '/schemas/forum-categories',
                },
                {
                    id: 16,
                    name: 'f_category_tree',
                    url: '/schemas/forum-category-tree',
                },
                {
                    id: 17,
                    name: 'f_posts',
                    url: '/schemas/forum-posts',
                },
                {
                    id: 18,
                    name: 'f_threads',
                    url: '/schemas/forum-threads',
                },
                // SHOP
                {
                    id: 19,
                    name: 's_complaints',
                    url: '/schemas/shop-complaints',
                },
                {
                    id: 20,
                    name: 's_coupons',
                    url: '/schemas/shop-coupons',
                },
                {
                    id: 21,
                    name: 's_couriers',
                    url: '/schemas/shop-couriers',
                },
                {
                    id: 22,
                    name: 's_deliveries',
                    url: '/schemas/shop-deliveries',
                },
                {
                    id: 23,
                    name: 's_discount_types',
                    url: '/schemas/shop-discount-types',
                },
                {
                    id: 24,
                    name: 's_invoices',
                    url: '/schemas/shop-invoices',
                },
                {
                    id: 25,
                    name: 's_order_products',
                    url: '/schemas/shop-order-products',
                },
                {
                    id: 26,
                    name: 's_orders',
                    url: '/schemas/shop-orders',
                },
                {
                    id: 27,
                    name: 's_parcel_lockers',
                    url: '/schemas/shop-parcel-lockers',
                },
                {
                    id: 28,
                    name: 's_payment_providers',
                    url: '/schemas/shop-payment-providers',
                },
                {
                    id: 29,
                    name: 's_payments',
                    url: '/schemas/shop-payments',
                },
                {
                    id: 30,
                    name: 's_product_attributes',
                    url: '/schemas/shop-product-attributes',
                },
                {
                    id: 31,
                    name: 's_product_categories',
                    url: '/schemas/shop-product-categories',
                },
                {
                    id: 32,
                    name: 's_products',
                    url: '/schemas/shop-products',
                },
                {
                    id: 33,
                    name: 's_returns',
                    url: '/schemas/shop-returns',
                },
                {
                    id: 34,
                    name: 's_reviews',
                    url: '/schemas/shop-reviews',
                },
                {
                    id: 35,
                    name: 's_shipments',
                    url: '/schemas/shop-shipments',
                },
                {
                    id: 36,
                    name: 's_shipping_providers',
                    url: '/schemas/shop-shipping-providers',
                },
                {
                    id: 37,
                    name: 's_streets',
                    url: '/schemas/shop-streets',
                },
                // USERS
                {
                    id: 38,
                    name: 'u_accounts',
                    url: '/schemas/user-accounts',
                },
                {
                    id: 39,
                    name: 'u_authorizations',
                    url: '/schemas/user-authorizations',
                },
                {
                    id: 40,
                    name: 'u_profiles',
                    url: '/schemas/user-profiles',
                },
                {
                    id: 41,
                    name: 'u_roles',
                    url: '/schemas/user-roles',
                },
                {
                    id: 42,
                    name: 'u_sessions',
                    url: '/schemas/user-sessions',
                },
                {
                    id: 43,
                    name: 'u_verifications',
                    url: '/schemas/user-verifications',
                },
            ],
        },
    ],
]