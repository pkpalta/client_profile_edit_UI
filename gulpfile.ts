const gulp = require('gulp');
const ts = require('gulp-typescript');
const exec = require('child_process').exec;
const sftp = require('gulp-sftp-up4');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const gulpSSH = require('gulp-ssh');

// Development configuration
const devConfig = {
  host: '52.88.254.197',
  port: 22,
  username: 'deployer',
  password: '$RFVbgt5^YHN',
  appFolder: 'white-label-dev',
  mode: 'development'
};

// Staging configuration
const stagingConfig = {
  host: '52.88.254.197',
  port: 22,
  username: 'deployer',
  password: '$RFVbgt5^YHN',
  appFolder: 'white-label-staging',
  mode: 'staging'
};

// Production configuration
const prodConfig = {
  host: '52.88.254.197',
  port: 22,
  username: 'deployer',
  password: '$RFVbgt5^YHN',
  appFolder: 'white-label',
  mode: 'production'
};

// Build the product
const build = (config, done) => {
  console.log('Building...');
  // tslint:disable-next-line: max-line-length
  return exec(`node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration ${config.mode} --prod --aot`, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    console.log(err);
  });
};

// Compress the image assets
const images = done => {
  console.log('Compressing images of build...');
  return gulp
    .src('dist/assets/**/*.{png,jpeg,jpg,svg,gif}')
    .pipe(
      imagemin([
        imagemin.gifsicle(),
        imagemin.jpegtran(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminPngquant(),
        imageminJpegRecompress()
      ])
    )
    .pipe(gulp.dest('dist/assets'));
};

// Create an SSH reference for development
const devGulpSSH = new gulpSSH({
  ignoreErrors: false,
  sshConfig: devConfig
});

// Create an SSH reference for staging
const stagingGulpSSH = new gulpSSH({
  ignoreErrors: false,
  sshConfig: stagingConfig
});

// Create an SSH reference for production
const prodGulpSSH = new gulpSSH({
  ignoreErrors: false,
  sshConfig: prodConfig
});

// Generic function for executing predeployment tasks
const predeploy = (config, sshClient, done) => {
  return sshClient
    .shell(
      [
        'cd /home/' + config.username,
        'mkdir apps',
        'cd apps',
        'mkdir ' + config.appFolder,
        'cd ' + config.appFolder,
        'mkdir client',
        'cd client',
        'mkdir dist',
        'cd dist'
        // 'rm -rf /home/' + config.username + '/apps/' + config.appFolder + '/client/dist/*',
      ],
      { filePath: 'predeploy.log' }
    )
    .pipe(gulp.dest('logs'));
};

// Generic function for executing deployment tasks
const deploy = (config, done) => {
  console.log('Deploying...');

  return gulp.src('dist/**').pipe(
    sftp({
      host: config.host,
      user: config.username,
      pass: config.password,
      remotePath:
        '/home/' +
        config.username +
        '/apps/' +
        config.appFolder +
        '/client/dist'
    })
  );
};

// Execute build tasks for development
const buildDevelopment = done => {
  const config = devConfig;

  return build(config, done);
};

// Execute build tasks for staging
const buildStaging = done => {
  const config = stagingConfig;

  return build(config, done);
};

// Execute build tasks for productiion
const buildProduction = done => {
  const config = prodConfig;

  return build(config, done);
};

// Execute predeployment tasks for development
const predeployDevelopment = done => {
  const config = devConfig;
  const sshClient = devGulpSSH;

  return predeploy(config, sshClient, done);
};

// Execute predeployment tasks for staging
const predeployStaging = done => {
  const config = stagingConfig;
  const sshClient = stagingGulpSSH;

  return predeploy(config, sshClient, done);
};

// Execute predeployment tasks for production
const predeployProduction = done => {
  const config = prodConfig;
  const sshClient = prodGulpSSH;

  return predeploy(config, sshClient, done);
};

// Execute deployment tasks for development
const deployDevelopment = done => {
  return deploy(devConfig, done);
};

// Execute deployment tasks for staging
const deployStaging = done => {
  return deploy(stagingConfig, done);
};

// Execute deployment tasks for production
const deployProduction = done => {
  return deploy(prodConfig, done);
};

// Common
gulp.task('images', images);

// Development Gulp tasks
gulp.task('build', buildDevelopment);
gulp.task('predeploy', predeployDevelopment);
gulp.task('deploy', deployDevelopment);

// Staging Gulp tasks
gulp.task('build-staging', buildStaging);
gulp.task('predeploy-staging', predeployStaging);
gulp.task('deploy-staging', deployStaging);

// Production Gulp tasks
gulp.task('build-prod', buildProduction);
gulp.task('predeploy-prod', predeployProduction);
gulp.task('deploy-prod', deployProduction);

gulp.task('default', gulp.series('build', 'images', 'predeploy', 'deploy'));
gulp.task(
  'staging',
  gulp.series('build-staging', 'images', 'predeploy-staging', 'deploy-staging')
);
gulp.task(
  'prod',
  gulp.series('build-prod', 'images', 'predeploy-prod', 'deploy-prod')
);
