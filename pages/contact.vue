<template>
  <div>
    <v-sheet color="transparent">
      <v-container class="py-8">
        <div class="text-center">
          <h2 class="text-h3 text-lg-h2">
            {{ title }}
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              {{ subtitle }}
            </div>
          </v-responsive>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
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
      title: 'Get in touch with us',
      subtitle: 'Ways to connect with TeamsCode for inquiries and support',
      contacts: [
        {
          title: 'Join our Discord server',
          content: 'The best way to stay updated is to join our Discord server. It\'s our main communication method during contests.',
          purposes: ['Contest Updates', 'Ask Questions'],
          buttonText: 'Join Discord',
          buttonLink: 'https://discord.com/invite/48W8ttCANJ'
        },
        {
          title: 'Email TeamsCode',
          content: 'Would like to sponsor TeamsCode or have a question? Email us at contact@teamscode.org.',
          purposes: ['Sponsorship Inquiries', 'Ask Questions'],
          buttonText: 'Email TeamsCode',
          buttonLink: 'mailto:contact@teamscode.org'
        },
        {
          title: 'Donate to TeamsCode',
          content: 'Click the button below to donate to our PayPal. TeamsCode is a student led organization, and any support is appreciated!',
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
  }
}
</script>
