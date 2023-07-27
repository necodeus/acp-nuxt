<script setup>
</script>

<template>
    <Head>
        <title>404 @ admin.necodeo.com</title>
    </Head>
    <div>
        <div class="flex flex-col items-center justify-center h-screen">
            <div class="text-[300px] font-[500] text-[#190A48]">
                {{ page.props.status }}
            </div>
            <div class="text-[40px] font-[400] text-[#fff] absolute">
                {{ page.props.message }}
            </div>
        </div>
    </div>
</template>
