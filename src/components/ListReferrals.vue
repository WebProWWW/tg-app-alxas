<script setup lang="ts">
import { computed } from 'vue';

type Referral = {
    ava: string
    name: string
    desc: string
    descSum: string
    time: string
    income: string
    isSold: boolean
    isVerified: boolean
}

// ava: '/img/ref-1.jpg',
// name: 'Pavel',
// desc: 'Внес депозит',
// descSum: '15000&nbsp;₽',
// time: '2s',
// income: '4500.00&nbsp;₽',
// isSold: false,
// isVerified: false

function getRandomValue(arr: any[]): any {
    const length = arr.length
    const index = Math.floor(Math.random() * length)
    return arr[index]
}

const randomReferrals = computed<Referral[]>((): Referral[] => {
    const out: Referral[] = []
    for (let i = 0; i < 6; i++) {
        const isSold: boolean = Boolean(Math.round(Math.random()))
        const isVerified: boolean = Boolean(Math.round(Math.random()))
        out.push({
            ava: `img/ref-${getRandomValue([1,2,3])}.jpg`,
            name: getRandomValue(['Pavel', 'Elon Mask', 'Egor']),
            desc: isSold ? 'Продано' : 'Внес депозит',
            descSum: getRandomValue(['10000&nbsp;₽', '13000&nbsp;₽', '15000&nbsp;₽']),
            time: getRandomValue(['5:51 AM', '3:53 PM', '2s']),
            income: getRandomValue(['4100.00&nbsp;₽', '4300.00&nbsp;₽', '4500.00&nbsp;₽']),
            isSold,
            isVerified,
        })
    }
    return out
})

// function randomReferrals(): Referral[] {
//     const out = []
//     for (let i = 0; i < 6; i++) {
//         const isSold: boolean = Boolean(Math.floor(Math.random()))
//         const isVerified: boolean = Boolean(Math.floor(Math.random()))
//         out.push({
//             ava: `/img/ref-${getRandomValue([1,2,3])}.jpg`,
//             name: getRandomValue(['Pavel', 'Elon Mask', 'Egor']),
//             desc: isSold ? 'Продано' : 'Внес депозит',
//             descSum: getRandomValue(['10000&nbsp;₽', '13000&nbsp;₽', '15000&nbsp;₽']),
//             time: getRandomValue(['5:51 AM', '3:53 PM', '2s']),
//             isSold,
//             isVerified,
//         })
//     }
//     return out
// }

</script>
<template>
<div class="row align-items-center g-2 mb-4" v-for="referral in randomReferrals">
    <div class="col-auto">
        <img class="img-circle" width="40" height="40" :src="referral.ava">
    </div><!-- .col -->
    <div class="col">
        <div class="lh-15">
            <span class="fw-600">
                {{ referral.name }}&nbsp;
            </span>
            <span class="color-gray fs-14px">
                {{ referral.time }}&nbsp;
            </span>
            <span class="color-green" v-if="referral.isVerified">
                <i class="icon-verified"></i>
            </span>
        </div>
        <div class="fs-14px lh-15">
            <span :class="[referral.isSold ? 'color-red' : 'color-green']">
                {{ referral.desc }}&nbsp;
            </span>
            <span class="color-gray" v-html="referral.descSum"></span>
        </div>
    </div><!-- .col -->
    <div class="col-auto">
        <div class="fw-600" v-html="referral.income"></div>
    </div><!-- .col -->
</div><!-- .row -->
</template>