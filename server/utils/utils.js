// 查询
module.exports = {
  search: (model, ...args) => new Promise((resolve, reject) => {
    console.log('查询');
    model.find(...args).then(
      (res) => {
        resolve(res)
      },
      (err) => {
        console.log(err);
        reject('error')
      }
    )
  }),

  save: (model) => new Promise((resolve, reject) => {
    console.log('保存');
    model.save((err, response) => {
      if (err) {
        console.log(err);
        reject('error')
      } else {
        if (response) {
          resolve('success');
        } else {
          reject('error')
        }
      }
    })
  }),
};