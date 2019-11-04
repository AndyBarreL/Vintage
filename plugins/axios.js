// export default function ({$axios, redirect}) {
//   $axios.onRequest(config => {
//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Access-Control-Allow-Origin'] = "*";
//   })
// }

export default function ({ $axios, redirect }) {
  // $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(config => {
    console.log('Done')
  })
  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
