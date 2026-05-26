window.VALENTINE_CONFIG = {
    valentineName: "اريج",
    pageTitle: "كل عام وانتِ عيدي يا اريج",
    floatingEmojis: {
        hearts: ["❤️"], 
        bears: ["🧸"]   
    },
    questions: {
        first: {
            text: "اريج.. عندي سؤال الج بمناسبة العيد؟",
            yesBtn: "شنو هو؟",
            noBtn: "بعدين",
            secretAnswer: "اني ما اعيد مثل الباقين.. لان انتِ عيدي!"
        },
        second: {
            text: "شگد تحبيني؟",
            startText: "هلكد!",
            nextBtn: "التالي"
        },
        third: {
            text: "كل عام وانتِ عيدي، واجمل ايام عمري وموجودة بحياتي؟",
            yesBtn: "اكيد يروحي! 💋",
            noBtn: "لا"
        }
    },
    loveMessages: {
        extreme: "الله واني اموت عليج هم 🙈",
        high: "الله واني اموت عليج هم 🙈",
        normal: "الله واني اموت عليج هم 🙈"
    },
    celebration: {
        title: "يا احلى اعيادي واسعد ايام عمري..",
        message: "كل عيد وانتِ وياي، ربي يخليج الي ولا يحرمني من عيونج.. اعشقج واموت عليج يا بعد بيتي",
        emojis: ""
    },
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },
    animations: {
        floatDuration: "0s",           
        floatDistance: "0px", 
        bounceSpeed: "0s",    
        heartExplosionSize: 0.0 
    },
    music: {
        enabled: false, // قفلنا النظام القديم والزر الفوقاني تماماً
        autoplay: false,
        musicUrl: "https://ia600205.us.archive.org/3/items/biyn_alrumwsh/biyn_alrumwsh.mp3#t=199",
        startText: "", 
        stopText: "",  
        volume: 0.9
    }
};

// كود إخفاء الإيموجيات كلياً بالخلفية
const style = document.createElement('style');
style.innerHTML = `
    .floating-emoji, [class*="emoji"], [id*="emoji"], .heart-explosion, .music-controls { 
        display: none !important; opacity: 0 !important; visibility: hidden !important; 
    }
`;
document.head.appendChild(style);

// سكربت مراقبة شاشة النهاية لإنشاء صفحة الأغنية الخاصة بعد المعايدة
let musicTriggered = false;
setInterval(() => {
    const celebrationCard = document.querySelector('.celebration-card, #celebration, .final-page');
    if (celebrationCard && !musicTriggered) {
        musicTriggered = true;
        
        // إنشاء زر الانتقال لصفحة الأغنية بداخل بطاقة المعايدة
        const nextToMusicBtn = document.createElement('button');
        nextToMusicBtn.innerText = "اسمعي هالاغنية يروحي 🎵";
        nextToMusicBtn.style.cssText = `
            display: block; margin: 20px auto 0 auto; padding: 12px 24px;
            background-color: #ff6b6b; color: white; border: none;
            border-radius: 20px; font-size: 16px; cursor: pointer;
            box-shadow: 0 4px 15px rgba(255,107,107,0.3); font-family: inherit;
        `;
        celebrationCard.appendChild(nextToMusicBtn);
        
        // عند الضغط على الزر تفتح الصفحة الخاصة بالأغنية
        nextToMusicBtn.addEventListener('click', () => {
            // مسح محتوى الصفحة بالكامل لعمل صفحة جديدة ونظيفة للأغنية
            document.body.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(to bottom, #ffafbd, #ffc3a0); font-family: inherit; text-align: center; padding: 20px; box-sizing: border-box;">
                    <h2 style="color: #ff4757; margin-bottom: 30px; font-size: 24px;">بين الرموش.. ❤️</h2>
                    <button id="playAudioBtn" style="padding: 15px 40px; background-color: #ff4757; color: white; border: none; border-radius: 30px; font-size: 18px; cursor: pointer; box-shadow: 0 5px 20px rgba(255,71,87,0.4);">
                        ▶ تشغيل الاغنية
                    </button>
                    <audio id="bgMusic" src="https://ia600205.us.archive.org/3/items/biyn_alrumwsh/biyn_alrumwsh.mp3#t=199"></audio>
                </div>
            `;
            
            // تشغيل الأغنية فور الضغط على زر التشغيل بالصفحة الخاصة
            document.getElementById('playAudioBtn').addEventListener('click', function() {
                const audio = document.getElementById('bgMusic');
                audio.volume = window.VALENTINE_CONFIG.music.volume;
                audio.play().then(() => {
                    this.innerText = "🎵 شغالة هسة..";
                    this.style.backgroundColor = "#2ed573";
                }).catch(err => {
                    alert("اضغطي مرة ثانية لتشغيل الصوت");
                });
            });
        });
    }
}, 500);
