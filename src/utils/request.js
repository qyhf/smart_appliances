import axios from 'axios';
import qs from 'qs';
import { Indicator, Toast } from 'mint-ui'


async function aGet(url, params, noIndicator){
  try{
    if(!noIndicator) Indicator.open({ text: '加载中...', spinnerType: 'snake' })
    let headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    let token = localStorage.getItem('token')
    if(token){
      headers['Authorization'] = 'Bearer ' + token
      headers['formToken'] = new Date().getTime()
    }
    let res = await axios.get(url, {
      params: params,
      headers: headers,
      timeout: 8000,
    });
    if(!noIndicator) Indicator.close()
    return res
  } catch(e) {
    if(!noIndicator) Indicator.close()
    console.log(e)
    Toast({ message:'服务器忙', position:'bottom', duration:'1000'})
  }
}


//x-www-form-urlencoded
async function aPost(url, params, noIndicator){
  try{
    if(!noIndicator) Indicator.open({ text: '加载中...', spinnerType: 'snake' })
    let headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    let token = localStorage.getItem('token')
    if(token){
      headers['Authorization'] = 'Bearer ' + token
      headers['formToken'] = new Date().getTime()
    }
    let res = await axios.post(url, qs.stringify(params),
      {headers: headers,
      timeout: 8000,
    }
    );
    if(!noIndicator) Indicator.close();
    return res;
  } catch(e) {
    if(!noIndicator) Indicator.close();
    console.log(e);
    Toast({ message:'服务器忙', position:'bottom', duration:'1000'});
  }
}


//application/json
async function aPost2(url, params, noIndicator){
  try{
    if(!noIndicator) Indicator.open({ text: '加载中...', spinnerType: 'snake' })
    let headers = {'Content-Type': 'application/json'}
    let token = localStorage.getItem('token')
    if(token){
      headers['Authorization'] = 'Bearer ' + token
      headers['formToken'] = new Date().getTime()
    }
    let res = await axios.post(url, params, {headers: headers, timeout: 8000})
    if(!noIndicator) Indicator.close()
    return res
  } catch(e) {
    if(!noIndicator) Indicator.close()
    console.log(e)
    Toast({ message:'服务器忙', position:'bottom', duration:'1000'})
  }
}


async function upImg(url, fileName, file, noIndicator){
  try{
    if(!noIndicator) Indicator.open({ text: '加载中...', spinnerType: 'snake' })
    let headers = {'Content-Type': 'multiple/form-data'}
    let token = localStorage.getItem('token')
    if(token){
      headers['Authorization'] = 'Bearer ' + token
      headers['formToken'] = new Date().getTime()
    }
    let params = new FormData()
    params.append(fileName, file, file.name)
    let res = await axios.post(url, params,
      {headers: headers}
    )
    if(!noIndicator) Indicator.close()
    return res
  } catch(e) {
    if(!noIndicator) Indicator.close()
    console.log(e)
    Toast({ message:'服务器忙', position:'bottom', duration:'1000'})
  }
}


async function upImg2(url, data, noIndicator){
  try{
    if(!noIndicator) Indicator.open({ text: '上传中...', spinnerType: 'snake' });
    let headers = {'Content-Type': 'multiple/form-data'}
    let token = localStorage.getItem('token')
    if(token){
      headers['Authorization'] = 'Bearer ' + token
      headers['formToken'] = new Date().getTime()
    }

    let params = new FormData();
    for(let i in data){
      params.append(i, data[i]);
    }
    //params.append(key, value);
    let res = await axios.post(url, params,
      {headers: headers}
    );
    if(!noIndicator) Indicator.close();
    return res;
  } catch(e) {
    if(!noIndicator) Indicator.close();
    console.log(e);
    Toast({ message:'服务器忙', position:'bottom', duration:'1000'});
  }
}



module.exports = {
  aGet: aGet,
  aPost: aPost,
  aPost2: aPost2,
  upImg: upImg,
  upImg2: upImg2
}
