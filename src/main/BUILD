package(default_visibility = ["//visibility:public"])

load("@angular//:index.bzl", "ng_module")
ng_module(
    name = "dev",
    srcs = [
        "main.dev.ts"
    ],
    tsconfig = "//src/configs:tsconfig.json",
    deps = [
        "//src/app",
        "@angular//packages/core",
        "@angular//packages/platform-browser",
        "@angular//packages/platform-browser/animations",
        "@angular//packages/router",
        "@npm//@ngrx/store"
    ],
)
