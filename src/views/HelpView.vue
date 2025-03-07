<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function toRoute(name:string): void {
    router.push({ name })
}

</script>
<template>
<ViewHeader class="off-margin">
    <div class="title color-white text-center">
        Помощь
    </div>
</ViewHeader>

<div class="body">

    <div class="container">

        <div class="card cursor-pointer" @click="toRoute('faq')">
            <div class="card-body">
                <div class="row align-items-center mb-3 g-3">
                    <div class="col-auto">
                        <div class="btn-circle-1">
                            <i class="icon-book fs-20px"></i>
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        <div class="fs-14px">
                            FAQ
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <i class="icon-more"></i>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .card-body -->
        </div><!-- .card -->

        <div class="card cursor-pointer" @click="toRoute('support')">
            <div class="card-body">
                <div class="row align-items-center mb-3 g-3">
                    <div class="col-auto">
                        <div class="btn-circle-1">
                            <i class="icon-chat fs-20px"></i>
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        <div class="fs-14px">
                            ТЕХ. ПОДДЕРЖКА
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <i class="icon-more"></i>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .card-body -->
        </div><!-- .card -->

        <div class="card cursor-pointer" @click="toRoute('calculator')">
            <div class="card-body">
                <div class="row align-items-center mb-3 g-3">
                    <div class="col-auto">
                        <div class="btn-circle-1">
                            <i class="icon-calc fs-20px"></i>
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        <div class="fs-14px">
                            КАЛЬКУЛЯТОР ДОХОДНОСТИ
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <i class="icon-more"></i>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .card-body -->
        </div><!-- .card -->

    </div><!-- .container -->
</div><!-- .body -->

</template>