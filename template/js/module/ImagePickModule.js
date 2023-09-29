export default function ImagePickModule() {
    const imgPicks = document.querySelectorAll('.img-pick-js')
    const imgChange = document.querySelector('.img-change-js')

    if (imgPicks.length > 0) {
        imgPicks.forEach((ele) => {
            ele.onclick = (e) => {
                e.stopPropagation()
                imgPicks.forEach((item) => {
                    item.classList.remove('active')
                })
                ele.classList.add('active')
                let data = ele.getAttribute('data-img')
                if (data) {
                    let img = imgChange.querySelector('img')
                    img.src = data
                }
            }
        })
    }
}