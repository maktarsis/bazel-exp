load("@io_bazel_rules_sass//:defs.bzl", "sass_binary", "sass_library")

package(default_visibility = ["//visibility:public"])

filegroup(
    name = "images",
    srcs = [
        "images/bazel-navbar.svg",
        "images/github-circle-white-transparent.svg",
    ],
)

sass_library(
    name = "colors",
    srcs = ["styles/colors.scss"],
)

sass_library(
    name = "fonts",
    srcs = ["styles/fonts.scss"],
)

sass_library(
    name = "shared",
    srcs = ["styles/shared.scss"],
    deps = [
        ":colors",
        ":fonts",
    ],
)

sass_binary(
    name = "main",
    src = "styles/main.scss",
    deps = [
        ":colors",
        ":fonts",
    ],
)

