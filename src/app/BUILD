package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
sass_binary(
    name = "app-styles",
    src = "app.component.scss",
    deps = ["//src/assets:shared"],
)

load("@angular//:index.bzl", "ng_module")
ng_module(
    name = "app",
    srcs = [
        "app.component.ts",
        "app.module.ts",
        "app.module.dev.ts",
        "app-routing.module.ts"
    ],
    assets = [
        "app.component.html",
        ":app-styles",
    ],
    tsconfig = "//src:tsconfig.json",
    deps = [
        "//src/app/views/hello-world",
        "//src/app/views/todos",
        "//src/app/shared/material",
        "@angular//packages/core",
        "@angular//packages/platform-browser",
        "@angular//packages/platform-browser/animations",
        "@angular//packages/router",
        "@npm//@ngrx/store"
    ],
)
