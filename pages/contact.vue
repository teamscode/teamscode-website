<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-8">
        <div class="text-center">
          <h2 class="text-h4 text-sm-h3 text-md-h2">
            Get in touch with us
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              Ways to connect with TeamsCode for inquiries and support
            </div>
          </v-responsive>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-6">
        <v-row>
          <v-col cols="12" lg="6">
            <h4 class="text-h4">
              Receive updates in your inbox
            </h4>
            <div class="text-h6 text-lg-h5 mt-2">
              Subscribe to TeamsCode's newsletters to receive announcements and updates.
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <NewsletterForm>
              <div class="d-flex flex-column flex-sm-row w-full">
                <v-text-field
                  id="EMAIL"
                  type="text"
                  solo
                  hide-details
                  height="64"
                  name="EMAIL"
                  placeholder="Please enter your email"

                  full-width
                  class="mr-sm-2 mb-2 mb-sm-0 flex-grow-1"
                />
                <v-btn
                  form="sib-form"
                  type="submit"
                  x-large
                  color="primary"
                  class="mailing_list_signup"
                >
                  Subscribe
                </v-btn>
              </div>
            </NewsletterForm>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-divider />
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-6">
        <v-row>
          <v-col
            v-for="(item, i) in contacts"
            :key="i"
            cols="12"
            lg="6"
          >
            <v-card class="pa-3">
              <div class="text-h5">
                {{ item.title }}
              </div>
              <div class="text-body secondary--text mt-2">
                {{ item.content }}
              </div>
              <v-card-actions>
                <div class="mt-2">
                  <v-chip v-for="purpose in item.purposes" :key="purpose" small class="mr-1 mb-2">
                    {{ purpose }}
                  </v-chip>
                </div>
                <v-spacer />
                <v-btn :href="item.buttonLink" target="_blank" color="primary">
                  {{ item.buttonText }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {
          title: 'Join our Discord server',
          content: 'The best way to stay updated is to join our Discord server. It\'s our main communication method during contests.',
          purposes: ['Contest Updates', 'Ask Questions'],
          buttonText: 'Join Discord',
          buttonLink: 'https://go.teamscode.org/discord'
        },
        {
          title: 'Email TeamsCode',
          content: 'Would like to sponsor TeamsCode or have a question? Email us at contact@teamscode.org.',
          purposes: ['Sponsorship Inquiries', 'Ask Questions'],
          buttonText: 'Email TeamsCode',
          buttonLink: 'mailto:contact@teamscode.org'
        },
        {
          title: 'Sponsor TeamsCode',
          content: 'Here is our sponsorship deck. Please email us if you have any question!',
          purposes: ['Sponsorship Inquiries'],
          buttonText: 'Sponsorship Deck',
          buttonLink: 'https://teamscode.blob.core.windows.net/public-files/sponsorship_deck.pdf'
        },
        {
          title: 'Donate to TeamsCode',
          content: 'Click the button below to donate to our PayPal. Any support is appreciated!',
          purposes: ['Donation'],
          buttonText: 'Donate to TeamsCode',
          buttonLink: 'https://www.paypal.com/donate/?hosted_button_id=EZB9M55P996QU'
        },
        {
          title: 'Join our team',
          content: 'Interested in helping us organize contests? Click the button below to view the application packet.',
          purposes: ['Join TeamsCode'],
          buttonText: 'Application Packet',
          buttonLink: 'https://docs.google.com/document/d/1_AeM-rZ8GQk_MvBuJ3P_mWwTDf2eeW_r84VyhpCIIEU'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'TeamsCode\'s contact method. You can reach us through Discord and email. Donate to TeamsCode. Join TeamsCode\'s organizer team.'
        }
      ]
    }
  }
}
</script>
