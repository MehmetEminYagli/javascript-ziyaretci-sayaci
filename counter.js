/*// Sayfa yüklendiğinde çalışacak kod
window.onload = function() {
    // Ziyaretçi sayısını al
    let visitorCount = localStorage.getItem('visitorCount');

    // Eğer daha önce bir ziyaretçi sayısı yoksa, 0 olarak ayarla
    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        // Eğer ziyaretçi sayısı varsa bir arttır
        visitorCount = parseInt(visitorCount) + 1;
    }

    // Ziyaretçi sayısını güncelle
    document.getElementById('visitorCount').textContent = visitorCount;

    // Güncellenmiş ziyaretçi sayısını yerel depolamada sakla
    localStorage.setItem('visitorCount', visitorCount);
}*/



// Sayfa yüklendiğinde çalışacak kod
window.onload = async function() {
    try {
        // Kullanıcının IP adresini al
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;

        // IP adresini kullanarak ziyaretçi sayısını al
        let visitorCount = localStorage.getItem(userIP);

        // Eğer daha önce bir ziyaretçi sayısı yoksa, 0 olarak ayarla
        if (visitorCount === null) {
            visitorCount = 0;
        } else {
            // Eğer ziyaretçi sayısı varsa bir arttır
            visitorCount = parseInt(visitorCount) + 1;
            
        }

        // Ziyaretçi sayısını güncelle
        document.getElementById('visitorCount').textContent = visitorCount;

        // Güncellenmiş ziyaretçi sayısını yerel depolamada sakla
        const pElement = document.createElement('p');
        pElement.textContent = `IP Adresiniz: ${userIP}`;
        document.body.appendChild(pElement);
        localStorage.setItem(userIP, visitorCount);
    } catch (error) {
        console.error("Hata oluştu:", error);
    }
}


/* db ile sayac
// Sayfa yüklendiğinde çalışacak kod
window.onload = function() {
    // Tarayıcı çerezini kontrol et
    const hasVisitedBefore = getCookie('visitedBefore');

    // Eğer daha önce ziyaret edilmediyse
    if (!hasVisitedBefore) {
        // Ziyaretçi sayısını arttır
        increaseVisitorCount();

        // Çerezi ayarla
        setCookie('visitedBefore', 'true', 365); // 365 gün boyunca geçerli
    }
}

// Tarayıcı çerezi alma
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Tarayıcı çerezi ayarlama
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

// Ziyaretçi sayısını arttırma
function increaseVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount');

    if (visitorCount === null) {
        visitorCount = 1;
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }

    localStorage.setItem('visitorCount', visitorCount);
}


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/visitorCountDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const VisitorCount = mongoose.model('VisitorCount', { count: Number });

app.get('/', async (req, res) => {
    try {
        let visitorCount = await VisitorCount.findOne();
        if (!visitorCount) {
            visitorCount = new VisitorCount({ count: 1 });
        } else {
            visitorCount.count++;
        }
        await visitorCount.save();

        res.send(`Ziyaretçi sayısı: ${visitorCount.count}`);
    } catch (error) {
        res.status(500).send('Bir hata oluştu.');
    }
});

app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
*/
