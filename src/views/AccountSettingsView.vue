<script setup type="ts">
import { FlagIcon } from '@heroicons/vue/24/outline';
import { validateForm } from 'winduum/src/components/form/index.js'

const sendform = () => {
  document.querySelector('form').addEventListener('submit', event => {
    validateForm(event);
    event.preventDefault();
  });
}

</script>

<template>
  <main class="flex flex-col gap-8 bg-white px-4 py-2 p-4 md:p-6 rounded-lg md:rounded-2xl w-full">
    <span class="font-semibold text-[18px] text-neutral-900 leading-[26px]">Kontaktní údaje</span>
    <form class="flex flex-col gap-8" novalidate @submit.prevent="sendform()">
      <section class="gap-x-4 gap-y-3 grid grid-cols-4 lg:grid-cols-8 bg-white x-form">
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input id="given-name" name="given-name" autocomplete="given-name" placeholder=" " required>
            <label class="x-label" for="given-name">Jméno</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input id="family-name" name="family-name" autocomplete="family-name" placeholder=" " required>
            <label class="x-label" for="family-name">Příjmění</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input type="tel" id="email" name="phone" autocomplete="phone" placeholder="" value="+420" required>
            <label class="x-label" for="email">Telefon</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input type="email" id="email" name="email" autocomplete="email" placeholder=" " required>
            <label class="x-label" for="email">Email</label>
          </div>
        </div>
        <div class="items-start col-span-4 x-field">
        </div>
      </section>
      <div class="w-full divider"></div>
      <span class="mt-[-0.9rem] font-semibold text-[18px] text-neutral-900 leading-[26px]">Fakturační údaje</span>

      <section class="gap-x-4 gap-y-3 grid grid-cols-4 lg:grid-cols-8 bg-white x-form">
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input id="given-name" name="given-name" autocomplete="given-name" placeholder=" " required>
            <label class="x-label" for="given-name">Jméno</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input id="family-name" name="family-name" autocomplete="family-name" placeholder=" " required>
            <label class="x-label" for="family-name">Příjmění</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input id="company-name" name="company-name" autocomplete="company-name" placeholder=" " required>
            <label class="x-label" for="company-name">Název firmy</label>
          </div>
        </div>
        <div class="col-span-2 x-field">
          <div class="x-control">
            <input type="text" id="ic" name="ic" autocomplete="ic" placeholder=" " required>
            <label class="x-label" for="ic">IČ</label>
          </div>
        </div>
        <div class="col-span-2 x-field">
          <div class="x-control">
            <input type="text" id="dic" name="dic" autocomplete="dic" placeholder=" ">
            <label class="x-label" for="dic">DIČ</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input type="text" id="adress" name="adress" autocomplete="adress" placeholder=" ">
            <label class="x-label" for="adress">Ulice a číslo popisné</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input type="text" id="city" name="city" autocomplete="city" placeholder=" ">
            <label class="x-label" for="city">Město</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <input type="text" id="city" name="city" autocomplete="city" placeholder=" ">
            <label class="x-label" for="city">PSČ</label>
          </div>
        </div>
        <div class="col-span-4 x-field">
          <div class="x-control">
            <select id="state">
              <option value="0" selected>CZE</option>
              <option value="1">SVK</option>
              <option value="2">POL</option>
            </select>
            <label class="x-label" for="state">Země</label>

            <svg class="text-error ms-auto" width="22" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1652_673)">
                <path d="M0.200195 0.200073H21.8002V11.0001H0.200195V0.200073Z" fill="white" />
                <path d="M0.200195 11.0001H21.8002V21.8001H0.200195V11.0001Z" fill="#DC2626" />
                <path d="M12.8564 11.0001L0.200195 0.200073V21.8001L12.8564 11.0001Z" fill="#1E3A8A" />
              </g>
              <defs>
                <clipPath id="clip0_1652_673">
                  <rect x="0.200195" y="0.200073" width="21.6" height="21.6" rx="10.8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      <div class="w-full divider"></div>
      <section class="flex flex-col gap-3">
        <label class="x-check">
          <input type="checkbox">
          Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky
        </label>
        <label class="x-check">
          <input type="checkbox" checked>
          Přeji si dostávat informace o novinkách a slevách nebo inspiraci
        </label>
      </section>
      
      <section class="flex lg:flex-row flex-col gap-3">
        <button class="w-fit x-button" type="submit">Uložit změny</button>
        <button class="bordered w-fit text-main x-button" >Změnit heslo</button>
        <button class="mt-5 lg:mt-0 lg:ml-auto bordered w-fit accent-error x-button" >Zrušit účet</button>
      </section>
    </form>
  </main>
  <svg class="hidden">
    <symbol id="icon-exclamation-circle" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </symbol>
  </svg>
</template>

<style></style>
