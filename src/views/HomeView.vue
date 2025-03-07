<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import ListReferrals from '@/components/ListReferrals.vue'

</script>
<template>
<ViewHeader>
    <div class="label color-white">
        <i class="icon-coin"></i>
        Ваш баланс
    </div>

    <div class="widget-slider">

        <div class="widget-slider-item">
            <div class="card-gradient minw-200">
                <div class="card-gradient-body">
                    <div class="widget">
                        <div class="widget-icon">
                            <i class="icon-wallet"></i>
                        </div>
                        <div class="widget-label text-uppercase">
                            Инвестировано
                        </div>
                        <div class="widget-value">
                            ₽4500.00
                        </div>
                    </div><!-- .widget -->
                </div><!-- .card-gradient-body -->
            </div><!-- .card-gradient -->
        </div><!-- .widget-slider-item -->

        <div class="widget-slider-item">
            <div class="card-gradient minw-200">
                <div class="card-gradient-body">
                    <div class="widget">
                        <div class="widget-icon">
                            <i class="icon-money"></i>
                        </div>
                        <div class="widget-label text-uppercase">
                            Прибыль
                        </div>
                        <div class="widget-value">
                            ₽4500.00
                        </div>
                    </div><!-- .widget -->
                </div><!-- .card-gradient-body -->
            </div><!-- .card-gradient -->
        </div><!-- .widget-slider-item -->

        <div class="widget-slider-item">
            <div class="card-gradient minw-200">
                <div class="card-gradient-body">
                    <div class="widget">
                        <div class="widget-icon">
                            <i class="icon-people"></i>
                        </div>
                        <div class="widget-label text-uppercase">
                            Доход с рефералов
                        </div>
                        <div class="widget-value">
                            ₽4500.00
                        </div>
                    </div><!-- .widget -->
                </div><!-- .card-gradient-body -->
            </div><!-- .card-gradient -->
        </div><!-- .widget-slider-item -->

    </div><!-- .widget-slider -->
</ViewHeader>

<div class="body">
    <div class="container">

        <div class="label">
            <i class="icon-coin-a fs-3"></i>
            Доход сегодня
        </div>

        <div class="row g-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="widget">
                            <div class="widget-icon">
                                <i class="icon-percent"></i>
                            </div>
                            <div class="widget-value">
                                1.5%
                            </div>
                        </div><!-- .widget -->
                    </div><!-- .card-body -->
                </div><!-- .card -->
            </div><!-- .col -->
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="widget">
                            <div class="widget-icon">
                                <i class="icon-chart"></i>
                            </div>
                            <div class="widget-value">
                                ₽4500.00
                            </div>
                        </div><!-- .widget -->
                    </div><!-- .card-body -->
                </div><!-- .card -->
            </div><!-- .col -->
        </div><!-- .row -->

        <div class="card">
            <div class="card-body">

                <div class="row g-3 mb-3 align-items-center">
                    <div class="col-auto">
                        <div class="fw-600">
                            Рефералы
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto mx-auto">
                        <div class="badge-gray">
                            <div class="color-purple">
                                <i class="icon-people"></i>
                            </div>
                            <div class="fw-600">
                                1245
                            </div>
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="fw-600">
                            Ваш доход
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->

                <ListReferrals/>

            </div><!-- .card-body -->
        </div><!-- .card -->

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

        <div class="row">
            <div class="col-auto mx-auto">
                <div class="btn">
                    НАЧАТЬ ПРИГЛАШАТЬ
                </div>
            </div><!-- .col -->
        </div><!-- .row -->

    </div><!-- .container -->
</div><!-- .body -->

</template>