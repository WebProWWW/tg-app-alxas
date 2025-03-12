<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import { ref } from 'vue';

const inputNewCard = ref<string>('')
const inputNewCrypt = ref<string>('')

const activeTab = ref<number>(1)
const savedCards = ref<string[]>(['1232 4321 3333 6666'])
const savedCrypts = ref<string[]>(['TEfRpTn63me6ZupXubdeHhwsTR5oKiGoCC'])
const isAddNewCard = ref<boolean>(false)
const isAddNewCrypt = ref<boolean>(false)

function clipboardWrite(val: string): void {
    // navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    //     if (result.state === 'granted' || result.state === 'prompt') {
    //         navigator.clipboard.writeText(val)
    //     }
    // })
    navigator.clipboard.writeText(val)
}

function saveNewCard(): void {
    if (inputNewCard.value && inputNewCard.value.length > 1) {
        savedCards.value.push(inputNewCard.value)
        isAddNewCard.value = false
        inputNewCard.value = ''
    }
}

function saveNewCrypt(): void {
    if (inputNewCrypt.value && inputNewCrypt.value.length > 1) {
        savedCrypts.value.push(inputNewCrypt.value)
        isAddNewCrypt.value = false
        inputNewCrypt.value = ''
    }
}

</script>
<template>
<ViewHeader>
    <div class="title color-white text-center">
        Вывод средств
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
                <div class="card">
                    <div class="card-body pb-3">
                        <div class="fs-24px fw-600 color-gray">
                            ₽1000
                        </div>
                        <div class="color-gray fs-14px">
                            В работе
                            <i class="icon-info color-blue fs-16px"></i>
                        </div>
                    </div><!-- .card-body -->
                </div><!-- .card -->
            </div><!-- .col -->
            <div class="col">
                <div class="card">
                    <div class="card-body pb-3">
                        <div class="fs-24px fw-600 color-purple">
                            ₽3500
                        </div>
                        <div class="fs-14px">
                            Доступно
                            <i class="icon-info color-blue fs-16px"></i>
                        </div>
                    </div><!-- .card-body -->
                </div><!-- .card -->
            </div><!-- .col -->
        </div><!-- .row -->

        <div class="row g-3">
            <div class="col">
                <div class="card-blue cursor-pointer" :class="{ active : activeTab === 1 }" @click="activeTab = 1">
                    <div class="card-blue-body">
                        <div class="widget">
                            <div class="widget-icon">
                                <i class="icon-card"></i>
                            </div>
                            <div class="widget-label text-uppercase">
                                Вывести на
                                <br>
                                карту банка
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
                                Вывести на
                                <br>
                                кошелек Usdt
                            </div>
                        </div><!-- .widget -->
                    </div><!-- .card-blue-body -->
                </div><!-- .card-blue -->
            </div><!-- .col -->
        </div><!-- .row -->

    </div><!-- .container -->

    <div class="container">

        <div class="card">
            <div class="card-body">
                <div class="fs-12px mb-2">
                    Введите сумму
                </div>

                <div class="input">
                    <input type="text" class="input-value" value="500.00">
                </div>
            </div><!-- .card-body -->
        </div><!-- .card -->

        <div v-if="activeTab === 1">
            <div class="label" v-if="!isAddNewCard">
                <div class="row g-3">
                    <div class="col">
                        Выберите карту
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="btn-i color-purple" @click="isAddNewCard = true">
                            <i class="icon-add"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div>

            <div class="label" v-if="isAddNewCard">
                <div class="row g-3">
                    <div class="col">
                        Введите номер карты
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="btn-i color-red" @click="isAddNewCard = false">
                            <i class="icon-cancel"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div>

            <div class="card" v-if="isAddNewCard">
                <div class="card-body">
                    <div class="fs-12px mb-2">
                        Введите сумму
                    </div>

                    <div class="input">
                        <input type="text" class="input-value-20" v-model="inputNewCard" placeholder="0000 0000 0000 0000">
                        <div class="input-btn fs-20px color-purple" @click="saveNewCard">
                            <i class="icon-save"></i>
                        </div>
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->

            <div class="card-black" v-for="cardNum in savedCards">
                <div class="card-black-body pb-3">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img height="40" src="/img/logo-t.png">
                        </div><!-- .col -->
                        <div class="col">
                            <div class="fs-20px cursor-pointer" @click="clipboardWrite(cardNum)">
                                {{ cardNum }}
                            </div>
                        </div><!-- .col -->
                        <div class="col-auto">
                            <div class="cursor-pointer" @click="clipboardWrite(cardNum)">
                                <i class="icon-copy"></i>
                            </div>
                        </div><!-- .col -->
                    </div><!-- .row -->
                </div><!-- .card-black-body -->
            </div><!-- .card-black -->
        </div><!-- .v-if -->

        <div v-if="activeTab === 2">
            <div class="label" v-if="!isAddNewCrypt">
                <div class="row g-3">
                    <div class="col">
                        Выберите кошелек
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="btn-i color-purple" @click="isAddNewCrypt = true">
                            <i class="icon-add"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div>

            <div class="label" v-if="isAddNewCrypt">
                <div class="row g-3">
                    <div class="col">
                        Введите кошелек
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="btn-i color-red" @click="isAddNewCrypt = false">
                            <i class="icon-cancel"></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->
            </div>

            <div class="card" v-if="isAddNewCrypt">
                <div class="card-body">
                    <div class="input">
                        <input type="text" class="input-value-20" v-model="inputNewCrypt" placeholder="TEfRpTn63me6ZupXubdeHhwsTR5oKiGoCC">
                        <div class="input-btn fs-20px color-purple" @click="saveNewCrypt">
                            <i class="icon-save"></i>
                        </div>
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->

            <div class="card" v-for="cryptNum in savedCrypts">
                <div class="card-body pb-3">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img height="40" src="/img/logo-crypt.png">
                        </div><!-- .col -->
                        <div class="col text-truncate">
                            <div class="fs-20px cursor-pointer text-truncate" @click="clipboardWrite(cryptNum)">
                                {{ cryptNum }}
                            </div>
                        </div><!-- .col -->
                        <div class="col-auto">
                            <div class="cursor-pointer" @click="clipboardWrite(cryptNum)">
                                <i class="icon-copy"></i>
                            </div>
                        </div><!-- .col -->
                    </div><!-- .row -->
                </div><!-- .card-body -->
            </div><!-- .card -->

        </div><!-- .v-if -->

        <div class="row">
            <div class="col-auto mx-auto">
                <div class="btn">
                    ВЫВЕСТИ
                </div>
            </div><!-- .col -->
        </div><!-- .row -->

    </div><!-- .container -->
</div><!-- .body -->

</template>