// Work-around for angular material issue with ts_devserver and ts_web_test_suite.
// Material requires `module.id` to be valid. This symbol is valid in the production
// bundle but not in ts_devserver and ts_web_test_suite.
var module = {id: ''};
