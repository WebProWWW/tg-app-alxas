<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import { ref } from 'vue';

const activeTab = ref<number>(1)
const isPaymentStatus = ref<boolean>(false)

function clipboardWrite(val: string): void {
    // navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    //     if (result.state === 'granted' || result.state === 'prompt') {
    //         navigator.clipboard.writeText(val)
    //     }
    // })
    navigator.clipboard.writeText(val)
}

</script>
<template>
<ViewHeader>
    <div class="title color-white text-center">
        Пополнение
    </div>
    
    <div class="card">
        <div class="card-body">
            <div class="d-flex align-items-center">
                <div class="me-2">
                    <div class="widget-icon">
                        <i class="icon-people"></i>
                    </div>
                </div>
                <div class="text-uppercase fs-14px mb-2">
                    Ваш баланс
                </div>
                <div class="ms-auto mb-2">
                    <div class="btn-i">
                        <i class="icon-more"></i>
                    </div>
                </div>
            </div>

            <div class="mb-3 fw-600 fs-34px text-center">
                ₽4500.00
            </div>
        </div><!-- .card-body -->
    </div><!-- .card -->
</ViewHeader>

<div class="body">
    <div class="container">

        <div class="row g-3">
            <div class="col">
                <div class="card-blue cursor-pointer" :class="{ active : activeTab === 1 }" @click="activeTab = 1">
                    <div class="card-blue-body">
                        <div class="widget">
                            <div class="widget-icon">
                                <i class="icon-card"></i>
                            </div>
                            <div class="widget-label text-uppercase">
                                Пополнить
                                <br>
                                картой
                            </div>
                        </div><!-- .widget -->
                    </div><!-- .card-blue-body -->
                </div><!-- .card-blue -->
            </div><!-- .col -->
            <div class="col">
                <div class="card-blue cursor-pointer" :class="{ active : activeTab === 2 }" @click="activeTab = 2">
                    <div class="card-blue-body">
                        <div class="widget">
                            <div class="widget-icon">
                                <i class="icon-card-bit"></i>
                            </div>
                            <div class="widget-label text-uppercase">
                                Пополнить
                                <br>
                                криптовалютой
                            </div>
                        </div><!-- .widget -->
                    </div><!-- .card-blue-body -->
                </div><!-- .card-blue -->
            </div><!-- .col -->
        </div><!-- .row -->

    </div><!-- .container -->

    <div class="container mt-auto">

        <div class="card">
            <div class="card-body">
                <div class="fs-12px mb-2">
                    Введите сумму
                </div>

                <div class="input">
                    <input type="text" class="input-value" value="500.00">
                    <div class="input-badge me-2">
                        <i class="icon-favorite"></i>
                        ≈ 6500.00
                    </div>
                </div>
            </div><!-- .card-body -->
        </div><!-- .card -->

        <div v-if="activeTab === 1">
            <div class="label">
                Совершите платеж суммы вашего пополнения по номеру карты 
            </div>

            <div class="card-black">
                <div class="card-black-body pb-3">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img height="40" src="/img/logo-t.png">
                        </div><!-- .col -->
                        <div class="col">
                            <div class="fs-20px cursor-pointer" @click="clipboardWrite('1232432133336666')">
                                1232 4321 3333 6666
                            </div>
                        </div><!-- .col -->
                        <div class="col-auto">
                            <div class="cursor-pointer" @click="clipboardWrite('1232432133336666')">
                                <i class="icon-copy"></i>
                            </div>
                        </div><!-- .col -->
                    </div><!-- .row -->
                </div><!-- .card-black-body -->
            </div><!-- .card-black -->
        </div><!-- .v-if -->

        <div v-if="activeTab === 2">
            <div class="label">
                Переведите USDT в сети Trc20
            </div>

            <div class="card">
                <div class="card-body pb-3">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img height="40" src="/img/logo-crypt.png">
                        </div><!-- .col -->
                        <div class="col text-truncate">
                            <div class="fs-20px cursor-pointer text-truncate" @click="clipboardWrite('TEfRpTn63me6ZupXubdeHhwsTR5oKiGoCC')">
                                TEfRpTn63me6ZupXubdeHhwsTR5oKiGoCC
                            </div>
                        </div><!-- .col -->
                        <div class="col-auto">
                            <div class="cursor-pointer" @click="clipboardWrite('TEfRpTn63me6ZupXubdeHhwsTR5oKiGoCC')">
                                <i class="icon-copy"></i>
                            </div>
                        </div><!-- .col -->
                    </div><!-- .row -->
                </div><!-- .card-body -->
            </div><!-- .card -->

        </div><!-- .v-if -->

        <div class="row">
            <div class="col-auto mx-auto">
                <div class="btn" @click="isPaymentStatus = true">
                    ПРОВЕРИТЬ ПЛАТЕЖ
                </div>
            </div><!-- .col -->
        </div><!-- .row -->

    </div><!-- .container -->
</div><!-- .body -->

<div class="status-payment" @click="isPaymentStatus = false" v-if="isPaymentStatus">
    <div class="status-payment-close">
        <i class="icon-close"></i>
    </div>
    <div class="container my-auto">
        <div class="col-10 mx-auto">
            <div class="card">
                <div class="card-body text-center py-5 color-dark-blue">
                    <div class="fw-600 fs-24px">
                        Ожидайте
                    </div>
                    <div class="fs-20px">
                        ваш запрос будет обработан в&nbsp;течение
                        <br>
                        30 минут
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div><!-- .col -->
    </div><!-- .container -->
</div>
</template>