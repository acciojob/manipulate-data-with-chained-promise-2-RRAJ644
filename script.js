//your JS code here. If required.
let arr = [1, 2, 3, 4]
let resArr  = []

let output = document.getElementById("output")

new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(arr)
	}, 3000)
}).then((res) => {
	resArr = res.filter(val => val%2===0)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            console.log(resArr)
            output.innerText = resArr
			resolve(resArr)
		}, 1000)
	})
}).then((res) => {
    resArr = res.map(val => val*2)
    setTimeout(()=>{
        output.innerText = resArr
        console.log(resArr)
    },2000)
})