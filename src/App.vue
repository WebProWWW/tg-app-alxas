<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

function isRouteName(name:string|string[]): boolean {
    if (typeof name === 'string') {
        return route.name === name
    }
    let isHasName = false
    name.forEach(iname => {
        if (route.name === iname) {
            isHasName = true
        }
    })
    return isHasName
}

function toRoute(name:string): void {
    router.push({ name })
}

</script>
<template>

<RouterView/>

<div class="footer">
    <div class="footer-btn-home" :class="{ active: isRouteName('home') }" @click="toRoute('home')">
        <i class="icon-home"></i>
    </div>
    <div class="row justify-content-around g-1">
        <div class="col-auto">
            <div class="footer-btn" :class="{ active: isRouteName('referrals') }" @click="toRoute('referrals')">
                <div class="footer-btn-icon">
                    <i class="icon-people"></i>
                </div>
                <div class="footer-btn-label">
                    Рефералы
                </div>
            </div>
        </div><!-- .col -->

        <div class="col-auto">
            <div class="footer-btn" :class="{ active: isRouteName('wallet-add') }" @click="toRoute('wallet-add')">
                <div class="footer-btn-icon">
                    <i class="icon-wallet-b"></i>
                </div>
                <div class="footer-btn-label">
                    Пополнение
                </div>
            </div>
        </div><!-- .col -->

        <div class="col-auto"></div>

        <div class="col-auto">
            <div class="footer-btn" :class="{ active: isRouteName('wallet-out') }" @click="toRoute('wallet-out')">
                <div class="footer-btn-icon">
                    <i class="icon-wallet-a"></i>
                </div>
                <div class="footer-btn-label">
                    Вывод
                </div>
            </div>
        </div><!-- .col -->

        <div class="col-auto">
            <div class="footer-btn" :class="{ active: isRouteName(['help', 'faq', 'calculator', 'support']) }" @click="toRoute('help')">
                <div class="footer-btn-icon">
                    <i class="icon-setting"></i>
                </div>
                <div class="footer-btn-label">
                    Помощь
                </div>
            </div>
        </div><!-- .col -->
    </div><!-- .row -->
</div><!-- .footer -->
</template>