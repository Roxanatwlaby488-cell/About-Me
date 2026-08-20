// ===== کنترل دکمه‌های صفحه درباره من =====

// ۱. دکمه نمونه کارها - با افکت نمایشی
document.querySelector('.btn:not(.btn-outline)')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // تغییر ظاهر دکمه (حالت لودینگ)
    const originalText = this.textContent;
    this.textContent = '⏳ در حال بارگذاری...';
    this.style.opacity = '0.7';
    this.style.transform = 'scale(0.98)';
    
    // بعد از ۱.۵ ثانیه پیام نمایش بده
    setTimeout(() => {
        this.textContent = '✅ نمونه کارها آماده شد!';
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
        
        // یه باکس زیبا برای نمایش نمونه کارها
        showProjectsBox();
        
        // برگشت به حالت اول بعد از ۳ ثانیه
        setTimeout(() => {
            this.textContent = originalText;
        }, 3000);
    }, 1500);
});

// ۲. دکمه تماس با من - با مودال زیبا
document.querySelector('.btn-outline')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // یه باکس گفتگوی زیبا با اطلاعات تماس
    showContactModal();
});

// ===== توابع کمکی =====

// نمایش باکس نمونه کارها
function showProjectsBox() {
    // حذف باکس قبلی اگه وجود داره
    const oldBox = document.querySelector('.projects-box');
    if (oldBox) oldBox.remove();
    
    const box = document.createElement('div');
    box.className = 'projects-box';
    box.innerHTML = `
        <div style="
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 16px;
            margin-top: 1.5rem;
            border-right: 4px solid #4f46e5;
            animation: slideIn 0.5s ease;
        ">
            <h3 style="margin-bottom: 0.8rem; color: #0f172a;">📁 نمونه کارهای من</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">🛍️ سایت فروشگاهی (HTML/CSS/JS)</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">☕ سایت کافه با منوی دیجیتال</li>
                <li style="padding: 0.5rem 0;">📄 سایت شرکتی ریسپانسیو</li>
            </ul>
            <p style="margin-top: 0.8rem; font-size: 0.85rem; color: #64748b;">
                🔗 برای مشاهده وارد گیت‌هابم بشید
            </p>
        </div>
    `;
    
    document.querySelector('.card').appendChild(box);
}

// نمایش مودال تماس
function showContactModal() {
    // حذف مودال قبلی
    const oldModal = document.querySelector('.contact-modal');
    if (oldModal) oldModal.remove();
    
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            animation: fadeIn 0.3s ease;
            padding: 1rem;
        ">
            <div style="
                background: white;
                padding: 2rem 2.5rem;
                border-radius: 28px;
                max-width: 400px;
                width: 100%;
                box-shadow: 0 25px 60px rgba(0,0,0,0.2);
                position: relative;
            ">
                <button onclick="this.closest('.contact-modal').remove()" style="
                    position: absolute;
                    top: 1rem; left: 1rem;
                    background: #f1f5f9;
                    border: none;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: 0.2s;
                ">✕</button>
                
                <h2 style="margin-top: 0.5rem; color: #0f172a;">📬 راه‌های ارتباطی</h2>
                <div style="margin: 1.5rem 0; line-height: 2.5;">
                    <p>📧 <strong>اینستاگرام:</strong> ichigo_363@</p>
                    <p>📱 <strong>تلگرام:</strong> Roh_BT@</p>
                    <p>🐙 <strong>گیت‌هاب:</strong> <a href="https://github.com/Roxanatwlaby488-cell" style="color: #801f8d;" target="_blank">https://github.com/Roxanatwlaby488-cell</a></p>
                </div>
                <button onclick="this.closest('.contact-modal').remove()" style="
                    background: #0f172a;
                    color: white;
                    border: none;
                    padding: 0.7rem 2rem;
                    border-radius: 60px;
                    width: 100%;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.2s;
                ">بستن</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ===== اضافه کردن انیمیشن‌های CSS به صورت داینامیک =====
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);