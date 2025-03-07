<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import ListReferrals from '@/components/ListReferrals.vue'
import { ref } from 'vue';

const isEmpty = ref<boolean>(false)
const activeTab = ref<number>(1)

</script>
<template>

<ViewHeader>

    <div class="title color-white text-center">
        Рефералы
    </div>

    <div class="card" v-if="isEmpty">
        <div class="card-body">
            <div class="d-flex align-items-center">
                <div class="me-2">
                    <div class="widget-icon">
                        <i class="icon-people"></i>
                    </div>
                </div>
                <div class="text-uppercase fs-14px mb-2">
                    Доход с рефералов
                </div>
                <div class="ms-auto mb-2">
                    <div class="btn-i">
                        <i class="icon-more"></i>
                    </div>
                </div>
            </div>

            <div class="mb-3 fw-600 fs-23px text-center">
                Здесь пока
                <br>
                <span class="color-blue">
                    нет данных
                </span>
            </div>
        </div><!-- .card-body -->
    </div><!-- .card -->

    <div class="card" v-if="!isEmpty">
        <div class="card-body">
            <div class="d-flex align-items-center">
                <div class="me-2">
                    <div class="widget-icon">
                        <i class="icon-people"></i>
                    </div>
                </div>
                <div class="text-uppercase fs-14px mb-2">
                    Доход с рефералов
                </div>
                <div class="ms-auto mb-2">
                    <div class="btn-i">
                        <i class="icon-more"></i>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center g-3 mb-3">
                <div class="col-auto">
                    <div class="badge-purple fs-11px fw-600 p-2">
                        <span>
                            1-й уровень
                        </span>
                    </div>
                </div><!-- .col -->
                <div class="col-auto">
                    <div class="badge-gray fs-11px fw-600 p-2">
                        <span>
                            2-й уровень
                        </span>
                    </div>
                </div><!-- .col -->
            </div><!-- .row -->

            <div class="row align-items-center g-3 mb-3">
                <div class="col-auto">
                    <div class="badge-gray">
                        <div class="color-purple fs-23px">
                            <i class="icon-people"></i>
                        </div>
                        <div class="fw-600">
                            1245
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col">
                    <div class="fs-34px fw-600 lh-10 text-end">
                        ₽4500.00
                    </div>
                </div><!-- .col -->
            </div><!-- .row -->

            <!--
                Диаграмма для визульного примера
                Для реализации необходимо использовать библиотеку Chart.js
                Или любую другую библиотеку для построения диаграмм
            -->
            <div class="schart">
                <div class="schart-item"></div>
                <div class="schart-item"></div>
                <div class="schart-item"></div>
                <div class="schart-item"></div>
                <div class="schart-item"></div>
                <div class="schart-item"></div>
                <div class="schart-item"></div>
            </div><!-- .schart -->

        </div><!-- .card-body -->
    </div><!-- .card -->

</ViewHeader>

<div class="body">
    <div class="container">

        <div class="card">
            <div class="card-body">

                <div class="mb-3 fw-600">
                    Приглашайте друзей и зарабатывайте на их депозитах:
                </div>

                <div class="row align-items-center g-3 mb-3">
                    <div class="col-auto">
                        <div class="fs-34px fw-600 color-purple">
                            15%
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        с депозита реферала
                        <br>
                        <span class="color-purple">
                            на первом уровне
                        </span>
                    </div><!-- .col -->
                </div><!-- .row -->

                <div class="row align-items-center g-3 mb-3">
                    <div class="col-auto">
                        <div class="fs-34px fw-600 color-blue">
                            10%
                        </div>
                    </div><!-- .col -->
                    <div class="col">
                        с депозита реферала
                        <br>
                        <span class="color-blue">
                            на втором уровне
                        </span>
                    </div><!-- .col -->
                </div><!-- .row -->

            </div><!-- .card-body -->
        </div><!-- .card -->

        <div class="row" v-if="isEmpty">
            <div class="col-auto mx-auto">
                <div class="btn">
                    НАЧАТЬ ПРИГЛАШАТЬ
                </div>
            </div><!-- .col -->
        </div><!-- .row -->

        <div class="card" v-if="isEmpty">
            <div class="card-body">

                <div class="row align-items-center g-3 mb-3">
                    <div class="col-auto">
                        <div class="fs-14px">
                            Реферальная ссылка
                        </div>
                    </div><!-- .col -->
                    <div class="col text-truncate">
                        <div class="fw-600 text-truncate">
                            mUXgDHncWNuvUNADtG5X8BNuZwznvvU3
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="btn-circle-1">
                            <i class="icon-copy"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->

            </div><!-- .card-body -->
        </div><!-- .card -->

        <div class="tab" v-if="!isEmpty">
            <div class="tab-tabs">
                <div class="tab-btn" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
                    1-й уровень
                </div>
                <div class="tab-btn" :class="{ active: activeTab === 2 }" @click="activeTab = 2">
                    2-й уровень
                </div>
            </div><!-- .tab-tabs -->
            <div class="tab-content" :class="{ active: activeTab === 1 }">

                <div class="row g-3 mb-3 align-items-center">
                    <div class="col-auto">
                        <div class="fw-600">
                            Рефералы
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto ms-auto">
                        <div class="badge-gray">
                            <div class="color-purple">
                                <i class="icon-people"></i>
                            </div>
                            <div class="fw-600">
                                1245
                            </div>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->

                <ListReferrals/>

            </div><!-- .tab-content -->

            <div class="tab-content" :class="{ active: activeTab === 2 }">

                <div class="row g-3 mb-3 align-items-center">
                    <div class="col-auto">
                        <div class="fw-600">
                            Рефералы
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto ms-auto">
                        <div class="badge-gray">
                            <div class="color-purple">
                                <i class="icon-people"></i>
                            </div>
                            <div class="fw-600">
                                1245
                            </div>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->

                <ListReferrals/>

            </div><!-- .tab-content -->
        </div><!-- .tab -->

        <div class="row">
            <div class="col-auto mx-auto">
                <div class="btn" @click="isEmpty = !isEmpty">
                    <span v-if="isEmpty">
                        Если «Есть данные»
                    </span>
                    <span v-else>
                        Если «Нет данных»
                    </span>
                </div>
            </div><!-- .col -->
        </div><!-- .row -->

    </div><!-- .container -->
</div><!-- .body -->

</template>