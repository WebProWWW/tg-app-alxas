<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'
import { ref } from 'vue';

type Faq = {
    q: string
    a: string
    active: boolean
}

const faqs = ref<Faq[]>([
    {
        q: 'Что такое криптовалюта?',
        a: 'Криптовалюта — это цифровая или виртуальная валюта, основанная на технологии блокчейн и защищённая криптографией. Она децентрализована и не контролируется государствами или банками.',
        active: false,
    },
    {
        q: 'Чем биткоин отличается от других криптовалют?',
        a: 'Биткоин — первая и самая известная криптовалюта. В отличие от других монет (например, Ethereum, Solana, Cardano), он не поддерживает смарт-контракты и имеет ограниченную эмиссию в 21 миллион монет.',
        active: false,
    },
    {
        q: 'Можно ли заработать на криптовалюте?',
        a: 'Да, существует несколько способов заработка: трейдинг, долгосрочные инвестиции (HODL), стейкинг, майнинг, участие в ICO/IDO, а также NFT и DeFi-проекты. Однако рынок криптовалют волатилен, и инвестировать стоит с осторожностью.',
        active: false,
    },
    {
        q: 'Что такое блокчейн и зачем он нужен?',
        a: 'Блокчейн — это децентрализованная база данных, в которой хранится информация о всех транзакциях. Он обеспечивает прозрачность, безопасность и невозможность подделки данных, что делает его основой криптовалютных сетей.',
        active: false,
    },
    {
        q: 'Безопасно ли хранить криптовалюту на бирже?',
        a: 'Биржи подвержены взломам, поэтому безопаснее хранить криптовалюту в холодных кошельках (аппаратных или бумажных). Если используете биржу, включите двухфакторную аутентификацию и храните только ту сумму, которой готовы рискнуть.',
        active: false,
    },
])

</script>
<template>
<ViewHeader class="off-margin">
    <div class="title color-white text-center">
        FAQ
    </div>
</ViewHeader>

<div class="body">
    <div class="container">

        <div class="card" v-for="faq in faqs">
            <div class="card-body">
                <div class="row g-3 mb-3 cursor-pointer" @click="faq.active = !faq.active">
                    <div class="col">
                        <div class="fw-600">
                            {{ faq.q }}
                        </div>
                    </div><!-- .col -->
                    <div class="col-auto">
                        <div class="btn-i">
                            <i class="icon-more" v-if="!faq.active"></i>
                            <i class="icon-ar-u" v-else></i>
                        </div>
                    </div><!-- .col -->
                </div><!-- .row -->
                <div :class="{ 'd-none': !faq.active }">
                    <div class="mb-3 fs-14px">
                        {{ faq.a }}
                    </div>
                </div>
            </div><!-- .card-body -->
        </div><!-- .card -->

    </div><!-- .container -->
</div><!-- .body -->

</template>