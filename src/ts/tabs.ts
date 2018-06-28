const initializeTabSwitcher = () => {
  const activeTabClass = "active-tab";

  const tabs = Array.from(<HTMLCollectionOf<HTMLDivElement>>document.querySelectorAll(".tabs"));

  tabs.forEach(tabContainer => {
    const tabNav = Array.from(<HTMLCollectionOf<HTMLDivElement>>tabContainer.querySelectorAll(".tabs-nav div"));
    const tabContent = Array.from(<HTMLCollectionOf<HTMLDivElement>>tabContainer.querySelectorAll(".tabs-content div"));

    tabNav.forEach(navEl => {
      navEl.addEventListener("click", function() {
        const _this = this;

        tabNav.forEach(
          recursiveNavEl =>
            recursiveNavEl === _this ? recursiveNavEl.classList.add(activeTabClass) : recursiveNavEl.classList.contains(activeTabClass) ? recursiveNavEl.classList.remove(activeTabClass) : void 0
        );

        tabContent.forEach(content => {
          const cList = content.classList;
          content.id === this.dataset.target! ? cList.add(activeTabClass) : cList.contains(activeTabClass) ? cList.remove(activeTabClass) : void 0;
        });
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => initializeTabSwitcher());
