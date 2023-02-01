import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/'
});

registerApplication({
  name: "@fs/angular-single",
  app: () =>
    System.import<LifeCycles>("@fs/angular-single"),
  activeWhen: ["/angular-single"],
});

registerApplication({
  name: "@fs/angular-single2",
  app: () =>
    System.import<LifeCycles>("@fs/angular-single2"),
  activeWhen: ["/angular-single2"],
});

// registerApplication({
//   name: "@fs/navbar",
//   app: () => System.import("@fs/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
