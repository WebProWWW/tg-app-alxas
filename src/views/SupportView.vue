<script setup lang="ts">

import ViewHeader from '@/components/ViewHeader.vue'

</script>
<template>

<ViewHeader class="off-margin">
    <div class="title color-white text-center">
        Чат с сотрудником
    </div>
</ViewHeader>

<div class="body">
    <div class="container">
        <div class="chat-q">
            <div class="chat-name">
                Вы
            </div>
            <div class="chat-msg">
                Привет! У меня проблема с выводом средств. Транзакция зависла, что делать?
            </div>
            <div class="chat-date">01.03.2025 10:13</div>
        </div><!-- .chat -->
        <div class="chat-a">
            <div class="chat-name">
                Сотрудник
            </div>
            <div class="chat-msg">
                Здравствуйте! Уточните, пожалуйста, какой у вас номер транзакции (TXID) и на какую сеть отправляли средства?
            </div>
            <div class="chat-date">01.03.2025 10:15</div>
        </div><!-- .chat -->
        <div class="chat-q">
            <div class="chat-name">
                Вы
            </div>
            <div class="chat-msg">
                TXID: 0x123abc... Отправлял USDT через сеть ERC-20.
            </div>
            <div class="chat-date">01.03.2025 10:18</div>
        </div><!-- .chat -->
        <div class="chat-a">
            <div class="chat-name">
                Сотрудник
            </div>
            <div class="chat-msg">
                Спасибо! Сейчас проверим. Пожалуйста, подождите несколько минут.
            </div>
            <div class="chat-date">01.03.2025 10:21</div>
        </div><!-- .chat -->
    </div><!-- .container -->
</div><!-- .body -->
</template>