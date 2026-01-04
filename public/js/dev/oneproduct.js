import { g as getHash, s as setHash, a as slideDown, b as slideUp, d as dataMediaQueries, u as uniqArray } from "./app.min.js";
import "./oneproduct.min2.js";
/* empty css          */
/* empty css             */
/* empty css          */
/* empty css               */
function tabs() {
  const tabs2 = document.querySelectorAll("[data-fls-tabs]");
  let tabsActiveHash = [];
  const tabsCache = /* @__PURE__ */ new Map();
  if (tabs2.length > 0) {
    const hash = getHash();
    if (hash && hash.startsWith("tab-")) {
      tabsActiveHash = hash.replace("tab-", "").split("-");
    }
    tabs2.forEach((tabsBlock, index) => {
      tabsBlock.classList.add("--tab-init");
      tabsBlock.setAttribute("data-fls-tabs-index", index);
      cacheTabElements(tabsBlock, index);
      tabsBlock.addEventListener("click", setTabsAction);
      tabsBlock.addEventListener("keydown", handleKeyboardNavigation);
      initTabs(tabsBlock);
      setupAccessibility(tabsBlock);
      setupResponsive(tabsBlock);
    });
  }
  function cacheTabElements(tabsBlock, index) {
    const cache = {
      block: tabsBlock,
      index,
      titlesContainer: tabsBlock.querySelector("[data-fls-tabs-titles]"),
      contentContainer: tabsBlock.querySelector("[data-fls-tabs-body]"),
      titles: null,
      content: null,
      animationDuration: null,
      hasHash: tabsBlock.hasAttribute("data-fls-tabs-hash"),
      breakpoint: null,
      isSpoller: false
      // Режим спойлера
    };
    if (tabsBlock.hasAttribute("data-fls-tabs-animate")) {
      const duration = Number(tabsBlock.dataset.flsTabsAnimate);
      cache.animationDuration = duration > 0 ? duration : 500;
    }
    if (tabsBlock.hasAttribute("data-fls-tabs")) {
      const bp = tabsBlock.getAttribute("data-fls-tabs");
      cache.breakpoint = bp ? Number(bp) : null;
    }
    tabsCache.set(tabsBlock, cache);
  }
  function setupResponsive(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache || !cache.breakpoint) return;
    const mediaQuery = window.matchMedia(`(max-width: ${cache.breakpoint - 1}px)`);
    const handleResize = (e) => {
      cache.isSpoller = e.matches;
      if (e.matches) {
        tabsBlock.classList.add("--tab-spoller");
      } else {
        tabsBlock.classList.remove("--tab-spoller");
        ensureSingleActiveTab(tabsBlock);
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    handleResize(mediaQuery);
  }
  function ensureSingleActiveTab(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache || !cache.titles) return;
    let foundActive = false;
    cache.titles.forEach((title) => {
      if (title.classList.contains("--tab-active")) {
        if (foundActive) {
          title.classList.remove("--tab-active");
        } else {
          foundActive = true;
        }
      }
    });
    if (!foundActive && cache.titles.length > 0) {
      cache.titles[0].classList.add("--tab-active");
    }
    updateContentVisibility(tabsBlock);
  }
  function setupAccessibility(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache || !cache.titles || !cache.content) return;
    if (cache.titlesContainer) {
      cache.titlesContainer.setAttribute("role", "tablist");
    }
    cache.titles.forEach((title, index) => {
      const contentItem = cache.content[index];
      const isActive = title.classList.contains("--tab-active");
      let panelId = title.getAttribute("href");
      if (panelId && panelId.startsWith("#")) {
        panelId = panelId.substring(1);
      } else {
        panelId = `panel-${cache.index}-${index}`;
      }
      const tabId = `tab-${cache.index}-${index}`;
      title.setAttribute("role", "tab");
      title.setAttribute("id", tabId);
      title.setAttribute("aria-selected", isActive ? "true" : "false");
      title.setAttribute("aria-controls", panelId);
      title.setAttribute("tabindex", isActive ? "0" : "-1");
      if (contentItem) {
        contentItem.setAttribute("role", "tabpanel");
        contentItem.setAttribute("id", panelId);
        contentItem.setAttribute("aria-labelledby", tabId);
        contentItem.setAttribute("tabindex", "0");
      }
    });
  }
  function handleKeyboardNavigation(e) {
    const tabsBlock = e.currentTarget;
    const cache = tabsCache.get(tabsBlock);
    if (!cache || !cache.titles) return;
    const currentTab = e.target.closest("[data-fls-tabs-title]");
    if (!currentTab) return;
    const currentIndex = cache.titles.indexOf(currentTab);
    let targetIndex = currentIndex;
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        targetIndex = currentIndex > 0 ? currentIndex - 1 : cache.titles.length - 1;
        break;
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        targetIndex = currentIndex < cache.titles.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        e.preventDefault();
        targetIndex = 0;
        break;
      case "End":
        e.preventDefault();
        targetIndex = cache.titles.length - 1;
        break;
      default:
        return;
    }
    const targetTab = cache.titles[targetIndex];
    if (targetTab) {
      activateTab(targetTab, tabsBlock);
      targetTab.focus();
    }
  }
  function updateTabCache(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache) return;
    let titles = tabsBlock.querySelectorAll("[data-fls-tabs-title]");
    let content = tabsBlock.querySelectorAll("[data-fls-tabs-item]");
    cache.titles = Array.from(titles).filter(
      (item) => item.closest("[data-fls-tabs]") === tabsBlock
    );
    cache.content = Array.from(content).filter(
      (item) => item.closest("[data-fls-tabs]") === tabsBlock
    );
  }
  function initTabs(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache) return;
    const tabsTitles = tabsBlock.querySelectorAll("[data-fls-tabs-titles]>*");
    const tabsContent = tabsBlock.querySelectorAll("[data-fls-tabs-body]>*");
    const tabsActiveHashBlock = tabsActiveHash[0] == cache.index;
    if (tabsActiveHashBlock) {
      const tabsActiveTitle = tabsBlock.querySelector("[data-fls-tabs-titles]>.--tab-active");
      tabsActiveTitle?.classList.remove("--tab-active");
    }
    if (tabsContent.length) {
      tabsContent.forEach((tabsContentItem, index) => {
        tabsTitles[index].setAttribute("data-fls-tabs-title", "");
        tabsContentItem.setAttribute("data-fls-tabs-item", "");
        if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
          tabsTitles[index].classList.add("--tab-active");
        }
        tabsContentItem.hidden = !tabsTitles[index].classList.contains("--tab-active");
      });
    }
    updateTabCache(tabsBlock);
  }
  function updateAriaAttributes(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache || !cache.titles) return;
    cache.titles.forEach((title) => {
      const isActive = title.classList.contains("--tab-active");
      title.setAttribute("aria-selected", isActive ? "true" : "false");
      title.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }
  function updateContentVisibility(tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache || !cache.titles || !cache.content) return;
    cache.content.forEach((tabsContentItem, index) => {
      const isActive = cache.titles[index].classList.contains("--tab-active");
      if (isActive) {
        if (cache.animationDuration) {
          slideDown(tabsContentItem, cache.animationDuration);
        } else {
          tabsContentItem.hidden = false;
        }
      } else {
        if (cache.animationDuration) {
          slideUp(tabsContentItem, cache.animationDuration);
        } else {
          tabsContentItem.hidden = true;
        }
      }
    });
    updateAriaAttributes(tabsBlock);
  }
  function activateTab(tabTitle, tabsBlock) {
    const cache = tabsCache.get(tabsBlock);
    if (!cache) return;
    const isAnimating = tabsBlock.querySelector(".--slide");
    const isCurrentlyActive = tabTitle.classList.contains("--tab-active");
    if (isAnimating) return;
    if (cache.isSpoller) {
      if (isCurrentlyActive) {
        tabTitle.classList.remove("--tab-active");
      } else {
        tabTitle.classList.add("--tab-active");
      }
    } else {
      if (isCurrentlyActive) return;
      cache.titles.forEach((title) => title.classList.remove("--tab-active"));
      tabTitle.classList.add("--tab-active");
      if (cache.hasHash) {
        const index = cache.titles.indexOf(tabTitle);
        setHash(`tab-${cache.index}-${index}`);
      }
    }
    updateContentVisibility(tabsBlock);
  }
  function setTabsAction(e) {
    const el = e.target;
    const tabTitle = el.closest("[data-fls-tabs-title]");
    if (!tabTitle) return;
    const tabsBlock = tabTitle.closest("[data-fls-tabs]");
    e.preventDefault();
    activateTab(tabTitle, tabsBlock);
  }
}
window.addEventListener("load", tabs);
function showMore() {
  const showMoreBlocks = document.querySelectorAll("[data-fls-showmore]");
  let showMoreBlocksRegular;
  let mdQueriesArray;
  if (showMoreBlocks.length) {
    showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function(item, index, self) {
      return !item.dataset.flsShowmoreMedia;
    });
    showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
    document.addEventListener("click", showMoreActions);
    window.addEventListener("resize", showMoreActions);
    mdQueriesArray = dataMediaQueries(showMoreBlocks, "flsShowmoreMedia");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach((mdQueriesItem) => {
        mdQueriesItem.matchMedia.addEventListener("change", function() {
          initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
      });
      initItemsMedia(mdQueriesArray);
    }
  }
  function initItemsMedia(mdQueriesArray2) {
    mdQueriesArray2.forEach((mdQueriesItem) => {
      initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
    });
  }
  function initItems(showMoreBlocks2, matchMedia) {
    showMoreBlocks2.forEach((showMoreBlock) => {
      initItem(showMoreBlock, matchMedia);
    });
  }
  function initItem(showMoreBlock, matchMedia = false) {
    showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
    let showMoreContent = showMoreBlock.querySelectorAll("[data-fls-showmore-content]");
    let showMoreButton = showMoreBlock.querySelectorAll("[data-fls-showmore-button]");
    showMoreContent = Array.from(showMoreContent).filter((item) => item.closest("[data-fls-showmore]") === showMoreBlock)[0];
    showMoreButton = Array.from(showMoreButton).filter((item) => item.closest("[data-fls-showmore]") === showMoreBlock)[0];
    const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
    if (matchMedia.matches || !matchMedia) {
      if (hiddenHeight < getOriginalHeight(showMoreContent)) {
        slideUp(showMoreContent, 0, showMoreBlock.classList.contains("--showmore-active") ? getOriginalHeight(showMoreContent) : hiddenHeight);
        showMoreButton.hidden = false;
      } else {
        slideDown(showMoreContent, 0, hiddenHeight);
        showMoreButton.hidden = true;
      }
    } else {
      slideDown(showMoreContent, 0, hiddenHeight);
      showMoreButton.hidden = true;
    }
  }
  function getHeight(showMoreBlock, showMoreContent) {
    let hiddenHeight = 0;
    const showMoreType = showMoreBlock.dataset.flsShowmore ? showMoreBlock.dataset.flsShowmore : "size";
    const rowGap = parseFloat(getComputedStyle(showMoreContent).rowGap) ? parseFloat(getComputedStyle(showMoreContent).rowGap) : 0;
    if (showMoreType === "items") {
      const showMoreTypeValue = showMoreContent.dataset.flsShowmoreContent ? showMoreContent.dataset.flsShowmoreContent : 3;
      const showMoreItems = showMoreContent.children;
      for (let index = 1; index < showMoreItems.length; index++) {
        const showMoreItem = showMoreItems[index - 1];
        const marginTop = parseFloat(getComputedStyle(showMoreItem).marginTop) ? parseFloat(getComputedStyle(showMoreItem).marginTop) : 0;
        const marginBottom = parseFloat(getComputedStyle(showMoreItem).marginBottom) ? parseFloat(getComputedStyle(showMoreItem).marginBottom) : 0;
        hiddenHeight += showMoreItem.offsetHeight + marginTop;
        if (index == showMoreTypeValue) break;
        hiddenHeight += marginBottom;
      }
      rowGap ? hiddenHeight += (showMoreTypeValue - 1) * rowGap : null;
    } else {
      const showMoreTypeValue = showMoreContent.dataset.flsShowmoreContent ? showMoreContent.dataset.flsShowmoreContent : 450;
      hiddenHeight = showMoreTypeValue;
    }
    return hiddenHeight;
  }
  function getOriginalHeight(showMoreContent) {
    let parentHidden;
    let hiddenHeight = showMoreContent.offsetHeight;
    showMoreContent.style.removeProperty("height");
    if (showMoreContent.closest(`[hidden]`)) {
      parentHidden = showMoreContent.closest(`[hidden]`);
      parentHidden.hidden = false;
    }
    let originalHeight = showMoreContent.offsetHeight;
    parentHidden ? parentHidden.hidden = true : null;
    showMoreContent.style.height = `${hiddenHeight}px`;
    return originalHeight;
  }
  function showMoreActions(e) {
    const targetEvent = e.target;
    const targetType = e.type;
    if (targetType === "click") {
      if (targetEvent.closest("[data-fls-showmore-button]")) {
        const showMoreButton = targetEvent.closest("[data-fls-showmore-button]");
        const showMoreBlock = showMoreButton.closest("[data-fls-showmore]");
        const showMoreContent = showMoreBlock.querySelector("[data-fls-showmore-content]");
        const showMoreSpeed = showMoreBlock.dataset.flsShowmoreButton ? showMoreBlock.dataset.flsShowmoreButton : "500";
        const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
        if (!showMoreContent.classList.contains("--slide")) {
          showMoreBlock.classList.contains("--showmore-active") ? slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
          showMoreBlock.classList.toggle("--showmore-active");
        }
      }
    } else if (targetType === "resize") {
      showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
      mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
    }
  }
}
window.addEventListener("load", showMore);
class ScrollWatcher {
  constructor(props) {
    let defaultConfig = {
      logging: true
    };
    this.config = Object.assign(defaultConfig, props);
    this.observer;
    !document.documentElement.hasAttribute("data-fls-watch") ? this.scrollWatcherRun() : null;
  }
  // Оновлюємо конструктор
  scrollWatcherUpdate() {
    this.scrollWatcherRun();
  }
  // Запускаємо конструктор
  scrollWatcherRun() {
    document.documentElement.setAttribute("data-fls-watch", "");
    this.scrollWatcherConstructor(document.querySelectorAll("[data-fls-watcher]"));
  }
  // Конструктор спостерігачів
  scrollWatcherConstructor(items) {
    if (items.length) {
      let uniqParams = uniqArray(Array.from(items).map(function(item) {
        if (item.dataset.flsWatcher === "navigator" && !item.dataset.flsWatcherThreshold) {
          let valueOfThreshold;
          if (item.clientHeight > 2) {
            valueOfThreshold = window.innerHeight / 2 / (item.clientHeight - 1);
            if (valueOfThreshold > 1) {
              valueOfThreshold = 1;
            }
          } else {
            valueOfThreshold = 1;
          }
          item.setAttribute(
            "data-fls-watcher-threshold",
            valueOfThreshold.toFixed(2)
          );
        }
        return `${item.dataset.flsWatcherRoot ? item.dataset.flsWatcherRoot : null}|${item.dataset.flsWatcherMargin ? item.dataset.flsWatcherMargin : "0px"}|${item.dataset.flsWatcherThreshold ? item.dataset.flsWatcherThreshold : 0}`;
      }));
      uniqParams.forEach((uniqParam) => {
        let uniqParamArray = uniqParam.split("|");
        let paramsWatch = {
          root: uniqParamArray[0],
          margin: uniqParamArray[1],
          threshold: uniqParamArray[2]
        };
        let groupItems = Array.from(items).filter(function(item) {
          let watchRoot = item.dataset.flsWatcherRoot ? item.dataset.flsWatcherRoot : null;
          let watchMargin = item.dataset.flsWatcherMargin ? item.dataset.flsWatcherMargin : "0px";
          let watchThreshold = item.dataset.flsWatcherThreshold ? item.dataset.flsWatcherThreshold : 0;
          if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) {
            return item;
          }
        });
        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
        this.scrollWatcherInit(groupItems, configWatcher);
      });
    }
  }
  // Функція створення налаштувань
  getScrollWatcherConfig(paramsWatch) {
    let configWatcher = {};
    if (document.querySelector(paramsWatch.root)) {
      configWatcher.root = document.querySelector(paramsWatch.root);
    } else if (paramsWatch.root !== "null") ;
    configWatcher.rootMargin = paramsWatch.margin;
    if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
      return;
    }
    if (paramsWatch.threshold === "prx") {
      paramsWatch.threshold = [];
      for (let i = 0; i <= 1; i += 5e-3) {
        paramsWatch.threshold.push(i);
      }
    } else {
      paramsWatch.threshold = paramsWatch.threshold.split(",");
    }
    configWatcher.threshold = paramsWatch.threshold;
    return configWatcher;
  }
  // Функція створення нового спостерігача зі своїми налаштуваннями
  scrollWatcherCreate(configWatcher) {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        this.scrollWatcherCallback(entry, observer);
      });
    }, configWatcher);
  }
  // Функція ініціалізації спостерігача зі своїми налаштуваннями
  scrollWatcherInit(items, configWatcher) {
    this.scrollWatcherCreate(configWatcher);
    items.forEach((item) => this.observer.observe(item));
  }
  // Функція обробки базових дій точок спрацьовування
  scrollWatcherIntersecting(entry, targetElement) {
    if (entry.isIntersecting) {
      !targetElement.classList.contains("--watcher-view") ? targetElement.classList.add("--watcher-view") : null;
    } else {
      targetElement.classList.contains("--watcher-view") ? targetElement.classList.remove("--watcher-view") : null;
    }
  }
  // Функція відключення стеження за об'єктом
  scrollWatcherOff(targetElement, observer) {
    observer.unobserve(targetElement);
  }
  // Функція обробки спостереження
  scrollWatcherCallback(entry, observer) {
    const targetElement = entry.target;
    this.scrollWatcherIntersecting(entry, targetElement);
    targetElement.hasAttribute("data-fls-watcher-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
    document.dispatchEvent(new CustomEvent("watcherCallback", {
      detail: {
        entry
      }
    }));
  }
}
document.querySelector("[data-fls-watcher]") ? window.addEventListener("load", () => new ScrollWatcher({})) : null;
