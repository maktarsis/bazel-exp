package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")
sass_binary(
    name = "app-styles",
    src = "app.component.scss",
    deps = ["//src/styles:shared"],
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
        "//src/material",
        "//src/app/hello-world",
        "//src/app/todos",
        "@angular//packages/core",
        "@angular//packages/platform-browser",
        "@angular//packages/platform-browser/animations",
        "@angular//packages/router",
        "@npm//@ngrx/store"
    ],
)

#ng_module(
#    name = "src",
#    srcs = glob(
#        ["*.ts"],
#        exclude = ["main.ts"],
#    ),
#    assets = [
#        "//src/styles:main",
#    ],
#    tsconfig = ":tsconfig.json",
#    deps = [
#        "//src/app",
#        "//src/hello-world",
#        "//src/material",
#        "//src/todos",
#        "@angular//packages/core",
#        "@angular//packages/platform-browser",
#        "@angular//packages/platform-browser/animations",
#        "@angular//packages/router",
#        "@npm//@ngrx/store",
#    ],
#)
