import { shallowMount } from "@vue/test-utils";
import StateAvatar from "@/components/StateAvatar.vue";

describe("StateAvatar.vue", () => {
  it("Renders correct Open state", () => {
    const state = "Open";
    const wrapper = shallowMount(StateAvatar, {
      propsData: { state }
    });
    expect(wrapper.text()).toMatch(state);
  });
});
