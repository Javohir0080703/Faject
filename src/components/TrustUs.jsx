import React from 'react'
import trustusimg from '../img/TrustUsImg.png'
const TrustUs = ({ language, setLanguage }) => {
    const TrustUsData = [
        // ru
        {
            title:"Почему нам доверяют?",
            text:"Именно столько лет мы делаем мир вокруг лучше, создавая IT-продукты и уникальные решения.Наша команда успешно прошла кризисы последних лет и стала только опытнее и сплоченне, готовясь покорять новые высоты!",
           img: trustusimg,
           lang:"ru"
        },
        // eng
        {
            title:"Why do they trust us?",
            text:"This is how many years we have been making the world around us a better place, creating IT products and unique solutions. Our team has successfully overcome the crises of recent years and has only become more experienced and united, preparing to conquer new heights!",
           img: trustusimg,
           lang:"eng"
        },
        // uzb
        {
            title:"Nega ular bizga ishonishadi?",
            text:"Mana necha yildirki, biz atrofimizdagi dunyoni yaxshiroq joyga aylantirmoqdamiz, IT-mahsulotlar va noyob yechimlarni yaratmoqdamiz. Bizning jamoamiz so'nggi yillardagi inqirozlarni muvaffaqiyatli yengib chiqdi va yangi cho'qqilarni zabt etishga tayyorgarlik ko'rmoqda!",
           img: trustusimg,
           lang:"uzb"
        },
    ]
  return (
    <section className='py-11 bg-#040D12'>
        <div className='containerb'>
          {
            TrustUsData.map((lan, index)=>{
                if(language === lan.lang){
                    return(
                        <div>
                            <h2 className='font-semibold text-64px leading-78px text-white mb-8'>{lan.title}</h2>
                            <div className='flex items-center justify-between'>
                                <img className='w-full max-w-[260px]' src={lan.img} alt="Img" />
                                <p className='w-full max-w-[760px] text-2xl leading-8 text-white'>{lan.text}</p>
                            </div>
                        </div>
                    )
                }
            })
          }
        </div>
    </section>
  )
}

export default TrustUs