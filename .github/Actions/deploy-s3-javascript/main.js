const core = require('@actions/core');
const exec = require('@actions/exec');
function run()
{
  core.notice("Hurray we are in javascript actions")
  const bucket_nm = core.getInput('bucket-name');
  const region_nm = core.getInput('aws-region');
  const path_nm = core.getInput('dist-file-path')
  core.notice(bucket_nm);
  core.notice(region_nm);
  core.notice(path_nm)
  bucket_uri = `s3://${bucket_nm}`
  core.notice(bucket_uri);
  exec.exec(`aws s3 sync ${path_nm} ${bucket_uri} --region ${region_nm}`)
  const webURL = `http://${bucket_nm}.s3-website-${region_nm}.amazonaws.com`
  core.setOutput('web-url',webURL)



}
run();