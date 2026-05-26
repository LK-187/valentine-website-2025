const config = {
    // Basic Information
    valentineName: "أريج",                    
    pageTitle: "كل عام وأنتِ عيدي يا أريج 💝", 

    // Floating Background Elements
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                       
    },

    // Questions and Buttons
    questions: {
        first: {
            text: "أريج.. عندي سؤال الج بمناسبة العيد؟ 🥺",           
            yesBtn: "شنو هو؟ 🤔",                             
            noBtn: "بعدين 🙄",                               
            secretAnswer: "أني ما أعيد مثل الباقين.. لأن أنتِ عيدي! ❤️"  
        },
        second: {
            text: "زين قيسيلي.. شكد غلاتج وحبج بقلبي؟",          
            startText: "هلكد! 📈",                   
            nextBtn: "التالي ❤️"                         
        },
        third: {
            text: "كل عام وأنتِ عيدي، وأجمل أيام عمري وموجودة بحياتي؟ 🌸",      
            yesBtn: "أكيد يا روحي! 💋",                            
            noBtn: "لا 🤐"                                
        }
    },

    // Love Meter Messages
    loveMessages: {
        extreme: "واوووو كل هذا غلا؟؟ 🥰🚀💝",  
        high: "إلى اللانهاية وما بعدها! 🚀💝",              
        normal: "وأكثر بعد بمليون مرة! 🥰"                           
    },

    // Final Celebration
    celebration: {
        title: "يا أحلى أعيادي وأسعد أيام عمري.. 🎉",     
        message: "كل عيد وأنتِ وياي، ربي يخليج الي ولا يحرمني من عيونج.. اعشقج وأموت عليج يا بعد بيتي 🤍",          
        emojis: "🎁💖🤗💝💋❤️💕"                        
    },

    // Website Colors
    colors: {
        backgroundStart: "#ffafbd",      
        backgroundEnd: "#ffc3a0",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"            
    },

    // Animation Settings
    animations: {
        floatDuration: "15s",           
        floatDistance: "50px",          
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },

    // Music Settings
    music: {
        enabled: true, 
        autoplay: true, 
        musicUrl: "https://pub-c5e31b5cdafb419a91624d1024284d23.r2.dev/biyn_alrumwsh.mp3#t=199", // رابط صوتي مباشر ومستقر لأغنية بين الرموش يبدأ من 3:19
        startText: "🎵 تشغيل الأغنية", 
        stopText: "🔇 إيقاف", 
        volume: 0.6 
    }
};

export default config;
