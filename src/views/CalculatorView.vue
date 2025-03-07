<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import { ref } from 'vue';

const inputSum = ref<string>('500.00')

</script>
<template>
<ViewHeader>
    <div class="title color-white text-center">
        Калькулятор доходности
    </div>
    <div class="card">
        <div class="card-body">
            <div class="fs-12px mb-2">
                Введите сумму
            </div>

            <div class="input">
                <input type="text" class="input-value" v-model="inputSum">
            </div>
        </div><!-- .card-body -->
    </div><!-- .card -->
</ViewHeader>

<div class="body">
    <div class="container">

        <div class="label text-center">
            Пердполагаемый доход
        </div>

        <div class="card">
            <div class="card-body">
                <div class="row align-items-center g-2 mb-2">
                    <div class="col-auto">
                        <div class="fs-20px color-purple">
                            <i class="icon-calendar"></i>
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fs-12px minw-100">
                            За 7 дней
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fs-20px color-purple">
                            ≈
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        <div class="fs-20px">
                            50₽
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fs-20px color-green">
                            <i class="icon-trend"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->

                <div class="row align-items-center g-2 mb-2">
                    <div class="col-auto">
                        <div class="fs-20px color-purple">
                            <i class="icon-calendar"></i>
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fs-12px minw-100">
                            За 30 дней
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fs-20px color-purple">
                            ≈
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        <div class="fs-20px">
                            500₽
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fs-20px color-green">
                            <i class="icon-trend"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .card-body -->
        </div><!-- .card -->

    </div><!-- .container -->
</div><!-- .body -->
</template>