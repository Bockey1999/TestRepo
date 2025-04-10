import { mount } from '@vue/test-utils';
import ReviewComponent from '../src/components/ReviewComponent.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      review: {
        title: "Write a Review",
        placeholder: "Type your review here...",
        submit: "Submit"
      }
    }
  }
});

describe('ReviewComponent.vue', () => {
  it('renders and submits a review', async () => {
    const wrapper = mount(ReviewComponent, {
      global: {
        plugins: [i18n]
      }
    });

    expect(wrapper.text()).toContain('Write a Review');

    await wrapper.find('textarea').setValue('Great product!');
    await wrapper.find('button').trigger('click');

    expect(wrapper.find('textarea').element.value).toBe('');
  });
});
