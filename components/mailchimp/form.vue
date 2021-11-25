<template>
  <div>
    <v-form
      id="mc-embedded-subscribe-form"
      action="https://teamscode.us16.list-manage.com/subscribe/post?u=68ebd958a395d94f3d7ad5ada&amp;id=1b008420c1"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div class="d-flex flex-column flex-lg-row w-full">
        <v-text-field
          id="mce-EMAIL"
          outlined
          solo
          dense
          label="Email"
          type="email"
          value=""
          name="EMAIL"
          height="44"
          class="required email mr-lg-2"
        />
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_68ebd958a395d94f3d7ad5ada_1b008420c1" tabindex="-1" value="">
        </div>
        <v-btn
          id="mc-embedded-subscribe"
          large
          color="secondary"
          type="submit"
          value="Subscribe"
          name="subscribe"
          class="button"
        >
          Subscribe
        </v-btn>
      </div>
    </v-form>
    <div class="text-caption">
      By subscribing to our mailing list, you consent to receive promotional emails from TeamsCode.
    </div>
  </div>
</template>
