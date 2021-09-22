module.exports = {
    apps: [
      {
        name: 'safespace-gql',
        cwd: '/app',
        script: 'yarn',
        args: 'mesh start --require ./env.js',
        interpreter: '/bin/sh'
      }
    ]
}