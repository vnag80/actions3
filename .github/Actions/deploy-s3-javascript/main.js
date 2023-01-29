const core = require('@actions/core');
function run()
{
  core.notice("Hurray we are in javascript actions")
  const bucket_nm = core.getInput('bucket-name');
  const region_nm = core.getInput('aws-region');
  const path_nm = core.getInput('dist-file-path')
  core.notice(bucket_nm);
  core.notice(region_nm);
  core.notice(path_nm)


}
run();